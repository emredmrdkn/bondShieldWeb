'use client'

import { Card, CardContent, CardHeader, CardTitle } from '../components/card'
import { Badge } from '../components/badge'
import { Button } from '../components/button'
import { 
  Play, 
  Camera, 
  FileText, 
  Share2,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Clock
} from 'lucide-react'
import { useState, useEffect } from 'react'

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])
  const steps = [
    {
      number: '01',
      icon: Play,
      title: 'Denetim Başlat',
      description: 'Mülkünüzü seçin ve denetim tipini belirleyin. Oda listesini oluşturun ve denetim sürecini başlatın.',
      color: 'blue'
    },
    {
      number: '02',
      icon: Camera,
      title: 'Fotoğraf & Not Al',
      description: 'Her oda için detaylı fotoğraflar çekin, notlar alın ve durumları kaydedin. Offline çalışma desteği ile her yerde.',
      color: 'green'
    },
    {
      number: '03',
      icon: FileText,
      title: 'Rapor Oluştur',
      description: 'Denetim tamamlandığında profesyonel PDF raporu otomatik oluşturulur. Dijital imza ile güvenli hale getirilir.',
      color: 'purple'
    },
    {
      number: '04',
      icon: Share2,
      title: 'Paylaş & Yönet',
      description: 'Raporları güvenli bir şekilde paylaşın, arşivleyin ve gelecekteki denetimler için referans olarak kullanın.',
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-bondshield-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="bondshield" className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-4 h-4 mr-2" />
            Süreç
            <Clock className="w-3 h-3 ml-2 text-yellow-500" />
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Nasıl{' '}
            <span className="bg-gradient-to-r from-bondshield-600 to-green-600 bg-clip-text text-transparent">
              Çalışır?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            BondShield ile denetim sürecinizi 4 basit adımda tamamlayın
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-bondshield-300 via-bondshield-200 to-bondshield-100 transform translate-x-4 z-0 rounded-full" />
                )}
                
                <Card className={`relative z-10 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm animate-fade-in-up ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                  <CardHeader className="text-center pb-4">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 ${getColorClasses(step.color)} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-bondshield-600 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-bondshield-600 transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-600 ml-2 font-medium">Adım {step.number}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center animate-fade-in-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.6s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-bondshield-200/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hemen Başlayın
            </h3>
            <p className="text-gray-600 mb-6">
              Sadece 4 adımda profesyonel denetim süreçlerinizi dijitalleştirin
            </p>
            <Button size="lg" variant="gradient" className="group">
              <Play className="w-5 h-5 mr-2" />
              Deneme Başlat
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}