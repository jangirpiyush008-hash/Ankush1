import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { grantConsent, denyConsent, getStoredConsent } from '../utils/analytics.js'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      const stored = getStoredConsent()
      if (!stored) setVisible(true)
      if (stored === 'granted') grantConsent()
    }, 600)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:pb-6 sm:px-6 transition-transform duration-300"
    >
      <div className="max-w-4xl mx-auto bg-ink text-ivory rounded-2xl shadow-editorial border border-ivory/10 p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-ivory text-ink font-display flex items-center justify-center flex-none" aria-hidden="true">♛</div>
        <p className="text-sm text-ivory/85 flex-1">
          We use cookies for essential site functions and, with your permission, anonymous analytics to improve our chess articles.
          Read our <Link to="/legal/privacy" className="link-underline text-ivory">Privacy Policy</Link>.
        </p>
        <div className="flex items-center gap-2 flex-none">
          <button
            type="button"
            onClick={() => { denyConsent(); setVisible(false) }}
            className="text-sm px-4 py-2 rounded-full border border-ivory/25 hover:bg-ivory/10 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => { grantConsent(); setVisible(false) }}
            className="text-sm px-4 py-2 rounded-full bg-ivory text-ink hover:bg-goldSoft transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
