export type RACIRole = "R" | "A" | "C" | "I" | "-";

export interface RACIRow {
  activity: string;
  stage: "Discovery & Framing" | "Concept Testing & Prototyping" | "Build & Delivery" | "Scale & Modernisation" | "Governance & Sunset";
  opsManager: RACIRole;
  productLead: RACIRole;
  techLead: RACIRole;
  designLead: RACIRole;
  domainApprentice: RACIRole;
  mpoDirectorate: RACIRole;
}

export const raciMatrixData: RACIRow[] = [
  // Discovery & Framing
  {
    activity: "Frame 6W Problem Statement & 4C Criteria Check",
    stage: "Discovery & Framing",
    opsManager: "A",
    productLead: "R",
    techLead: "C",
    designLead: "C",
    domainApprentice: "R",
    mpoDirectorate: "I"
  },
  {
    activity: "Conduct User Discovery & Shadowing (INSIGHT/CLARA)",
    stage: "Discovery & Framing",
    opsManager: "C",
    productLead: "R",
    techLead: "C",
    designLead: "R",
    domainApprentice: "R",
    mpoDirectorate: "I"
  },
  {
    activity: "Define Value Metric & Baseline Target (VCR)",
    stage: "Discovery & Framing",
    opsManager: "A",
    productLead: "R",
    techLead: "C",
    designLead: "C",
    domainApprentice: "C",
    mpoDirectorate: "C"
  },

  // Concept Testing & Prototyping
  {
    activity: "Rapid AI Prototype & UI Architecture (PRIZM 4.0)",
    stage: "Concept Testing & Prototyping",
    opsManager: "C",
    productLead: "A",
    techLead: "R",
    designLead: "R",
    domainApprentice: "R",
    mpoDirectorate: "I"
  },
  {
    activity: "Concept Usability Validation with Frontline Units",
    stage: "Concept Testing & Prototyping",
    opsManager: "A",
    productLead: "R",
    techLead: "C",
    designLead: "R",
    domainApprentice: "R",
    mpoDirectorate: "I"
  },
  {
    activity: "Policy Friction Identification & Waiver Design",
    stage: "Concept Testing & Prototyping",
    opsManager: "C",
    productLead: "R",
    techLead: "C",
    designLead: "I",
    domainApprentice: "C",
    mpoDirectorate: "A"
  },

  // Build & Delivery
  {
    activity: "Sprint Delivery & Technical Architecture (GCC/Foundry)",
    stage: "Build & Delivery",
    opsManager: "I",
    productLead: "A",
    techLead: "R",
    designLead: "C",
    domainApprentice: "R",
    mpoDirectorate: "I"
  },
  {
    activity: "Continuous Security Accreditation & Telemetry Wiring (DASH)",
    stage: "Build & Delivery",
    opsManager: "I",
    productLead: "C",
    techLead: "R",
    designLead: "I",
    domainApprentice: "C",
    mpoDirectorate: "A"
  },
  {
    activity: "Operational Acceptance & Release to Service",
    stage: "Build & Delivery",
    opsManager: "A",
    productLead: "R",
    techLead: "R",
    designLead: "C",
    domainApprentice: "R",
    mpoDirectorate: "I"
  },

  // Scale & Modernisation
  {
    activity: "IMPACT Modernisation Assessment & Legacy Replacement",
    stage: "Scale & Modernisation",
    opsManager: "A",
    productLead: "R",
    techLead: "R",
    designLead: "C",
    domainApprentice: "C",
    mpoDirectorate: "C"
  },
  {
    activity: "Domain Squad Transfer & Readiness Accreditation",
    stage: "Scale & Modernisation",
    opsManager: "R",
    productLead: "R",
    techLead: "C",
    designLead: "C",
    domainApprentice: "C",
    mpoDirectorate: "A"
  },

  // Governance & Sunset
  {
    activity: "Tranche Funding Review & VCR Auditing (PULSE)",
    stage: "Governance & Sunset",
    opsManager: "R",
    productLead: "R",
    techLead: "I",
    designLead: "I",
    domainApprentice: "I",
    mpoDirectorate: "A"
  },
  {
    activity: "Product Pivot or Clean Sunset Decommissioning",
    stage: "Governance & Sunset",
    opsManager: "A",
    productLead: "R",
    techLead: "R",
    designLead: "I",
    domainApprentice: "I",
    mpoDirectorate: "A"
  }
];
