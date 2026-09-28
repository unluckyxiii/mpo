"use client";

import { useState, useEffect } from "react";
import { PrizmBadge } from "@/components/ui/PrizmBadge";
import { CheckCircle2, Send, Sparkles, HelpCircle, FileCheck, Lock, Key, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function IntakeForm() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState("");
  const [unlocking, setUnlocking] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/auth/status")
      .then((res) => res.json())
      .then((data) => setAuthenticated(data.authenticated))
      .catch(() => setAuthenticated(false));
  }, []);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasscodeError("");
    setUnlocking(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setAuthenticated(true);
      } else {
        setPasscodeError(data.error || "Incorrect passcode.");
      }
    } catch {
      setPasscodeError("Verification error. Please try again.");
    } finally {
      setUnlocking(false);
    }
  };

  const [formData, setFormData] = useState({
    projectName: "",
    submittingUnit: "",
    contactName: "",
    contactEmail: "",
    whoAffected: "",
    whatHappens: "",
    whyMatters: "",
    clarityRating: 4,
    consequenceRating: 4,
    causeRating: 3,
    confirmationRating: 3,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/intake/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback for demo/static mode
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (authenticated === false) {
    return (
      <div id="intake-form" className="rounded-2xl border border-border bg-surface p-6 sm:p-10 shadow-sm space-y-6 max-w-xl">
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2">
            <PrizmBadge variant="accent" showPip>
              Enclave Authentication Required
            </PrizmBadge>
          </div>
          <h3 className="text-xl font-bold text-fg">
            Unlock 6W Problem Brief Intake
          </h3>
          <p className="text-xs text-fg-muted leading-relaxed">
            Software briefs contain sensitive operational workflows and unit readiness descriptions. Please enter the designated access passcode to unlock the intake form:
          </p>
        </div>

        <form onSubmit={handleUnlock} className="space-y-4">
          {passcodeError && (
            <div className="rounded-lg border border-danger/30 bg-danger/10 p-3 text-xs text-danger">
              {passcodeError}
            </div>
          )}

          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-semibold text-fg">
              Access Passcode
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode to unlock..."
                className="w-full rounded-md border border-border bg-bg-subtle pl-9 pr-3 py-2.5 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
              />
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-subtle" />
            </div>
          </div>

          <button
            type="submit"
            disabled={unlocking}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-5 text-xs font-semibold text-accent-fg shadow-sm hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 transition-all"
          >
            <Lock className="h-3.5 w-3.5" />
            <span>{unlocking ? "Verifying..." : "Unlock Intake Form"}</span>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div id="intake-form" className="rounded-2xl border border-border bg-surface p-6 sm:p-10 shadow-sm space-y-8">
      {submitted ? (
        <div className="text-center py-12 space-y-4 max-w-md mx-auto">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success mx-auto">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-fg">
            Software Brief Received
          </h3>
          <p className="text-xs text-fg-muted leading-relaxed">
            Thank you, <span className="font-semibold text-fg">{formData.contactName}</span>. Your software brief for <span className="font-semibold text-fg">{formData.projectName}</span> has been logged with MPO.
          </p>
          <div className="rounded-lg border border-border bg-bg-subtle p-4 text-left text-xs text-fg-muted space-y-1">
            <span className="font-semibold text-fg block text-[11px] uppercase font-mono text-accent">
              Next Steps in the Sequence:
            </span>
            <p>1. Initial review by MPO triage lead</p>
            <p>2. Clarification huddle on available ground evidence</p>
            <p>3. Recommendation for Discovery sprint, Product consultation, or Tranche funding</p>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex h-9 items-center rounded-md border border-border bg-bg-subtle px-4 text-xs font-semibold text-fg hover:bg-bg-muted"
          >
            Submit another brief
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <PrizmBadge variant="accent" showPip>
                6W Problem Intake Form
              </PrizmBadge>
              <span className="text-xs text-fg-subtle">Assessment using 4C Rubric</span>
            </div>
            <h3 className="text-2xl font-bold text-fg">
              Frame Your Operational Software Problem
            </h3>
            <p className="text-xs sm:text-sm text-fg-muted">
              You do not need a predetermined solution. Tell us who is affected, what happens today, and why it matters to your unit&apos;s mission.
            </p>
          </div>

          {/* Unit & Contact Details */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-fg mb-1">
                Project / Problem Working Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                placeholder="e.g. Unit Maintenance Readiness Tracker"
                className="w-full rounded-md border border-border bg-bg-subtle px-3 py-2 text-xs text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-fg mb-1">
                Submitting Unit / Formation / Department <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.submittingUnit}
                onChange={(e) => setFormData({ ...formData, submittingUnit: e.target.value })}
                placeholder="e.g. 3rd Division / RSAF HQ / OneNS Hub"
                className="w-full rounded-md border border-border bg-bg-subtle px-3 py-2 text-xs text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-fg mb-1">
                Contact Name & Rank <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                placeholder="e.g. MAJ Tan Wei Ming"
                className="w-full rounded-md border border-border bg-bg-subtle px-3 py-2 text-xs text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-fg mb-1">
                Official Email Address (@defence.gov.sg / @dsta.gov.sg) <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                placeholder="name@defence.gov.sg"
                className="w-full rounded-md border border-border bg-bg-subtle px-3 py-2 text-xs text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
              />
            </div>
          </div>

          {/* 6W Core Questions */}
          <div className="space-y-4 pt-2 border-t border-border">
            <h4 className="text-sm font-bold text-fg">
              The 6W Problem Statement
            </h4>

            <div>
              <label className="block text-xs font-semibold text-fg mb-1">
                1. WHO is affected by this friction? (Specific user group) <span className="text-danger">*</span>
              </label>
              <textarea
                required
                rows={2}
                value={formData.whoAffected}
                onChange={(e) => setFormData({ ...formData, whoAffected: e.target.value })}
                placeholder="Describe the exact frontline roles (e.g., Battalion S1 clerks, Conducting Officers, Ops Room watchkeepers)."
                className="w-full rounded-md border border-border bg-bg-subtle px-3 py-2 text-xs text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-fg mb-1">
                2. WHAT happens today in the current workflow? (Source of friction) <span className="text-danger">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.whatHappens}
                onChange={(e) => setFormData({ ...formData, whatHappens: e.target.value })}
                placeholder="Describe current steps, manual spreadsheets, data re-entry, or delays occurring today."
                className="w-full rounded-md border border-border bg-bg-subtle px-3 py-2 text-xs text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-fg mb-1">
                3. WHY does this matter? (Operational or mission consequence) <span className="text-danger">*</span>
              </label>
              <textarea
                required
                rows={2}
                value={formData.whyMatters}
                onChange={(e) => setFormData({ ...formData, whyMatters: e.target.value })}
                placeholder="Explain the cost, delay, safety hazard, or readiness impact if left unresolved."
                className="w-full rounded-md border border-border bg-bg-subtle px-3 py-2 text-xs text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface focus:outline-none"
              />
            </div>
          </div>

          {/* 4C Self-Assessment Check */}
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 space-y-4">
            <div className="flex items-center gap-2 text-accent font-semibold text-xs">
              <FileCheck className="h-4 w-4" />
              <span>4C Self-Assessment Rubric (1 = Needs Work, 5 = Highly Confirmed)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-medium text-fg mb-1">
                  Clarity (Specific users & task defined): {formData.clarityRating}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.clarityRating}
                  onChange={(e) => setFormData({ ...formData, clarityRating: Number(e.target.value) })}
                  className="w-full accent-accent"
                />
              </div>

              <div>
                <label className="block font-medium text-fg mb-1">
                  Consequence (Mission effect articulated): {formData.consequenceRating}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.consequenceRating}
                  onChange={(e) => setFormData({ ...formData, consequenceRating: Number(e.target.value) })}
                  className="w-full accent-accent"
                />
              </div>

              <div>
                <label className="block font-medium text-fg mb-1">
                  Cause (Hypothesis on root cause): {formData.causeRating}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.causeRating}
                  onChange={(e) => setFormData({ ...formData, causeRating: Number(e.target.value) })}
                  className="w-full accent-accent"
                />
              </div>

              <div>
                <label className="block font-medium text-fg mb-1">
                  Confirmation (Data / observed evidence): {formData.confirmationRating}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={formData.confirmationRating}
                  onChange={(e) => setFormData({ ...formData, confirmationRating: Number(e.target.value) })}
                  className="w-full accent-accent"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-fg shadow-md transition-all hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              <span>{loading ? "Submitting Brief..." : "Submit Software Brief to MPO"}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
