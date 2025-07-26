'use client'
import { useEffect, useState } from "react"
import Papa from "papaparse"

export interface FinancialRow {
  Division: string
  Quarter: string
  Year: string
  Revenue_M: number
  Net_Profit_M: number
  Market_Share_Pct: number
}

export default function useFinancialData() {
  const [data, setData] = useState<FinancialRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Papa.parse("/data/wayne_financial_data.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results: Papa.ParseResult<FinancialRow>) => {
        setData(results.data as FinancialRow[])
        setLoading(false)
      }
    })
  }, [])

  return { data, loading }
}
