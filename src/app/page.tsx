import { HeroSection } from "@/components/home/HeroSection";
import { DimensionsComparison } from "@/components/home/DimensionsComparison";
import { SpectrumGrid } from "@/components/home/SpectrumGrid";
import { FeaturedProductCards } from "@/components/home/FeaturedProductCards";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Users, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";
import { PrizmBadge } from "@/components/ui/PrizmBadge";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section with PRIZM Grid & Neon Accents */}
      <HeroSection />

      {/* Interactive 5 Dimensions of Transformation (As-Is vs To-Be) */}
      <DimensionsComparison />

      {/* Audience Gateways Strip */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl mb-10 space-y-2">
            <PrizmBadge variant="muted">
              Find Your Starting Point
            </PrizmBadge>
            <h2 className="text-2xl font-bold text-fg sm:text-3xl text-left">
              Tailored Guidance by Functional Role
            </h2>
            <p className="text-xs sm:text-sm text-fg-muted text-left">
              Explore how MPO supports leadership, operational problem owners, and technical delivery teams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Gateway 1: Organisation Leaders & Sponsors */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-bg-subtle p-6 shadow-xs hover:border-accent transition-colors">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-fg">
                  Organisation Leaders & Sponsors
                </h3>
                <p className="text-xs text-fg-muted leading-relaxed">
                  Understand how product squads are structured, funded via tranche operating votes, and evaluated on outcome metrics.
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border/60">
                <Link
                  href="/vision-doctrine"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <span>Learn about MPO Governance</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Gateway 2: Ops Managers & Problem Owners */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-bg-subtle p-6 shadow-xs hover:border-accent transition-colors">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-fg">
                  Ops Managers & Problem Owners
                </h3>
                <p className="text-xs text-fg-muted leading-relaxed">
                  Learn how to frame an operational software problem using the 6W framework and assess evidence with the 4C rubric.
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border/60">
                <Link
                  href="/funding-support"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <span>Submit a Software Brief</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Gateway 3: Product, Design & Engineering */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-bg-subtle p-6 shadow-xs hover:border-accent transition-colors">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-fg">
                  Product, Design & SWE Squads
                </h3>
                <p className="text-xs text-fg-muted leading-relaxed">
                  Explore the 4-Tier AI-integrated competency matrix, PRIZM 4.0 design tokens, and the Spectrum AI toolchain.
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border/60">
                <Link
                  href="/structure-accountability"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <span>Explore AI Roles & Schemas</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Live Products */}
      <FeaturedProductCards />

      {/* Spectrum AI Suite Grid */}
      <SpectrumGrid />

      {/* Bottom Transformation CTA */}
      <section className="py-16 sm:py-20 bg-bg text-left border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ready to Shift Practice?</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl text-left">
              Have an Operational Friction or Policy Blocker to Discuss?
            </h2>

            <p className="text-sm text-fg-muted max-w-xl leading-relaxed text-left">
              Share the problem and frontline users affected. MPO can help clarify the need, run a rapid discovery sprint, or design a policy trial waiver.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-3 pt-2">
              <Link
                href="/funding-support"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-fg shadow-md transition-all hover:bg-accent-hover"
              >
                <span>Submit a 6W Problem Brief</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/glossary"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-fg hover:bg-bg-muted"
              >
                <HelpCircle className="h-4 w-4 text-accent" />
                <span>Browse MINDEF Glossary</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
