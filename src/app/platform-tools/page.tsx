import { spectrumToolsList } from "@/data/spectrum-tools";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { TooltipAcronym } from "@/components/ui/TooltipAcronym";
import { ArrowUpRight, Cpu, FileText, Mic, Layers, Activity, Compass, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Platform & Tools | MINDEF Product Office",
  description:
    "The Spectrum AI platform and tools co-created by MPO and DSTA to power discovery, prompt-to-UI design, continuous telemetry, and cloud deployment.",
};

export default function PlatformToolsPage() {
  const iconMap: Record<string, React.ReactNode> = {
    FileText: <FileText className="h-6 w-6" />,
    Mic: <Mic className="h-6 w-6" />,
    Layers: <Layers className="h-6 w-6" />,
    Activity: <Activity className="h-6 w-6" />,
    Compass: <Compass className="h-6 w-6" />,
    Cpu: <Cpu className="h-6 w-6" />,
  };

  return (
    <div className="space-y-16 py-12 sm:py-16">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Product Practice Toolchain
            </PrizmBadge>
            <PrizmBadge variant="muted">
              Spectrum Ecosystem & ACE / Foundry
            </PrizmBadge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Platforms & AI Tools for Product Teams
          </h1>

          <p className="text-base sm:text-lg text-fg-muted leading-relaxed">
            The platform and AI tools MPO uses to build its own products, and recommends to teams across MINDEF/SAF. Developed by DSTA and co-created with MPO, they span every phase from research and prompt-driven UI design to automated telemetry.
          </p>
        </div>
      </section>

      {/* Spectrum Tools Deep Dive */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <PrizmBadge variant="success" showPip>
              Spectrum Platform
            </PrizmBadge>
          </div>
          <h2 className="text-2xl font-bold text-fg">
            Spectrum: AI at Every Step of the Lifecycle
          </h2>
          <p className="text-xs sm:text-sm text-fg-muted">
            The tools below are ordered the way the product practice runs, from discovering the ground problem to proving it worked.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {spectrumToolsList.map((tool) => (
            <div
              key={tool.id}
              id={tool.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-6 hover:border-accent transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    {iconMap[tool.iconName] || <Layers className="h-6 w-6" />}
                  </div>

                  <PrizmBadge
                    variant={tool.status === "Live" ? "success" : tool.status === "Preview" ? "warning" : "accent"}
                    showPip
                  >
                    {tool.status}
                  </PrizmBadge>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase text-accent">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-fg mt-1">
                    {tool.name}
                  </h3>
                  <span className="text-xs font-semibold text-accent block mt-0.5">
                    {tool.tagline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
                  {tool.description}
                </p>

                <div className="rounded-xl border border-border bg-bg-subtle p-4 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider font-mono text-fg block">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1.5">
                    {tool.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-fg-muted">
                        <span className="text-accent font-bold">✓</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="text-fg-subtle font-mono text-[11px]">
                  Co-created with DSTA
                </span>
                {tool.externalUrl && (
                  <a
                    href={tool.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
                  >
                    <span>Launch {tool.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
