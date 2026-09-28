import React from "react";
import Link from "next/link";
import { glossaryDictionary } from "@/data/glossary-data";

interface TooltipAcronymProps {
  term: string;
  children?: React.ReactNode;
}

export function TooltipAcronym({ term, children }: TooltipAcronymProps) {
  const match = glossaryDictionary.find(
    (item) =>
      item.term.toLowerCase() === term.toLowerCase() ||
      item.id.toLowerCase() === term.toLowerCase()
  );

  if (!match) {
    return <span>{children || term}</span>;
  }

  return (
    <span className="group relative inline-flex items-baseline">
      <Link
        href={`/glossary?search=${encodeURIComponent(match.term)}`}
        className="cursor-help border-b border-dotted border-accent/60 font-medium text-fg decoration-accent underline-offset-4 hover:border-accent hover:text-accent"
      >
        {children || match.term}
      </Link>
      
      {/* Floating Tooltip card */}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 hidden w-64 -translate-x-1/2 rounded-md border border-border bg-surface p-2.5 text-xs text-fg shadow-xl ring-1 ring-black/5 group-hover:block transition-all">
        <span className="block font-semibold text-accent">{match.fullName}</span>
        <span className="mt-1 block text-fg-muted line-clamp-3">{match.definition}</span>
        <span className="mt-1.5 block text-[10px] uppercase font-mono text-fg-subtle">Click to view in Glossary →</span>
      </span>
    </span>
  );
}
