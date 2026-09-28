import { NextResponse } from "next/server";
import { authenticateWithPasscode } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();
    const result = await authenticateWithPasscode(passcode);

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Authentication failed" }, { status: 500 });
  }
}
