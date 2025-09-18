


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-2">© 2025 Qcess - Tous droits réservés</p>
        <p className="text-gray-400 text-sm">
          Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
        </p>
      </div>
    </footer>
  )
}

