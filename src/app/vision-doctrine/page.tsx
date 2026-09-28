import { DimensionsComparison } from "@/components/home/DimensionsComparison";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { TooltipAcronym } from "@/components/ui/TooltipAcronym";
import { ShieldCheck, Target, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Vision & Doctrine | MINDEF Product Office",
  description:
    "Why software in Defence must be built differently: shifting from a deterministic hardware model to a disciplined, adaptive product operating model.",
};

export default function VisionDoctrinePage() {
  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Transformation Doctrine
            </PrizmBadge>
            <PrizmBadge variant="muted">
              Functional Authority for Product Practice
            </PrizmBadge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            A Disciplined, Adaptive Model for Defence Software
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
            MINDEF/SAF has world-class engineering machinery built for deterministic systems, such as weapons platforms and hardware networks where requirements are predictable from the start. Applied to digital systems, this model creates persistent friction.
          </p>
        </div>
      </section>

      {/* As-Is vs To-Be Strategic Narrative */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* As-Is Card */}
          <div className="rounded-2xl border border-danger/25 bg-danger/5 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-danger">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                The Legacy Friction (As-Is)
              </span>
            </div>

            <h2 className="text-xl font-bold text-fg">
              A Deterministic Model Applied to Evolving Workflows
            </h2>

            <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
              Under the deterministic model, teams must pre-commit multi-year requirements before users ever touch working software. Once locked, operational learning becomes expensive to incorporate. Systems pass formal acceptance tests at handover, then accumulate massive maintenance backlogs because ground needs have shifted.
            </p>

            <div className="rounded-lg border border-danger/20 bg-surface/60 p-4 text-xs text-fg-muted space-y-2">
              <span className="font-semibold text-danger block uppercase text-[11px] font-mono">
                The Trap of Superficial Agile:
              </span>
              <p className="italic text-[11px] leading-relaxed">
                &ldquo;Adopting agile ceremonies within the deterministic model changes rituals, not the system. Teams sprint but cannot alter their scope; users stay buyers of a finished deliverable, not partners in solving a problem; governance boards still demand pre-committed roadmaps before live evidence exists.&rdquo;
              </p>
            </div>
          </div>

          {/* To-Be Card */}
          <div className="rounded-2xl border border-success/30 bg-success/5 p-6 sm:p-8 space-y-4 ring-1 ring-success/15 shadow-xs">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                The MPO Target Model (To-Be)
              </span>
            </div>

            <h2 className="text-xl font-bold text-fg">
              Disciplined, Adaptive Software Operating Model
            </h2>

            <p className="text-xs sm:text-sm text-fg leading-relaxed">
              The deterministic model is respected where it belongs (hardware platforms) but not misapplied to digital workflows. For digital systems, <TooltipAcronym term="MPO">MPO</TooltipAcronym> establishes a disciplined adaptive model built on four core principles:
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2 text-xs">
                <span className="font-mono font-bold text-accent">01.</span>
                <div>
                  <strong className="text-fg">Problem Before Solution:</strong>
                  <span className="text-fg-muted"> Work starts from ground friction, not a spec doc. Cross-functional squads stay with the problem across its lifecycle.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs">
                <span className="font-mono font-bold text-accent">02.</span>
                <div>
                  <strong className="text-fg">Build, Then Learn, Then Adapt:</strong>
                  <span className="text-fg-muted"> Solutions enter service early as working software and improve through real operational use.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs">
                <span className="font-mono font-bold text-accent">03.</span>
                <div>
                  <strong className="text-fg">Continuous Risk inside the Pipeline:</strong>
                  <span className="text-fg-muted"> Automated compliance checks in <TooltipAcronym term="GCC">GCC</TooltipAcronym> CI/CD pipelines replace static point-in-time audits.</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs">
                <span className="font-mono font-bold text-accent">04.</span>
                <div>
                  <strong className="text-fg">Outcomes, Not Milestones:</strong>
                  <span className="text-fg-muted"> Funding released in tranches tied to user adoption. Pivots are features, not bugs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Dimensions Interactive Deep Dive */}
      <DimensionsComparison />

      {/* Action CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 space-y-4 max-w-3xl shadow-xs">
          <h3 className="text-2xl font-bold text-fg text-left">
            See How We Structure Teams & Accountability
          </h3>
          <p className="text-xs sm:text-sm text-fg-muted leading-relaxed text-left">
            Discover the 4-tier AI competency schema, co-located squad topologies, and lifecycle RACI matrices governing MPO squads.
          </p>
          <div className="pt-2 flex justify-start">
            <Link
              href="/structure-accountability"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-5 text-xs font-semibold text-accent-fg shadow-sm hover:bg-accent-hover"
            >
              <span>Explore Structure & Accountability</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
