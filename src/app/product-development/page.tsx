import { playbookPillars } from "@/data/playbook-data";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { TooltipAcronym } from "@/components/ui/TooltipAcronym";
import { ArrowUpRight, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Product Development & Playbook | MINDEF Product Office",
  description:
    "A practical guide to defence product ways of working: 5 pillars from problem definition and team structure through to modernisation and governance.",
};

export default function ProductDevelopmentPage() {
  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              MPO & DSTA Joint Practice
            </PrizmBadge>
            <PrizmBadge variant="muted">
              Defence Product Playbook
            </PrizmBadge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            A Practical Guide to Product Practice in Defence
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
            Jointly developed by MPO and DSTA, the Defence Product Playbook is a comprehensive guide to modern software ways of working. It outlines how to define the right problem, structure squads, test assumptions, modernise legacy systems, and govern through live evidence.
          </p>

          <div className="pt-2">
            <a
              href="https://defence-pp.vercel.app/#/home"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg shadow-md hover:bg-accent-hover"
            >
              <span>Open Full Interactive Playbook ↗</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5 Playbook Pillars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-fg">
            The 5 Pillars of the Defence Product Playbook
          </h2>
          <p className="text-xs sm:text-sm text-fg-muted">
            Each pillar addresses a critical phase of digital capability stewardship:
          </p>
        </div>

        <div className="space-y-6">
          {playbookPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-6 hover:border-accent transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 font-mono text-base font-bold text-accent">
                    0{pillar.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-fg">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-accent font-medium mt-0.5">
                      {pillar.shortSummary}
                    </p>
                  </div>
                </div>

                <a
                  href={pillar.playbookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline shrink-0"
                >
                  <span>Explore Chapter in Playbook</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
                {pillar.description}
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-2">
                {/* Frameworks Covered */}
                <div className="rounded-xl border border-border bg-bg-subtle p-5 space-y-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent block">
                    Core Playbook Frameworks:
                  </span>
                  <ul className="space-y-2">
                    {pillar.frameworks.map((fw, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-fg">
                        <span className="text-accent font-bold">✓</span>
                        <span>{fw}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Squad Actions */}
                <div className="rounded-xl border border-border bg-bg-subtle p-5 space-y-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-success block">
                    Key Squad Actions:
                  </span>
                  <ul className="space-y-2">
                    {pillar.keyActions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-fg-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-success shrink-0 mt-1.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
