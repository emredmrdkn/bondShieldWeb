'use client'

import { useState } from 'react'

export default function ReportGenerator() {
  const [generating, setGenerating] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const generateReport = async () => {
    setGenerating(true)
    setError(null)
    
    try {
      const res = await fetch('/api/reports/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          photos: ['/uploads/sample.jpg'], // Sample photo for testing
          notes: 'Sample inspection notes for testing PDF generation',
          timestamp: new Date().toISOString()
        })
      })
      
      const data = await res.json()
      if (data.ok && data.data?.pdfUrl) {
        setPdfUrl(data.data.pdfUrl)
      } else {
        setError(data.error || 'Report generation failed')
      }
    } catch (error) {
      console.error('Report generation failed:', error)
      setError('Network error occurred')
    } finally {
      setGenerating(false)
    }
  }
  
  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-4">Generate Inspection Report</h3>
        <p className="text-gray-600 mb-4">
          Create a PDF report with embedded photos and inspection notes.
        </p>
        
        <button
          onClick={generateReport}
          disabled={generating}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {generating ? 'Generating Report...' : 'Generate PDF Report'}
        </button>
        
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            {error}
          </div>
        )}
        
        {pdfUrl && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <h4 className="text-sm font-medium text-green-800 mb-2">
              Report Generated Successfully!
            </h4>
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center text-blue-600 hover:text-blue-800 underline text-sm"
            >
              📄 Download PDF Report
            </a>
            <p className="text-xs text-gray-600 mt-1">
              URL: {pdfUrl}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
