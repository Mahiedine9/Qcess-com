export interface TimelineEntry {
  id: string
  week: number
  date: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'upcoming'
  deliverables?: string[]
  images?: string[]
  tags?: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar?: string
  github?: string
  linkedin?: string
  skills: string[]
}

export interface ProjectStatus {
  phase: string
  completion: number
  currentTasks: string[]
  nextSteps: string[]
}