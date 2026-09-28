"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, BookOpen, Layers, Users, HelpCircle, ArrowRight, X } from "lucide-react";
import { glossaryDictionary } from "@/data/glossary-data";
import { spectrumToolsList } from "@/data/spectrum-tools";
import { playbookPillars } from "@/data/playbook-data";

interface SearchResult {
  title: string;
  category: string;
  url: string;
  description: string;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName))) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const results: SearchResult[] = [];
  if (query.trim().length > 0) {
    const q = query.toLowerCase();

    // 1. Search Glossary
    glossaryDictionary.forEach((item) => {
      if (
        item.term.toLowerCase().includes(q) ||
        item.fullName.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q)
      ) {
        results.push({
          title: `${item.term} (${item.fullName})`,
          category: "Glossary & Acronyms",
          url: `/glossary?search=${encodeURIComponent(item.term)}`,
          description: item.definition,
        });
      }
    });

    // 2. Search Spectrum Tools
    spectrumToolsList.forEach((tool) => {
      if (
        tool.name.toLowerCase().includes(q) ||
        tool.tagline.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q)
      ) {
        results.push({
          title: `${tool.name} - ${tool.tagline}`,
          category: "Spectrum Tools",
          url: `/platform-tools#${tool.id}`,
          description: tool.description,
        });
      }
    });

    // 3. Search Playbook Pillars
    playbookPillars.forEach((pillar) => {
      if (
        pillar.title.toLowerCase().includes(q) ||
        pillar.shortSummary.toLowerCase().includes(q) ||
        pillar.frameworks.some((f) => f.toLowerCase().includes(q))
      ) {
        results.push({
          title: `Playbook: ${pillar.title}`,
          category: "Product Practice",
          url: `/product-development`,
          description: pillar.shortSummary,
        });
      }
    });

    // 4. Search Sections
    const sections = [
      {
        title: "4-Tier AI-Integrated Competency Matrix",
        category: "Structure & Accountability",
        url: "/structure-accountability#competency-matrix",
        description: "AI-first career progression schema for Product, Design, and Engineering.",
      },
      {
        title: "Terms of Reference (TOR) & RACI Matrix",
        category: "Structure & Accountability",
        url: "/structure-accountability#raci-matrix",
        description: "Operational accountability across all product lifecycle stages.",
      },
      {
        title: "5 Dimensions of Transformation (As-Is vs To-Be)",
        category: "Vision & Doctrine",
        url: "/vision-doctrine#dimensions",
        description: "Financing, Governance, Procurement, Human Capital, and Org Structure.",
      },
      {
        title: "Build & Reform Together (Policy Waivers)",
        category: "Transformation Hub",
        url: "/transformation-hub#reform-cases",
        description: "How live squads trial policy waivers that become standing rules.",
      },
      {
        title: "Submit a Software Problem Brief (6W / 4C)",
        category: "Funding & Intake",
        url: "/funding-support#intake-form",
        description: "Frame an operational problem for MPO review and tranche support.",
      },
    ];

    sections.forEach((sec) => {
      if (
        sec.title.toLowerCase().includes(q) ||
        sec.description.toLowerCase().includes(q)
      ) {
        results.push(sec);
      }
    });
  }

  const navigateTo = (url: string) => {
    setOpen(false);
    setQuery("");
    router.push(url);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-9 items-center gap-2 rounded-md border border-border bg-bg-subtle px-3 text-sm text-fg-subtle transition-colors hover:border-border-strong hover:bg-bg-muted hover:text-fg-muted md:inline-flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search portal...</span>
        <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle shadow-sm">
          ⌘K
        </kbd>
      </button>

      {/* Mobile Search Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-muted hover:text-fg md:hidden"
      >
        <Search className="h-4 w-4" />
      </button>

      {/* Modal Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-20 backdrop-blur-sm sm:p-6 sm:pt-24">
          <div className="relative w-full max-w-2xl rounded-xl border border-border bg-surface shadow-2xl overflow-hidden ring-1 ring-black/10 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center border-b border-border px-4 py-3">
              <Search className="h-5 w-5 text-fg-subtle shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search shortnames, tools, playbook pillars, roles..."
                className="w-full bg-transparent px-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-fg-subtle hover:bg-bg-muted hover:text-fg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {query.trim().length === 0 ? (
                <div className="p-4 text-xs text-fg-subtle">
                  <div className="font-semibold text-fg-muted mb-2">Quick Navigation Suggestions:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={() => navigateTo("/structure-accountability")}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-subtle text-left text-fg transition-colors"
                    >
                      <Users className="h-4 w-4 text-accent" />
                      <span>Structure & Accountability</span>
                    </button>
                    <button
                      onClick={() => navigateTo("/glossary")}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-subtle text-left text-fg transition-colors"
                    >
                      <HelpCircle className="h-4 w-4 text-accent" />
                      <span>Glossary & Acronyms Hub</span>
                    </button>
                    <button
                      onClick={() => navigateTo("/platform-tools")}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-subtle text-left text-fg transition-colors"
                    >
                      <Layers className="h-4 w-4 text-accent" />
                      <span>Spectrum Tools (CLARA, PRIZM)</span>
                    </button>
                    <button
                      onClick={() => navigateTo("/product-development")}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-subtle text-left text-fg transition-colors"
                    >
                      <BookOpen className="h-4 w-4 text-accent" />
                      <span>Defence Product Playbook</span>
                    </button>
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-1">
                  {results.map((res, i) => (
                    <button
                      key={i}
                      onClick={() => navigateTo(res.url)}
                      className="w-full text-left p-3 rounded-lg hover:bg-bg-subtle flex items-start justify-between gap-3 group transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-fg group-hover:text-accent text-sm">
                            {res.title}
                          </span>
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-bg-muted text-fg-subtle border border-border">
                            {res.category}
                          </span>
                        </div>
                        <p className="text-xs text-fg-muted line-clamp-1 mt-1">
                          {res.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-fg-subtle group-hover:text-accent group-hover:translate-x-0.5 transition-transform shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-sm text-fg-muted">
                  No matching results found for &ldquo;{query}&rdquo;.
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border bg-bg-subtle px-4 py-2 text-[11px] text-fg-subtle">
              <span>Press <kbd className="font-mono bg-surface border border-border px-1 rounded">ESC</kbd> to close</span>
              <span>Use <kbd className="font-mono bg-surface border border-border px-1 rounded">↑</kbd> <kbd className="font-mono bg-surface border border-border px-1 rounded">↓</kbd> to navigate</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
