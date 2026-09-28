export interface PlaybookPillar {
  number: number;
  title: string;
  shortSummary: string;
  description: string;
  frameworks: string[];
  keyActions: string[];
  playbookUrl: string;
}

export const playbookPillars: PlaybookPillar[] = [
  {
    number: 1,
    title: "Define the Users, Problem and Value",
    shortSummary: "Understand who is affected, frame the problem clearly, and define the outcome metric that matters before touching code.",
    description: "Before committing resources or assuming software is the answer, squads dive into ground workflows using qualitative shadowing and telemetry to prove a real, severe friction exists.",
    frameworks: [
      "Problem Statements using 6W Framework",
      "Problem Validation using the 4C Check",
      "Prioritisation using Severity, Frequency and Reach (SFR)",
      "Value Metrics, Outcome Metrics, and Value-Cost Ratio (VCR)"
    ],
    keyActions: [
      "Shadow frontline operational crews during live exercises or daily routines",
      "Distinguish between user symptoms and structural root causes",
      "Establish a baseline metric prior to building any prototype",
      "Assess whether a non-software or policy intervention is more appropriate"
    ],
    playbookUrl: "https://defence-pp.vercel.app/#/problems"
  },
  {
    number: 2,
    title: "Structure the Product Team and Delivery Model",
    shortSummary: "Set clear ownership, bring together cross-functional skills, and agree how internal and vendor teams work together.",
    description: "Digital systems require tight, co-located cross-functional pods where operations, product management, design, and engineering share single-threaded accountability.",
    frameworks: [
      "Product Squad Topology (Ops Manager & Product Lead Partnership)",
      "4-Tier AI-Integrated Role Schemas (Product, Design, SWE)",
      "Lifecycle Terms of Reference (TOR) & RACI Accountability",
      "Capacity-Based Vendor Operating Model"
    ],
    keyActions: [
      "Pair an operational problem owner (Ops Manager) with a technical Product Lead",
      "Embed domain apprentices for direct capability development",
      "Contract vendor capacity for sprint velocity while retaining code/architecture ownership",
      "Shield squads from traditional stage-gated review delays"
    ],
    playbookUrl: "https://defence-pp.vercel.app/#/team"
  },
  {
    number: 3,
    title: "Plan, Test and Deliver",
    shortSummary: "Set a clear product direction, test assumptions with rapid AI prototypes, and ship frequent working releases.",
    description: "Rather than multi-year specification documents, teams use AI design systems like PRIZM 4.0 and seed data to validate concepts with real users in days, not quarters.",
    frameworks: [
      "Outcome-Led Product Roadmapping",
      "Solution Prioritisation using Impact vs Effort Matrix",
      "Rapid Prototyping with PRIZM Components & CLARA Synthesis",
      "Continuous CI/CD Delivery, Telemetry & User Acceptance Testing (UAT)"
    ],
    keyActions: [
      "Build disposable prototypes to test the single riskiest hypothesis first",
      "Conduct live usability sessions with actual military operators (using INSIGHT)",
      "Release working software to pilot cohorts in 2-week sprint cycles",
      "Iterate roadmap dynamically based on user adoption data rather than fixed upfront plans"
    ],
    playbookUrl: "https://defence-pp.vercel.app/#/test"
  },
  {
    number: 4,
    title: "Modernise Existing Products",
    shortSummary: "Assess whether legacy systems remain fit for purpose, then modernise progressively without interrupting operations.",
    description: "Legacy defence software often accumulates critical technical debt. The IMPACT framework guides squads through phased replacement and zero-downtime data migration.",
    frameworks: [
      "Fitness Assessment (Business, User, Data, Resilience, and Cost)",
      "Mission Criticality & Risk Classification",
      "IMPACT Modernisation Framework",
      "Strangler Fig & Progressive Replacement Strategy"
    ],
    keyActions: [
      "Audit existing legacy architecture and maintenance overhead costs",
      "Identify high-friction user paths to replace as independent microservices",
      "Run legacy and modern pipelines in parallel with automated reconciliations",
      "Execute structured change management and frontline training"
    ],
    playbookUrl: "https://defence-pp.vercel.app/#/modernise"
  },
  {
    number: 5,
    title: "Govern and Review Products",
    shortSummary: "Review live evidence, clear blockers, and decide whether to continue, scale, pivot, or cleanly sunset products.",
    description: "Governance moves into the delivery pipeline. Product boards review live telemetry and user adoption rather than paper checklists, approving funding tranches as value is proven.",
    frameworks: [
      "PULSE Product Scorecards & Value-Cost Ratio Tracking",
      "Cadenced Product Review Gates based on Criticality",
      "Portfolio Telemetry & Anomaly Signals (DASH AI)",
      "Lifecycle Investment, Scaling, and Sunset Protocols"
    ],
    keyActions: [
      "Hold quarterly tranche funding reviews backed by live DASH analytics",
      "Empower product leads to pivot roadmaps based on operational evidence",
      "Decommission low-adoption features or completed initiatives without penalty",
      "Convert successful waiver trials into permanent ministry standing rules"
    ],
    playbookUrl: "https://defence-pp.vercel.app/#/govern"
  }
];
