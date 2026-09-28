"use client";

import { useState } from "react";
import { competencyTracks, TrackData, TierDetail } from "@/data/competency-schema";
import { clsx } from "clsx";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { Sparkles, Bot, Briefcase, ChevronRight, Check } from "lucide-react";

export function CompetencyMatrix() {
  const [selectedTrack, setSelectedTrack] = useState<"product" | "design" | "engineering">("product");
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const currentTrack = competencyTracks.find((t) => t.id === selectedTrack) || competencyTracks[0];
  const activeTier = currentTrack.tiers.find((t) => t.tierNumber === selectedTier) || currentTrack.tiers[0];

  return (
    <div id="competency-matrix" className="space-y-8">
      {/* Track Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        {competencyTracks.map((track) => {
          const isSelected = track.id === selectedTrack;
          return (
            <button
              key={track.id}
              onClick={() => {
                setSelectedTrack(track.id);
                setSelectedTier(1);
              }}
              className={clsx(
                "rounded-lg px-4 py-2.5 text-xs font-semibold transition-all focus-visible:outline-2 focus-visible:outline-accent",
                isSelected
                  ? "bg-accent text-accent-fg shadow-sm"
                  : "border border-border bg-surface text-fg-muted hover:bg-bg-subtle hover:text-fg"
              )}
            >
              {track.name}
            </button>
          );
        })}
      </div>

      {/* Track Strategic Vision Banner */}
      <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 sm:p-6 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent font-mono">
            AI-First Strategic Shift
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-fg">
          {currentTrack.shortDesc}
        </h3>
        <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
          {currentTrack.strategicFocus}
        </p>
      </div>

      {/* Tier Selector Horizontal Stepper */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {currentTrack.tiers.map((tier) => {
          const isTierActive = tier.tierNumber === selectedTier;
          return (
            <button
              key={tier.tierNumber}
              onClick={() => setSelectedTier(tier.tierNumber)}
              className={clsx(
                "flex flex-col items-start rounded-xl border p-4 text-left transition-all focus-visible:outline-2 focus-visible:outline-accent",
                isTierActive
                  ? "border-accent bg-surface ring-2 ring-accent/20 shadow-sm"
                  : "border-border bg-bg-subtle hover:border-border-strong hover:bg-surface"
              )}
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                Tier {tier.tierNumber}
              </span>
              <span className="text-xs font-bold text-fg mt-1">
                {tier.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Tier Breakdown View */}
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2">
              <PrizmBadge variant="accent" size="sm" showPip>
                Tier {activeTier.tierNumber} Schema
              </PrizmBadge>
              <span className="font-mono text-xs text-fg-subtle">
                {currentTrack.name}
              </span>
            </div>
            <h4 className="text-2xl font-bold text-fg mt-2">
              {activeTier.title}
            </h4>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {activeTier.keyTools.map((tool, i) => (
              <span
                key={i}
                className="rounded-md border border-border bg-bg-subtle px-2.5 py-1 font-mono text-[11px] font-medium text-fg-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Comparison: Traditional Scope vs AI-Augmented Reality */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Traditional Scope */}
          <div className="rounded-xl border border-border/80 bg-bg-subtle p-5 space-y-2">
            <div className="flex items-center gap-2 text-fg-subtle">
              <Briefcase className="h-4 w-4" />
              <span className="text-[11px] font-bold uppercase font-mono tracking-wider">
                Traditional Scope
              </span>
            </div>
            <p className="text-xs text-fg-muted leading-relaxed">
              {activeTier.traditionalScope}
            </p>
          </div>

          {/* AI-Augmented Reality */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 space-y-2 ring-1 ring-accent/15">
            <div className="flex items-center gap-2 text-accent">
              <Bot className="h-4 w-4" />
              <span className="text-[11px] font-bold uppercase font-mono tracking-wider">
                AI-Augmented Reality
              </span>
            </div>
            <p className="text-xs text-fg leading-relaxed">
              {activeTier.aiAugmentedReality}
            </p>
          </div>
        </div>

        {/* Core Competencies Checklist */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs font-bold uppercase tracking-wider text-fg font-mono">
            Core Competencies & Measurable Criteria:
          </h5>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {activeTier.coreCompetencies.map((comp, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 rounded-lg border border-border bg-bg-subtle/70 p-3"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success mt-0.5">
                  <Check className="h-2.5 w-2.5" />
                </span>
                <span className="text-xs font-medium text-fg">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
