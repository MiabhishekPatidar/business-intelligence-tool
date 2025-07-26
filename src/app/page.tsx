'use client'

import Header from '@/components/Header'
import DownloadButton from '@/components/DownloadButton'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Line, Bar, Pie } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

let html2pdf: any = null

const revenueChartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Revenue (in M)',
      data: [620, 840, 750, 910],
      borderColor: '#8b5cf6',
      backgroundColor: 'rgba(139,92,246,0.2)',
      tension: 0.4,
      fill: true
    }
  ]
}

const divisionBarChart = {
  labels: ['R&D', 'Logistics', 'Consumer Tech', 'Security'],
  datasets: [
    {
      label: 'Net Profit (in M)',
      data: [120, 90, 180, 60],
      backgroundColor: ['#c084fc', '#a78bfa', '#7c3aed', '#6d28d9']
    }
  ]
}

const pieChartData = {
  labels: ['North America', 'EMEA', 'APAC', 'LATAM'],
  datasets: [
    {
      label: 'Market Share',
      data: [35, 25, 20, 20],
      backgroundColor: ['#c084fc', '#a78bfa', '#7c3aed', '#6d28d9'],
      borderColor: '#fff',
      borderWidth: 2
    }
  ]
}

// const modules = [
//   { name: 'Financial', link: '/financial' },
//   { name: 'HR & People', link: '/hr' },
//   { name: 'Security Ops', link: '/security' },
//   { name: 'R&D Portfolio', link: '/rnd' },
//   { name: 'Supply Chain', link: '/supply-chain' }
// ]

const metricsData = [
  {
    title: 'Customer Satisfaction Index',
    value: '92%',
    summary: `Customer satisfaction reached an all-time high this quarter. Our feedback analytics identified key improvements in agent responsiveness, multilingual support, and product usability. With 14% churn reduction, the experience quality continues to set benchmarks.`,
    fullInsight: `In the past fiscal quarter, Wayne Enterprises achieved a record-breaking Customer Satisfaction Index (CSI) of 92%.
This milestone reflects our customer-first culture and the strategic deployment of intelligent automation across support channels.

Key contributing factors include:
- 26% YoY decrease in ticket resolution time
- Introduction of multilingual AI chatbots
- Personalized feedback tracking with dynamic dashboards
- Dedicated account managers for enterprise clients

Furthermore, our new closed-loop feedback mechanism ensured that every customer concern fed directly into our AI-driven product roadmap.
The implementation of predictive analytics alerted our teams to recurring friction points and proactively deployed responses, reducing churn by 14%.

In Q3, we will continue our CX reinvention by integrating:
- Voice sentiment analysis across call centers
- Predictive experience modeling using LLMs
- Community-driven solution repositories

We are proud to announce a 4.8/5 average score across our digital products and services.`,
    chartType: 'pie',
    secondaryChartType: 'bar'
  },
  {
    title: 'Cost Increase Q2 vs Q1',
    value: '+3.4%',
    summary: `An uptick in procurement and logistics costs was observed due to raw material inflation. Our strategic sourcing in Vietnam and Mexico, along with AI-powered cost modeling, partially offset the spike.`,
    fullInsight: `Costs increased marginally this quarter primarily due to raw material volatility in the global market.
Fuel price surges, chip shortages, and extended freight timelines impacted our supply chain cost structure.

Strategic measures implemented:
- Smart renegotiation protocols with key vendors
- Multi-supplier diversification for critical components
- Cost optimizer AI tool piloted in 3 regions

Initial impact:
- Procurement error rate down by 11.2%
- Supplier lead time reduced by 8 days on average
- Forecast accuracy improved by 15%

Our finance team is actively modeling future cost mitigation paths including:
- Sourcing from emerging hubs (Vietnam, Mexico)
- Hedging commodity purchases with automated contracts
- Hyperlocal warehousing in Tier 2 cities`,
    chartType: 'line',
    secondaryChartType: 'pie'
  },
  {
    title: 'Market Position',
    value: '#2',
    summary: `Wayne Enterprises climbed to the #2 global spot by boosting APAC market penetration and EMEA brand visibility. New innovation hubs and elevated C-suite brand trust fueled this momentum.`,
    fullInsight: `This quarter marked Wayne’s ascent to the #2 global rank among diversified enterprises.
We successfully overtook a major competitor due to focused investments in infrastructure modernization and digital equity.

Success Levers:
- APAC: Grew market penetration by 21%
- LATAM: Deployed 2 innovation labs in São Paulo & Buenos Aires
- EMEA: Achieved top-of-mind recall through integrated branding

Brand Health Metrics:
- 94% C-suite awareness
- 4.6/5 B2B loyalty rating
- 88% increase in organic media mentions

We project a strategic leap to global #1 by FY26 by scaling our AI-led product design and experience-as-a-service capabilities.`,
    chartType: 'bar',
    secondaryChartType: 'line'
  },
  {
    title: 'Employee Productivity Uplift',
    value: '+12.3%',
    summary: `Performance surged as GPT-driven productivity tools streamlined cross-department collaboration. Our hybrid academy and OKR dashboards helped increase delivery speed and engagement.`,
    fullInsight: `With the deployment of internal GPT assistants and transparent metric dashboards, Wayne Enterprises observed a 12.3% increase in team productivity.

This improvement was most evident in the Engineering, Security, and Marketing verticals.

Highlights:
- Sprint velocity improved from 21 to 26 story points avg.
- Cross-team dependencies flagged 33% earlier
- 1-on-1s with AI-powered coaching led to measurable individual growth

Additionally:
- Our hybrid learning academy hosted 144 workshops last quarter
- Internal mobility increased by 17% (vs. attrition at 3.6%)
- A new peer-recognition AI model launched to foster culture reinforcement`,
    chartType: 'line',
    secondaryChartType: 'bar'
  },
  {
    title: 'Infrastructure Downtime',
    value: '1.2h/mo',
    summary: `Our predictive monitoring and cloud-native SRE architecture delivered 99.95% uptime. Reduced MTTR, smart failover, and distributed Kubernetes nodes fortified digital infrastructure.`,
    fullInsight: `Our SRE team has achieved a near-perfect 99.95% service availability benchmark.
Proactive observability tooling and distributed load balancing have helped us cut unplanned outages by 42%.

Q2 TechOps Report Highlights:
- Mean Time to Detect (MTTD): 2.1 minutes
- Mean Time to Resolve (MTTR): 7.6 minutes
- Auto-failover success rate: 98.8%

Cloud-first strategy:
- 54% workloads moved to edge compute nodes
- Kubernetes federation across 3 cloud vendors
- Latency optimized below 110ms in 80% of Tier 1 cities`,
    chartType: 'bar',
    secondaryChartType: 'pie'
  },
  {
    title: 'AI-Driven Forecast Accuracy',
    value: '88.5%',
    summary: `GPT-driven forecasts improved budget precision and inventory planning. Deep learning models across 900M+ points and federated analytics uplifted accuracy to 88.5%.`,
    fullInsight: `Wayne’s AI models built with Transformers + gradient boosting achieved 88.5% forecasting accuracy.
This surpasses last year’s average by 14%, leading to better capital deployment and resource planning.

Key innovations:
- Multivariate inputs from market, behavior & ops data
- Federated learning applied across divisions
- Tuning across 900M+ datapoints

Business Benefits:
- Inventory wastage cut by $11.2M
- Cross-sell prediction uplifted 22%
- Budget forecast variance dropped to 2.8% (from 6.4%)

FY25 focus is on integrating climate risk variables and ESG goals in our modeling.`,
    chartType: 'pie',
    secondaryChartType: 'line'
  }
]

const renderChart = (type: string) => {
  const options = { responsive: true, maintainAspectRatio: false }
  switch (type) {
    case 'line':
      return <Line data={revenueChartData} options={options} height={300} />
    case 'bar':
      return <Bar data={divisionBarChart} options={options} height={300} />
    case 'pie':
      return <Pie data={pieChartData} options={options} height={300} />
    default:
      return null
  }
}

// const downloadSectionAsPDF = async (id: string, filename: string) => {
//   if (typeof window === 'undefined') return

//   const element = document.getElementById(id)
//   if (!element) return

//   if (!html2pdf) {
//     const module = await import('html2pdf.js')
//     html2pdf = module.default
//   }

//   html2pdf()
//     .from(element)
//     .set({
//       margin: 0.5,
//       filename,
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//     })
//     .save()
// }
// const handleSave = (metric: any) => {
//   const existing = JSON.parse(localStorage.getItem('savedCards') || '[]')
//   const alreadySaved = existing.some((m: any) => m.title === metric.title)

//   if (!alreadySaved) {
//     const updated = [...existing, metric]
//     localStorage.setItem('savedCards', JSON.stringify(updated))
//     alert(`Saved: ${metric.title}`)
//   } else {
//     alert(`${metric.title} is already saved.`)
//   }
// }



export default function HomeDashboard() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [savedCards, setSavedCards] = useState<string[]>([])

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem('savedCards') || '[]')
  const titles = stored.map((m: any) => m.title)
  setSavedCards(titles)
}, [])
const handleToggleSave = (metric: any) => {
  const stored = JSON.parse(localStorage.getItem('savedCards') || '[]')
  const isSaved = savedCards.includes(metric.title)

  let updated
  if (isSaved) {
    updated = stored.filter((m: any) => m.title !== metric.title)
  } else {
    updated = [...stored, metric]
  }

  localStorage.setItem('savedCards', JSON.stringify(updated))
  setSavedCards(updated.map((m: any) => m.title))
}

  const moduleLinks = [
    { title: 'Financial', path: '/financial' },
    { title: 'HR & People', path: '/hr' },
    { title: 'Security Ops', path: '/security' },
    { title: 'R&D Portfolio', path: '/rnd' },
    { title: 'Supply Chain', path: '/supply-chain' }
  ]
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-300 text-gray-800 overflow-y-auto">
      <Header />

      {/* Quick Module Navigation Cards */}
      <section className="max-w-7xl mx-auto mt-24 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {moduleLinks.map((mod, i) => (
          <Link
            key={i}
            href={mod.path}
            className="bg-white text-purple-800 font-semibold text-sm p-4 rounded-xl shadow hover:bg-purple-50 hover:scale-[1.03] transition-all text-center"
          >
            {mod.title}
          </Link>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {metricsData.map((metric, i) => (
          <div
            key={i}
            id={`metric-${i}`}
            className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8 border-purple-300"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">📍 {metric.title}</h2>
                  <span className="text-4xl font-extrabold text-purple-700">{metric.value}</span>
                </div>
                <p className="text-gray-700 text-md leading-relaxed mb-4">
                  {metric.summary}
                </p>
                {expanded === i && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                    {metric.fullInsight}
                  </p>
                )}
                <div className="flex gap-4 items-center">
                  {/* Read More */}
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                  >
                    {expanded === i ? 'Show Less' : 'Read More'}
                  </button>

                  {/* Download Button */}
                  <DownloadButton targetId={`metric-${i}`} filename={`${metric.title}.pdf`} />

                  {/* Save/Unsave Button */}
                  <button
                    onClick={() => handleToggleSave(metric)}
                    className="px-4 py-2 text-sm rounded-lg border border-purple-300 bg-white text-purple-700 hover:bg-purple-50 transition flex items-center gap-2"
                  >
                    💾 {savedCards.includes(metric.title) ? 'Saved' : 'Save'}
                  </button>
                </div>


              </div>

              <div className="flex-1 bg-purple-50 rounded-lg p-4 shadow-inner h-[300px]">
                {renderChart(metric.chartType)}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
