'use client'

import { useState, useEffect } from 'react'
import { teamMembers } from '../lib/projectData'

import { 
  Trophy,
  GraduationCap,
  Users,
  Target,
  Sparkles,
  Building2,
  Shield,
  Smartphone,
  Code2,
  Rocket,
  ChevronRight,
  CheckCircle,
  Star,
  Award,
  Brain,
  Lightbulb,
  Wrench,
  MessageSquare,
  Calendar,
  Bell,
  Settings,
  Key,
  UserPlus,
  Home,
  Hotel,
  Briefcase,
  AlertCircle,
  PartyPopper,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Zap,
  Palette,
  Globe,
  BookOpen,
  HeartHandshake,
  TrendingUp,
  Clock,
  Map,
  Layers
} from 'lucide-react'
import Link from 'next/link'

export default function ProjectDetailsPage() {
  const [activeModule, setActiveModule] = useState(0)
  const [selectedUserType, setSelectedUserType] = useState('proprietaire')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])



  const userTypes = [
    {
      id: 'proprietaire',
      title: 'Propriétaire de Résidence',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      features: ['Gestion des locataires', 'Suivi des loyers', 'Maintenance', 'Communication']
    },
    {
      id: 'hotel',
      title: 'Gérant d\'Hôtel',
      icon: Hotel,
      color: 'from-cyan-500 to-teal-500',
      features: ['Réservations', 'Check-in/out', 'Services clients', 'Personnel']
    },
    {
      id: 'entreprise',
      title: 'Chef d\'Entreprise',
      icon: Briefcase,
      color: 'from-teal-500 to-emerald-500',
      features: ['Gestion RH', 'Espaces de travail', 'Événements', 'Sécurité']
    }
  ]

  const modules = [
    {
      icon: UserPlus,
      title: 'Gestion des Utilisateurs',
      description: 'Importez vos locataires/salariés et gérez leurs accès',
      features: ['Import en masse', 'Codes d\'accès uniques', 'Permissions granulaires']
    },
    {
      icon: AlertCircle,
      title: 'Signalement de Pannes',
      description: 'Système de tickets pour la maintenance',
      features: ['Photos/vidéos', 'Suivi en temps réel', 'Historique complet']
    },
    {
      icon: MessageSquare,
      title: 'Communication Unifiée',
      description: 'Chat et notifications pour tous',
      features: ['Messages groupés', 'Notifications push', 'Annonces importantes']
    },
    {
      icon: Calendar,
      title: 'Gestion d\'Événements',
      description: 'Planifiez et partagez des événements',
      features: ['Calendrier partagé', 'RSVP', 'Rappels automatiques']
    },
    {
      icon: Shield,
      title: 'Sécurité & Accès',
      description: 'Contrôle d\'accès intelligent',
      features: ['QR codes', 'Logs d\'accès', 'Alertes sécurité']
    }
  ]

  const platineDefinition = {
    title: 'Le Concept du Projet Platine',
    subtitle: 'Une métaphore du Compagnonnage',
    description: 'Inspiré de la tradition séculaire des Compagnons du Tour de France, le projet Platine est votre "Chef d\'œuvre" - une réalisation qui démontre votre maîtrise complète des technologies et méthodologies apprises durant votre parcours.',
    keyPoints: [
      {
        icon: Trophy,
        title: 'Plus précieux que l\'or',
        text: 'Le platine est un métal plus rare et précieux que l\'or - visez l\'excellence'
      },
      {
        icon: Wrench,
        title: 'Transformer le savoir en création',
        text: 'Vos connaissances sont le "métal précieux" à transformer en "bijou" fonctionnel'
      },
      {
        icon: Users,
        title: 'Travail d\'équipe',
        text: 'Collaboration entre informaticiens et étudiants en marketing'
      },
      {
        icon: Target,
        title: 'Application réelle',
        text: 'Imaginer, concevoir et programmer une solution utile et utilisable'
      }
    ]
  }

  const projectImpact = [
    { label: 'Mois de développement', value: '4', icon: Clock },
    { label: 'Modules créés', value: '8+', icon: Layers },
    { label: 'Types d\'utilisateurs', value: '3', icon: Users },
    { label: 'Lignes de code', value: '20k+', icon: Code2 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      
      {/* Hero Section avec présentation du concept Platine */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 opacity-90">
          <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\\"60\\\" height=\\\"60\\\" viewBox=\\\"0 0 60 60\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"%3E%3Cg fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"%3E%3Cg fill=\\\"%23ffffff\\\" fill-opacity=\\\"0.05\\\"%3E%3Cpath d=\\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"`} />
        </div>

        <div className={`relative z-10 max-w-6xl mx-auto px-4 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-8">
            <Trophy className="text-yellow-400" size={20} />
            <span className="font-medium">Master 2 E-Services • 2024-2025</span>
            <Trophy className="text-yellow-400" size={20} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Projet{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-gray-400 to-slate-500 bg-clip-text text-transparent">
                Platine
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-4 bg-yellow-400/30 blur-xl" />
            </span>
          </h1>

          <p className="text-2xl md:text-3xl mb-4 font-light">
            Notre Chef d'Œuvre Technologique
          </p>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/90">
            Une application révolutionnaire de gestion de bâtiments qui transforme 
            la façon dont propriétaires, hôteliers et entreprises gèrent leurs espaces
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#concept" className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300">
              Découvrir le concept
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#solution" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/50 hover:bg-white/30 transform hover:-translate-y-1 transition-all duration-300">
              Notre solution
            </a>
          </div>
        </div>
      </section>

      {/* Section: Qu'est-ce que le Projet Platine ? */}
      <section id="concept" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Le Projet Platine, c'est quoi ?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {platineDefinition.subtitle}
            </p>
          </div>

          {/* Carte principale du concept */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Une Tradition Séculaire</h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {platineDefinition.description}
                </p>

                <div className="space-y-4">
                  {platineDefinition.keyPoints.map((point, index) => {
                    const Icon = point.icon
                    return (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="flex-shrink-0 mt-1">
                          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                            <Icon className="text-blue-600" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-1">{point.title}</h4>
                          <p className="text-sm text-slate-600">{point.text}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
                    La Colonne Vertébrale du M2
                  </h4>
                  <div className="space-y-3">
                    {['ECLE', 'GLIHM', 'TM', 'CAL', 'DAL', 'Anglais', 'Marketing'].map((ue, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                        <span className="font-medium text-slate-700">{ue}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800 text-center font-medium">
                      ⚠️ Dernière promotion 2025-2026 avant le nouveau parcours Génie Logiciel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques du projet */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectImpact.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Icon className="text-blue-500 mb-3" size={24} />
                  <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section: Notre Solution */}
      <section id="solution" className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Notre Solution Révolutionnaire
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Une application hybride qui s'adapte à chaque type de gestionnaire
            </p>
          </div>

          {/* Types d'utilisateurs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
              Choisissez votre profil, personnalisez vos modules
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {userTypes.map((type) => {
                const Icon = type.icon
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedUserType(type.id)}
                    className={`relative cursor-pointer group ${
                      selectedUserType === type.id ? 'scale-105' : ''
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${type.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                      selectedUserType === type.id 
                        ? 'border-blue-500 shadow-2xl' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}>
                      <div className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800 mb-3">{type.title}</h4>
                      <div className="space-y-2">
                        {type.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="text-green-500" size={16} />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Modules disponibles */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
              Modules Intelligents & Personnalisables
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => {
                const Icon = module.icon
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveModule(index)}
                    className="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 mb-2">{module.title}</h4>
                        <p className="text-sm text-slate-600 mb-3">{module.description}</p>
                        <div className="space-y-1">
                          {module.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                              <span className="text-xs text-slate-500">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Workflow */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
              <h4 className="text-lg font-bold text-slate-800 mb-4 text-center">
                💡 Comment ça fonctionne ?
              </h4>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { step: '1', text: 'L\'admin configure son organisation' },
                  { step: '2', text: 'Il sélectionne les modules nécessaires' },
                  { step: '3', text: 'Il importe ses utilisateurs (locataires/salariés)' },
                  { step: '4', text: 'Chacun accède aux fonctionnalités via l\'application mobile' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <p className="text-sm text-slate-700">{item.text}</p>
                    {index < 3 && (
                      <ChevronRight className="text-slate-400 ml-auto hidden md:block" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: L'équipe */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                L'Équipe Platine
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Deux développeurs passionnés, une vision commune
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-4 right-4">
                    <Star className="text-yellow-400" size={24} />
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4">
                    {member.github && (
                      <a
                        href={`https://github.com/${member.github}`}
                        className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} className="text-slate-700" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} className="text-slate-700" />
                      </a>
                    )}
                    <a
                      href="#"
                      className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                      <Mail size={20} className="text-slate-700" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      
    </div>
  )
}