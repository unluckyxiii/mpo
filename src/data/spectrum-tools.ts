export interface SpectrumTool {
  id: string;
  name: string;
  category: "Research & Synthesis" | "Design & UI" | "Telemetry & Analytics" | "Guidance & Practice" | "Platform & Runtime";
  status: "Live" | "Preview" | "Active";
  tagline: string;
  description: string;
  capabilities: string[];
  externalUrl?: string;
  iconName: string;
}

export const spectrumToolsList: SpectrumTool[] = [
  {
    id: "clara",
    name: "CLARA",
    category: "Research & Synthesis",
    status: "Live",
    tagline: "Grounded AI Discovery & Citation Synthesis",
    description: "CLARA reads your programme's entire knowledge base and drafts rigorous artefacts across research, design, and testing: user personas, journey maps, requirements documents, storyboards, and test plans. Every assertion carries an immutable citation back to the raw source.",
    capabilities: [
      "Auto-synthesis of multi-hour user interview transcripts",
      "Grounded source citation with verifiable timestamps",
      "Drafts comprehensive PRDs and user acceptance criteria in minutes",
      "Integrates with INSIGHT audio outputs"
    ],
    externalUrl: "https://dsta-productops.github.io/clara/",
    iconName: "FileText"
  },
  {
    id: "insight",
    name: "INSIGHT",
    category: "Research & Synthesis",
    status: "Preview",
    tagline: "On-Device Air-Gapped Audio & Interview Copilot",
    description: "INSIGHT listens during user interviews or focus groups on local hardware. It runs completely offline without sending audio to the cloud, suggests intelligent follow-up questions in real time, auto-translates military jargon, and produces speaker-labelled transcripts instantly.",
    capabilities: [
      "100% offline, local machine processing for sensitive defence contexts",
      "Real-time military acronym and jargon disambiguation",
      "Automated speaker separation and transcription",
      "Direct export to CLARA for automated synthesis"
    ],
    externalUrl: "https://insight.vercel.app/",
    iconName: "Mic"
  },
  {
    id: "prizm",
    name: "PRIZM 4.0",
    category: "Design & UI",
    status: "Live",
    tagline: "44-Component AI-Consumable Design System",
    description: "DSTA's official design system covering Command-and-Control (C3) and Enterprise web applications in light and dark modes. PRIZM is explicitly written so AI coding assistants can read component token contracts and assemble compliant, accessible interfaces without manual design overhead.",
    capabilities: [
      "44 battle-tested, accessible component primitives (Base UI + Tailwind)",
      "Dual design zones: Enterprise (admin/governance) and C3 (high-density tactical)",
      "Strict OKLCH color token specification and WCAG 2.1 AA compliance",
      "Engineered for direct AI prompt-to-code screen generation"
    ],
    externalUrl: "https://prizm-design.github.io/prizm/",
    iconName: "Layers"
  },
  {
    id: "dash",
    name: "DASH",
    category: "Telemetry & Analytics",
    status: "Live",
    tagline: "Continuous Telemetry & AI Anomaly Detection",
    description: "DASH records your product's live operational telemetry against established baselines. DASH AI continuously analyzes data patterns, identifies friction hotspots, and suggests tactical UX optimizations for individual products or entire portfolio clusters.",
    capabilities: [
      "Continuous user adoption and workflow friction tracking",
      "Automated Value-Cost Ratio (VCR) calculation",
      "AI-driven telemetry pattern analysis and anomaly warnings",
      "Single-product telemetry and enterprise portfolio roll-ups"
    ],
    externalUrl: "https://diux-dash.com/",
    iconName: "Activity"
  },
  {
    id: "beacon",
    name: "BEACON",
    category: "Guidance & Practice",
    status: "Live",
    tagline: "Product Practice Copilot & Prompt Library",
    description: "BEACON explains how research, design, and measurement fit together across the defence product lifecycle. It hosts an extensive library of production-tested prompts and an interactive AI copilot to guide teams on the exact methodology needed for their current project phase.",
    capabilities: [
      "Comprehensive directory of defence product tools and access steps",
      "Verified AI prompt library for problem framing, user research, and test plans",
      "Interactive methodology advisor matching tools to problem stages",
      "Direct bridge to Defence Product Playbook exercises"
    ],
    externalUrl: "https://productops-copilot.vercel.app/",
    iconName: "Compass"
  },
  {
    id: "ace-foundry",
    name: "ACE / Foundry",
    category: "Platform & Runtime",
    status: "Active",
    tagline: "Enterprise Cloud Infrastructure & CI/CD Pipelines",
    description: "The secure cloud development and runtime platform used by MPO squads to build, deploy, and scale compliant software on Government Commercial Cloud (GCC) with automated security accreditation and zero-trust boundaries.",
    capabilities: [
      "Hardened CI/CD delivery pipelines with continuous security scanning",
      "Native TechPass single sign-on integration",
      "Automated compliance verification replacing static point-in-time audits",
      "Multi-region resilience and rapid staging environments"
    ],
    iconName: "Cpu"
  }
];
