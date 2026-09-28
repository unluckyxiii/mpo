import { phaseRoadmapSteps } from "@/data/reform-cases";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { Flag, CheckCircle2, ArrowRight } from "lucide-react";

export function RoadmapStepper() {
  return (
    <div id="transformation-roadmap" className="space-y-6">
      <div className="space-y-2">
        <PrizmBadge variant="accent" showPip>
          3-Phase Transformation Roadmap
        </PrizmBadge>
        <h3 className="text-2xl font-bold text-fg">
          From Pioneer Task Force to Steady-State Functional Authority
        </h3>
        <p className="text-sm text-fg-muted max-w-3xl leading-relaxed">
          MPO is designed with an explicit sunset on central delivery. As domain commands develop mature product capabilities, delivery capacity transfers outward while MPO transitions into the permanent functional authority for product practice.
        </p>
      </div>

      <div className="space-y-6">
        {phaseRoadmapSteps.map((phase) => (
          <div
            key={phase.phaseNumber}
            className="rounded-xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-5 hover:border-accent transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-fg font-mono font-bold text-sm">
                  0{phase.phaseNumber}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-fg">
                    Phase {phase.phaseNumber}: {phase.phaseName}
                  </h4>
                  <span className="text-xs font-medium text-accent">
                    {phase.tagline}
                  </span>
                </div>
              </div>

              <PrizmBadge variant={phase.phaseNumber === 1 ? "success" : "muted"} showPip={phase.phaseNumber === 1}>
                {phase.duration}
              </PrizmBadge>
            </div>

            <p className="text-sm text-fg-muted leading-relaxed">
              {phase.objective}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider font-mono text-fg">
                Key Strategic Milestones:
              </span>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {phase.keyMilestones.map((m, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-fg-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-3 border-t border-border/60 text-xs">
              <div className="rounded-lg bg-bg-subtle p-3 space-y-1">
                <span className="font-semibold text-fg block font-mono text-[10px] uppercase text-accent">Role of MPO</span>
                <p className="text-fg-muted text-[11px]">{phase.roleOfMPO}</p>
              </div>
              <div className="rounded-lg bg-bg-subtle p-3 space-y-1">
                <span className="font-semibold text-fg block font-mono text-[10px] uppercase text-success">Role of Receiving Domains</span>
                <p className="text-fg-muted text-[11px]">{phase.roleOfDomains}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
