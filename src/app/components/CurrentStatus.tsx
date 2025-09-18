'use client'

import { currentStatus } from '../lib/projectData'
import { CheckCircle, Clock, ArrowRight } from 'lucide-react'

export default function CurrentStatus() {
  return (
    <section id="status" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          État Actuel du Projet
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Phase actuelle: {currentStatus.phase}</span>
              <span className="text-2xl font-bold text-purple-600">{currentStatus.completion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
                style={{ width: `${currentStatus.completion}%` }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 text-blue-500" /> Tâches en cours
              </h3>
              <ul className="space-y-2">
                {currentStatus.currentTasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" size={20} />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <ArrowRight className="mr-2 text-green-500" /> Prochaines étapes
              </h3>
              <ul className="space-y-2">
                {currentStatus.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}