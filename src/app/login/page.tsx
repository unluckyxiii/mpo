"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { Lock, ArrowRight, ShieldCheck, AlertCircle, Key } from "lucide-react";
import Link from "next/link";

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";

  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        router.push(redirectUrl);
        router.refresh();
      } else {
        setError(data.error || "Incorrect passcode. Please try again.");
      }
    } catch {
      setError("An error occurred during verification. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md w-full rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-lg space-y-6">
      <div className="space-y-2 text-left">
        <div className="flex items-center gap-2">
          <PrizmBadge variant="accent" showPip>
            Portal Access
          </PrizmBadge>
        </div>
        <h1 className="text-2xl font-bold text-fg">
          MINDEF Portal Login
        </h1>
        <p className="text-xs text-fg-muted leading-relaxed">
          Enter the access passcode to unlock problem brief submissions, live report cards, and internal policy waiver logs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="flex items-center gap-2 rounded-lg border border-danger/30 bg-danger/10 p-3 text-xs text-danger">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-1.5 text-left">
          <label className="block text-xs font-semibold text-fg">
            Access Passcode
          </label>
          <div className="relative">
            <input
              type="password"
              autoFocus
              required
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode..."
              className="w-full rounded-md border border-border bg-bg-subtle pl-9 pr-3 py-2.5 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
            />
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-subtle" />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-4 text-xs font-semibold text-accent-fg shadow-sm hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 transition-all"
        >
          <span>{loading ? "Verifying..." : "Log In"}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </form>

      <div className="border-t border-border pt-4 text-left text-[11px] text-fg-subtle space-y-2">
        <div className="flex items-center gap-1.5 text-fg-muted font-medium">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
          <span>Security Notice:</span>
        </div>
        <p>
          Passcode verification creates a secure, encrypted HTTP-only session cookie. In production, this authentication gateway can be switched to <strong>TechPass WOG SSO</strong>.
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <Suspense fallback={<div className="text-center text-xs text-fg-muted">Loading authentication portal...</div>}>
        <LoginFormContent />
      </Suspense>
    </div>
  );
}
