"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function HrvatskaBettingTopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore")

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < maxStars) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
      } else {
        starElements.push(<Star key={i} className="h-5 w-5 text-gray-300" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[480px] p-0 bg-white border-2 border-yellow-400 shadow-2xl">
        <div className="relative bg-white px-6 py-4 border-b border-black">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-600 hover:text-black transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-black text-xs uppercase tracking-widest font-bold rounded-full mb-2">
              Najbolja Ponuda Dana
            </div>
          </div>
        </div>

        <div className="bg-white px-6 py-6">
          {/* Logo and site name */}
          <div className="flex flex-col items-center justify-center gap-4 mb-5 pb-5 border-b border-black">
            <div className="relative bg-white p-2 h-32 w-56 rounded border border-gray-300 overflow-hidden">
              <Image
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name}
                fill
                className="object-contain p-2 max-w-[95%] mx-auto"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mt-1">
                {renderStars(topSite.stars)}
                <span className="text-xl font-semibold text-yellow-400 ml-1">{topSite.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-600">({topSite.reviews})</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border border-black rounded p-5 text-center mb-5">
            <div className="text-xs uppercase tracking-wide text-gray-600 font-semibold mb-2">Bonus Dobrodošlice</div>
            <div className="font-bold text-2xl text-black leading-tight mb-1">{topSite.bonus}</div>
            {topSite.dopBonus && (
              <div className="text-sm text-black mt-2 pt-2 border-t border-gray-300">{topSite.dopBonus}</div>
            )}
          </div>

          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black text-base font-bold rounded text-center transition-all shadow-md hover:shadow-lg mb-4"
            onClick={() => setIsOpen(false)}
          >
            Preuzmite Bonus
          </a>

          <div className="text-center pt-3 border-t border-black">
            <p className="text-xs text-gray-600 leading-relaxed">
              +18 | Primjenjuju se Uvjeti i Odredbe | Kockajte se Odgovorno
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
