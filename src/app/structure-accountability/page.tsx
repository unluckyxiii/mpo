import { CompetencyMatrix } from "@/components/structure/CompetencyMatrix";
import { RaciTable } from "@/components/structure/RaciTable";
import { PodBlueprint } from "@/components/structure/PodBlueprint";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { TooltipAcronym } from "@/components/ui/TooltipAcronym";
import { ShieldCheck, Target, Award, Cpu, Sparkles } from "lucide-react";

export const metadata = {
  title: "Structure & Accountability | MINDEF Product Office",
  description:
    "How MPO squads are built and measured: 4-tier AI-integrated competency schemas, co-located squad topologies, lifecycle TOR/RACI, and outcome-driven appraisal metrics.",
};

export default function StructureAccountabilityPage() {
  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Organizational Architecture & Governance
            </PrizmBadge>
            <PrizmBadge variant="muted">
              RTS Workforce Framework
            </PrizmBadge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Structure & Accountability
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
            &ldquo;This is how we are built, and this is how we are measured.&rdquo; Explore the <TooltipAcronym term="MPO">MPO</TooltipAcronym> operating architecture: an AI-first competency schema, co-located squad blueprints, lifecycle <TooltipAcronym term="RACI">RACI</TooltipAcronym> governance, and outcome-driven performance evaluation.
          </p>
        </div>
      </section>

      {/* Strategic Vision: AI Shifts Roles Upward */}
      <section className="border-y border-border bg-bg-subtle py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-accent">Product Track</span>
              <h3 className="text-base font-bold text-fg">Hyper-Fast Problem Framing</h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                Moves from administrative backlog grooming and manual PRDs to multi-agent discovery pipelines (using <TooltipAcronym term="CLARA">CLARA</TooltipAcronym>) and rapid assumption testing.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-accent">Design Track</span>
              <h3 className="text-base font-bold text-fg">Design System & Token Governance</h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                Moves from manual wireframe drawing to AI prompt-to-UI architectures using <TooltipAcronym term="PRIZM">PRIZM 4.0</TooltipAcronym>, conversational interfaces, and cognitive ergonomics.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 shadow-xs space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-accent">Development Track</span>
              <h3 className="text-base font-bold text-fg">Architectural Oversight & Security</h3>
              <p className="text-xs text-fg-muted leading-relaxed">
                Moves from boilerplate syntax typing to automated DevSecOps pipelines on <TooltipAcronym term="GCC">GCC</TooltipAcronym>, threat modeling, and AI-assisted codebase stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Tier AI-Integrated Competency Matrix */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Role & Competency Schema
            </PrizmBadge>
          </div>
          <h2 className="text-2xl font-bold text-fg sm:text-3xl">
            4-Tier AI-Integrated Role Schema
          </h2>
          <p className="text-xs sm:text-sm text-fg-muted max-w-3xl">
            As AI automates routine syntax and mockups, human value shifts upward to problem framing, systemic design, and secure architecture. Select a track below to explore tier expectations:
          </p>
        </div>

        <CompetencyMatrix />
      </section>

      {/* Pod Blueprint & Squad Topology */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 border-t border-border">
        <PodBlueprint />
      </section>

      {/* Lifecycle RACI Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 border-t border-border">
        <RaciTable />
      </section>

      {/* Outcome & Value Evaluation Framework */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 border-t border-border">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-2">
            <PrizmBadge variant="success" showPip>
              Evaluation & Outcome Metrics
            </PrizmBadge>
            <h3 className="text-2xl font-bold text-fg">
              Outcome & Value Evaluation: Measuring Value over Output
            </h3>
            <p className="text-xs sm:text-sm text-fg-muted max-w-3xl leading-relaxed">
              Traditional governance evaluates squads on conformity to an upfront plan. MPO evaluates squads and domain owners on validated ground problem resolution, adoption velocity, and <TooltipAcronym term="VCR">Value-Cost Ratio</TooltipAcronym>.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-2">
            <div className="rounded-xl border border-border bg-bg-subtle p-4 space-y-1.5">
              <span className="font-mono text-[11px] uppercase font-bold text-accent">1. Value-Cost Ratio (VCR)</span>
              <p className="text-xs text-fg-muted">
                Quantifies the tangible operational man-hours saved or error risk eliminated per dollar of annual product run cost.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-bg-subtle p-4 space-y-1.5">
              <span className="font-mono text-[11px] uppercase font-bold text-success">2. Ground Adoption Velocity</span>
              <p className="text-xs text-fg-muted">
                Measures voluntary active weekly usage and self-service completion rates across frontline military units without mandatory mandates.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-bg-subtle p-4 space-y-1.5">
              <span className="font-mono text-[11px] uppercase font-bold text-warning">3. Problem Resolution Fidelity</span>
              <p className="text-xs text-fg-muted">
                Evaluates whether the root friction framed in the initial <TooltipAcronym term="6W">6W</TooltipAcronym> brief is demonstrably eliminated according to the <TooltipAcronym term="4C">4C</TooltipAcronym> criteria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
