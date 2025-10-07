'use client'

import { Card, CardContent, CardHeader, CardTitle } from '../components/card'
import { Badge } from '../components/badge'
import { Button } from '../components/button'
import { 
  Check, 
  Star, 
  ArrowRight,
  Crown,
  Zap,
  Building2,
  Sparkles
} from 'lucide-react'
import { useState, useEffect } from 'react'

export function PricingPreviewSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])
  const plans = [
    {
      name: 'Temel',
      description: 'Bireysel kullanıcılar için',
      price: '0',
      period: '/ay',
      features: [
        '5 denetim/ay',
        'Temel rapor özellikleri',
        'Fotoğraf kayıt',
        'Email desteği'
      ],
      cta: 'Ücretsiz Başla',
      popular: false,
      icon: Star,
      color: 'gray'
    },
    {
      name: 'Profesyonel',
      description: 'Küçük işletmeler için',
      price: '99',
      period: '/ay',
      features: [
        'Sınırsız denetim',
        'Gelişmiş rapor özellikleri',
        'Video kayıt',
        'Konum entegrasyonu',
        'Öncelikli destek'
      ],
      cta: '14 Gün Ücretsiz Dene',
      popular: true,
      icon: Zap,
      color: 'blue'
    },
    {
      name: 'Kurumsal',
      description: 'Büyük organizasyonlar için',
      price: '299',
      period: '/ay',
      features: [
        'Çoklu kullanıcı',
        'API erişimi',
        'Özel entegrasyonlar',
        '7/24 destek',
        'Özel eğitim'
      ],
      cta: 'İletişime Geç',
      popular: false,
      icon: Building2,
      color: 'purple'
    }
  ]

  const getColorClasses = (color: string, isPopular: boolean) => {
    if (isPopular) {
      return 'bg-bondshield-600 text-white'
    }
    
    const colors = {
      gray: 'bg-gray-100 text-gray-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600'
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bondshield-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="bondshield" className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Crown className="w-4 h-4 mr-2" />
            Fiyatlandırma
            <Sparkles className="w-3 h-3 ml-2 text-yellow-500" />
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="bg-gradient-to-r from-bondshield-600 to-purple-600 bg-clip-text text-transparent">
              Fiyatlandırma
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            İhtiyaçlarınıza uygun planı seçin. Tüm planlar 14 gün ücretsiz deneme içerir.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card 
                key={index} 
                className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm animate-fade-in-up ${
                  plan.popular ? 'ring-2 ring-bondshield-600 scale-105 lg:scale-110' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge variant="bondshield" className="px-4 py-2 shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      En Popüler
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 pt-8">
                  <div className={`w-16 h-16 ${getColorClasses(plan.color, plan.popular)} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-bondshield-600 transition-colors duration-300">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price === '0' ? 'Ücretsiz' : `₺${plan.price}`}
                    </span>
                    {plan.price !== '0' && (
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 0.1}s` }}>
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-bondshield-600' : 'text-green-500'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={plan.popular ? 'gradient' : 'primary-outline'}
                    size="lg"
                    className="w-full group-hover:scale-105 transition-all duration-300 border-2"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center animate-fade-in-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1.4s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-bondshield-200/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hangi Plan Size Uygun?
            </h3>
            <p className="text-gray-600 mb-6">
              Ücretsiz deneme ile tüm özellikleri test edin, sonra karar verin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" className="group">
                <Crown className="w-5 h-5 mr-2" />
                Ücretsiz Deneme Başlat
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="primary-outline" className="group">
                <Zap className="w-5 h-5 mr-2" />
                Planları Karşılaştır
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}