"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { AuthStatusButton } from "@/components/auth/AuthStatusButton";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Vision & Doctrine", href: "/vision-doctrine" },
    { name: "Structure & Accountability", href: "/structure-accountability" },
    { name: "Transformation Hub", href: "/transformation-hub" },
    { name: "Product Practice", href: "/product-development" },
    { name: "Products", href: "/products" },
    { name: "Spectrum Tools", href: "/platform-tools" },
    { name: "Funding & Intake", href: "/funding-support" },
    { name: "Glossary", href: "/glossary" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group"
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

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "inline-flex items-center whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent",
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

        {/* Right Actions: Search + Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          <CommandMenu />
          
          {/* Desktop utility shortcuts */}
          <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-border">
            <AuthStatusButton />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-muted hover:text-fg xl:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-border bg-surface px-4 py-4 shadow-lg xl:hidden animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
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

          {/* Bottom of the Main Menu: Login Button & Theme Switch */}
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AuthStatusButton />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-fg-subtle">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
