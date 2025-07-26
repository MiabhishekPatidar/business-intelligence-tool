'use client'

import Header from '@/components/Header'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-purple-50 text-gray-800">
      <Header />

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-purple-800 mb-6">📬 Contact Us</h1>

        <p className="text-lg text-gray-700 mb-8">
          Have questions, suggestions, or feedback? We'd love to hear from you.
        </p>

        <form
          action="https://formspree.io/f/your-form-id"  // optional: use Formspree, Netlify, or leave as dummy
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  )
}
