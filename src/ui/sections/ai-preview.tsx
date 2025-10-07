'use client'

import { Card, CardContent, CardHeader, CardTitle } from '../components/card'
import { Badge } from '../components/badge'
import { Button } from '../components/button'
import { 
  Bot, 
  Brain, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  BarChart3,
  FileText,
  Cpu
} from 'lucide-react'
import { useState, useEffect } from 'react'

export function AIPreviewSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])
  const aiFeatures = [
    {
      icon: Brain,
      title: 'Akıllı Görsel Analiz',
      description: 'Yapay zeka ile fotoğrafları analiz edin ve otomatik hasar tespiti yapın.',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Otomatik Rapor Oluşturma',
      description: 'Denetim verilerinizden otomatik olarak profesyonel raporlar oluşturun.',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Öngörüsel Analiz',
      description: 'Gelecekteki bakım ihtiyaçlarını öngörün ve planlama yapın.',
      color: 'purple'
    },
    {
      icon: Bot,
      title: 'AI Asistan',
      description: '7/24 çalışan AI asistan ile sorularınızı yanıtlayın ve rehberlik alın.',
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
    <section className="py-20 bg-gradient-to-br from-bondshield-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-bondshield-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200 to-bondshield-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="bondshield" className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Bot className="w-4 h-4 mr-2" />
            Yapay Zeka
            <Cpu className="w-3 h-3 ml-2 text-purple-500" />
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Yapay Zeka Destekli{' '}
            <span className="bg-gradient-to-r from-bondshield-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Denetim
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            BondShield AI, emlak denetim süreçlerinizi yapay zeka teknolojisi ile optimize eder. Akıllı görsel analiz, otomatik rapor oluşturma ve öngörüsel analiz özellikleri ile daha verimli ve doğru denetimler yapın.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm animate-fade-in-up ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ animationDelay: `${0.8 + index * 0.15}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-bondshield-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600 ml-2 font-medium">AI Destekli</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* AI Stats */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.4s' }}>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-bondshield-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              %95
            </div>
            <div className="text-gray-600 font-medium">
              Doğruluk Oranı
            </div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-bondshield-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              %70
            </div>
            <div className="text-gray-600 font-medium">
              Zaman Tasarrufu
            </div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-bondshield-600 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-600 font-medium">
              AI Asistan Desteği
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center animate-fade-in-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.6s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-bondshield-200/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI Gücünü Deneyimleyin
            </h3>
            <p className="text-gray-600 mb-6">
              Yapay zeka destekli denetim özelliklerini ücretsiz deneyin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" className="group">
                <Bot className="w-5 h-5 mr-2" />
                AI Demo Başlat
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="primary-outline" className="group">
                <Brain className="w-5 h-5 mr-2" />
                AI Özelliklerini İncele
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}