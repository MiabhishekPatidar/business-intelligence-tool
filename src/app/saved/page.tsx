'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'

export default function SavedPage() {
  const [savedCards, setSavedCards] = useState<any[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('savedCards')
    if (stored) {
      setSavedCards(JSON.parse(stored))
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-200 text-gray-800 overflow-y-auto">
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        <h1 className="text-4xl font-bold text-purple-800 mb-10">💾 Saved Reports</h1>

        {savedCards.length === 0 ? (
          <p className="text-gray-600">You haven’t saved anything yet.</p>
        ) : (
          savedCards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow border-l-4 border-purple-400"
            >
              <h2 className="text-xl font-bold text-purple-800 mb-2">{card.title}</h2>
              <p className="text-purple-700 font-semibold text-lg mb-2">{card.value}</p>
              <p className="text-gray-700">{card.summary}</p>
            </div>
          ))
        )}
      </section>
    </main>
  )
}
