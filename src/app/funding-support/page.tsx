import { IntakeForm } from "@/components/funding/IntakeForm";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { TooltipAcronym } from "@/components/ui/TooltipAcronym";
import { ShieldCheck, CheckCircle2, DollarSign, Send, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Funding & Problem Intake | MINDEF Product Office",
  description:
    "How MPO assesses software problems and allocates tranche operating funds: 6W problem briefs, 4C assessment criteria, and the 6-step intake sequence.",
};

export default function FundingSupportPage() {
  const steps = [
    { number: 1, title: "Share a 6W Software Brief", desc: "Submit the ground problem, frontline users affected, and current evidence." },
    { number: 2, title: "Initial Triage by MPO", desc: "MPO triage team reviews the brief against the 4C quality rubric." },
    { number: 3, title: "Evidence Clarification Huddle", desc: "Short working session with the submitting team to explore ground workflows." },
    { number: 4, title: "Problem & Impact Assessment", desc: "Evaluate whether a software, discovery sprint, or policy intervention is needed." },
    { number: 5, title: "Support & Funding Recommendation", desc: "Prepare recommendation for Discovery squad or Tranche operating funds." },
    { number: 6, title: "Decision & Delivery Next Steps", desc: "Agree on outcome metrics, squad staffing, and sprint roadmap." },
  ];

  const criteria4C = [
    { title: "1. Clarity", desc: "Identifies a specific user group, concrete workflow task, and exact source of operational friction." },
    { title: "2. Consequence", desc: "Explains the cost, delay, safety hazard, or readiness impact of leaving the problem unresolved." },
    { title: "3. Cause", desc: "The team has a grounded view of what root factors may be causing the friction." },
    { title: "4. Confirmation", desc: "Frontline user research, telemetry data, or observed operational behaviour supports the problem." },
  ];

  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Funding & Intake
            </PrizmBadge>
            <PrizmBadge variant="muted">
              Central Software Operating Vote
            </PrizmBadge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            How MPO Assesses Software Problems & Tranche Funding
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
            MPO assesses the operational problem, evidence, expected value, and the team&apos;s ability to act before committing build resources. Funding is released in progressive operating tranches linked to user adoption.
          </p>
        </div>
      </section>

      {/* 4C Assessment Criteria */}
      <section className="border-y border-border bg-bg-subtle py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 space-y-2">
            <PrizmBadge variant="accent" size="sm">
              Assessment Rubric
            </PrizmBadge>
            <h2 className="text-2xl font-bold text-fg">
              The 4C Problem Assessment Criteria
            </h2>
            <p className="text-xs sm:text-sm text-fg-muted">
              MPO looks for four qualities in a well-framed operational software brief:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {criteria4C.map((c, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-2"
              >
                <h3 className="text-sm font-bold text-accent font-mono">
                  {c.title}
                </h3>
                <p className="text-xs text-fg-muted leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Engagement Sequence */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-fg">
            The 6-Step Intake & Engagement Sequence
          </h2>
          <p className="text-xs sm:text-sm text-fg-muted">
            From initial problem submission to squad deployment or funding decision:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((st) => (
            <div
              key={st.number}
              className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-fg font-mono text-xs font-bold">
                  {st.number}
                </span>
                <h3 className="text-sm font-bold text-fg">{st.title}</h3>
              </div>
              <p className="text-xs text-fg-muted leading-relaxed pl-8">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive 6W Problem Brief Intake Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <IntakeForm />
      </section>
    </div>
  );
}
