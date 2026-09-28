export interface DimensionChange {
  id: string;
  dimension: string;
  asIsState: {
    title: string;
    description: string;
    frictionPoints: string[];
  };
  toBeState: {
    title: string;
    description: string;
    benefits: string[];
  };
}

export const dimensionsData: DimensionChange[] = [
  {
    id: "financing",
    dimension: "Financing & Budgeting",
    asIsState: {
      title: "Upfront Capital Pre-Commitment",
      description: "Capital votes pre-commit multi-year requirements upfront. Changes informed by live use are treated as variations, and retiring an unviable feature is penalized as delay.",
      frictionPoints: [
        "Incentivizes teams to guess 3-year requirements upfront",
        "Penalizes learning from early prototypes",
        "Sunk-cost fallacy keeps failing features funded"
      ]
    },
    toBeState: {
      title: "Tranche-Based Operating Votes",
      description: "Operating votes release funds in progressive tranches linked directly to validated user adoption and business outcomes. Teams iterate or discontinue features without administrative penalty.",
      benefits: [
        "Funding stops when value stops (Zero waste)",
        "Pivots are treated as features and intelligence, not failures",
        "Empowers squads to test high-risk assumptions with small seed budgets"
      ]
    }
  },
  {
    id: "governance",
    dimension: "Governance & Risk Management",
    asIsState: {
      title: "Static Gated Paper Audits",
      description: "Multi-layered steering committees govern through static documentation and point-in-time audits, delaying releases while operational needs evolve.",
      frictionPoints: [
        "Treats plan variance as risk while ignoring the hazard of irrelevant software",
        "Long review cycles freeze deployment for months",
        "Creates defensive compliance and paper-pushing rituals"
      ]
    },
    toBeState: {
      title: "Continuous Pipeline Telemetry & Accreditation",
      description: "Streamlined product boards review live system telemetry and user adoption, prioritizing automated security checks and continuous pipeline accreditation.",
      benefits: [
        "Risk visible continuously inside the CI/CD pipeline",
        "Frequent small releases reduce operational blast radius",
        "Governance decisions backed by real user usage data"
      ]
    }
  },
  {
    id: "procurement",
    dimension: "Procurement & Contracting",
    asIsState: {
      title: "Deliverable Fixed-Price Outsourcing",
      description: "Deliverable contracts outsource system architecture and code to commercial vendors, creating heavy vendor dependency, protracted renegotiations, and high lifecycle maintenance.",
      frictionPoints: [
        "Commercial tensions over every minor workflow change",
        "Loss of internal engineering mastery and architecture control",
        "Massive maintenance backlogs accumulate at handover"
      ]
    },
    toBeState: {
      title: "Capacity-Based Engineering Velocity",
      description: "Capacity-based frameworks contract for engineering velocity and problem-solving, while MINDEF/SAF retains full ownership of technical architectures, codebases, and product direction.",
      benefits: [
        "MINDEF owns the core IP, architecture, and code repo",
        "Flexible sprint scope adjustments without contract variation penalty",
        "Close co-creation between vendors, MPO leads, and domain users"
      ]
    }
  },
  {
    id: "workforce",
    dimension: "Human Capital & Workforce Development",
    asIsState: {
      title: "Generalist Rotations (2-3 Years)",
      description: "Generalist rotations reset institutional memory every two to three years, leaving domains reliant on external vendors for technical choices and system stewardship.",
      frictionPoints: [
        "Loss of domain context and technical continuity",
        "Incentive to deliver upfront milestones before rotating out",
        "Lack of specialized product and engineering mastery"
      ]
    },
    toBeState: {
      title: "Dedicated RTS Product Career Families",
      description: "Dedicated Product Management, Software Engineering, and Design career families (RTS) accumulate domain mastery and technical depth, keeping core stewardship within MINDEF.",
      benefits: [
        "Deep technical depth and long-term product stewardship",
        "Structured apprenticeship model transferring skills to Services",
        "Competitive career progression for top digital talent"
      ]
    }
  },
  {
    id: "structure",
    dimension: "Organizational Structure",
    asIsState: {
      title: "Siloed Commercial Transactions",
      description: "Problem owners hand written requirements to external delivery teams as commercial transactions, severing the feedback loop between operational need and technical execution.",
      frictionPoints: [
        "Users treated as passive buyers rather than active problem solvers",
        "Hand-offs create misinterpretation and spec mismatch",
        "No shared ownership for mission outcomes"
      ]
    },
    toBeState: {
      title: "Co-located Cross-Functional Pods",
      description: "Co-located, cross-functional product squads integrate Ops Managers, Product Leads, Designers, Engineers, and Domain Apprentices under shared accountability for mission outcomes.",
      benefits: [
        "Tight daily feedback loop with actual end-users",
        "Rapid prototyping and same-day validation",
        "Mutual accountability between operations and tech"
      ]
    }
  }
];
