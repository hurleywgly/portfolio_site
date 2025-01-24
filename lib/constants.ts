export const SECTION_HEADERS = {
  PROBLEM_STATEMENT: "Problem Statement",
  MY_ROLE: "My Role",
  PROCESS_OVERVIEW: "Process Overview",
  TECHNICAL_INNOVATION: "Technical Innovation",
  STRATEGIC_EXECUTION: "Strategic Execution",
  STAKEHOLDER_MANAGEMENT: "Stakeholder Management",
  IMPACT_AND_LEGACY: "Impact and Legacy",
  TECHNOLOGY_HIGHLIGHTS: "Technology Highlights",
  IMPACT: "Impact",
  KEY_LEARNINGS: "Key Learnings",
  LESSONS_LEARNED: "Lessons Learned",
  CUSTOMER_FEEDBACK: "Customer & Stakeholder Feedback"
} as const;

export type Project = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  prototypeUrl: string;
  problemStatement: string;
  myRole: string;
  processOverview?: string;
  technicalInnovation?: string;
  strategicExecution?: string;
  stakeholderManagement?: string;
  impactAndLegacy?: string;
  keyLearnings?: string;
  technologyHighlights?: string;
  impact?: string;
  customerAndStakeholderFeedback?: string;
  lessonsLearned?: string;
  implementationAndImpact?: string;
  lookingForward?: string;
};

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