"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { glossaryDictionary, GlossaryItem } from "@/data/glossary-data";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { Search, X, Copy, Check, Filter } from "lucide-react";
import { clsx } from "clsx";

export function GlossaryDirectory() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (initialSearch) {
      setSearchQuery(initialSearch);
    }
  }, [initialSearch]);

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "organization", name: "Organizations & Commands" },
    { id: "framework", name: "Frameworks & Practice" },
    { id: "platform", name: "Platforms & Tools" },
    { id: "governance", name: "Governance & HR (RTS)" },
    { id: "military", name: "Defence & Military Terms" },
  ];

  const filteredTerms = useMemo(() => {
    return glossaryDictionary.filter((item) => {
      const matchesCat =
        selectedCategory === "all" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.fullName.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (item: GlossaryItem) => {
    const text = `${item.term} (${item.fullName}): ${item.definition}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Unique starting letters for A-Z bar
  const alphabet = Array.from(
    new Set(glossaryDictionary.map((i) => i.term[0].toUpperCase()))
  ).sort();

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Toolbar */}
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-subtle" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by acronym (e.g. PSD, GCC, VCR, RTS) or keyword..."
              className="w-full rounded-lg border border-border bg-bg-subtle pl-10 pr-10 py-2.5 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-fg-subtle hover:text-fg"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Results Count Badge */}
          <div className="flex items-center justify-end">
            <PrizmBadge variant="muted">
              {filteredTerms.length} {filteredTerms.length === 1 ? "term" : "terms"} found
            </PrizmBadge>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/60">
          <span className="text-xs font-semibold text-fg-subtle mr-1 flex items-center gap-1">
            <Filter className="h-3 w-3" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={clsx(
                "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                selectedCategory === cat.id
                  ? "bg-accent text-accent-fg font-semibold"
                  : "border border-border bg-bg-subtle text-fg-muted hover:bg-bg-muted hover:text-fg"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Glossary Cards */}
      {filteredTerms.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTerms.map((item) => (
            <div
              key={item.id}
              id={`term-${item.id}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 shadow-xs transition-all hover:border-accent hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-accent">
                    {item.term}
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(item)}
                    title="Copy definition"
                    className="rounded p-1 text-fg-subtle hover:bg-bg-muted hover:text-fg transition-colors"
                  >
                    {copiedId === item.id ? (
                      <Check className="h-3.5 w-3.5 text-success" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-fg font-mono">
                    {item.fullName}
                  </h4>
                  <p className="text-xs text-fg-muted leading-relaxed mt-2">
                    {item.definition}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px]">
                <span className="font-mono uppercase text-fg-subtle text-[10px]">
                  {item.category}
                </span>
                {item.relatedTerms && item.relatedTerms.length > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="text-fg-subtle text-[10px]">Related:</span>
                    {item.relatedTerms.slice(0, 3).map((r, i) => (
                      <button
                        key={i}
                        onClick={() => setSearchQuery(r)}
                        className="font-mono text-[10px] text-accent hover:underline"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-surface p-12 text-center space-y-3">
          <p className="text-sm font-semibold text-fg">
            No matching terms found for &ldquo;{searchQuery}&rdquo; in this category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-xs font-semibold text-accent hover:underline"
          >
            Clear all filters and search
          </button>
        </div>
      )}
    </div>
  );
}
