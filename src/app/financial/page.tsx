'use client'

import DivisionPieChart from '@/components/DivisionPieChart'
import Header from '@/components/Header'
import ChartCard from '@/components/ChartCard'
import NarrativeBlock from '@/components/NarrativeBlock'
import { ArrowDown } from 'lucide-react'


export default function FinancialPage() {
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
          <h1 className="text-4xl font-bold text-black">💰 Financial Performance</h1>
          <p className="text-black text-lg">
            Explore revenue, profit margins, and market trends through data and AI insights.
          </p>
        </section>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            { label: 'Total Revenue', value: '$2.78B' },
            { label: 'Net Profit', value: '$812M' },
            { label: 'Market Share', value: '21.4%' },
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


{/* Revenue Share by Division (Compact) */}
<section className="max-w-6xl mx-auto px-6 -mt-6">
  <div className="bg-white text-black p-4 rounded-2xl shadow-xl border border-purple-200">
    <h3 className="text-xl font-semibold mb-3">📊 Revenue Share by Division</h3>

    {/* Chart Wrapper */}
    <div className="w-full md:w-[500px] mx-auto" style={{ position: 'relative', height: '240px' }}>
      <DivisionPieChart />
    </div>

    {/* Bullet Summary - proper space, no overlap */}
    <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-gray-700">
      <li><strong>Consumer Tech:</strong> Leads with 42% of total revenue.</li>
      <li><strong>Logistics:</strong> Shows consistent quarter-on-quarter growth.</li>
      <li><strong>Security Ops:</strong> Poised for AI-driven efficiency in Q3.</li>
    </ul>
  </div>
</section>



        {/* AI Insight Block */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl border border-purple-200">
            <h3 className="text-xl font-semibold text-black mb-4">🧠 AI Business Insight</h3>
            <NarrativeBlock topic="Financial Performance" />
            <div className="mt-4 border-t pt-4">
              <p className="text-md text-black">
                • EBITDA margin improved by 2.1% YoY<br />
                • Treasury efficiency ratio hit 96.4%<br />
                • Forecasted Q3 cash position up by $240M
              </p>
            </div>
          </div>
        </section>

        {/* Quarter-wise Revenue Metrics */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-black rounded-2xl shadow-xl border border-purple-300 p-6">
              <h2 className="text-2xl font-bold mb-4">📉 Q1 & Q2 Revenue Breakdown</h2>
              <ChartCard themeColor="#7c3aed" filterQuarters={['Q1', 'Q2']} />
              <div className="mt-6 text-md text-black space-y-2">
                <p>• Q1 Revenue: $620M</p>
                <p>• Q2 Revenue: $840M</p>
                <p>• Growth from Q1 to Q2: 35.5%</p>
              </div>
            </div>
            <div className="bg-white text-black rounded-2xl shadow-xl border border-purple-300 p-6">
              <h2 className="text-2xl font-bold mb-4">📈 Q3 & Q4 Revenue Breakdown</h2>
              <ChartCard themeColor="#7c3aed" filterQuarters={['Q3', 'Q4']} />
              <div className="mt-6 text-md text-black space-y-2">
                <p>• Q3 Revenue: $750M</p>
                <p>• Q4 Revenue: $910M</p>
                <p>• Year-End Surge: 21.3% increase from Q3 to Q4</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newspaper-Style Articles */}
        <section className="max-w-6xl mx-auto px-6 space-y-20">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">🧭 Strategic Reallocation Boosts Financial Resilience</h2>
            <p className="text-lg leading-relaxed mb-4">
              Wayne Enterprises has strategically reallocated 12% of its annual capital expenditure towards AI-powered infrastructure.
              This bold move reflects the company’s commitment to modernization and operational efficiency.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              The results include a 5.4% drop in overhead and a 2.2x increase in ROI from energy and manufacturing sectors.
              With AI-driven logistics and procurement, departments have cut waste significantly.
            </p>
            <p className="text-lg leading-relaxed">
              CFO teams across subsidiaries have already begun adopting this architecture as a recession-resistant model.
              The digital pivot continues to show scalable promise.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">🌍 Regional Recovery Trends Shape Revenue Split</h2>
            <p className="text-lg leading-relaxed mb-4">
              North America led Q2 with 48% of total revenue, aided by smart stimulus-linked initiatives and localized pricing.
              LATAM followed closely with a $138M contribution thanks to tech expansion.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Meanwhile, India and South Korea resumed strategic partnerships, and Wayne’s APAC network rebounded well from Q1 setbacks.
              Eastern Europe is projected to become a new growth zone.
            </p>
            <p className="text-lg leading-relaxed">
              This diversified success has brought in a blended 14% YoY global growth.
              New regional R&D hubs are already planned for São Paulo and Tel Aviv.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">📌 Financial Highlights</h2>
            <p className="text-lg leading-relaxed mb-4">
              Q2 delivered strong results across all major KPIs. Improvements in margin, automation, and cost control led to sustainable gains.
            </p>
            <div className="bg-white/70 border border-purple-300 rounded-xl p-6 shadow-inner">
              <ul className="list-disc list-inside space-y-2 text-md">
                <li>Q1 Revenue exceeded forecast by 9.3%</li>
                <li>Operating margin improved by 1.5%</li>
                <li>AI-driven automation saved $12M in admin costs</li>
                <li>Consumer Tech led with 31% YoY growth</li>
                <li>Procurement and Logistics saw cost dips of 7.8%</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
