'use client'

import Header from '@/components/Header'
import ChartCard from '@/components/ChartCard'
import NarrativeBlock from '@/components/NarrativeBlock'
import { ArrowDown } from 'lucide-react'

export default function RnDPage() {
  const handleDownload = () => {
    window.print()
  }

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-purple-200 via-purple-100 to-white text-black space-y-20">

        {/* Section Header */}
        <section className="relative text-center max-w-4xl mx-auto space-y-2 px-4">
          <div className="absolute top-0 right-0 mt-2 mr-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-medium px-4 py-2 rounded-full shadow-md transition"
            >
              <ArrowDown size={18} /> Download
            </button>
          </div>
          <h1 className="text-4xl font-bold text-black">🧪 R&D Portfolio</h1>
          <p className="text-black text-lg">
            Uncover innovation metrics, patent progress, and AI-powered R&D analytics.
          </p>
        </section>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            { label: 'Active Projects', value: '37' },
            { label: 'Patents Filed', value: '112' },
            { label: 'Avg Time-to-Market', value: '7.2 months' },
          ].map((kpi, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all border border-purple-200"
            >
              <p className="text-sm">{kpi.label}</p>
              <p className="text-3xl font-bold mt-1">{kpi.value}</p>
            </div>
          ))}
        </section>

        {/* Chart + AI Insight */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl border border-purple-200 h-full">
            <h3 className="text-xl font-semibold text-black mb-4">📈 R&D Budget Allocation Trends</h3>
            <ChartCard themeColor="#8b5cf6" />
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl border border-purple-200 h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-black mb-4">🧠 AI Innovation Insights</h3>
            <NarrativeBlock topic="R&D Portfolio Performance" />
            <div className="mt-4 border-t pt-4">
              <p className="text-md text-black">
                • Time-to-market reduced by 23% with agile methodologies<br />
                • R&D spends optimized via predictive resource modeling<br />
                • IP monetization expected to double by next fiscal
              </p>
            </div>
          </div>
        </section>

        {/* R&D Highlights */}
        <section className="max-w-6xl mx-auto px-6 space-y-20">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">🚀 Disruptive Research Drives Market Differentiation</h2>
            <p className="text-lg leading-relaxed mb-4">
              Wayne’s R&D wing launched 9 flagship projects this quarter in biotech, AI and quantum security. Innovations like BioSynChip and Phoenix AI Core are already under review for clinical and commercial deployment.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The BioSynChip initiative reduces lab trial time by 31%, while Phoenix AI Core delivers 45% better accuracy in automated security surveillance and edge analytics. These milestones enhance brand IP value and attract global licensing interest.
            </p>
            <p className="text-lg leading-relaxed">
              Internal cross-functional pods have accelerated interdisciplinary breakthroughs, turning research into product lines within 6 months.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">📊 Highlights from the Lab</h2>
            <div className="bg-white/70 border border-purple-300 rounded-xl p-6 shadow-inner">
              <ul className="list-disc list-inside space-y-2 text-md">
                <li>8 new patents filed this quarter (total: 112)</li>
                <li>90% of researchers retained post-project launch</li>
                <li>2 flagship projects entered commercialization phase</li>
                <li>AI-based simulations reduced trial error by 36%</li>
                <li>4x growth in academic-corporate collaborations</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
