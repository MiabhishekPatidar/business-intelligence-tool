'use client'

import { Pie } from 'react-chartjs-2'
import Papa from 'papaparse'
import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface FinancialRow {
  Division: string
  Revenue_M: number
}

export default function DivisionPieChart() {
  const [data, setData] = useState<FinancialRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Papa.parse('/data/wayne_financial_data.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const rows = results.data as FinancialRow[]
        const grouped: Record<string, number> = {}
        rows.forEach((row) => {
          grouped[row.Division] = (grouped[row.Division] || 0) + row.Revenue_M
        })

        const formatted = Object.entries(grouped).map(([Division, Revenue_M]) => ({ Division, Revenue_M }))
        setData(formatted)
        setLoading(false)
      }
    })
  }, [])

  if (loading) return <p className="text-center">Loading division chart...</p>

  const chartData = {
    labels: data.map((d) => d.Division),
    datasets: [
      {
        data: data.map((d) => d.Revenue_M),
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#a855f7'],
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  }

  return (
  <div style={{ width: '100%', height: '280px', margin: 0, padding: 0 }}>
    <Pie
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { color: 'black', boxWidth: 12, font: { size: 12 } }
          }
        }
      }}
    />
  </div>
)

}
