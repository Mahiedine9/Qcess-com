'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Eye, Download, Calendar } from 'lucide-react'

interface Maquette {
  id: string
  title: string
  description: string
  date: string
  imageUrl: string
  figmaUrl?: string
}

const maquettes: Maquette[] = [
  {
    id: '1',
    title: 'Page d\'accueil - V1',
    description: 'Première version de la page d\'accueil avec navigation',
    date: '2025-01-15',
    imageUrl: '/maquette-home.png',
    figmaUrl: 'https://figma.com/...'
  },
  {
    id: '2',
    title: 'Dashboard utilisateur',
    description: 'Interface de gestion pour les utilisateurs connectés',
    date: '2025-01-18',
    imageUrl: '/maquette-dashboard.png',
    figmaUrl: 'https://figma.com/...'
  },
  {
    id: '3',
    title: 'Page de connexion',
    description: 'Formulaire de connexion et inscription',
    date: '2025-01-20',
    imageUrl: '/maquette-login.png'
  }
]

export default function MaquettesPage() {
  const [selectedMaquette, setSelectedMaquette] = useState<Maquette | null>(null)

  return (
    <div className="min-h-screen pt-20 px-4 pb-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Maquettes du Projet
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {maquettes.map((maquette) => (
            <div key={maquette.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gray-200 relative group">
                {/* Placeholder pour l'image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Image: {maquette.title}</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedMaquette(maquette)}
                    className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <Eye size={20} /> Voir
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{maquette.title}</h3>
                <p className="text-gray-600 mb-3">{maquette.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(maquette.date).toLocaleDateString('fr-FR')}
                  </span>
                  {maquette.figmaUrl && (
                    <a href={maquette.figmaUrl} className="text-blue-500 hover:underline">
                      Voir sur Figma
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour afficher la maquette */}
        {selectedMaquette && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
               onClick={() => setSelectedMaquette(null)}>
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                 onClick={(e) => e.stopPropagation()}>
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">{selectedMaquette.title}</h2>
                <p className="text-gray-600 mt-2">{selectedMaquette.description}</p>
              </div>
              <div className="p-6">
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <span className="text-gray-400">Aperçu: {selectedMaquette.title}</span>
                </div>
              </div>
              <div className="p-6 border-t flex justify-end gap-4">
                <button 
                  onClick={() => setSelectedMaquette(null)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Fermer
                </button>
                {selectedMaquette.figmaUrl && (
                  <a 
                    href={selectedMaquette.figmaUrl}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Ouvrir dans Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}