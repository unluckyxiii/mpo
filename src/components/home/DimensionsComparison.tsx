"use client";

import { useState } from "react";
import { dimensionsData } from "@/data/dimensions-data";
import { clsx } from "clsx";
import { ArrowRight, CheckCircle2, AlertTriangle, Sparkles, Layers } from "lucide-react";
import { PrizmBadge } from "@/components/ui/PrizmBadge";

export function DimensionsComparison() {
  const [activeTab, setActiveTab] = useState(dimensionsData[0].id);

  const current = dimensionsData.find((d) => d.id === activeTab) || dimensionsData[0];

  return (
    <section className="py-16 sm:py-24 bg-bg border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <PrizmBadge variant="accent" showPip>
            Systemic Reform Blueprint
          </PrizmBadge>
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            5 Dimensions of Change: Deterministic vs. Adaptive
          </h2>
          <p className="text-sm sm:text-base text-fg-muted">
            Adopting agile rituals within a deterministic system changes ceremonies, not outcomes. Real transformation requires aligning incentives across five institutional dimensions:
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {dimensionsData.map((d) => {
            const isActive = d.id === activeTab;
            return (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={clsx(
                  "rounded-lg px-4 py-2.5 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-accent",
                  isActive
                    ? "bg-accent text-accent-fg shadow-md scale-102"
                    : "border border-border bg-surface text-fg-muted hover:bg-bg-subtle hover:text-fg"
                )}
              >
                {d.dimension}
              </button>
            );
          })}
        </div>

        {/* Comparison Cards: As-Is vs To-Be */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* As-Is Card */}
          <div className="rounded-xl border border-danger/20 bg-danger/5 p-6 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 border-b border-danger/15 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-danger">
                  Legacy Paradigm (As-Is)
                </span>
                <h3 className="text-lg font-bold text-fg mt-0.5">
                  {current.asIsState.title}
                </h3>
              </div>
              <span className="rounded-full bg-danger/10 p-2 text-danger">
                <AlertTriangle className="h-5 w-5" />
              </span>
            </div>

            <p className="text-sm text-fg-muted leading-relaxed">
              {current.asIsState.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-danger block uppercase tracking-wider">
                Key Friction Points:
              </span>
              <ul className="space-y-1.5">
                {current.asIsState.frictionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-fg-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-danger shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* To-Be Card */}
          <div className="rounded-xl border border-success/30 bg-success/5 p-6 sm:p-8 space-y-4 relative overflow-hidden ring-1 ring-success/15 shadow-sm">
            <div className="flex items-center justify-between gap-2 border-b border-success/20 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-success">
                  MPO Target Model (To-Be)
                </span>
                <h3 className="text-lg font-bold text-fg mt-0.5">
                  {current.toBeState.title}
                </h3>
              </div>
              <span className="rounded-full bg-success/10 p-2 text-success">
                <CheckCircle2 className="h-5 w-5" />
              </span>
            </div>

            <p className="text-sm text-fg-muted leading-relaxed">
              {current.toBeState.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-success block uppercase tracking-wider">
                Strategic Advantages:
              </span>
              <ul className="space-y-1.5">
                {current.toBeState.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-fg">
                    <span className="h-1.5 w-1.5 rounded-full bg-success shrink-0 mt-1.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
