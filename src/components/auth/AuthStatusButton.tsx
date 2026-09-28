"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Unlock, LogOut } from "lucide-react";

export function AuthStatusButton() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/status")
      .then((res) => res.json())
      .then((data) => setAuthenticated(data.authenticated))
      .catch(() => setAuthenticated(false));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthenticated(false);
    router.refresh();
  };

  if (authenticated === null) {
    return <div className="h-8 w-8 rounded-md bg-bg-subtle animate-pulse" />;
  }

  if (authenticated) {
    return (
      <div className="flex items-center gap-1">
        <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success shrink-0" />
          Enclave Active
        </span>
        <button
          type="button"
          onClick={handleLogout}
          title="Sign out of enclave session"
          className="inline-flex h-8 items-center gap-1 rounded-md border border-border bg-bg-subtle px-2 text-[11px] font-medium text-fg-muted hover:bg-bg-muted hover:text-fg transition-colors"
        >
          <LogOut className="h-3 w-3" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      title="Unlock internal tools & brief intake"
      className="inline-flex h-8 items-center gap-1 rounded-md border border-border bg-bg-subtle px-2.5 text-[11px] font-semibold text-fg-muted hover:border-accent hover:bg-surface hover:text-accent transition-colors"
    >
      <Lock className="h-3 w-3" />
      <span className="hidden sm:inline">Enclave Login</span>
    </Link>
  );
}
