'use client'

import Header from '@/components/Header'
import ChartCard from '@/components/ChartCard'
import NarrativeBlock from '@/components/NarrativeBlock'
import { ArrowDown } from 'lucide-react'

export default function SupplyChainPage() {
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
          <h1 className="text-4xl font-bold text-black">🚚 Supply Chain Dashboard</h1>
          <p className="text-black text-lg">
            Track logistics performance, delivery efficiency, and operational cost trends.
          </p>
        </section>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            { label: 'Avg Delivery Time', value: '2.8 days' },
            { label: 'Fulfillment Rate', value: '96.3%' },
            { label: 'Freight Cost Change', value: '-7.2%' },
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

        {/* Chart + AI Block */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl border border-purple-200 h-full">
            <h3 className="text-xl font-semibold text-black mb-4">📦 Logistics Throughput</h3>
            <ChartCard themeColor="#7c3aed" />
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl border border-purple-200 h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-black mb-4">🧠 AI-Powered Efficiency Insights</h3>
            <NarrativeBlock topic="Supply Chain Trends" />
            <div className="mt-4 border-t pt-4">
              <p className="text-md text-black">
                • Inventory turnover increased by 14.6%<br />
                • Route optimization saved 18K km/month<br />
                • Delay rate decreased from 9.2% to 3.7%
              </p>
            </div>
          </div>
        </section>

        {/* Newspaper-style Reports */}
        <section className="max-w-6xl mx-auto px-6 space-y-20">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">📍 Intelligent Routing Cuts Costs by 11%</h2>
            <p className="text-lg leading-relaxed mb-4">
              Wayne’s Supply Chain AI now predicts regional demand patterns and optimizes routes based on weather, traffic, and fuel cost data. 
              In Q2 alone, it saved approximately $2.4M in freight costs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              This quarter’s lowest delivery lag was 1.3 days in the Midwest zone, with the highest fulfillment accuracy in APAC markets.
              GPT-integrated forecasts helped pre-position inventory across 7 new warehouses.
            </p>
            <p className="text-lg leading-relaxed">
              The smart chain analytics suite is expected to expand further into real-time sourcing strategies in Q3.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">📊 Quarterly Logistics Metrics</h2>
            <div className="bg-white/70 border border-purple-300 rounded-xl p-6 shadow-inner">
              <ul className="list-disc list-inside space-y-2 text-md">
                <li>Avg delivery time reduced by 18% YoY</li>
                <li>Warehouse errors dropped to 1.9%</li>
                <li>95.4% inventory sync across all zones</li>
                <li>Carbon emissions down 12% via fleet re-routing</li>
                <li>Vendor SLA compliance at all-time high: 98.6%</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
