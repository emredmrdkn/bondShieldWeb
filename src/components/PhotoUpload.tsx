'use client'

import { useState } from 'react'

export default function PhotoUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([])
  
  const handleUpload = async (file: File) => {
    setUploading(true)
    
    try {
      // Get presigned URL
      const presignedRes = await fetch('/api/upload/presigned', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
          size: file.size
        })
      })
      
      const presignedData = await presignedRes.json()
      if (!presignedData.ok) throw new Error('Failed to get presigned URL')
      
      // Upload to S3
      const uploadRes = await fetch(presignedData.data.uploadUrl, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type }
      })
      
      if (uploadRes.ok) {
        setFiles(prev => [...prev, file])
        setUploadedUrls(prev => [...prev, presignedData.data.publicUrl])
      } else {
        throw new Error('S3 upload failed')
      }
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setUploading(false)
    }
  }
  
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
    setUploadedUrls(prev => prev.filter((_, i) => i !== index))
  }
  
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Photos
        </label>
        <input
          type="file"
          accept="image/jpeg,image/png"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) handleUpload(file)
          }}
          disabled={uploading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
        />
        {uploading && (
          <p className="text-sm text-gray-600 mt-2">Uploading...</p>
        )}
      </div>
      
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
          {files.map((file, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">IMG</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFile(i)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      
      {uploadedUrls.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Upload URLs:</h4>
          {uploadedUrls.map((url, i) => (
            <div key={i} className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
              {url}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
