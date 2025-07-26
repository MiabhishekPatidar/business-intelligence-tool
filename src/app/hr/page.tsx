'use client'

import DivisionPieChart from '@/components/DivisionPieChart'
import Header from '@/components/Header'
import ChartCard from '@/components/ChartCard'
import NarrativeBlock from '@/components/NarrativeBlock'
import { ArrowDown } from 'lucide-react'

export default function HRPage() {
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
          <h1 className="text-4xl font-bold text-black">👥 HR & People Analytics</h1>
          <p className="text-black text-lg">
            Explore employee engagement, hiring trends, and retention metrics powered by AI.
          </p>
        </section>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            { label: 'Total Employees', value: '21,450' },
            { label: 'Retention Rate', value: '91.7%' },
            { label: 'Avg. Tenure', value: '4.3 years' },
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

        {/* AI Insight Block */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl border border-purple-200">
            <h3 className="text-xl font-semibold text-black mb-4">🧠 AI People Insight</h3>
            <NarrativeBlock topic="HR and Employee Engagement" />
            <div className="mt-4 border-t pt-4">
              <p className="text-md text-black">
                • Employee satisfaction up 12% post hybrid-policy<br />
                • Engagement index: 84.2% avg across all units<br />
                • Top performers retained at 98.1% YoY
              </p>
            </div>
          </div>
        </section>

        {/* Division Pie Chart */}
        <section className="max-w-6xl mx-auto px-6 -mt-6">
          <div className="bg-white text-black p-4 rounded-2xl shadow-xl border border-purple-200">
            <h3 className="text-xl font-semibold mb-3">📊 Workforce Distribution</h3>
            <div className="w-full md:w-[500px] mx-auto" style={{ position: 'relative', height: '240px' }}>
              <DivisionPieChart />
            </div>
            <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li><strong>R&D:</strong> 38% of total headcount.</li>
              <li><strong>Security Ops:</strong> 18% but growing fastest.</li>
              <li><strong>Corporate Services:</strong> Stable at 22% of global force.</li>
            </ul>
          </div>
        </section>

        {/* Dual Section Metrics */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-black rounded-2xl shadow-xl border border-purple-300 p-6">
              <h2 className="text-2xl font-bold mb-4">📋 Q1 & Q2 Hiring Trends</h2>
              <ChartCard themeColor="#7c3aed" filterQuarters={['Q1', 'Q2']} />
              <div className="mt-6 text-md text-black space-y-2">
                <p>• Q1 Hires: 1,230</p>
                <p>• Q2 Hires: 1,740</p>
                <p>• 42% of hires are tech profiles</p>
              </div>
            </div>
            <div className="bg-white text-black rounded-2xl shadow-xl border border-purple-300 p-6">
              <h2 className="text-2xl font-bold mb-4">📋 Q3 & Q4 Attrition Trends</h2>
              <ChartCard themeColor="#7c3aed" filterQuarters={['Q3', 'Q4']} />
              <div className="mt-6 text-md text-black space-y-2">
                <p>• Q3 Attrition: 4.1%</p>
                <p>• Q4 Attrition: 3.8%</p>
                <p>• YoY attrition improved by 0.9%</p>
              </div>
            </div>
          </div>
        </section>

        {/* HR Articles */}
        <section className="max-w-6xl mx-auto px-6 space-y-20">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">📣 Hybrid Work Model Boosts Satisfaction</h2>
            <p className="text-lg leading-relaxed mb-4">
              After implementing a hybrid-first policy, internal surveys showed a 14% jump in satisfaction scores. Flexible working hours and role-based remote access helped retain top-performing engineers.
            </p>
            <p className="text-lg leading-relaxed">
              Leadership plans to expand this to APAC and LATAM branches with custom training for virtual team building.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">📌 HR Highlights</h2>
            <div className="bg-white/70 border border-purple-300 rounded-xl p-6 shadow-inner">
              <ul className="list-disc list-inside space-y-2 text-md">
                <li>Gender diversity improved by 6.5%</li>
                <li>85%+ satisfaction in tech and research roles</li>
                <li>Average time-to-hire reduced by 3 days</li>
                <li>1,200+ learning hours completed in Q2</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
