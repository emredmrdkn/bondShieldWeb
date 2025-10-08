import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}