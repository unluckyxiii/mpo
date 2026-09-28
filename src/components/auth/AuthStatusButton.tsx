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
      <button
        type="button"
        onClick={handleLogout}
        title="Sign out of MPO Portal"
        className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-bg-subtle px-3 text-xs font-semibold text-fg-muted hover:border-danger hover:bg-danger/10 hover:text-danger transition-colors"
      >
        <LogOut className="h-3.5 w-3.5" />
        <span>Log Out</span>
      </button>
    );
  }

  return (
    <Link
      href="/login"
      title="Log In to access problem brief intake"
      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-bg-subtle px-3 text-xs font-semibold text-fg-muted hover:border-accent hover:bg-surface hover:text-accent transition-colors"
    >
      <Lock className="h-3.5 w-3.5" />
      <span>Log In</span>
    </Link>
  );
}
