import crypto from "crypto";
import { cookies } from "next/headers";

const PASSCODE = process.env.PORTAL_ACCESS_PASSCODE || "MPO2026";
const SESSION_SECRET = process.env.SESSION_SECRET || "mpo_super_secure_session_secret_2026_xyz";
const COOKIE_NAME = "mpo_session";

// Sign a session payload with HMAC SHA-256
function signSession(payload: string): string {
  const hmac = crypto.createHmac("sha256", SESSION_SECRET);
  hmac.update(payload);
  const signature = hmac.digest("hex");
  return `${payload}.${signature}`;
}

// Verify a session payload
function verifySession(signedSession: string): boolean {
  try {
    const [payload, signature] = signedSession.split(".");
    if (!payload || !signature) return false;

    const hmac = crypto.createHmac("sha256", SESSION_SECRET);
    hmac.update(payload);
    const expectedSignature = hmac.digest("hex");

    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch {
    return false;
  }
}

// Check if current user has an active authenticated session
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  if (!sessionCookie?.value) return false;

  return verifySession(sessionCookie.value);
}

// Verify passcode and set secure HttpOnly cookie
export async function authenticateWithPasscode(inputPasscode: string): Promise<{ success: boolean; error?: string }> {
  if (!inputPasscode) {
    return { success: false, error: "Please enter an access passcode." };
  }

  // Constant-time comparison to prevent timing attacks
  const inputBuffer = Buffer.from(inputPasscode);
  const expectedBuffer = Buffer.from(PASSCODE);

  if (inputBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(inputBuffer, expectedBuffer)) {
    return { success: false, error: "Invalid access passcode. Please check with MPO." };
  }

  const payload = `authenticated_user_${Date.now()}`;
  const signed = signSession(payload);

  cookies().set(COOKIE_NAME, signed, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days session
  });

  return { success: true };
}

// Clear authenticated session
export async function logout(): Promise<void> {
  cookies().delete(COOKIE_NAME);
}
