import { Inter, Space_Grotesk } from 'next/font/google'
// import { NextIntlClientProvider } from 'next-intl'
// import { getMessages } from 'next-intl/server'
import { SkipLinks } from '../src/components/accessibility/SkipLinks'
import { Announcer } from '../src/components/accessibility/Announcer'
import ConsentManager from '../src/components/analytics/ConsentManager'
import { PlausibleAnalytics } from '../src/components/analytics/PlausibleAnalytics'
import Providers from './providers'
// AIChat removed for MVP - will be re-added in Sprint 2
import './globals.css'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'BondShield - Emlak Denetim ve Bond Yönetimi Platformu',
  description: 'Emlak denetim süreçlerinizi dijitalleştirin. Mülk sahipleri, kiracılar, emlak acenteleri ve denetçiler için kapsamlı çözümler.',
  keywords: 'emlak denetim, bond yönetimi, mülk denetimi, dijital raporlama, emlak teknolojisi',
  authors: [{ name: 'BondShield Team' }],
  creator: 'BondShield',
  publisher: 'BondShield',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bondshield.app'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://bondshield.app',
    title: 'BondShield - Emlak Denetim ve Bond Yönetimi Platformu',
    description: 'Emlak denetim süreçlerinizi dijitalleştirin. Güvenli, şeffaf ve verimli denetim platformu.',
    siteName: 'BondShield',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BondShield - Emlak Denetim Platformu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BondShield - Emlak Denetim ve Bond Yönetimi Platformu',
    description: 'Emlak denetim süreçlerinizi dijitalleştirin.',
    images: ['/assets/images/og-image.jpg'],
    creator: '@bondshield',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

function SafeStyles() {
  if (process.env.NEXT_PUBLIC_SAFE_VISUAL !== '1') return null
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        body * { opacity:1 !important; visibility:visible !important; }
        [hidden], .hidden { display:block !important; }
        .sr-only { position:static !important; width:auto !important; height:auto !important; clip:auto !important; }
        * { color:#111 !important; }
      `,
      }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/assets/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BondShield',
              description: 'Emlak denetim ve bond yönetimi platformu',
              url: 'https://bondshield.app',
              logo: 'https://bondshield.app/assets/images/logo.png',
              sameAs: [
                'https://twitter.com/bondshield',
                'https://linkedin.com/company/bondshield',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+90-212-XXX-XXXX',
                contactType: 'customer service',
                availableLanguage: ['Turkish', 'English'],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SafeStyles />
        <Providers>
          <SkipLinks />
          <Announcer message="" />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          {/* AIChat removed for MVP - will be re-added in Sprint 2 */}
          <PlausibleAnalytics 
            domain="bondshield.app" 
            enabled={process.env.NODE_ENV === 'production'} 
          />
          <ConsentManager />
        </Providers>
      </body>
    </html>
  )
}