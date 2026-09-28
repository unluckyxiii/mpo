"use client";

import Link from "next/link";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { ArrowRight, ShieldCheck, Cpu, Target, Compass, Sparkles } from "lucide-react";

export function HeroSection() {
  const principles = [
    { title: "Problem Before Solution", desc: "Work starts from frontline user friction, not pre-committed requirement specs." },
    { title: "Build, Then Learn, Then Adapt", desc: "Working software enters service early to test assumptions with real operators." },
    { title: "Risk Managed Continuously", desc: "Automated pipeline checks and live telemetry replace point-in-time gated audits." },
    { title: "Outcomes, Not Milestones", desc: "Tranche-based funding linked to measured adoption. Pivots are features, not bugs." },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg-subtle py-16 sm:py-24">
      {/* Signature PRIZM Dot Grid Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 text-fg">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mpo-hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.2" fill="currentColor" />
            </pattern>
            <radialGradient id="mpo-hero-fade" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="mpo-hero-mask">
              <rect width="100%" height="100%" fill="url(#mpo-hero-fade)" />
            </mask>
          </defs>
          <g mask="url(#mpo-hero-mask)">
            <rect width="100%" height="100%" fill="url(#mpo-hero-dots)" />
          </g>
        </svg>

        {/* PRIZM Signature Neon Glowing Edges */}
        <div className="prizm-hero-edge-1 absolute inset-x-0 top-0 h-[2px]" />
        <div className="prizm-hero-edge-3 absolute inset-x-0 bottom-0 h-[2px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left space-y-6">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-start gap-2">
            <PrizmBadge variant="accent" showPip>
              MINDEF Transformation Task Force
            </PrizmBadge>
            <PrizmBadge variant="muted">
              Reporting to PS(D)
            </PrizmBadge>
            <PrizmBadge variant="success">
              PRIZM 4.0 & AI-First Operating Model
            </PrizmBadge>
          </div>

          {/* Main Title - Structured into exactly 3 lines */}
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.14] text-left">
            <span className="block">Shifting Defence Software</span>
            <span className="block text-fg-muted font-medium">from Deterministic Specs</span>
            <span className="block text-accent">to Continuous Outcome Delivery</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base text-fg-muted sm:text-lg leading-relaxed text-left">
            The deterministic model built for weapons platforms creates friction when applied to digital systems.
            MPO establishes a disciplined, adaptive product model across MINDEF/SAF—driving problem-first discovery, rapid AI prototyping, and continuous pipeline assurance.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-start gap-3 pt-2">
            <Link
              href="/structure-accountability"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-fg shadow-md transition-all hover:bg-accent-hover hover:shadow-lg focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span>Explore Structure & Accountability</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/vision-doctrine"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-fg shadow-xs transition-colors hover:bg-bg-muted focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span>Read Transformation Doctrine</span>
            </Link>

            <Link
              href="/glossary"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border/70 bg-transparent px-4 text-sm font-medium text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
            >
              <Compass className="h-4 w-4 text-accent" />
              <span>Acronyms & Glossary</span>
            </Link>
          </div>
        </div>

        {/* 4 Core Pillars Strip */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-border bg-surface p-5 shadow-xs transition-all hover:border-accent/50 hover:shadow-md"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-bold text-accent">
                  {idx + 1}
                </span>
                <h2 className="text-sm font-semibold text-fg group-hover:text-accent transition-colors">
                  {p.title}
                </h2>
              </div>
              <p className="text-xs text-fg-muted leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
