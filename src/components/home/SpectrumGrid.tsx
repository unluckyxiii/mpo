import Link from "next/link";
import { spectrumToolsList } from "@/data/spectrum-tools";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { ArrowUpRight, Cpu, FileText, Mic, Layers, Activity, Compass } from "lucide-react";

export function SpectrumGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    FileText: <FileText className="h-5 w-5" />,
    Mic: <Mic className="h-5 w-5" />,
    Layers: <Layers className="h-5 w-5" />,
    Activity: <Activity className="h-5 w-5" />,
    Compass: <Compass className="h-5 w-5" />,
    Cpu: <Cpu className="h-5 w-5" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-bg-subtle border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl space-y-2">
            <PrizmBadge variant="accent" showPip>
              Spectrum Suite & Platforms
            </PrizmBadge>
            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              AI at Every Step of the Product Practice
            </h2>
            <p className="text-sm text-fg-muted">
              Co-created by MPO and DSTA, Spectrum spans every phase of product delivery: discovering the true problem, designing with component tokens, and proving operational value.
            </p>
          </div>

          <Link
            href="/platform-tools"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline shrink-0"
          >
            <span>View All Platforms & Tools</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spectrumToolsList.map((tool) => (
            <div
              key={tool.id}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs transition-all hover:border-accent hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-fg transition-colors">
                    {iconMap[tool.iconName] || <Layers className="h-5 w-5" />}
                  </div>
                  <PrizmBadge
                    variant={tool.status === "Live" ? "success" : tool.status === "Preview" ? "warning" : "accent"}
                    size="sm"
                    showPip
                  >
                    {tool.status}
                  </PrizmBadge>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-fg group-hover:text-accent transition-colors flex items-center gap-1.5">
                    <span>{tool.name}</span>
                    {tool.externalUrl && <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </h3>
                  <span className="text-xs font-medium text-accent block mt-0.5">
                    {tool.tagline}
                  </span>
                </div>

                <p className="text-xs text-fg-muted leading-relaxed line-clamp-3">
                  {tool.description}
                </p>

                <div className="space-y-1 pt-2 border-t border-border/60">
                  {tool.capabilities.slice(0, 2).map((cap, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-fg-subtle">
                      <span className="text-accent font-bold">✓</span>
                      <span className="line-clamp-1">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] uppercase text-fg-subtle">
                  {tool.category}
                </span>
                {tool.externalUrl ? (
                  <a
                    href={tool.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-accent hover:underline flex items-center gap-1"
                  >
                    Launch ↗
                  </a>
                ) : (
                  <Link
                    href={`/platform-tools#${tool.id}`}
                    className="font-semibold text-fg-muted hover:text-fg"
                  >
                    Learn more →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
