export const SECTION_HEADERS = {
  PROBLEM_STATEMENT: "Problem Statement",
  MY_ROLE: "My Role",
  TECHNICAL_INNOVATION: "Technical Innovation",
  STRATEGIC_EXECUTION: "Strategic Execution",
  STAKEHOLDER_MANAGEMENT: "Stakeholder Management",
  IMPACT_AND_LEGACY: "Impact & Legacy",
  PROCESS_OVERVIEW: "Process Overview",
  TECHNOLOGY_HIGHLIGHTS: "Technology Highlights",
  IMPACT: "Impact",
  IMPLEMENTATION_AND_IMPACT: "Implementation & Impact",
  LOOKING_FORWARD: "Looking Forward",
  KEY_LEARNINGS: "Key Learnings",
  CUSTOMER_AND_STAKEHOLDER_FEEDBACK: "Customer & Stakeholder Feedback",
  LESSONS_LEARNED: "Lessons Learned"
} as const;

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  prototypeUrl: string;
  problemStatement: string;
  myRole?: string;
  technicalInnovation?: string;
  strategicExecution?: string;
  stakeholderManagement?: string;
  impactAndLegacy?: string;
  processOverview?: string;
  technologyHighlights?: string;
  impact?: string;
  implementationAndImpact?: string;
  lookingForward?: string;
  keyLearnings?: string;
  customerAndStakeholderFeedback?: string;
  lessonsLearned?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  logo: string;
}

export interface Tool {
  name: string;
  description: string;
  icon: string;
}

export interface Essay {
  id: string;
  date: string;
  title: string;
  preview: string;
  url: string;
} 