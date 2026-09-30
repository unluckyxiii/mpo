export interface GlossaryItem {
  id: string;
  term: string;
  fullName: string;
  definition: string;
  category: "organization" | "framework" | "platform" | "governance" | "military";
  relatedTerms?: string[];
}

export const glossaryDictionary: GlossaryItem[] = [
  // Organizations & Entities
  {
    id: "mpo",
    term: "MPO",
    fullName: "MINDEF Product Office",
    definition: "A dedicated transformation task force mandated across MINDEF/SAF and the Defence Technology Community to drive the shift from deterministic capability acquisition to a disciplined adaptive product model.",
    category: "organization",
    relatedTerms: ["DSTA", "DTC", "RTS"]
  },
  {
    id: "psd",
    term: "PS(D)",
    fullName: "Permanent Secretary (Defence)",
    definition: "The senior civilian executive of MINDEF overseeing defence policy, administration, resource allocation, and organizational transformation.",
    category: "organization",
    relatedTerms: ["MPO", "MINDEF"]
  },
  {
    id: "dsta",
    term: "DSTA",
    fullName: "Defence Science and Technology Agency",
    definition: "The statutory board under MINDEF responsible for implementing defence technology plans, acquiring capability platforms, and engineering cutting-edge digital infrastructure and C3 systems.",
    category: "organization",
    relatedTerms: ["MPO", "DTC", "PRIZM", "Spectrum"]
  },
  {
    id: "dis",
    term: "DIS",
    fullName: "Digital and Intelligence Service",
    definition: "The fourth Service of the SAF, established to provide timely intelligence and defend MINDEF/SAF networks against digital and cyber threats.",
    category: "organization",
    relatedTerms: ["DOTC", "SAF"]
  },
  {
    id: "dotc",
    term: "DOTC",
    fullName: "Digital Ops-Tech Centre (DIS)",
    definition: "DIS operational technology unit focused on building specialized digital and cyber capabilities for military operations.",
    category: "organization",
    relatedTerms: ["DIS", "MPO", "RAiD"]
  },
  {
    id: "raid",
    term: "RAiD",
    fullName: "Rapid Agile Development Centre (RSAF)",
    definition: "RSAF internal product and software innovation centre pioneering agile applications for air force operations.",
    category: "organization",
    relatedTerms: ["RSAF", "MPO"]
  },
  {
    id: "cdo",
    term: "CDO",
    fullName: "Chief Digital Officer (SAF)",
    definition: "The executive leader driving enterprise digital transformation, data strategy, and AI adoption across the Singapore Armed Forces.",
    category: "organization",
    relatedTerms: ["JDCD", "MPO"]
  },
  {
    id: "jdcd",
    term: "JDCD",
    fullName: "Joint Digital Capability Directorate",
    definition: "SAF Joint Staff directorate orchestrating tri-service digital capability pipelines and modernization priorities.",
    category: "organization",
    relatedTerms: ["CDO", "SAF"]
  },
  {
    id: "dtc",
    term: "DTC",
    fullName: "Defence Technology Community",
    definition: "The ecosystem comprising DSTA, DSO National Laboratories, MINDEF/SAF tech units, and defence industry partners.",
    category: "organization",
    relatedTerms: ["DSTA", "MPO"]
  },
  {
    id: "coa",
    term: "COA",
    fullName: "Chief of Army",
    definition: "Head of the Singapore Army, providing operational direction for land capability programs and digital soldier systems.",
    category: "organization",
    relatedTerms: ["SAF", "CNV", "CAF"]
  },
  {
    id: "cnv",
    term: "CNV",
    fullName: "Chief of Navy",
    definition: "Head of the Republic of Singapore Navy (RSN), providing operational direction for maritime capability and digital naval systems.",
    category: "organization",
    relatedTerms: ["SAF", "COA", "CAF"]
  },
  {
    id: "caf",
    term: "CAF",
    fullName: "Chief of Air Force",
    definition: "Head of the Republic of Singapore Air Force (RSAF), providing operational direction for air defence and digital air power capability programs.",
    category: "organization",
    relatedTerms: ["SAF", "COA", "CNV", "RAiD"]
  },
  {
    id: "dfo",
    term: "DFO",
    fullName: "Defence Finance Organisation",
    definition: "The central finance organisation in MINDEF responsible for financial policy, budget allocation, resource management, and governance of capability development votes.",
    category: "organization",
    relatedTerms: ["MPO", "PS(D)", "Capital Vote", "Operating Vote"]
  },
  {
    id: "dmp",
    term: "DMP",
    fullName: "Directorate of Military Policy / Defence Management Policy",
    definition: "MINDEF policy organ responsible for organizational frameworks and resource alignment.",
    category: "organization",
    relatedTerms: ["MPO", "PS(D)"]
  },
  {
    id: "sdd",
    term: "SDD",
    fullName: "Service Delivery Division",
    definition: "The MINDEF division driving service delivery transformation, citizen/serviceman journeys, and seamless digital service touchpoints across MINDEF/SAF.",
    category: "organization",
    relatedTerms: ["MPO", "OneNS", "MINDEF"]
  },

  // Frameworks & Delivery Methodologies
  {
    id: "6w",
    term: "6W Framework",
    fullName: "Who, What, Why, Where, When, hoW Problem Framing",
    definition: "A structured problem statement template used to frame operational pain points with clarity before jumping to software solutions.",
    category: "framework",
    relatedTerms: ["4C Check", "Software Brief", "VCR"]
  },
  {
    id: "4c",
    term: "4C Check",
    fullName: "Clarity, Consequence, Cause, Confirmation",
    definition: "MPO's quality assessment rubric for software problem briefs to verify that problems are specific, consequential, rooted in real causes, and backed by evidence.",
    category: "framework",
    relatedTerms: ["6W Framework", "Software Brief"]
  },
  {
    id: "vcr",
    term: "VCR",
    fullName: "Value-Cost Ratio",
    definition: "A core MPO outcome metric that quantifies the operational impact or time saved by a digital product divided by its annual delivery and maintenance cost.",
    category: "framework",
    relatedTerms: ["DASH", "PULSE", "Appraise"]
  },
  {
    id: "impact",
    term: "IMPACT Framework",
    fullName: "Modernisation Assessment Framework",
    definition: "The 5-step methodology used in the Defence Product Playbook to evaluate and progressively replace legacy defence applications without halting operations.",
    category: "framework",
    relatedTerms: ["Playbook", "Modernisation"]
  },
  {
    id: "raci",
    term: "RACI",
    fullName: "Responsible, Accountable, Consulted, Informed",
    definition: "An operational accountability matrix defining who executes, approves, provides input, and stays informed across each phase of the product lifecycle.",
    category: "framework",
    relatedTerms: ["TOR", "Squad Blueprints"]
  },
  {
    id: "tor",
    term: "TOR",
    fullName: "Terms of Reference",
    definition: "The charter defining the mandate, decision-making rights, and operational scope of a product squad and its leaders.",
    category: "framework",
    relatedTerms: ["RACI", "Ops Manager", "Product Lead"]
  },
  {
    id: "appraise",
    term: "Appraise",
    fullName: "Appraise — 360° Performance Evaluation Platform (GovTech)",
    definition: "The Whole-of-Government performance review and career framework platform built by GovTech CIOO Labs (appraise.tech.gov.sg), bringing multi-perspective 360° feedback, schema-based self-evaluations, manager assessments, and promotion calibration into a single unified cycle across public service agencies.",
    category: "platform",
    relatedTerms: ["RTS", "TechPass", "GovTech"]
  },
  {
    id: "pulse",
    term: "PULSE",
    fullName: "Product Health & Scorecard Portal",
    definition: "The institutional repository of product report cards, tracking baselines, live results, targets, and value metrics for all active MINDEF digital products.",
    category: "framework",
    relatedTerms: ["DASH", "Nominal Roll"]
  },

  // Platforms, Tools & Tech
  {
    id: "prizm",
    term: "PRIZM 4.0",
    fullName: "PRIZM Design System (DSTA)",
    definition: "A standardized design system with 44 component primitives covering Command-and-Control (C3) and Enterprise web interfaces, engineered for both human developers and AI code generation.",
    category: "platform",
    relatedTerms: ["Spectrum", "Base UI", "CLARA"]
  },
  {
    id: "clara",
    term: "CLARA",
    fullName: "CLARA AI Discovery & Synthesis Engine",
    definition: "An AI product research tool that reads knowledge bases and user interviews, synthesizing PRDs, user journeys, and test plans with grounded citations back to raw transcripts.",
    category: "platform",
    relatedTerms: ["INSIGHT", "Spectrum"]
  },
  {
    id: "insight",
    term: "INSIGHT",
    fullName: "INSIGHT Offline Audio & Interview Copilot",
    definition: "An on-device, air-gapped application that listens to user interviews, suggests probing questions in real-time, and generates speaker-labelled transcripts without cloud connectivity.",
    category: "platform",
    relatedTerms: ["CLARA", "Spectrum"]
  },
  {
    id: "dash",
    term: "DASH",
    fullName: "DASH Telemetry & Outcome Analytics",
    definition: "An automated metrics recording platform that measures live digital product telemetry against baseline targets and uses AI to detect anomalies and suggest UX improvements.",
    category: "platform",
    relatedTerms: ["PULSE", "VCR", "Spectrum"]
  },
  {
    id: "beacon",
    term: "BEACON",
    fullName: "BEACON Copilot & Prompt Library",
    definition: "An AI-powered product practice assistant and curated prompt directory guiding defence teams through problem framing, research, design, and metrics.",
    category: "platform",
    relatedTerms: ["Playbook", "Spectrum"]
  },
  {
    id: "ace-foundry",
    term: "ACE / Foundry",
    fullName: "App Cloud Environment / Foundry Platform",
    definition: "The hardened cloud and deployment pipeline infrastructure MPO uses to build, test, secure, and operate digital products across MINDEF/SAF.",
    category: "platform",
    relatedTerms: ["GCC", "TechPass"]
  },
  {
    id: "mcc",
    term: "MCC",
    fullName: "MINDEF Commercial Cloud",
    definition: "The dedicated, secure multi-cloud hosting and DevSecOps platform built on commercial hyperscalers for MINDEF/SAF and the Defence Technology Community, engineered with defence security guardrails for rapid software deployment.",
    category: "platform",
    relatedTerms: ["GCC", "ACE / Foundry", "TechPass", "DSTA"]
  },
  {
    id: "gcc",
    term: "GCC",
    fullName: "Government Commercial Cloud",
    definition: "The secure commercial cloud infrastructure platform (AWS/Azure/GCP) configured for Whole-of-Government and defence security requirements.",
    category: "platform",
    relatedTerms: ["MCC", "TechPass", "ACE / Foundry"]
  },
  {
    id: "techpass",
    term: "TechPass",
    fullName: "Whole-of-Government TechPass IAM",
    definition: "Secure single sign-on and identity management standard used to authenticate government officers, contractors, and developers across cloud development environments.",
    category: "platform",
    relatedTerms: ["GCC", "ACE / Foundry"]
  },

  // Governance & Establishment
  {
    id: "aor",
    term: "AOR",
    fullName: "Approval of Request",
    definition: "The formal administrative and governance endorsement required to authorize project initiation, resource allocations, or policy variations across MINDEF/SAF.",
    category: "governance",
    relatedTerms: ["TOR", "Operating Vote", "MPO"]
  },
  {
    id: "uoe",
    term: "UOE",
    fullName: "Unit Operating Expenses",
    definition: "The operational funding vote in MINDEF required to meet office administrative and operating overheads, distinct from an initiation budget used to fund direct product development and implementation.",
    category: "governance",
    relatedTerms: ["Operating Vote", "DFO", "MPO"]
  },
  {
    id: "rts",
    term: "RTS",
    fullName: "Ready to Scale / Scheme of Service (Product Career Track)",
    definition: "The dedicated workforce competency and career family framework for Product Management, Software Engineering, and Design within MINDEF/SAF.",
    category: "governance",
    relatedTerms: ["MPO", "Estabs", "Apprenticeship"]
  },
  {
    id: "estabs",
    term: "Estabs",
    fullName: "Supernumerary Establishments / Billet Posts",
    definition: "Authorized personnel headcounts approved by MINDEF leadership to staff specialized task force units like MPO.",
    category: "governance",
    relatedTerms: ["DX Grade", "WY"]
  },
  {
    id: "dx-grades",
    term: "DX Grades",
    fullName: "Defence Executive Officer Job Grades (DX11, DX14-15, DX16)",
    definition: "The civilian career grading system in MINDEF governing rank equivalence, salary bands, and functional seniority.",
    category: "governance",
    relatedTerms: ["Estabs", "RTS"]
  },
  {
    id: "operating-vote",
    term: "Operating Vote",
    fullName: "Tranche-Based Opex vs. Capital Capex Vote",
    definition: "The modern software financing model where funding is released in milestone tranches tied to measured adoption and value rather than multi-year upfront capital lock-in.",
    category: "governance",
    relatedTerms: ["VCR", "5 Dimensions"]
  },

  // Defence & Military Context
  {
    id: "ict",
    term: "ICT",
    fullName: "In-Camp Training",
    definition: "Annual operational reservist training call-up for Operationally Ready National Servicemen (NSmen).",
    category: "military",
    relatedTerms: ["Nominal Roll", "OneNS"]
  },
  {
    id: "nominal-roll",
    term: "Nominal Roll",
    fullName: "Nominal Roll Automated Call-up System",
    definition: "Flagship MPO-supported product that calculates ICT eligibility in a unit and automates commander approvals into a single click.",
    category: "military",
    relatedTerms: ["ICT", "PULSE"]
  },
  {
    id: "c3",
    term: "C3",
    fullName: "Command, Control, and Communications",
    definition: "Military command network systems and high-density tactical displays used for operational decision-making.",
    category: "military",
    relatedTerms: ["PRIZM 4.0", "DIS"]
  }
];
