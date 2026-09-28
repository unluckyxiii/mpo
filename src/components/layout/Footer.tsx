import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AuthStatusButton } from "@/components/auth/AuthStatusButton";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle text-fg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-brand font-bold tracking-wider text-fg uppercase text-sm">
              <span className="text-accent">MINDEF</span>
              <span>Product Office</span>
            </div>
            <p className="text-xs text-fg-muted max-w-sm leading-relaxed">
              MPO is a dedicated transformation task force reporting directly to PS(D) to establish a disciplined, adaptive product operating model across MINDEF/SAF.
            </p>
            <div className="text-[11px] text-fg-subtle">
              Engineered with <span className="font-semibold text-fg">PRIZM 4.0 Enterprise</span>.
            </div>
          </div>

          {/* Navigation Links Col 1 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-fg mb-3">Doctrine & Org</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/vision-doctrine" className="hover:text-fg transition-colors">Vision & Doctrine</Link></li>
              <li><Link href="/structure-accountability" className="hover:text-fg transition-colors">Structure & Accountability</Link></li>
              <li><Link href="/transformation-hub" className="hover:text-fg transition-colors">Transformation Hub</Link></li>
              <li><Link href="/structure-accountability#competency-matrix" className="hover:text-fg transition-colors">4-Tier AI Matrix</Link></li>
              <li><Link href="/structure-accountability#raci-matrix" className="hover:text-fg transition-colors">Lifecycle RACI</Link></li>
            </ul>
          </div>

          {/* Navigation Links Col 2 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-fg mb-3">Practice & Tools</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/product-development" className="hover:text-fg transition-colors">Defence Playbook</Link></li>
              <li><Link href="/platform-tools" className="hover:text-fg transition-colors">Spectrum Ecosystem</Link></li>
              <li><Link href="/products" className="hover:text-fg transition-colors">Products & Scorecards</Link></li>
              <li><Link href="/glossary" className="hover:text-fg transition-colors">Glossary & Acronyms</Link></li>
              <li><Link href="/funding-support" className="hover:text-fg transition-colors">6W Brief Intake</Link></li>
            </ul>
          </div>

          {/* Navigation Links Col 3 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-fg mb-3">Ecosystem</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="https://prizm-design.github.io/prizm/" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">PRIZM Design System ↗</a></li>
              <li><a href="https://defence-pp.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">Defence Product Playbook ↗</a></li>
              <li><a href="https://dsta-productops.github.io/clara/" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">CLARA Research ↗</a></li>
              <li><a href="https://pulse-reportcards.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">PULSE Scorecards ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-fg-subtle">
          <div>
            &copy; {new Date().getFullYear()} MINDEF Product Office. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              PRIZM Enterprise v4.0 Active
            </span>
            <div className="flex items-center gap-2 pl-3 border-l border-border">
              <AuthStatusButton />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
