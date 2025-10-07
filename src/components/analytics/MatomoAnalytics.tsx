'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface MatomoAnalyticsProps {
  siteId: string
  trackerUrl: string
  enabled?: boolean
}

export function MatomoAnalytics({ siteId, trackerUrl, enabled = true }: MatomoAnalyticsProps) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    // Initialize Matomo
    window._paq = window._paq || []
    
    // Configure Matomo
    window._paq.push(['trackPageView'])
    window._paq.push(['enableLinkTracking'])
    
    // Track page views on route changes
    const trackPageView = () => {
      if (window._paq) {
        window._paq.push(['setCustomUrl', window.location.pathname])
        window._paq.push(['setDocumentTitle', document.title])
        window._paq.push(['trackPageView'])
      }
    }

    // Track initial page view
    trackPageView()

    // Track subsequent page views on route changes
    const handleRouteChange = () => {
      trackPageView()
    }

    // Listen for route changes (Next.js App Router)
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <Script
        id="matomo-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="${trackerUrl}";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '${siteId}']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
        }}
      />
    </>
  )
}

// Custom event tracking
export function trackEvent(category: string, action: string, name?: string, value?: number) {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push(['trackEvent', category, action, name, value])
  }
}

// Goal tracking
export function trackGoal(goalId: string, customRevenue?: number) {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push(['trackGoal', goalId, customRevenue])
  }
}

// E-commerce tracking
export function trackEcommerceOrder(orderId: string, grandTotal: number, subTotal?: number, tax?: number, shipping?: number, discount?: number) {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push(['addEcommerceItem', orderId, '', '', grandTotal, 1])
    window._paq.push(['trackEcommerceOrder', orderId, grandTotal, subTotal, tax, shipping, discount])
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    _paq?: Array<any>
  }
}
