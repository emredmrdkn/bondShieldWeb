'use client'

import { Button } from '../components/button'
import { Badge } from '../components/badge'
import { Shield, Download, Play, Users, CheckCircle, TrendingUp, ArrowRight, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-bondshield-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-bondshield-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <Badge variant="bondshield" className="inline-flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Shield className="w-4 h-4" />
                BondShield ile Dijitalleşin
                <Star className="w-3 h-3 text-yellow-500" />
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-heading leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Emlak Denetim Süreçlerinizi{' '}
                <span className="bg-gradient-to-r from-bondshield-600 to-blue-600 bg-clip-text text-transparent">
                  Tamamen Dijitalleştirin
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Mülk sahipleri, kiracılar, emlak acenteleri ve denetçiler için kapsamlı bir denetim ve bond yönetimi platformudur.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button size="xl" variant="gradient" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                App Store'dan İndir
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="primary-outline" className="group hover:scale-105 transition-all duration-300 border-2 hover:bg-bondshield-50">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Demo İzle
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Güvenli & Şifreli</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>ISO 27001 Sertifikalı</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>4.9/5 Müşteri Puanı</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-bondshield-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50,000+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Tamamlanan Denetim
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-bondshield-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  10,000+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Aktif Kullanıcı
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-bondshield-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  %99.5
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Müşteri Memnuniyeti
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative z-10">
              <div className="w-full h-96 bg-gradient-to-br from-bondshield-100 via-bondshield-50 to-blue-100 rounded-3xl flex items-center justify-center shadow-2xl border border-bondshield-200/50">
                <div className="text-center">
                  <div className="relative">
                    <Shield className="w-24 h-24 text-bondshield-600 mx-auto mb-4 animate-bounce-slow" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-bondshield-800 mb-2">BondShield</h3>
                  <p className="text-bondshield-700 font-medium">Emlak Denetim Platformu</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="w-2 h-2 bg-bondshield-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-bondshield-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-bondshield-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 -left-4 bg-white rounded-xl shadow-lg p-4 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Güvenli</div>
                    <div className="text-sm text-gray-600">AES-256 şifreleme</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-40 -right-4 bg-white rounded-xl shadow-lg p-4 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mobil</div>
                    <div className="text-sm text-gray-600">Her yerde erişim</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-4 bg-white rounded-xl shadow-lg p-4 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Verimli</div>
                    <div className="text-sm text-gray-600">%70 zaman tasarrufu</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-40 -right-4 bg-white rounded-xl shadow-lg p-4 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">AI Destekli</div>
                    <div className="text-sm text-gray-600">Akıllı analiz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
