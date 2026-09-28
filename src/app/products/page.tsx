import { featuredProducts } from "@/data/products-data";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { TooltipAcronym } from "@/components/ui/TooltipAcronym";
import { ArrowUpRight, TrendingUp, Clock, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Products & Scorecards | MINDEF Product Office",
  description:
    "Explore the operational problems MPO-supported products address, who they serve, and how outcomes are tracked in PULSE report cards.",
};

export default function ProductsPage() {
  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Portfolio & Scorecards
            </PrizmBadge>
            <PrizmBadge variant="muted">
              PULSE Report Cards
            </PrizmBadge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Products Supported by MPO
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
            Explore the user problems these products address, who they serve, and how outcomes are tracked. Every product is evaluated against a baseline metric and Value-Cost Ratio (<TooltipAcronym term="VCR">VCR</TooltipAcronym>).
          </p>
        </div>
      </section>

      {/* Featured Products Deep-Dive */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-fg">
            Active Product Deployments
          </h2>
          <p className="text-xs sm:text-sm text-fg-muted">
            Detailed one-pagers and verified telemetry outcomes for live systems:
          </p>
        </div>

        <div className="space-y-8">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              id={prod.id}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-10 shadow-xs space-y-6 hover:border-accent transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <PrizmBadge variant="accent" size="sm">
                      {prod.domain}
                    </PrizmBadge>
                    <PrizmBadge variant="success" size="sm" showPip>
                      {prod.stage}
                    </PrizmBadge>
                  </div>
                  <h3 className="text-2xl font-bold text-fg">
                    {prod.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-fg-muted mt-1 max-w-2xl leading-relaxed">
                    {prod.summary}
                  </p>
                </div>

                {prod.reportCardUrl && (
                  <a
                    href={prod.reportCardUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-xs font-semibold text-accent-fg shadow-sm hover:bg-accent-hover shrink-0"
                  >
                    <span>View PULSE Report Card</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Grid of Product Details */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-xl border border-danger/20 bg-danger/5 p-4 space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase text-danger">
                      The Operational Problem
                    </span>
                    <p className="text-xs text-fg-muted leading-relaxed">
                      {prod.problemStatement}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-bg-subtle p-4 space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase text-accent">
                      Primary User Group
                    </span>
                    <p className="text-xs text-fg leading-relaxed">
                      {prod.primaryUsers}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-bg-subtle p-4 space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase text-success">
                      How the Product Helps
                    </span>
                    <p className="text-xs text-fg-muted leading-relaxed">
                      {prod.howItHelps}
                    </p>
                  </div>
                </div>

                {/* Outcome Scorecard Strip */}
                <div className="rounded-xl border border-border bg-bg-subtle p-6 space-y-5 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase text-fg-subtle">
                        PULSE Telemetry Scorecard
                      </span>
                      <PrizmBadge variant="accent" size="sm">
                        {prod.vcrRatio}
                      </PrizmBadge>
                    </div>

                    <div className="text-sm font-semibold text-fg">
                      {prod.valueMetric}
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/70 text-center">
                      <div className="rounded-lg bg-surface p-3 border border-border">
                        <span className="font-mono text-[10px] uppercase text-danger block">Baseline</span>
                        <span className="text-sm font-bold text-fg mt-0.5 block">{prod.baseline}</span>
                      </div>

                      <div className="rounded-lg bg-surface p-3 border border-border">
                        <span className="font-mono text-[10px] uppercase text-success block">Current</span>
                        <span className="text-sm font-bold text-success mt-0.5 block">{prod.currentResult}</span>
                      </div>

                      <div className="rounded-lg bg-surface p-3 border border-border">
                        <span className="font-mono text-[10px] uppercase text-accent block">Target</span>
                        <span className="text-sm font-bold text-accent mt-0.5 block">{prod.target}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/70 text-xs text-fg-muted">
                    <span className="font-semibold text-fg block mb-1">Key Operational Learning:</span>
                    <p className="italic text-[11px] leading-relaxed">
                      &ldquo;{prod.keyLearning}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standard Product One-Pager Template Guide */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 border-t border-border">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-10 shadow-xs space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" />
            <h3 className="text-xl font-bold text-fg">
              Standard MPO Product One-Pager Schema
            </h3>
          </div>
          <p className="text-xs text-fg-muted leading-relaxed">
            Every product supported by MPO adheres to a standardized one-sentence problem framing pattern:
          </p>

          <div className="rounded-xl border border-accent/25 bg-accent/5 p-4 text-xs font-mono text-fg leading-relaxed">
            <span className="text-accent font-bold">[Product]</span> helps <span className="text-accent font-bold">[specific user group]</span> complete <span className="text-accent font-bold">[important operational task]</span> with less <span className="text-accent font-bold">[delay, uncertainty, or manual rework]</span>. The team tracks <span className="text-accent font-bold">[value metric]</span> to prove whether the problem is improving.
          </div>
        </div>
      </section>
    </div>
  );
}
