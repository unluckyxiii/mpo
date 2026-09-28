import { reformCasesList } from "@/data/reform-cases";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function ReformCaseStudies() {
  return (
    <div id="reform-cases" className="space-y-6">
      <div className="space-y-2">
        <PrizmBadge variant="accent" showPip>
          Build & Reform Together
        </PrizmBadge>
        <h3 className="text-2xl font-bold text-fg">
          Live Policy Reform Trials & Waivers
        </h3>
        <p className="text-sm text-fg-muted max-w-3xl leading-relaxed">
          Policy owners cannot reshape rules without operational evidence. MPO deploys squads to real problems, converts blocking rules into time-bound reform trials, and accumulates live evidence to convert exceptions into standing regulations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {reformCasesList.map((rc) => (
          <div
            key={rc.id}
            className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs space-y-4 hover:border-accent transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <PrizmBadge variant="muted" size="sm">
                  {rc.category}
                </PrizmBadge>
                <span className="flex h-2 w-2 rounded-full bg-success" />
              </div>

              <h4 className="text-base font-bold text-fg">
                {rc.title}
              </h4>

              {/* Blocking Rule */}
              <div className="rounded-lg border border-danger/20 bg-danger/5 p-3 text-xs space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-danger flex items-center gap-1">
                  <ShieldAlert className="h-3 w-3" />
                  Legacy Blocker
                </span>
                <p className="text-fg-muted text-[11px] leading-relaxed">
                  {rc.blockingRule}
                </p>
              </div>

              {/* Trial Design & Evidence */}
              <div className="space-y-1 text-xs">
                <span className="font-semibold text-fg block text-[11px]">Trial Waiver Design:</span>
                <p className="text-fg-muted text-[11px] leading-relaxed">
                  {rc.trialDesign}
                </p>
              </div>

              <div className="rounded-lg border border-border bg-bg-subtle p-3 text-xs space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-accent">
                  Live Operational Evidence
                </span>
                <p className="text-fg text-[11px] font-medium leading-relaxed">
                  {rc.liveEvidence}
                </p>
              </div>
            </div>

            {/* Standing Rule Outcome */}
            <div className="pt-3 border-t border-border/60">
              <span className="text-[10px] font-mono uppercase font-bold text-success flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Codified Standing Rule
              </span>
              <p className="text-xs font-semibold text-fg mt-1">
                {rc.standingRuleOutcome}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
