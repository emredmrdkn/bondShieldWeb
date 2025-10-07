'use client'

import { Card, CardContent, CardHeader, CardTitle } from '../components/card'
import { Badge } from '../components/badge'
import { Button } from '../components/button'
import { 
  Home, 
  Users, 
  Building2, 
  Search, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { useState, useEffect } from 'react'

export function PlatformSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])
  const platforms = [
    {
      icon: Home,
      title: 'Mülk Sahipleri',
      description: 'Mülklerinizi güvenli bir şekilde yönetin, denetim süreçlerini takip edin ve kiracılarınızla şeffaf iletişim kurun.',
      features: ['Mülk Yönetimi', 'Denetim Takibi', 'Kiracı İletişimi'],
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Kiracılar',
      description: 'Kiraladığınız mülkün durumunu kayıt altına alın, güvenli bir şekilde saklayın ve gerektiğinde paylaşın.',
      features: ['Durum Kayıt', 'Güvenli Saklama', 'Paylaşım'],
      color: 'green'
    },
    {
      icon: Building2,
      title: 'Emlak Acenteleri',
      description: 'Müşterilerinize profesyonel denetim hizmetleri sunun, süreçleri hızlandırın ve güvenilirlik kazanın.',
      features: ['Profesyonel Hizmet', 'Süreç Hızlandırma', 'Güvenilirlik'],
      color: 'purple'
    },
    {
      icon: Search,
      title: 'Denetçiler',
      description: 'Denetim süreçlerinizi sistematik hale getirin, raporlarınızı otomatik oluşturun ve iş verimliliğinizi artırın.',
      features: ['Sistematik Denetim', 'Otomatik Rapor', 'Verimlilik'],
      color: 'orange'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-bondshield-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="bondshield" className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Shield className="w-4 h-4 mr-2" />
            Platform
            <Sparkles className="w-3 h-3 ml-2 text-yellow-500" />
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Kapsamlı Emlak Denetim{' '}
            <span className="bg-gradient-to-r from-bondshield-600 to-blue-600 bg-clip-text text-transparent">
              Platformu
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            BondShield, emlak sektöründeki tüm paydaşlar için entegre çözümler sunar
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in-up ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${getColorClasses(platform.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-bondshield-600 transition-colors duration-300">
                    {platform.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 0.1}s` }}>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="primary-outline" 
                    size="sm" 
                    className="w-full group-hover:bg-bondshield-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 border-2"
                  >
                    Detayları Gör
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center animate-fade-in-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.6s' }}>
          <Button size="lg" variant="gradient" className="group">
            <Shield className="w-5 h-5 mr-2" />
            Tüm Özellikleri Keşfedin
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}