'use client'

export default function KPISection() {
  const kpis = [
    { label: "Total Revenue", value: "$2.78B", color: "text-blue-600" },
    { label: "Net Profit", value: "$812M", color: "text-green-600" },
    { label: "Market Share", value: "21.4%", color: "text-purple-600" }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="bg-white hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 rounded-xl p-6 shadow"
        >
          <p className="text-sm text-gray-500">{kpi.label}</p>
          <p className={`text-3xl font-semibold mt-1 ${kpi.color}`}>{kpi.value}</p>
        </div>
      ))}
    </section>
  )
}
