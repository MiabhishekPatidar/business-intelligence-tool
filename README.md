# 🦇 Wayne Insight Platform

A futuristic, AI-augmented Business Intelligence (BI) platform engineered for executive decision-making. Inspired by the strategic operations of Wayne Enterprises, this dashboard delivers intelligent insights, real-time KPIs, and beautiful data visualizations using modern frontend technologies.

Built with **Next.js**, **Tailwind CSS**, and optionally powered by **OpenAI** for auto-generated insights, the Wayne Insight Platform reimagines enterprise analytics for a new era of business intelligence.

## 🎥 Demo Video

[Watch Demo Video on Google Drive](https://drive.google.com/file/d/15al3Yr6T2vdga5e9xZqEWp4GNhXJp0j1/view?usp=sharing)


---

## ⚙️ Project Structure

wayne-insight-platform/
├── public/ # Static assets
├── src/
│ ├── app/
│ │ └── page.tsx # Main dashboard logic and layout
│ ├── components/ # Modular UI components (Header, Cards, Charts, etc.)
│ ├── styles/ # Global and custom styles
├── backend/ # (Optional) FastAPI service with OpenAI integration
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md


---

## 🚀 Core Features

- **📊 Executive Summary Cards**  
  Display critical KPIs, revenue trends, growth metrics, and market signals.

- **📈 Real-Time Visualizations**  
  Interactive charts (Line, Bar, Pie) powered by Chart.js for strategic data interpretation.

- **🧠 AI-Generated Insights (OpenAI)**  
  Integrate GPT-driven auto-generated narratives that interpret data like a human analyst. *(Backend currently disabled due to API quota limits.)*

- **💾 Persistent Intelligence**  
  Save insights locally, retrieve context-aware analysis, and download executive summaries as PDF.

- **📥 Export & Share**  
  Generate boardroom-ready reports using `html2pdf.js`.

- **📱 Enterprise-Ready UI**  
  Responsive design optimized for mobile, tablet, and desktop environments.

---

## 🧠 OpenAI-Enabled Intelligence

This platform was architected with an optional **FastAPI backend** that leverages the **OpenAI GPT API** to convert raw data into intelligent summaries.

> Example: “Revenue grew 12.5% QoQ, led by advanced manufacturing and digital solutions divisions, signaling momentum toward operational efficiency.”

To reactivate:
- Restore the `backend/` service with your OpenAI key
- Reconnect `fetchInsight()` logic in `src/app/page.tsx`
- API will generate insight strings dynamically based on uploaded datasets

---

## 🛠️ Tech Stack

| Layer           | Technology             |
|----------------|------------------------|
| Frontend       | Next.js 15+, Tailwind CSS, TypeScript |
| Charts         | Chart.js               |
| PDF Export     | html2pdf.js            |
| Storage        | LocalStorage (Client-side) |
| Optional Backend | FastAPI (Python), OpenAI GPT API |

---

## 🧑‍💻 Getting Started Locally

### 1️⃣ Prerequisites
- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- npm (v9+)

### 2️⃣ Install Dependencies
```bash
npm install

3️⃣ Run the Application
npm run dev
Open http://localhost:3000 in your browser.

✨ Customization Guide

| Area           | File/Component          | Notes                             |
| -------------- | ----------------------- | --------------------------------- |
| KPIs / Metrics | `src/app/page.tsx`      | Modify executive card values      |
| Chart Data     | `components/Chart*.tsx` | Adjust dataset for line, bar, pie |
| Module Tabs    | `moduleLinks[]` array   | Add or rename business domains    |
| Insight Logic  | `fetchInsight()`        | Link to OpenAI backend            |



🧾 License
Distributed under the MIT License. Use, fork, extend — no restrictions.

🙋‍♂️ Author Note
Crafted with 💡, code, and caffeine — this project is a fusion of design precision and analytical power. Inspired by the world of Wayne Enterprises, it simulates what a next-generation, AI-powered BI suite could look like in real-world enterprise settings.

Use this as a portfolio piece or scale it for internal enterprise intelligence — the architecture is ready.


