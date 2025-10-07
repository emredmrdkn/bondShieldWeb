'use client'

import { useEffect } from 'react'

export function SkipLinks() {
  useEffect(() => {
    // Skip link functionality
    const handleSkipLink = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !e.shiftKey) {
        const skipLink = document.querySelector('.skip-link') as HTMLElement
        if (skipLink) {
          skipLink.focus()
        }
      }
    }

    document.addEventListener('keydown', handleSkipLink)
    return () => document.removeEventListener('keydown', handleSkipLink)
  }, [])

  return (
    <div className="skip-links">
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-bondshield-600 focus:text-white focus:rounded-md focus:shadow-lg"
        tabIndex={1}
      >
        Ana içeriğe geç
      </a>
      <a
        href="#navigation"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 focus:z-50 focus:px-4 focus:py-2 focus:bg-bondshield-600 focus:text-white focus:rounded-md focus:shadow-lg"
        tabIndex={2}
      >
        Navigasyona geç
      </a>
      <a
        href="#footer"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-64 focus:z-50 focus:px-4 focus:py-2 focus:bg-bondshield-600 focus:text-white focus:rounded-md focus:shadow-lg"
        tabIndex={3}
      >
        Alt bilgiye geç
      </a>
    </div>
  )
}
