'use client'

import { timelineData } from '../lib/projectData'
import { Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react'

export default function Timeline() {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={24} />
      case 'in-progress':
        return <Clock className="text-blue-500" size={24} />
      default:
        return <AlertCircle className="text-gray-400" size={24} />
    }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed':
        return 'border-green-500 bg-green-50'
      case 'in-progress':
        return 'border-blue-500 bg-blue-50 animate-pulse'
      default:
        return 'border-gray-300 bg-gray-50'
    }
  }

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Timeline du Projet
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
          
          {timelineData.map((entry, index) => (
            <div key={entry.id} className="relative flex items-start mb-12">
              <div className="absolute left-8 -translate-x-1/2 bg-white p-2">
                {getStatusIcon(entry.status)}
              </div>
              
              <div className={`ml-20 p-6 rounded-xl border-2 flex-1 card-hover ${getStatusColor(entry.status)}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Semaine {entry.week} - {entry.title}</h3>
                  <span className="text-sm text-gray-600 flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {new Date(entry.date).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{entry.description}</p>
                
                {entry.deliverables && (
                  <div className="mb-3">
                    <span className="font-semibold">Livrables:</span>
                    <ul className="mt-1 space-y-1">
                      {entry.deliverables.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 ml-4">• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {entry.tags && (
                  <div className="flex gap-2 flex-wrap">
                    {entry.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/50 text-gray-700">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}