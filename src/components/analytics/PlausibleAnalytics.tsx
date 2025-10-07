'use client'

import Script from 'next/script'

declare global { 
  interface Window { 
    __consentGranted?: boolean
    plausible?: (event: string, options?: { props?: Record<string, any>; revenue?: number }) => void
  } 
}

interface PlausibleAnalyticsProps {
  domain: string
  enabled?: boolean
}

export function PlausibleAnalytics({ domain, enabled = true }: PlausibleAnalyticsProps) {
  if (typeof window !== 'undefined' && window.__consentGranted !== true) return null
  if (!enabled) return null

  return (
    <Script
      strategy="afterInteractive"
      data-domain={domain}
      src="https://plausible.io/js/script.js"
    />
  )
}

// Custom event tracking
export function trackEvent(eventName: string, props?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, props ? { props } : undefined)
  }
}

// Goal tracking
export function trackGoal(goalName: string, revenue?: number) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(goalName, { revenue })
  }
}
