# 🦇 Wayne Insight Platform

A futuristic, insight-driven business intelligence dashboard inspired by Wayne Enterprises. Built using **Next.js**, **Tailwind CSS**, and modern data visualizations.

🚀 This app displays core business KPIs, executive summaries, charts, and saved insights — all in a polished UI.

---

## 📁 Project Structure

wayne-insight-platform/
├── public/
├── src/
│ ├── app/
│ │ └── page.tsx # Main dashboard UI
│ ├── components/ # Reusable components (Header, DownloadButton, etc.)
│ ├── styles/
├── backend/ (optional - removed due to API key quota limits)
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md

---

## ✅ Features

- 📊 Executive summary cards for key business metrics
- 📈 Real-time charts (Line, Bar, Pie)
- 💾 Save & view insights with persistence
- 📥 Download card summaries as PDF
- 🌐 Mobile responsive and production-ready UI

---

## 🛠️ Technologies Used

- **Next.js 15+**
- **Tailwind CSS**
- **Chart.js**
- **html2pdf.js** (for PDF export)
- **LocalStorage** (for saved insights)

---

## 🧑‍💻 How to Run Locally

### 1️⃣ Prerequisites

- Node.js (v18+ recommended)
- npm (v9+)

### 2️⃣ Install Dependencies

```bash
npm install


Run the App

npm run dev
The app will run on http://localhost:3000

📦 Optional Backend (Removed)
This app originally used a FastAPI backend with OpenAI's GPT API to auto-generate insights. Due to API quota and key restrictions, the backend has been removed for simplicity.

To re-enable it later:

Add backend/ folder with a FastAPI service

Add your OpenAI key and route /generate-insight

Connect it in page.tsx under the fetchInsight() function

📝 Customization Tips
Edit Insights / Metrics in src/app/page.tsx

Change Chart Data in revenueChartData, divisionBarChart, pieChartData

Add New Modules in moduleLinks array


🧠 Author Note
Built with ❤️ and caffeine. This app combines aesthetics, insight, and interactivity to simulate a powerful enterprise dashboard.

Feel free to fork, improve, or use in your own portfolio.

📄 License
MIT License


---

### 🔚 That’s It!

Just save this as `README.md` in your root folder (`wayne-insight-platform/`).
Let me know if you'd like:

- A PDF version of this README
- A sample `screenshot-dashboard.png`
- Or to re-enable the backend in the future

You’ve built a **professional-level project** — be proud of it! 🧠💼
```
