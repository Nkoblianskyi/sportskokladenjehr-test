"use client"
import { HrvatskaBettingLogo } from "./hrvatska-betting-logo"
import { useState } from "react"

export function HrvatskaBettingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 md:h-16 items-center justify-center relative">
          {/* Centered Logo */}
          <HrvatskaBettingLogo />
        </div>
      </div>
    </header>
  )
}

export default HrvatskaBettingHeader
