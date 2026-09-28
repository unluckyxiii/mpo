import { Suspense } from "react";
import { GlossaryDirectory } from "@/components/glossary/GlossaryDirectory";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { BookOpen, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Glossary & Acronyms Reference | MINDEF Product Office",
  description:
    "A comprehensive reference dictionary for MINDEF/SAF, DSTA, and MPO shortnames, acronyms, methodologies, platforms, and governance terms.",
};

export default function GlossaryPage() {
  return (
    <div className="space-y-12 py-12 sm:py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Onboarding & Nomenclature
            </PrizmBadge>
            <PrizmBadge variant="muted">
              MINDEF / SAF / DSTA Shortnames
            </PrizmBadge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Glossary & Acronyms Reference
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
            MINDEF and the Defence Technology Community use a wide vocabulary of shortnames, operational frameworks, and rank schemes. Use this searchable hub as a quick reference for new joiners, domain apprentices, and partner teams.
          </p>
        </div>
      </section>

      {/* Main Interactive Glossary */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="p-8 text-center text-sm text-fg-muted">Loading Glossary Directory...</div>}>
          <GlossaryDirectory />
        </Suspense>
      </section>
    </div>
  );
}
