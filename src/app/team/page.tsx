import { teamMembers } from '../lib/projectData'
import { Github, Linkedin, User } from 'lucide-react'


export default function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Notre Équipe
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl p-6 text-center card-hover">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User size={40} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center gap-3">
                {member.github && (
                  <a href={`https://github.com/${member.github}`} className="text-gray-600 hover:text-black">
                    <Github size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={`https://linkedin.com/in/${member.linkedin}`} className="text-gray-600 hover:text-blue-600">
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}