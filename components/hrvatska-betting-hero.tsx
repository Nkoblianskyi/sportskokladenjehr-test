"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./hrvatska-betting-advertiser-modal"
import Image from "next/image"

export function HrvatskaBettingHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative h-[200px] md:h-[280px] overflow-hidden mt-4 w-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-croatia-horizontal opacity-90"></div>

      <div className="container mx-auto w-full relative z-10 px-4 h-full flex items-center justify-center py-2 md:py-3">
        <div className="w-full bg-black/60 backdrop-blur-md p-3 md:p-6 rounded-xl border-2 border-croatia-red/50 shadow-2xl text-center">
          <div className="mb-1 md:mb-2 flex items-center justify-center gap-2">
            <div className="w-1 h-4 md:h-6 bg-gradient-to-b from-croatia-red via-white to-croatia-blue"></div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-sports-gold">
              Profesionalna analiza 2025
            </span>
            <div className="w-1 h-4 md:h-6 bg-gradient-to-b from-croatia-blue via-white to-croatia-red"></div>
          </div>

          <h1 className="text-xl md:text-4xl lg:text-5xl font-black text-white mb-2 md:mb-3 leading-tight">
            Top <span className="text-croatia-red">Kladionice</span> u{" "}
            <span className="text-croatia-blue">Hrvatskoj</span>
          </h1>

          <div className="flex gap-2 md:gap-3 mb-2 md:mb-3 justify-center">
            <div className="w-16 md:w-24 h-1 bg-croatia-red"></div>
            <div className="w-10 md:w-16 h-1 bg-white"></div>
            <div className="w-16 md:w-24 h-1 bg-croatia-blue"></div>
          </div>

          <p className="text-white text-xs md:text-base leading-relaxed mb-2 md:mb-3 font-medium max-w-2xl mx-auto">
            Ekskluzivni ranking licenciranih sportskih kladionica. Provjerene isplate, vrhunski bonusi, najbolje kvote.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm">
            <div className="flex items-center gap-2 bg-red-600 px-2 py-1 md:px-3 md:py-2 rounded-lg font-bold shadow-lg">
              <span className="text-white text-base md:text-xl">18+</span>
            </div>
            <span className="text-white/40">|</span>
            <div className="flex items-center gap-2 bg-green-600 px-2 py-1 md:px-3 md:py-2 rounded-lg shadow-lg">
              <Image src="/srij-new.svg" width={24} height={16} alt="HR" className="rounded-sm md:w-5 md:h-4" />
              <span className="text-white font-semibold">100% Licencirano</span>
            </div>
            <span className="text-white/40">|</span>
            <span className="text-white font-medium text-xs md:text-sm">
              {new Date().toLocaleDateString("hr-HR", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="text-white/40 hidden md:inline">|</span>
            <button
              onClick={openModal}
              className="text-sports-gold hover:text-white transition-colors underline decoration-dotted underline-offset-2 hidden md:inline font-medium"
            >
              Info o oglašavanju
            </button>
          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
