import React from 'react'
import { FaRegSadTear } from 'react-icons/fa'

const NotFound = () => {
  const goHome = () => {
    // Prefer react-router if available, otherwise fallback to location
    if (window.history.length > 1) return window.history.back()
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-3xl w-full px-6 py-12 text-center">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-white/10 mb-6">
          <FaRegSadTear className="w-12 h-12 text-white/90" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Page not found</h1>
        <p className="text-lg text-gray-200/90 mb-6">We couldn't find the page you're looking for. It may have been moved or removed.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={goHome}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
          >
            Go back
          </button>

          <a
            href="/"
            className="px-6 py-3 border border-white/20 rounded-lg text-white/90 hover:bg-white/5 transition"
          >
            Take me home
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-400">If you think this is an error, contact support@yourdomain.com</p>
      </div>
    </div>
  )
}

export default NotFound