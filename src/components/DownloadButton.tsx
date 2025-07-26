'use client'

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

export default function DownloadButton({ targetId, filename }: { targetId: string; filename: string }) {
  const [html2pdfInstance, setHtml2pdfInstance] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    import('html2pdf.js').then((mod) => setHtml2pdfInstance(() => mod.default))
  }, [])

  const injectSafeStyles = () => {
    const style = document.createElement('style')
    style.id = 'pdf-safe-style'
    style.innerHTML = `
      * {
        color: black !important;
        background-color: white !important;
        border-color: black !important;
      }
    `
    document.head.appendChild(style)
  }

  const removeSafeStyles = () => {
    const existing = document.getElementById('pdf-safe-style')
    if (existing) existing.remove()
  }

  const handleDownload = () => {
    if (!html2pdfInstance || typeof window === 'undefined') return
    const element = document.getElementById(targetId)
    if (!element) return

    setLoading(true)
    injectSafeStyles()

    // Delay a little to ensure style override applies
    setTimeout(() => {
      html2pdfInstance()
        .from(element)
        .set({
          margin: 0.5,
          filename,
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        })
        .save()
        .finally(() => {
          removeSafeStyles()
          setLoading(false)
        })
    }, 200)
  }

  return (
    <button
      onClick={handleDownload}
      disabled={!html2pdfInstance || loading}
      className={`px-4 py-2 rounded-lg border border-purple-300 flex items-center gap-2 transition ${
        html2pdfInstance && !loading
          ? 'bg-white text-purple-700 hover:bg-purple-50 cursor-pointer'
          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
      }`}
    >
      <ArrowDown size={18} />
      {loading ? 'Downloading...' : 'Download Report'}
    </button>
  )
}
