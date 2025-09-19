'use client'

import { useState, useEffect } from 'react'
import { 
  Github, 
  Linkedin, 
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  Code2,
  ArrowUp,
  Calendar,
  Clock,
  Users,
  Home,
  ChevronRight,
  Zap,
  Star,
} from 'lucide-react'
import Link from 'next/link'

export default function ModernFooter() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigation = {
    projet: [
      { name: 'Présentation', href: '#project', icon: Home },
      { name: 'Timeline', href: '#timeline', icon: Calendar },
      { name: 'État Actuel', href: '#status', icon: Clock },
      { name: 'Équipe', href: '#team', icon: Users }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Mahiedine9/Qcess-App.git', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
  ]

  const stats = [
    { label: 'Commits', value: '1.2k+', icon: Github },
    { label: 'Contributeurs', value: '2', icon: Users },
    { label: 'Stars', value: '48', icon: Star },
    { label: 'Forks', value: '4', icon: Code2 }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img src="./logo_Qcess.png" alt="Logo Qcess" className="w-16 h-14 rounded-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Projet Platine
                </h2>
                <p className="text-xs text-slate-400">M2 E-Services 2024-2025</p>
              </div>
            </Link>
            
            <p className="text-slate-300 mb-6 max-w-sm">
              Application innovante de gestion de bâtiments, regroupant sécurité, 
              communication et services pratiques dans une seule plateforme.
            </p>

            {/* GitHub Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-blue-400" />
                      <div>
                        <div className="text-sm font-semibold">{stat.value}</div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center">
              <Zap size={16} className="mr-2 text-blue-400" />
              Projet
            </h3>
            <ul className="space-y-3">
              {navigation.projet.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="group flex items-center text-slate-300 hover:text-white transition-colors"
                    >
                      <Icon size={16} className="mr-2 text-slate-500 group-hover:text-blue-400 transition-colors" />
                      <span>{item.name}</span>
                      <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-slate-700/50 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:qcess2025@outlook.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Mail size={16} className="text-blue-400" />
              qcess2025@outlook.com
            </a>
            <a href="tel:+33755345979" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Phone size={16} className="text-green-400" />
              +33 7 55 34 59 79
            </a>
            <span className="flex items-center gap-2 text-slate-400">
              <MapPin size={16} className="text-red-400" />
              Université de Lille, France
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>© 2025 Projet Platine</span>
              <span className="text-slate-600">•</span>
              <span>Fait avec</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>par l'équipe M2 E-Services</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <Icon size={18} />
                    {hoveredSocial === social.name && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-700 px-2 py-1 rounded whitespace-nowrap">
                        {social.name}
                      </span>
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg hover:shadow-blue-500/25 transform transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  )
}
