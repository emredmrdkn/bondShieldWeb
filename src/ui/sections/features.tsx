'use client'

import { Card, CardContent, CardHeader, CardTitle } from '../components/card'
import { Badge } from '../components/badge'
import { Button } from '../components/button'
import { 
  Camera, 
  FileText, 
  Shield, 
  MapPin, 
  WifiOff, 
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react'
import { useState, useEffect } from 'react'

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])
  const features = [
    {
      icon: Camera,
      title: 'Fotoğraf & Video Kayıt',
      description: 'Denetim sırasında yüksek kaliteli fotoğraf ve video kayıtları alın. Otomatik metadata ekleme ve güvenli saklama.',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'PDF Rapor Oluşturma',
      description: 'Profesyonel denetim raporları otomatik olarak oluşturulur. Dijital imza ve güvenlik özellikleri ile korunur.',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Güvenli Kimlik Doğrulama',
      description: 'Biyometrik giriş, Face ID/Touch ID desteği ve AES-256 şifreleme ile maksimum güvenlik sağlanır.',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Konum Tabanlı Denetim',
      description: 'GPS koordinatları ile mülk konumlarını doğrulayın. Mesafe hesaplama ve harita entegrasyonu.',
      color: 'orange'
    },
    {
      icon: WifiOff,
      title: 'Offline Çalışma',
      description: 'İnternet bağlantısı olmadan da denetim yapabilirsiniz. Veriler otomatik olarak senkronize edilir.',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Çoklu Kullanıcı Desteği',
      description: 'Mülk sahipleri, kiracılar ve denetçiler için ayrı rollere sahip kullanıcı yönetimi.',
      color: 'indigo'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-bondshield-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-bondshield-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-100 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="bondshield" className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-4 h-4 mr-2" />
            Özellikler
            <Zap className="w-3 h-3 ml-2 text-yellow-500" />
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Güçlü{' '}
            <span className="bg-gradient-to-r from-bondshield-600 to-purple-600 bg-clip-text text-transparent">
              Özellikler
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            BondShield'in kapsamlı özellik seti ile emlak denetim süreçlerinizi optimize edin
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm animate-fade-in-up ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${0.8 + index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-bondshield-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="primary-outline" 
                    size="sm" 
                    className="group-hover:bg-bondshield-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 border-2 w-full"
                  >
                    Daha Fazla Bilgi
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center animate-fade-in-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.4s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-bondshield-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tüm Özellikleri Deneyimleyin
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              14 gün ücretsiz deneme ile BondShield'in tüm güçlü özelliklerini keşfedin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" className="group">
                <Zap className="w-5 h-5 mr-2" />
                Ücretsiz Deneme Başlat
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="primary-outline" className="group">
                <Sparkles className="w-5 h-5 mr-2" />
                Demo Talep Et
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}