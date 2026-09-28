export interface ProductCaseStudy {
  id: string;
  name: string;
  stage: "Live in Service" | "Proof of Concept" | "Alpha Testing" | "Pioneer Domain";
  domain: string;
  summary: string;
  problemStatement: string;
  primaryUsers: string;
  howItHelps: string;
  valueMetric: string;
  baseline: string;
  currentResult: string;
  target: string;
  vcrRatio: string;
  keyLearning: string;
  reportCardUrl?: string;
}

export const featuredProducts: ProductCaseStudy[] = [
  {
    id: "nominal-roll",
    name: "Nominal Roll",
    stage: "Live in Service",
    domain: "Manpower & Readiness (HR)",
    summary: "Automates unit ICT eligibility calculations and streamlines commander call-up endorsements into a single click.",
    problemStatement: "Unit S1 branches previously spent up to 14 days per training cycle manually reconciling medical exemptions, deferments, and rank criteria across fragmented legacy databases.",
    primaryUsers: "Unit S1 Officers, Battalion Commanders, Operationally Ready National Servicemen (NSmen)",
    howItHelps: "Ingests personnel readiness parameters automatically, flags exemption edge-cases, and enables 1-click cohort roster endorsement with full audit trails.",
    valueMetric: "Roster generation time per ICT cycle",
    baseline: "14 working days / unit",
    currentResult: "15 minutes / unit",
    target: "< 30 minutes / unit",
    vcrRatio: "18.4x Value-Cost Ratio",
    keyLearning: "Co-locating product designers with unit S1 branch clerks during actual mobilization windows exposed critical edge-cases that traditional requirements specs missed entirely.",
    reportCardUrl: "https://pulse-reportcards.vercel.app/nominal-roll/"
  },
  {
    id: "onens-service-portal",
    name: "OneNS Digital Portal",
    stage: "Live in Service",
    domain: "National Service Digital Ecosystem (OneNS)",
    summary: "A unified, mobile-first serviceman portal delivering zero-friction administrative self-service for pre-enlistees, active NSFs, and NSmen.",
    problemStatement: "Servicemen had to navigate disconnected legacy portals and manual paperwork for IPPT bookings, e-medical requests, and leave endorsements.",
    primaryUsers: "Over 350,000 active and operationally ready National Servicemen across SAF, SPF, and SCDF",
    howItHelps: "Consolidates all National Service touchpoints into a unified, responsive interface built on PRIZM design tokens, reducing transactional friction.",
    valueMetric: "Digital transaction completion rate without helpdesk intervention",
    baseline: "62% completion rate",
    currentResult: "94.8% completion rate",
    target: "> 95% completion rate",
    vcrRatio: "12.6x Value-Cost Ratio",
    keyLearning: "Continuous micro-releases based on real-time feedback reduced helpdesk ticket volumes by over 40% compared to annual monolithic upgrades."
  },
  {
    id: "safety-incident-reporter",
    name: "SafeGuard Digital Hazard Hub",
    stage: "Pioneer Domain",
    domain: "Army Safety & Operational Risk",
    summary: "Near-miss hazard reporting and frontline risk telemetry for tactical training exercises.",
    problemStatement: "Near-miss safety hazards were under-reported due to lengthy multi-page forms, preventing commanders from identifying systemic safety trends before incidents occurred.",
    primaryUsers: "Field Safety Officers, Conducting Officers, Soldiers on Exercise",
    howItHelps: "Enables 30-second mobile voice/photo incident tagging with automated geo-classification, giving safety inspectors real-time heatmaps.",
    valueMetric: "Frontline near-miss hazard reporting volume",
    baseline: "12 reports / quarter",
    currentResult: "140+ reports / quarter",
    target: "100+ reports / quarter",
    vcrRatio: "9.2x Value-Cost Ratio",
    keyLearning: "Reducing submission barriers directly correlates with preventative intervention velocity; near-miss visibility prevented multiple high-severity field hazards."
  }
];
