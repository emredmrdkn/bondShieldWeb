import { HeroSection } from '../../src/ui/sections/hero'
import { PlatformSection } from '../../src/ui/sections/platform'
import { FeaturesSection } from '../../src/ui/sections/features'
import { HowItWorksSection } from '../../src/ui/sections/how-it-works'
import { AIPreviewSection } from '../../src/ui/sections/ai-preview'
import { PricingPreviewSection } from '../../src/ui/sections/pricing-preview'
import { CTASection } from '../../src/ui/sections/cta'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PlatformSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AIPreviewSection />
      <PricingPreviewSection />
      <CTASection />
    </div>
  )
}
