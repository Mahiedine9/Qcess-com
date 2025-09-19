import { TimelineEntry, TeamMember, ProjectStatus } from '../types/project'

export const timelineData: TimelineEntry[] = [
  {
    id: '1',
    week: 1,
    date: '2025-01-06',
    title: 'Lancement du projet',
    description: 'Première réunion d\'équipe et définition des objectifs',
    status: 'completed',
    deliverables: ['Cahier des charges', 'Planning prévisionnel'],
    tags: ['kickoff', 'planning']
  },
  {
    id: '2',
    week: 2,
    date: '2025-01-13',
    title: 'Recherche et analyse',
    description: 'Analyse de l\'existant et étude de marché',
    status: 'completed',
    deliverables: ['Rapport d\'analyse', 'Benchmark concurrentiel'],
    tags: ['research', 'analysis']
  },
  {
    id: '3',
    week: 3,
    date: '2025-01-20',
    title: 'Création des maquettes',
    description: 'Design des interfaces utilisateur et création des wireframes',
    status: 'in-progress',
    deliverables: ['Wireframes', 'Maquettes Figma'],
    tags: ['design', 'ui/ux']
  },
  {
    id: '4',
    week: 4,
    date: '2025-01-27',
    title: 'Développement - Phase 1',
    description: 'Mise en place de l\'architecture et développement des fonctionnalités de base',
    status: 'upcoming',
    tags: ['development', 'backend']
  },
  {
    id: '5',
    week: 5,
    date: '2025-02-03',
    title: 'Développement - Phase 2',
    description: 'Intégration des maquettes et développement frontend',
    status: 'upcoming',
    tags: ['development', 'frontend']
  }
]

export const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Mahiedine Ferdjoukh',
      role: 'développeur Full Stack',
      avatar: '👨‍💻',
      skills: ['React Native', 'NextJs', 'DevOps'],
      github: 'Mahiedine9',
      linkedin: 'mahiedine-ferdjoukh-071568177'
    },
    {
      id: '2',
      name: 'Aymane Essadjidi',
      role: 'Développeur Full Stack',
      avatar: '👨‍💻',
      skills: ['Flutter', 'JavaScript', 'Java'],
      github: 'Essajidi-Aymane',
      linkedin: 'aymane-essajidi-3a013920b'
    }
  ]


 

export const currentStatus: ProjectStatus = {
  phase: 'Conception - Maquettage',
  completion: 35,
  currentTasks: [
    'Finalisation des wireframes',
    'Création des maquettes haute fidélité',
    'Validation avec le client'
  ],
  nextSteps: [
    'Mise en place de l\'environnement de développement',
    'Création de la base de données',
    'Développement de l\'API REST'
  ]
}