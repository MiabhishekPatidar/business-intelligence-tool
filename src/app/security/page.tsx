'use client'

import Header from '@/components/Header'
import ChartCard from '@/components/ChartCard'
import NarrativeBlock from '@/components/NarrativeBlock'
import { ArrowDown } from 'lucide-react'

export default function SecurityPage() {
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
          <h1 className="text-4xl font-bold text-black">🛡️ Security Operations</h1>
          <p className="text-black text-lg">
            Dive into threat response times, anomaly trends, and AI-powered risk mitigation insights.
          </p>
        </section>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            { label: 'Avg Response Time', value: '4.2 min' },
            { label: 'Anomalies Detected', value: '692' },
            { label: 'Resolved Incidents', value: '97.8%' },
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
            <h3 className="text-xl font-semibold text-black mb-4">📉 Threat Detection Trends</h3>
            <ChartCard themeColor="#7c3aed" />
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl border border-purple-200 h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-black mb-4">🧠 AI Risk Intelligence</h3>
            <NarrativeBlock topic="Security Operations Overview" />
            <div className="mt-4 border-t pt-4">
              <p className="text-md text-black">
                • Threat containment window reduced by 37%<br />
                • AI flagged 98.2% of malicious anomalies<br />
                • Automated patching slashed human workload by 60%
              </p>
            </div>
          </div>
        </section>

        {/* Newspaper-Style Articles */}
        <section className="max-w-6xl mx-auto px-6 space-y-20">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">🔐 AI-Driven Shielding Cuts Threat Exposure</h2>
            <p className="text-lg leading-relaxed mb-4">
              Leveraging GPT-based real-time logs analysis, Wayne Security Ops proactively neutralized 84 high-risk exploits before escalation. This quarter marks the lowest security breach footprint since Q1 2022.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our zero-trust model, coupled with adaptive perimeter defense, has reduced vulnerability scanning cycles by 52%. Incident intelligence is shared instantly across facilities through the SecureMesh protocol.
            </p>
            <p className="text-lg leading-relaxed">
              Engineers cite "predictive patching" and AI-led policy automation as the core of our rapid containment capability. SOC (Security Ops Center) efficiency rose 22% YoY.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-10 rounded-3xl shadow-xl border border-purple-200">
            <h2 className="text-4xl font-extrabold text-purple-900 mb-6">📊 Incident Metrics & Highlights</h2>
            <div className="bg-white/70 border border-purple-300 rounded-xl p-6 shadow-inner">
              <ul className="list-disc list-inside space-y-2 text-md">
                <li>Response time down to 4.2 minutes (prev. 6.7)</li>
                <li>98.5% of threats identified via AI models</li>
                <li>53% of alerts resolved through auto-playbooks</li>
                <li>Zero service downtime in past 90 days</li>
                <li>Employee phishing response time improved by 44%</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
