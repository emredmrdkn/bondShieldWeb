'use client'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    __consentGranted?: boolean
  }
}

export default function ConsentManager() {
  const [consent, setConsent] = useState<boolean | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const savedConsent = localStorage.getItem('analytics-consent')
    if (savedConsent === null) {
      setShowBanner(true)
    } else {
      setConsent(savedConsent === 'true')
      window.__consentGranted = savedConsent === 'true'
    }
  }, [])

  const handleAccept = () => {
    setConsent(true)
    setShowBanner(false)
    localStorage.setItem('analytics-consent', 'true')
    window.__consentGranted = true
  }

  const handleReject = () => {
    setConsent(false)
    setShowBanner(false)
    localStorage.setItem('analytics-consent', 'false')
    window.__consentGranted = false
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900">Analytics Consent</h3>
          <p className="text-xs text-gray-600 mt-1">
            We use Plausible Analytics to understand how you use our site.
          </p>
        </div>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={handleReject}
            className="text-xs px-3 py-1 text-gray-600 hover:text-gray-800"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
