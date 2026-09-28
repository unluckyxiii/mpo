import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { Users, GraduationCap, Building2, Shield, Sparkles } from "lucide-react";

export function PodBlueprint() {
  const squadRoles = [
    {
      title: "Operations Problem Owner (Ops Manager)",
      source: "Domain Military / Civilian Appointment",
      description: "Owns the ground operational problem, workflow access, and mission outcome. Sits embedded within the squad.",
      badge: "Domain Lead"
    },
    {
      title: "Product Lead",
      source: "MPO Functional Cadre (DX11-DX15)",
      description: "Single-threaded owner of product strategy, assumption testing, roadmap prioritization, and outcome metrics (VCR).",
      badge: "MPO Core"
    },
    {
      title: "System Architect & Tech Lead",
      source: "MPO / DSTA Core Engineering",
      description: "Owns technical architecture, CI/CD pipelines, GCC security accreditation, and AI guardrails.",
      badge: "Engineering Lead"
    },
    {
      title: "Senior Product Designer",
      source: "MPO Design Cadre",
      description: "Owns end-to-end user workflows, cognitive ergonomics, and PRIZM 4.0 component token governance.",
      badge: "Design Lead"
    },
    {
      title: "Domain Apprentices (Full-Time)",
      source: "Embedded Officers from Services & DTC",
      description: "Full-time 12-24 month rotation learning modern product practice on live systems to seed capability back to parent units.",
      badge: "Apprentice Cadre"
    },
    {
      title: "Full-Stack Builders / Vendor Capacity",
      source: "Commercial Capacity Contracting",
      description: "Contracted engineering velocity building sprint features while MINDEF retains architecture and codebase IP.",
      badge: "Capacity Partner"
    },
  ];

  return (
    <div id="pod-blueprint" className="space-y-6">
      <div className="space-y-2">
        <PrizmBadge variant="accent" showPip>
          Team Topology & Blueprint
        </PrizmBadge>
        <h3 className="text-2xl font-bold text-fg">
          Co-Located Cross-Functional Squad Blueprint
        </h3>
        <p className="text-sm text-fg-muted max-w-3xl leading-relaxed">
          MPO eliminates traditional client-vendor hand-off friction by fielding co-located squads where problem owners, technical leads, and domain apprentices share single-threaded accountability.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {squadRoles.map((role, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-3 hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-accent">0{idx + 1}</span>
              <PrizmBadge variant="muted" size="sm">
                {role.badge}
              </PrizmBadge>
            </div>

            <div>
              <h4 className="text-sm font-bold text-fg">{role.title}</h4>
              <span className="text-[11px] font-medium text-accent block mt-0.5">
                {role.source}
              </span>
            </div>

            <p className="text-xs text-fg-muted leading-relaxed">
              {role.description}
            </p>
          </div>
        ))}
      </div>

      {/* Apprenticeship Model Banner */}
      <div className="rounded-xl border border-success/30 bg-success/5 p-6 space-y-3">
        <div className="flex items-center gap-2 text-success font-semibold text-sm">
          <GraduationCap className="h-5 w-5" />
          <span>The MPO Apprenticeship & Capability Diffusion Engine</span>
        </div>
        <p className="text-xs text-fg leading-relaxed">
          Rather than hoarding digital talent centrally, MPO acts as an incubator. Military and civilian officers from the Services (Army, RSAF, RSN, DIS) rotate into MPO squads as full-time apprentices. After completing real delivery cycles, they carry modern product ways of working back to their permanent commands.
        </p>
      </div>
    </div>
  );
}
