import { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
  nofollow?: boolean
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/assets/images/og-image.jpg',
  noindex = false,
  nofollow = false,
}: SEOConfig): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bondshield.app'
  const fullTitle = title.includes('BondShield') ? title : `${title} | BondShield`
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'BondShield Team' }],
    creator: 'BondShield',
    publisher: 'BondShield',
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonical || `${siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
      languages: {
        'tr-TR': `${siteUrl}/tr`,
        'en-US': `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: canonical || `${siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
      title: fullTitle,
      description,
      siteName: 'BondShield',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`],
      creator: '@bondshield',
      site: '@bondshield',
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }
}

export function generateJsonLd(data: Record<string, any>) {
  return {
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
    ...data,
  }
}
