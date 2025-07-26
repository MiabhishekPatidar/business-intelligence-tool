'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import Papa from 'papaparse'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface FinancialRow {
  Division: string
  Quarter: string
  Year: string
  Revenue_M: number
}

interface ChartCardProps {
  themeColor?: string
  filterQuarters?: string[]  // e.g., ['Q1', 'Q2']
}

export default function ChartCard({ themeColor = '#6366f1', filterQuarters }: ChartCardProps) {
  const [data, setData] = useState<FinancialRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Papa.parse('/data/wayne_financial_data.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const rows = results.data as FinancialRow[]
        const filtered = filterQuarters
          ? rows.filter((row) => filterQuarters.includes(row.Quarter))
          : rows
        setData(filtered)
        setLoading(false)
      }
    })
  }, [filterQuarters])

  if (loading) return <p className="text-center">Loading chart...</p>

  const labels = data.map((d) => `${d.Year}-Q${d.Quarter}`)
  const divisions = Array.from(new Set(data.map((d) => d.Division)))

  const datasets = divisions.map((division) => ({
    label: division,
    data: data.filter((d) => d.Division === division).map((d) => d.Revenue_M),
    borderColor: themeColor,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    tension: 0.4,
    fill: false
  }))

  return (
    <div className="w-full h-[400px]">
      <Line
        data={{ labels, datasets }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: false
            }
          }
        }}
      />
    </div>
  )
}
