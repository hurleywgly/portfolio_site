export interface Project {
  id: string
  title: string
  description: string
  coverImage: string
  prototypeUrl: string
  problemStatement: string
  challengeAndRole: string
  technicalInnovation: string
  strategicExecution: string
  impactAndLegacy: string
}

export interface BlogPost {
  id: string
  title: string
  preview: string
  date: string
  url: string
}

export interface Tool {
  id: string
  name: string
  description: string
  icon: string
}

export interface WorkExperience {
  company: string
  role: string
  period: string
}

