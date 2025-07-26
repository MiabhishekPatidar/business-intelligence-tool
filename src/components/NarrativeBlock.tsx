'use client'

interface NarrativeBlockProps {
  topic: string
}

export default function NarrativeBlock({ topic }: NarrativeBlockProps) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-100 p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-gray-700 mb-2">{topic} Insight</h4>
      <p className="text-gray-600">
        GPT-generated summary will appear here. This will use FastAPI to call OpenAI and give a short narrative
        insight for <strong>{topic}</strong> based on data trends.
      </p>
    </div>
  )
}
