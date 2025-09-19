import { FileText, Download, Eye } from 'lucide-react'

interface Document {
  id: string
  title: string
  type: string
  date: string
  size: string
  downloadUrl: string
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Cahier des charges',
    type: 'PDF',
    date: '2025-01-06',
    size: '2.4 MB',
    downloadUrl: '/docs/cahier-des-charges.pdf'
  },
  {
    id: '2',
    title: 'Rapport d\'analyse',
    type: 'PDF',
    date: '2025-01-13',
    size: '1.8 MB',
    downloadUrl: '/docs/rapport-analyse.pdf'
  },
  {
    id: '3',
    title: 'Planning prévisionnel',
    type: 'Excel',
    date: '2025-01-08',
    size: '560 KB',
    downloadUrl: '/docs/planning.xlsx'
  },
  {
    id: '4',
    title: 'Spécifications techniques',
    type: 'PDF',
    date: '2025-01-15',
    size: '3.2 MB',
    downloadUrl: '/docs/specs-techniques.pdf'
  }
]

export default function DocumentsPage() {
  return (
    <div className="min-h-screen pt-20 px-4 pb-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Documents du Projet
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Document</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Taille</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <FileText className="mr-3 text-gray-400" size={20} />
                        <span className="font-medium">{doc.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                        {doc.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {new Date(doc.date).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{doc.size}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Voir">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Télécharger">
                          <Download size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

       
      </div>
    </div>
  )
}