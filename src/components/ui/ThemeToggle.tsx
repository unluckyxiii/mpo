"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { clsx } from "clsx";

export function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("prizm.mode") as "light" | "dark" | null;
    const initialMode = savedMode || "light";
    
    setMode(initialMode);
    document.documentElement.dataset.mode = initialMode;
    document.documentElement.dataset.zone = "enterprise";
    document.documentElement.style.colorScheme = initialMode;
  }, []);

  const toggleTheme = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    document.documentElement.dataset.mode = nextMode;
    document.documentElement.style.colorScheme = nextMode;
    localStorage.setItem("prizm.mode", nextMode);
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-md border border-border bg-bg-subtle" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-fg-muted transition-colors hover:bg-bg-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}

export function ThemeSegmentedToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("prizm.mode") as "light" | "dark" | null;
    const initialMode = savedMode || "light";
    setMode(initialMode);
  }, []);

  const setAppMode = (nextMode: "light" | "dark") => {
    setMode(nextMode);
    document.documentElement.dataset.mode = nextMode;
    document.documentElement.dataset.zone = "enterprise";
    document.documentElement.style.colorScheme = nextMode;
    localStorage.setItem("prizm.mode", nextMode);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center rounded-lg border border-border bg-bg-muted p-0.5 text-xs">
      <button
        type="button"
        onClick={() => setAppMode("light")}
        className={clsx(
          "flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-all",
          mode === "light"
            ? "bg-surface text-fg shadow-xs font-semibold"
            : "text-fg-muted hover:text-fg"
        )}
      >
        <Sun className="h-3.5 w-3.5 text-warning" />
        <span>Light</span>
      </button>
      <button
        type="button"
        onClick={() => setAppMode("dark")}
        className={clsx(
          "flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-all",
          mode === "dark"
            ? "bg-surface text-fg shadow-xs font-semibold"
            : "text-fg-muted hover:text-fg"
        )}
      >
        <Moon className="h-3.5 w-3.5 text-accent" />
        <span>Dark</span>
      </button>
    </div>
  );
}
