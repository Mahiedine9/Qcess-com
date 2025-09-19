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
  Send,
  Heart,
  Code2,
  Sparkles,
  ArrowUp,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Briefcase,
  Home,
  FileText,
  MessageSquare,
  ChevronRight,
  Globe,
  Award,
  Zap,
  Star,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function ModernFooter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  const navigation = {
    projet: [
      { name: 'Présentation', href: '#project', icon: Home },
      { name: 'Timeline', href: '#timeline', icon: Calendar },
      { name: 'État Actuel', href: '#status', icon: Clock },
      { name: 'Équipe', href: '#team', icon: Users }
    ],
    ressources: [
      { name: 'Documentation', href: '/documents', icon: FileText },
      { name: 'Maquettes', href: '/maquettes', icon: BookOpen },
      { name: 'Architecture', href: '/architecture', icon: Briefcase },
      { name: 'API Docs', href: '/api', icon: Code2 }
    ],
    contact: [
      { name: 'Support', href: '/support', icon: MessageSquare },
      { name: 'FAQ', href: '/faq', icon: ExternalLink },
      { name: 'Blog', href: '/blog', icon: Globe },
      { name: 'Actualités', href: '/news', icon: Award }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' }
  ]

  const stats = [
    { label: 'Commits', value: '1.2k+', icon: Github },
    { label: 'Contributeurs', value: '5', icon: Users },
    { label: 'Stars', value: '48', icon: Star },
    { label: 'Forks', value: '12', icon: Code2 }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />

      {/* Newsletter Section */}
      <div className="relative border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <Sparkles className="mr-2 text-yellow-400 animate-pulse" />
                  Restez informé du projet
                </h3>
                <p className="text-slate-300">
                  Recevez les dernières mises à jour et nouvelles fonctionnalités
                </p>
              </div>
              
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre.email@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 placeholder-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                  >
                    {isSubscribed ? (
                      <>
                        <CheckCircle size={20} />
                        Inscrit!
                      </>
                    ) : (
                      <>
                        S'inscrire
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
                {isSubscribed && (
                  <p className="absolute -bottom-6 left-0 text-green-400 text-sm animate-fade-in">
                    ✨ Merci pour votre inscription !
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
                <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg">
                  <Code2 size={28} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Projet Platine
                </h2>
                <p className="text-xs text-slate-400">M2 E-Services 2024-2025</p>
              </div>
            </Link>
            
            <p className="text-slate-300 mb-6 max-w-sm">
              Application révolutionnaire de gestion de bâtiments, alliant sécurité, 
              communication et services pratiques dans une plateforme unifiée.
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

          {/* Navigation Columns */}
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center">
              <BookOpen size={16} className="mr-2 text-cyan-400" />
              Ressources
            </h3>
            <ul className="space-y-3">
              {navigation.ressources.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="group flex items-center text-slate-300 hover:text-white transition-colors"
                    >
                      <Icon size={16} className="mr-2 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      <span>{item.name}</span>
                      <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center">
              <MessageSquare size={16} className="mr-2 text-green-400" />
              Support
            </h3>
            <ul className="space-y-3">
              {navigation.contact.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="group flex items-center text-slate-300 hover:text-white transition-colors"
                    >
                      <Icon size={16} className="mr-2 text-slate-500 group-hover:text-green-400 transition-colors" />
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
            <a href="mailto:contact@projetplatine.fr" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Mail size={16} className="text-blue-400" />
              contact@projetplatine.fr
            </a>
            <a href="tel:+33123456789" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Phone size={16} className="text-green-400" />
              +33 1 23 45 67 89
            </a>
            <span className="flex items-center gap-2 text-slate-400">
              <MapPin size={16} className="text-red-400" />
              Université Lille, France
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

      {/* Animated gradient line at the very bottom */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient-x" />

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  )
}