export interface ReformCase {
  id: string;
  title: string;
  category: "Policy Waiver" | "Procurement" | "Continuous Accreditation" | "Tranche Funding";
  blockingRule: string;
  trialDesign: string;
  liveEvidence: string;
  standingRuleOutcome: string;
}

export const reformCasesList: ReformCase[] = [
  {
    id: "continuous-pipeline-security",
    title: "Replacing Point-in-Time Security Audits with CI/CD Telemetry",
    category: "Continuous Accreditation",
    blockingRule: "Legacy defence policy mandated an external 6-month penetration testing audit before every minor production software build, freezing releases.",
    trialDesign: "MPO partnered with cyber policy authorities to grant a 6-month trial waiver: embedding automated container vulnerability scanning, DAST, and daily telemetry checks directly into the GCC pipeline.",
    liveEvidence: "Zero critical CVE vulnerabilities bypassed the pipeline across 48 automated production releases, with incident response time dropping from 90 days to under 4 hours.",
    standingRuleOutcome: "Codified into standard digital systems policy as 'Continuous Authority to Operate (cATO)' for qualified MPO squads."
  },
  {
    id: "tranche-operating-funds",
    title: "Shift from Fixed 3-Year Capex to Tranche-Based Opex",
    category: "Tranche Funding",
    blockingRule: "Digital projects had to budget all requirements upfront in a single multi-year Capex vote; changing scope required formal Ministry variation approvals.",
    trialDesign: "Established a flexible operating vote where funding is released in quarterly tranches linked directly to active monthly adoption and Value-Cost Ratio thresholds.",
    liveEvidence: "Two low-performing feature sets were discontinued early without administrative penalty, saving over $1.2M in maintenance overhead while high-performing modules scaled 3x faster.",
    standingRuleOutcome: "Formalized as the standard funding mechanism for the central software vote reporting to PS(D)."
  },
  {
    id: "embedded-military-apprenticeship",
    title: "Dual-Reporting Product Apprenticeship for Domain Officers",
    category: "Policy Waiver",
    blockingRule: "SAF officers could only be posted to established military billet appointments, preventing direct embedding in agile civilian development squads.",
    trialDesign: "Trialed a supernumerary apprenticeship model where military officers serve full-time in MPO product squads for 12–24 months with dual reporting lines.",
    liveEvidence: "8 military apprentices successfully completed Phase 1, taking production-tested agile practices back to Army, RSAF, and DIS capability branches.",
    standingRuleOutcome: "Integrated into the official Product RTS Career Development framework."
  }
];

export interface PhaseRoadmapStep {
  phaseNumber: 1 | 2 | 3;
  phaseName: string;
  duration: string;
  tagline: string;
  objective: string;
  keyMilestones: string[];
  roleOfMPO: string;
  roleOfDomains: string;
}

export const phaseRoadmapSteps: PhaseRoadmapStep[] = [
  {
    phaseNumber: 1,
    phaseName: "Doing, Demonstrating, and Apprenticing",
    duration: "Years 1–2",
    tagline: "Proving the Model on Real Problems",
    objective: "Deploy MPO product squads into pioneer domains (HR, OneNS, Safety, Logistics) to deliver working products, trial policy waivers on live systems, and train embedded military/civilian apprentices.",
    keyMilestones: [
      "Field 18 supernumerary establishment officers across Product, SWE, and Design",
      "Deliver working releases in 3 pioneer domains",
      "Trial and log evidence for continuous deployment and tranche funding waivers",
      "Introduce DTC into development pools so learnings diffuse back to Services"
    ],
    roleOfMPO: "Direct product delivery, policy reform drafting, and apprentice training lead.",
    roleOfDomains: "Assign full-time domain personnel as apprentices; provide ground user access."
  },
  {
    phaseNumber: 2,
    phaseName: "Capability Transfer and Institutional Codification",
    duration: "Years 2–3",
    tagline: "Transferring Squads & Codifying Standing Policy",
    objective: "Transfer mature product squads into domains that meet readiness criteria, codify tested policy exceptions into standing regulations, and launch the formal Product RTS framework.",
    keyMilestones: [
      "Establish strict readiness criteria so domains 'earn the right' to take over squads",
      "Codify tranche-based funding and continuous security accreditation into standard regulations",
      "Roll out Product RTS competency baselines and career conversion tracks",
      "Begin winding down internal MPO squads as domains mature"
    ],
    roleOfMPO: "Squad transition mentor, policy codification authority, and RTS curriculum steward.",
    roleOfDomains: "Integrate squads into permanent establishments; fund operations under MPO standards."
  },
  {
    phaseNumber: 3,
    phaseName: "Functional Authority, RTS, and Portfolio Governance",
    duration: "Steady-State (Year 3+)",
    tagline: "Decentralized Delivery with Central Functional Authority",
    objective: "Complete the decentralization of direct delivery. MPO settles into its steady state as the functional authority for product practice across MINDEF/SAF.",
    keyMilestones: [
      "Operate through 3 Directorates: (1) Standards & Architecture, (2) Workforce & Career Management, (3) Budget Allocation & Portfolio Audit",
      "Administer the central software vote based on user adoption and outcome metrics",
      "Decommission underperforming products cleanly via portfolio reviews",
      "Retain delivery capacity only for nascent problem spaces and shared core infrastructure"
    ],
    roleOfMPO: "Permanent functional authority setting standards, managing career tracks, and auditing votes.",
    roleOfDomains: "Independently staff, fund, and run their digital products under MPO standards."
  }
];
