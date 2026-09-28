import { ReformCaseStudies } from "@/components/transformation/ReformCaseStudies";
import { RoadmapStepper } from "@/components/transformation/RoadmapStepper";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { TooltipAcronym } from "@/components/ui/TooltipAcronym";
import { Flag, Sparkles, Building2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Transformation Hub | MINDEF Product Office",
  description:
    "Build and reform together: how MPO squads deploy to real operational problems, design policy reform waivers on live systems, and transition to a permanent functional authority.",
};

export default function TransformationHubPage() {
  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Institutional Transformation
            </PrizmBadge>
            <PrizmBadge variant="muted">
              Pioneer Domains & Policy Codification
            </PrizmBadge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Transformation Hub: Build & Reform Together
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
            The MPO plan is pragmatic: it neither ignores today&apos;s rules nor waits for them to change before building. As squads deliver working software on real problems, every blocking rule becomes a concrete reform case that accumulates live operational evidence.
          </p>
        </div>
      </section>

      {/* Pioneer Domains Spotlight */}
      <section className="border-y border-border bg-bg-subtle py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 space-y-2">
            <PrizmBadge variant="accent" size="sm">
              Phase 1 Deployments
            </PrizmBadge>
            <h2 className="text-2xl font-bold text-fg">
              Pioneer Transformation Domains
            </h2>
            <p className="text-xs sm:text-sm text-fg-muted">
              MPO squads are currently fielded across four flagship domains to demonstrate product practice, train domain apprentices, and trial policy adaptations on live systems:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-accent">01 / HR Domain</span>
              <h3 className="text-sm font-bold text-fg">Manpower Readiness & Roster Ops</h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                Streamlining unit ICT mobilization eligibility (Nominal Roll) and automating complex medical/readiness policy reconciliation.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-accent">02 / OneNS Domain</span>
              <h3 className="text-sm font-bold text-fg">National Service Digital Experience</h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                Unifying serviceman administrative touchpoints into responsive, zero-friction mobile interfaces built on <TooltipAcronym term="PRIZM">PRIZM 4.0</TooltipAcronym>.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-accent">03 / Safety Domain</span>
              <h3 className="text-sm font-bold text-fg">Tactical Safety & Near-Miss Telemetry</h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                Empowering frontline soldiers to report training hazards in 30 seconds, generating real-time risk heatmaps for commanders.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold text-accent">04 / Logistics Domain</span>
              <h3 className="text-sm font-bold text-fg">Materiel Readiness & Supply Chain</h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                Fielded by MPO with SAF logistics establishments to eliminate manual spreadsheet tracking of critical spare parts and maintenance cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Policy Reform Cases */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ReformCaseStudies />
      </section>

      {/* 3-Phase Transformation Roadmap */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 border-t border-border">
        <RoadmapStepper />
      </section>
    </div>
  );
}
