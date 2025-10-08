export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BondShield
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Modern Emlak Denetim ve Kefalet Yönetim Platformu
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Özellikler</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                AI Destekli Chat Sistemi
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Çoklu Dil Desteği (TR/EN)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Modern ve Responsive Tasarım
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                SEO Optimizasyonu
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
