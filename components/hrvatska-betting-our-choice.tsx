import type { BettingSite } from "@/types"
import { HrvatskaBettingRatingList } from "@/components/hrvatska-betting-rating-list"

interface OurChoiceProps {
  sites: BettingSite[]
}

export function HrvatskaBettingOurChoice({ sites }: OurChoiceProps) {
  const topSite = sites.slice(0, 1)

  return (
    <section className="py-16 px-3 md:px-4  bg-white ">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 p-6">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Preporuka Urednika
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Naš Izbor</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nakon detaljne analize svih aspekata, ovo je naša glavna preporuka za kladionice u Hrvatskoj. Kombinacija
            izvrsnih kvota, širokog izbora sportova i pouzdane usluge čini ovu kladionicu najboljim izborom.
          </p>
        </div>

        <HrvatskaBettingRatingList sites={topSite} />

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  )
}
