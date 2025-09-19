// components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'


import Link from 'next/link'
import { 
  Menu, 
  X, 
  Home, 
  Clock, 
  Users, 
  Palette, 
  FileText,
  Github,
  Sparkles,
  ChevronRight,
  Code2,
  Rocket
} from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Détection de la section active
      const sections = ['home', 'status', 'timeline', 'team']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Effet de suivi de la souris pour le gradient
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const navItems = [
    { href: '/status', label: 'État Actuel', icon: Clock },
    { href: '/timeline', label: 'Timeline', icon: Rocket },
    { href: '/team', label: 'Équipe', icon: Users },
    { href: '/maquettes', label: 'Maquettes', icon: Palette },
    { href: '/documents', label: 'Documents', icon: FileText },
  ]

  return (
    <>
      {/* Navbar principale */}
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-500
            bg-blue-500/90 dark:bg-blue-700/90 backdrop-blur-xl shadow-lg`}
      >
        {/* Effet de gradient qui suit la souris */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo animé */}
            <Link href="/" className="group flex items-center space-x-3 relative">
              <div className="relative">
                <img src="./logo_Qcess.png" alt="Logo Qcess" className="w-16 h-14 rounded-lg mt-2" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                  Qcess
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Semaine 3 • En cours
                </span>
              </div>
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse absolute -top-1 -right-1" />
            </Link>
            
            {/* Navigation desktop avec indicateurs */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                const isExternal = item.href.startsWith('/')
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive && !isExternal
                        ? 'text-white' 
                        : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400'
                    }`}
                  >
                    {/* Background animé pour l'item actif */}
                    {isActive && !isExternal && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl animate-gradient" />
                    )}
                    
                    {/* Effet de hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                    
                    <div className="relative flex items-center space-x-2">
                      <Icon size={18} className={`${isActive && !isExternal ? 'animate-bounce' : ''}`} />
                      <span className="font-medium">{item.label}</span>
                      {isExternal && (
                        <ChevronRight size={14} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
                      )}
                    </div>

                    {/* Indicateur de page active */}
                    {isActive && !isExternal && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-ping" />
                    )}
                  </Link>
                )
              })}

              {/* Bouton GitHub avec animation */}
              <a
                href="https://github.com/Mahiedine9/Qcess-App.git"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-70" />
                <div className="relative bg-slate-800 dark:bg-slate-700 text-white p-2.5 rounded-full transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Github size={20} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse border-2 border-white" />
              </a>
            </div>

            {/* Bouton menu mobile avec animation */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative group p-2"
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-slate-800 dark:bg-sky-400 transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 top-2.5' : 'top-1'
                }`} />
                <span className={`absolute block h-0.5 w-6 bg-slate-800 dark:bg-sky-400 transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'top-2.5'
                }`} />
                <span className={`absolute block h-0.5 w-6 bg-slate-800 dark:bg-sky-400 transform transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 top-2.5' : 'top-4'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Barre de progression en bas de la navbar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
            style={{ width: '35%' }}
          />
        </div>
      </nav>

      {/* Menu mobile avec animations */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay avec effet de blur */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Panel mobile */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 shadow-2xl transform transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header du menu mobile */}
          <div className="p-6 border-b border-blue-100 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-2 rounded-lg">
                  <Code2 size={20} />
                </div>
                <span className="font-bold text-lg text-slate-800 dark:text-white">Menu</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-blue-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X size={20} className="text-slate-600 dark:text-slate-300" />
              </button>
            </div>
          </div>

          {/* Navigation items mobile */}
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideInRight 0.5s ease-out forwards' : ''
                  }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                  <span className="font-medium text-slate-800 dark:text-white">{item.label}</span>
                  <ChevronRight size={16} className="ml-auto text-slate-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              )
            })}
          </div>

          {/* Footer du menu mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">v1.0.0</span>
              <a
                href="https://github.com/votre-projet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white p-2 rounded-lg hover:scale-110 transition-transform"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour les animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  )
}