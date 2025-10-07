'use client'

import { Button } from '../components/button'
import { Badge } from '../components/badge'
import { 
  Download, 
  Play, 
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react'
import { useState, useEffect } from 'react'

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])
  const benefits = [
    '14 gün ücretsiz deneme',
    'Kurulum desteği',
    '7/24 müşteri hizmetleri',
    'Güvenli veri saklama'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-bondshield-600 via-bondshield-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <Badge variant="bondshield" className="mb-6 bg-white/20 text-white border-white/30 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Shield className="w-4 h-4 mr-2" />
            Hemen Başlayın
            <Star className="w-3 h-3 ml-2 text-yellow-300" />
          </Badge>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-heading mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Emlak Denetim Süreçlerinizi{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Bugün Dijitalleştirin
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            BondShield ile geleneksel kağıt tabanlı süreçleri modern dijital çözümlerle değiştirin. Güvenli, şeffaf ve verimli denetim süreçleri için hemen başlayın.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 group hover:scale-105 transition-transform duration-300" style={{ transitionDelay: `${index * 0.1}s` }}>
                <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button 
              size="xl" 
              variant="gradient" 
              className="group bg-white text-bondshield-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              App Store'dan İndir
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="xl" 
              variant="primary-outline" 
              className="group border-2 border-white text-white hover:bg-white hover:text-bondshield-600 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Demo Talep Et
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">Güvenli & Şifreli</span>
            </div>
            <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">AI Destekli</span>
            </div>
            <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">%99.9 Uptime</span>
            </div>
            <div className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">Hızlı Kurulum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}