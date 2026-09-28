"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx";
import { ThemeToggle, ThemeSegmentedToggle } from "@/components/ui/ThemeToggle";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { AuthStatusButton } from "@/components/auth/AuthStatusButton";
import { Menu, X, Lock, LogOut } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/status")
      .then((res) => res.json())
      .then((data) => setAuthenticated(data.authenticated))
      .catch(() => setAuthenticated(false));
  }, [pathname, mobileOpen]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthenticated(false);
    setMobileOpen(false);
    router.refresh();
  };

  const navLinks = [
    { name: "Vision & Doctrine", href: "/vision-doctrine" },
    { name: "Structure & Accountability", href: "/structure-accountability" },
    { name: "Transformation", href: "/transformation-hub" },
    { name: "Practice", href: "/product-development" },
    { name: "Products", href: "/products" },
    { name: "Tools", href: "/platform-tools" },
    { name: "Funding & Intake", href: "/funding-support" },
    { name: "Glossary", href: "/glossary" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/75">
      <div className="mx-auto flex h-16 max-w-7xl 2xl:max-w-[1600px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group"
          aria-label="MINDEF Product Office, back to home"
        >
          {/* Official PRIZM/MPO Geometric Mark */}
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bg-muted p-1 border border-border group-hover:border-accent transition-colors">
            <svg viewBox="0 0 457 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true">
              <rect y="51.7638" width="200" height="200" rx="35" transform="rotate(-15 0 51.7638)" fill="#CAD5E2" />
              <rect x="32" y="258" width="200" height="200" rx="35" fill="#CAD5E2" />
              <rect x="257" y="38" width="200" height="200" rx="25" fill="#CAD5E2" />
              <rect x="257" y="258" width="200" height="200" rx="100" fill="#1447E6" />
            </svg>
          </div>
          <span className="flex flex-col justify-center font-brand text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-fg">
            <span className="text-accent">MINDEF</span>
            <span>Product Office</span>
          </span>
        </Link>

        {/* Desktop Navigation: Visible on lg and above */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "inline-flex items-center whitespace-nowrap rounded-md px-2 py-1.5 xl:px-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent",
                  isActive
                    ? "bg-bg-muted text-accent font-semibold shadow-xs"
                    : "text-fg-muted hover:bg-bg-subtle hover:text-fg"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Search + Utility shortcuts / Hamburger */}
        <div className="flex items-center gap-2">
          <CommandMenu />
          
          {/* Big Screen (2xl+) full utility shortcuts */}
          <div className="hidden 2xl:flex items-center gap-2 pl-2 border-l border-border">
            <AuthStatusButton />
            <ThemeToggle />
          </div>

          {/* Hamburger Menu Trigger: Visible on < 2xl */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-subtle text-fg-muted transition-colors hover:border-border-strong hover:bg-bg-muted hover:text-fg 2xl:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Drawer for < 2xl */}
      {mobileOpen && (
        <div className="border-b border-border bg-surface px-4 py-4 shadow-lg 2xl:hidden animate-in slide-in-from-top-2 duration-150">
          {/* On small screen (< lg), show primary navigation links */}
          <nav className="flex flex-col gap-1 lg:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-bg-muted text-accent font-semibold"
                      : "text-fg-muted hover:bg-bg-subtle hover:text-fg"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                </Link>
              );
            })}
          </nav>

          {/* Utility section: Theme toggle and Log In / Log Out */}
          <div className="pt-3 border-t border-border flex flex-col gap-1.5 lg:border-t-0 lg:pt-0">
            {/* Theme row */}
            <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-fg-muted">
              <span>Theme</span>
              <ThemeSegmentedToggle />
            </div>

            {/* Auth row: Log In / Log Out */}
            {authenticated ? (
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-fg-muted hover:bg-danger/10 hover:text-danger transition-colors text-left"
              >
                <span>Log Out</span>
                <LogOut className="h-4 w-4" />
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-fg-muted hover:bg-bg-subtle hover:text-fg transition-colors"
              >
                <span>Log In</span>
                <Lock className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
