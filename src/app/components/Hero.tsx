'use client'

import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { 
  Building2, 
  Shield, 
  MessageSquare, 
  Smartphone, 
  Globe, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Users,
  Lock,
  Bell,
  Home,
  Zap,
  Code2,
  Layers,
  Target,
  TrendingUp,
} from 'lucide-react'

export default function ProjectPresentation() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('project')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const features = [
    {
      icon: Building2,
      title: 'Gestion Multi-Bâtiments',
      description: 'Résidences, entreprises, hôtels',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Sécurité Avancée',
      description: 'Contrôle d\'accès intelligent',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      title: 'Communication Unifiée',
      description: 'Chat et notifications en temps réel',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Smartphone,
      title: 'Application Hybride',
      description: 'Mobile & Web responsive',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const techStack = [
    { name: 'Next.js', icon: '⚛️' },
    { name: 'Java Spring Boot ', icon: '🔷' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Flutter', icon: '🐳' },
    { name: 'AWS', icon: '☁️' }
  ]

  const benefits = [
    'Mise en pratique des compétences Licence & Master',
    'Travail en équipe sur un projet réel',
    'Innovation technologique appliquée',
    'Impact concret sur la gestion immobilière'
  ]

  return (
    <section id="project" className="relative py-32 overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\\"60\\\" height=\\\"60\\\" viewBox=\\\"0 0 60 60\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"%3E%3Cg fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"%3E%3Cg fill=\\\"%239C92AC\\\" fill-opacity=\\\"0.08\\\"%3E%3Cpath d=\\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`} />
        
        {/* Bulles flottantes animées */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300/15 rounded-full blur-2xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec badge animé */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" />
            M2 E-Services - Projet d'Excellence
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Projet{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-gray-400 to-slate-500 bg-clip-text text-transparent">
                Platine
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-300/30 blur-md" />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Une application révolutionnaire qui transforme la gestion de bâtiments 
            en une expérience moderne et intuitive
          </p>
        </div>

        {/* Cartes de fonctionnalités avec hover 3D */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section principale avec glassmorphism */}
        <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-xl" />
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contenu texte */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Zap className="mr-3 text-yellow-300" />
                  Innovation & Excellence
                </h3>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="ml-3 text-white/90">{benefit}</p>
                    </div>
                  ))}
                </div>
                <NextLink href="/presentation">
                  <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105">
                    Découvrir le projet
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </NextLink>
              </div>

              {/* Visualisation Tech Stack */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-2xl animate-pulse" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-6 text-center">Stack Technique</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="group flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                      >
                        <span className="text-2xl mb-2 group-hover:animate-bounce">{tech.icon}</span>
                        <span className="text-xs text-white/80 font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats en bas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">4+</div>
                <div className="text-sm text-white/70">Mois de développement</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">2</div>
                <div className="text-sm text-white/70">Membres d'équipe</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">3</div>
                <div className="text-sm text-white/70">Types de bâtiments</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">∞</div>
                <div className="text-sm text-white/70">Possibilités</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action bottom */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white/80 mb-6">
            Découvrez comment nous révolutionnons la gestion immobilière
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/timeline" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
              <Layers size={20} />
              Timeline
            </a>
            <a href="/team" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
              <Users size={20} />
              L'équipe
            </a>
            <a href="/documents" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
              <Target size={20} />
              Objectifs
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}