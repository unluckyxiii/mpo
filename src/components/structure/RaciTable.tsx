"use client";

import { useState } from "react";
import { raciMatrixData, RACIRole } from "@/data/raci-matrix";
import { clsx } from "clsx";
import { PrizmBadge } from "@/components/ui/PrizmBadge";

export function RaciTable() {
  const [selectedStage, setSelectedStage] = useState<string>("All");

  const stages = [
    "All",
    "Discovery & Framing",
    "Concept Testing & Prototyping",
    "Build & Delivery",
    "Scale & Modernisation",
    "Governance & Sunset",
  ];

  const filteredData =
    selectedStage === "All"
      ? raciMatrixData
      : raciMatrixData.filter((r) => r.stage === selectedStage);

  const getRoleBadge = (role: RACIRole) => {
    switch (role) {
      case "A":
        return (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent font-mono text-xs font-bold text-accent-fg shadow-xs">
            A
          </span>
        );
      case "R":
        return (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-success/20 font-mono text-xs font-bold text-success border border-success/30">
            R
          </span>
        );
      case "C":
        return (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-warning/20 font-mono text-xs font-bold text-warning border border-warning/40">
            C
          </span>
        );
      case "I":
        return (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-bg-muted font-mono text-xs font-medium text-fg-subtle border border-border">
            I
          </span>
        );
      default:
        return <span className="text-fg-subtle">-</span>;
    }
  };

  return (
    <div id="raci-matrix" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-fg">
            Lifecycle Terms of Reference (TOR) & RACI Matrix
          </h3>
          <p className="text-xs text-fg-muted mt-1">
            Defines single-threaded accountability and role interfaces across the entire software delivery journey.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <span className="h-4 w-4 rounded-full bg-accent text-accent-fg font-mono text-[10px] font-bold flex items-center justify-center">A</span>
            <span className="text-fg-subtle">Accountable</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-4 w-4 rounded-full bg-success/20 text-success font-mono text-[10px] font-bold flex items-center justify-center">R</span>
            <span className="text-fg-subtle">Responsible</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-4 w-4 rounded-full bg-warning/20 text-warning font-mono text-[10px] font-bold flex items-center justify-center">C</span>
            <span className="text-fg-subtle">Consulted</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-4 w-4 rounded-full bg-bg-muted text-fg-subtle font-mono text-[10px] font-bold flex items-center justify-center">I</span>
            <span className="text-fg-subtle">Informed</span>
          </div>
        </div>
      </div>

      {/* Stage Filter Pills */}
      <div className="flex flex-wrap gap-1.5 border-b border-border pb-3">
        {stages.map((st) => (
          <button
            key={st}
            onClick={() => setSelectedStage(st)}
            className={clsx(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              selectedStage === st
                ? "bg-accent text-accent-fg font-semibold shadow-xs"
                : "border border-border bg-surface text-fg-muted hover:bg-bg-subtle hover:text-fg"
            )}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Responsive RACI Table */}
      <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-border bg-bg-subtle text-fg-muted font-mono uppercase tracking-wider text-[11px]">
              <th className="p-3.5 font-bold min-w-[240px]">Lifecycle Activity</th>
              <th className="p-3.5 font-bold min-w-[140px]">Stage</th>
              <th className="p-3.5 font-bold text-center w-24">Ops Manager</th>
              <th className="p-3.5 font-bold text-center w-24">Product Lead</th>
              <th className="p-3.5 font-bold text-center w-24">Tech Lead</th>
              <th className="p-3.5 font-bold text-center w-24">Designer</th>
              <th className="p-3.5 font-bold text-center w-24">Apprentice</th>
              <th className="p-3.5 font-bold text-center w-24">MPO Board</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((row, idx) => (
              <tr key={idx} className="hover:bg-bg-subtle/60 transition-colors">
                <td className="p-3.5 font-medium text-fg">{row.activity}</td>
                <td className="p-3.5 text-fg-muted">
                  <span className="rounded bg-bg-muted px-2 py-0.5 text-[10px] font-mono text-fg-subtle border border-border">
                    {row.stage}
                  </span>
                </td>
                <td className="p-3.5 text-center">{getRoleBadge(row.opsManager)}</td>
                <td className="p-3.5 text-center">{getRoleBadge(row.productLead)}</td>
                <td className="p-3.5 text-center">{getRoleBadge(row.techLead)}</td>
                <td className="p-3.5 text-center">{getRoleBadge(row.designLead)}</td>
                <td className="p-3.5 text-center">{getRoleBadge(row.domainApprentice)}</td>
                <td className="p-3.5 text-center">{getRoleBadge(row.mpoDirectorate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
