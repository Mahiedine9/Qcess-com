'use client'

import { useState } from 'react'
import { teamMembers } from '../lib/projectData'
import { 
  Github, 
  Linkedin, 
  Mail, 
  User, 
  Star, 
  Sparkles,
  Code2,
  Palette,
  Database,
  Globe,
  Rocket,
  Brain,
  Coffee,
  Heart
} from 'lucide-react'

// Mapping des compétences vers des icônes
const skillIcons: { [key: string]: any } = {
  'React': Code2,
  'React Native': Code2,
  'TypeScript': Code2,
  'Node.js': Globe,
  'PostgreSQL': Database,
  'Design': Palette,
  'Docker': Database,
  'UI/UX': Palette,
  'Architecture': Brain,
  'Full-Stack': Rocket
}

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  // On donne des valeurs fixes réalistes
  const enhancedMembers = teamMembers.map((member, i) => ({
    ...member,
    avatar: member.name.includes('Alice') || member.name.includes('Sarah') ? '👩‍💻' : '👨‍💻',
    bio: 'Passionné par l\'innovation et les nouvelles technologies',
    experience: i % 2 === 0 ? '2+ ans' : '3+ ans',
    projects: 5 + i, // entre 5 et 8 projets
    commits: 120 + i * 40, // entre 120 et 240 commits
    coffees: 200 + i * 50, // entre 200 et 350 cafés
    skills: member.role.includes('Design') 
      ? ['Figma', 'UI/UX', 'Prototyping', 'Design Systems']
      : member.role.includes('Backend')
      ? ['Node.js', 'PostgreSQL', 'Docker', 'API REST']
      : member.role.includes('Chef')
      ? ['Management', 'Agile', 'Scrum', 'Leadership']
      : ['React Native', 'TypeScript', 'Architecture', 'Full-Stack']
  }))

  return (
    <section id="team" className="relative py-24 px-4 overflow-hidden">
      {/* Background animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <Sparkles className="text-blue-600 animate-pulse" size={20} />
            <span className="text-sm font-semibold text-blue-700">Dream Team</span>
            <Sparkles className="text-blue-600 animate-pulse" size={20} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Notre Équipe
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des talents passionnés unis par une vision commune : créer des solutions exceptionnelles
          </p>
        </div>

        {/* Grille des membres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 justify-center">
          {enhancedMembers.map((member) => (
            <div
              key={member.id}
              className="group relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-28 h-28 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse opacity-30" />
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      {member.avatar ? (
                        <span className="text-5xl">{member.avatar}</span>
                      ) : (
                        <User size={40} className="text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Infos */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-500 italic">"{member.bio}"</p>
                </div>

                {/* Stats mini → fixes et stables */}
                <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-slate-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-700">{member.projects}</div>
                    <div className="text-xs text-slate-400">Projets</div>
                  </div>
                  <div className="text-center border-x border-slate-100">
                    <div className="text-lg font-bold text-slate-700">{member.commits}</div>
                    <div className="text-xs text-slate-400">Commits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-700">{member.coffees}</div>
                    <div className="text-xs text-slate-400">☕ Cafés</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills?.slice(0, 3).map((skill, i) => {
                    const SkillIcon = skillIcons[skill] || Code2
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700"
                      >
                        <SkillIcon size={12} />
                        {skill}
                      </span>
                    )
                  })}
                  {member.skills && member.skills.length > 3 && (
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-500 rounded-full text-xs">
                      +{member.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      className="p-2.5 bg-slate-100 hover:bg-slate-800 rounded-xl transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} className="text-slate-600 hover:text-white transition-colors" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="p-2.5 bg-slate-100 hover:bg-blue-600 rounded-xl transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} className="text-slate-600 hover:text-white transition-colors" />
                    </a>
                  )}
                  <button className="p-2.5 bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-xl transition-all duration-300">
                    <Mail size={18} className="text-slate-600 hover:text-white transition-colors" />
                  </button>
                </div>

                {/* Hover overlay */}
                {hoveredMember === member.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none animate-fade-in" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats globales fixes */}
        <div className="mt-20 p-8 bg-white rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
            Ensemble, nous créons l'excellence
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code2, value: '12k+', label: 'Lignes de code', color: 'from-blue-500 to-cyan-500' },
              { icon: Coffee, value: '800+', label: 'Tasses de café', color: 'from-cyan-500 to-teal-500' },
              { icon: Rocket, value: '3', label: 'Sprints complétés', color: 'from-teal-500 to-green-500' },
              { icon: Heart, value: '∞', label: 'Passion', color: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
