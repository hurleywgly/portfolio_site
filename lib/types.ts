export interface Project {
  id: string
  title: string
  description: string
  coverImage: string
  prototypeUrl: string
  problemStatement: string
  myRole: string
  processOverview?: string
  technicalInnovation?: string
  strategicExecution?: string
  stakeholderManagement?: string
  impactAndLegacy?: string
  keyLearnings?: string
  technologyHighlights?: string
  impact?: string
  customerAndStakeholderFeedback?: string
  lessonsLearned?: string
  implementationAndImpact?: string
  lookingForward?: string
}

export interface WorkExperience {
  company: string
  role: string
  period: string
  logo: string
}

export interface Tool {
  name: string
  description: string
  icon: string
}

export interface Essay {
  id: string
  date: string
  title: string
  preview: string
  url: string
} 