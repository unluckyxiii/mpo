export interface TierDetail {
  tierNumber: 1 | 2 | 3 | 4;
  title: string;
  traditionalScope: string;
  aiAugmentedReality: string;
  coreCompetencies: string[];
  keyTools: string[];
}

export interface TrackData {
  id: "product" | "design" | "engineering";
  name: string;
  shortDesc: string;
  strategicFocus: string;
  tiers: TierDetail[];
}

export const competencyTracks: TrackData[] = [
  {
    id: "product",
    name: "Product Management Track",
    shortDesc: "Problem definition, outcome orchestration, and strategic governance.",
    strategicFocus: "Moves from administrative backlog grooming to hyper-fast assumption validation and systemic problem framing.",
    tiers: [
      {
        tierNumber: 1,
        title: "Associate Product Builder",
        traditionalScope: "Manual user interviews, writing lengthy PRDs, and basic backlog grooming.",
        aiAugmentedReality: "Uses AI discovery tools (such as CLARA) to instantly ingest research transcripts, draft initial user stories, and synthesize multi-source feedback data.",
        coreCompetencies: [
          "Prompt crafting for synthesis",
          "Rapid assumption validation",
          "Rigorous execution of sprint task lists",
          "Translating operational friction into 6W briefs"
        ],
        keyTools: ["CLARA", "INSIGHT", "Jira/GitLab", "BEACON Copilot"]
      },
      {
        tierNumber: 2,
        title: "Product Manager",
        traditionalScope: "Managing sprint cycles, wireframing features, and coordinating cross-functional squads.",
        aiAugmentedReality: "Uses AI agents to spin up rapid functional prototypes, reducing dependency on manual wireframing. Focuses heavily on user journey validation and outcome measurement.",
        coreCompetencies: [
          "Supervising AI agent outputs for domain accuracy",
          "Defining success metrics and Value-Cost Ratio (VCR)",
          "Maintaining strict mission alignment with Ops Managers",
          "Running concept validation experiments"
        ],
        keyTools: ["DASH AI", "PRIZM Components", "CLARA", "PostHog/Telemetry"]
      },
      {
        tierNumber: 3,
        title: "Senior Product Lead",
        traditionalScope: "Strategic roadmapping, stakeholder management, and multi-squad leadership.",
        aiAugmentedReality: "Orchestrates multi-agent product discovery pipelines. Integrates AI governance, regulatory compliance (TechPass/GCC), and policy reform cases early into discovery.",
        coreCompetencies: [
          "High-level problem framing and hypothesis design",
          "Stakeholder alignment (COA, DMP, Service Chiefs)",
          "Risk-informed innovation and policy waiver trials",
          "Squad capability coaching and apprentice mentorship"
        ],
        keyTools: ["PULSE Scorecards", "GCC Pipeline", "TechPass Governance", "Spectrum Suite"]
      },
      {
        tierNumber: 4,
        title: "Principal / Director",
        traditionalScope: "Division strategy, portfolio budgeting, and broad organizational design.",
        aiAugmentedReality: "Architecting the entire startup-style DIY operating model where lean squads scale 3x faster using automated workflows and tranche-based operating votes.",
        coreCompetencies: [
          "Systemic organizational transformation",
          "National defence policy translation",
          "Portfolio-level tranche capital allocation",
          "Executive decision-making and sunset reviews"
        ],
        keyTools: ["Central Software Vote", "RTS Framework", "Strategic Portfolio Telemetry"]
      }
    ]
  },
  {
    id: "design",
    name: "Design Track",
    shortDesc: "Systemic user experience, AI prompt-to-UI architectures, and design system governance.",
    strategicFocus: "Moves from manual screen drawing to design token governance, conversational interfaces, and human-AI interaction standards.",
    tiers: [
      {
        tierNumber: 1,
        title: "Junior UI/UX Associate",
        traditionalScope: "Creating static wireframes, pixel-pushing screens, and building basic component libraries from scratch.",
        aiAugmentedReality: "Most disrupted execution tier. Manual screen drawing is largely obsolete; associates use design systems and AI layout tools (PRIZM 4.0) to generate compliant UI directly from prompt commands.",
        coreCompetencies: [
          "Understanding component structures and hierarchy",
          "Applying PRIZM design system tokens (OKLCH, Enterprise/C3)",
          "Rapid interface curation and visual consistency QA",
          "A11y (WCAG 2.1 AA) validation"
        ],
        keyTools: ["PRIZM 4.0 Enterprise", "Figma AI", "Base UI", "Tailwind CSS"]
      },
      {
        tierNumber: 2,
        title: "Product Designer",
        traditionalScope: "End-to-end user flows, interaction design, and usability testing.",
        aiAugmentedReality: "Focuses on conversational UI patterns, multi-modal experiences, and fine-tuning AI-generated screen outputs to fit institutional and cognitive ergonomics.",
        coreCompetencies: [
          "Complex operational workflow orchestration",
          "User empathy mapping and cognitive load reduction",
          "Edge-case and exception handling that AI overlooks",
          "Interactive usability testing with operational crews"
        ],
        keyTools: ["PRIZM Design System", "INSIGHT Transcripts", "Framer Motion", "Figma Tokens"]
      },
      {
        tierNumber: 3,
        title: "Senior Design Lead",
        traditionalScope: "Design system governance, complex enterprise workflows, and squad mentorship.",
        aiAugmentedReality: "Maintains and expands design tokens and component systems (like enterprise UI architectures written so AI coding assistants can build directly from them).",
        coreCompetencies: [
          "System-level design thinking and tokens architecture",
          "Design Ops scalability across MINDEF/DSTA",
          "Cross-functional quality control and UX telemetry audit",
          "Leading design spikes for mission-critical C3 suites"
        ],
        keyTools: ["PRIZM Token Engine", "DSTA Design Council Standards", "Storybook"]
      },
      {
        tierNumber: 4,
        title: "Principal Designer / Head of Design",
        traditionalScope: "Brand governance and macro-experience strategy.",
        aiAugmentedReality: "Redefining how military personnel interact with software as automated, agentic systems take over traditional transactional forms.",
        coreCompetencies: [
          "Strategic human-machine teaming vision",
          "Human-AI interaction governance and safety standards",
          "Shaping national-level defence digital service standards",
          "Design discipline stewardship across SAF Services"
        ],
        keyTools: ["National Design Standards", "Agentic UX Frameworks", "C3 Cognitive Guidelines"]
      }
    ]
  },
  {
    id: "engineering",
    name: "Development & Engineering Track",
    shortDesc: "System architecture, code orchestration, and secure cloud deployment pipelines.",
    strategicFocus: "Moves from boilerplate syntax writing to architectural oversight, secure GCC pipelines, and AI-assisted codebase stewardship.",
    tiers: [
      {
        tierNumber: 1,
        title: "Junior Software Builder",
        traditionalScope: "Writing boilerplate code, fixing minor frontend bugs, and manual unit testing.",
        aiAugmentedReality: "Uses AI IDEs (such as Google Antigravity / Cursor) to generate baseline code, boilerplate blocks, and unit tests instantly.",
        coreCompetencies: [
          "Code review literacy and security hygiene",
          "Prompt engineering for syntax and schema generation",
          "Debugging AI-generated logic and edge conditions",
          "Automated test harness implementation"
        ],
        keyTools: ["Google Antigravity", "Cursor", "TypeScript", "Tailwind/Next.js", "Vitest/Jest"]
      },
      {
        tierNumber: 2,
        title: "Software Engineer",
        traditionalScope: "Feature implementation, API integrations, and database schema design.",
        aiAugmentedReality: "Manages complex multi-file codebases via AI agents, focusing on integration glue, distributed state, and data consistency rather than raw syntax typing.",
        coreCompetencies: [
          "System integration and API contract design",
          "Defensive security hygiene and threat modeling",
          "Writing robust integration and end-to-end test harnesses",
          "Database query optimization and telemetry wiring"
        ],
        keyTools: ["Drizzle ORM", "Docker", "Next.js App Router", "SQLite/PostgreSQL", "GitHub Actions"]
      },
      {
        tierNumber: 3,
        title: "Tech Lead / Principal Engineer",
        traditionalScope: "System architecture, code reviews, and technical debt management.",
        aiAugmentedReality: "Architecting the secure deployment pipeline across institutional boundaries (TechPass → GCC → Logot Prizm) and setting strict guardrails for AI-generated codebases.",
        coreCompetencies: [
          "Cloud architecture on Government Commercial Cloud (GCC)",
          "Automated continuous security accreditation and DevSecOps",
          "Systemic technical risk management and zero-trust networking",
          "Mentoring domain apprentice engineers"
        ],
        keyTools: ["GCC Infrastructure", "TechPass SSO", "Kubernetes", "SonarQube/Trivy", "Terraform"]
      },
      {
        tierNumber: 4,
        title: "Chief Architect / CTO Track",
        traditionalScope: "Long-term technology strategy, vendor procurement, and tech stack selection.",
        aiAugmentedReality: "Future-proofing the engineering division for automated agentic software lifecycles, ensuring absolute compliance without sacrificing startup-style speed.",
        coreCompetencies: [
          "Enterprise technology vision and architecture doctrine",
          "Security governance at scale (continuous assurance)",
          "Defence Technology Community (DTC) R&D direction",
          "Engineering career track (RTS) stewardship"
        ],
        keyTools: ["Enterprise Architecture Framework", "DevSecOps Standards", "DTC Technology Board"]
      }
    ]
  }
];
