import Link from "next/link";
import { featuredProducts } from "@/data/products-data";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { ArrowUpRight, TrendingUp, Clock, CheckCircle } from "lucide-react";

export function FeaturedProductCards() {
  return (
    <section className="py-16 sm:py-24 bg-bg border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl space-y-2">
            <PrizmBadge variant="success" showPip>
              Proven Ground Impact
            </PrizmBadge>
            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Featured Products & PULSE Report Cards
            </h2>
            <p className="text-sm text-fg-muted">
              Live products deployed into service, tracked against outcome metrics and Value-Cost Ratios rather than raw feature volume.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline shrink-0"
          >
            <span>View All Product Scorecards</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs transition-all hover:border-accent hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <PrizmBadge variant="accent" size="sm">
                    {prod.domain}
                  </PrizmBadge>
                  <PrizmBadge variant="success" size="sm" showPip>
                    {prod.stage}
                  </PrizmBadge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-fg">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-fg-muted mt-1 leading-relaxed">
                    {prod.summary}
                  </p>
                </div>

                {/* Scorecard Metrics Strip */}
                <div className="rounded-lg border border-border bg-bg-subtle p-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-fg-subtle">Primary Metric:</span>
                    <span className="font-semibold text-fg">{prod.valueMetric}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/60 text-center">
                    <div>
                      <span className="text-[10px] text-fg-subtle uppercase block font-mono">Baseline</span>
                      <span className="text-xs font-semibold text-danger">{prod.baseline}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-fg-subtle uppercase block font-mono">Current</span>
                      <span className="text-xs font-bold text-success">{prod.currentResult}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-fg-subtle uppercase block font-mono">VCR</span>
                      <span className="text-xs font-bold text-accent">{prod.vcrRatio.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-fg-muted">
                  <span className="font-semibold text-fg block mb-1">Key Operational Learning:</span>
                  <p className="italic text-[11px] leading-relaxed line-clamp-3">
                    &ldquo;{prod.keyLearning}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                {prod.reportCardUrl ? (
                  <a
                    href={prod.reportCardUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                  >
                    <span>Open PULSE Report Card</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    href={`/products#${prod.id}`}
                    className="text-xs font-semibold text-fg-muted hover:text-fg"
                  >
                    View details →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
