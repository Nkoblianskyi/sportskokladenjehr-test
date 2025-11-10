"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function HrvatskaCookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-journal-charcoal border-t-2 border-journal-gold shadow-2xl">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-journal-white font-serif font-bold text-lg mb-2">Kolačići i Privatnost</h3>
            <p className="text-journal-white/90 text-sm leading-relaxed">
              Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našoj stranici. Prihvaćanjem kolačića pristajete
              na našu{" "}
              <Link href="/cookie-policy" className="text-journal-gold hover:underline">
                Politiku kolačića
              </Link>{" "}
              i{" "}
              <Link href="/privacy-policy" className="text-journal-gold hover:underline">
                Politiku privatnosti
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-6 py-3 bg-journal-gray hover:bg-journal-gray/80 text-journal-white font-semibold rounded transition-colors text-sm"
            >
              Odbij
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-3 bg-journal-gold hover:bg-journal-gold/90 text-journal-charcoal font-bold rounded transition-colors text-sm"
            >
              Prihvati sve
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
