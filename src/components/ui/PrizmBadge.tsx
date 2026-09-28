import React from "react";
import { clsx } from "clsx";

interface PrizmBadgeProps {
  variant?: "accent" | "success" | "warning" | "danger" | "muted" | "outline";
  children: React.ReactNode;
  showPip?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export function PrizmBadge({
  variant = "muted",
  children,
  showPip = false,
  className,
  size = "md"
}: PrizmBadgeProps) {
  const variantStyles = {
    accent: "border-accent/30 bg-accent/10 text-accent",
    success: "border-success/30 bg-success/10 text-success",
    warning: "border-warning/40 bg-warning/10 text-warning",
    danger: "border-danger/30 bg-danger/10 text-danger",
    muted: "border-border bg-bg-muted text-fg-muted",
    outline: "border-border bg-transparent text-fg",
  };

  const pipStyles = {
    accent: "bg-accent",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
    muted: "bg-fg-muted",
    outline: "bg-fg",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {showPip && (
        <span
          className={clsx("h-1.5 w-1.5 rounded-full shrink-0", pipStyles[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
