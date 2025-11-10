import Image from "next/image"
import { Trophy } from "lucide-react"
import type { BettingSite } from "@/types"
import Link from "next/link"

interface RatingListProps {
  sites: BettingSite[]
}

export function HrvatskaBettingRatingList({ sites }: RatingListProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      starElements.push(
        <svg key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>,
      )
    }

    return starElements
  }

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return {
        container: "bg-white border-2 border-yellow-400",
        badge: "bg-yellow-400 text-gray-900 border-yellow-500",
        rankText: "TOP IZBOR",
        buttonClass: "bg-yellow-400 hover:bg-yellow-500 text-gray-900",
      }
    } else if (index === 1) {
      return {
        container: "bg-gradient-to-r from-white via-red-50 to-white border-2 border-blue-600",
        badge: "bg-blue-600 text-white border-blue-700",
        rankText: "POPULARAN",
        icon: null,
        buttonClass: "bg-green-600 hover:bg-green-700 text-white",
      }
    } else if (index === 2) {
      return {
        container: "bg-gradient-to-r from-white via-red-50 to-white border-2 border-blue-600",
        badge: "bg-blue-600 text-white border-blue-700",
        rankText: "PREPORUČENO",
        icon: null,
        buttonClass: "bg-green-600 hover:bg-green-700 text-white",
      }
    } else {
      return {
        container: "bg-gradient-to-r from-white via-red-50 to-white border-2 border-blue-600",
        badge: "bg-blue-600 text-white border-blue-700",
        rankText: `#${index + 1}`,
        icon: null,
        buttonClass: "bg-green-600 hover:bg-green-700 text-white",
      }
    }
  }

  return (
    <section className="py-4 md:py-8">
      <div className="container mx-auto px-2 max-w-[1200px]">
        <div className="grid gap-2">
          {sites.map((site, index) => {
            const showBadge = index < 3 && site.badges.length > 0
            const cardStyle = getCardStyle(index)
            const BadgeIcon = cardStyle.icon

            return (
              <div
                key={site.id}
                className={`relative overflow-visible transition-all duration-300 rounded-xl shadow-md mt-4 ${cardStyle.container}`}
              >
                {showBadge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`${cardStyle.badge} px-4 py-2 rounded-full flex items-center gap-2 border-2 shadow-lg`}
                    >
                      <span className="text-xs font-bold uppercase whitespace-nowrap">{cardStyle.rankText}</span>
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block cursor-pointer"
                >
                  <div className="grid grid-cols-[200px_1fr_200px] items-center gap-6 p-6">
                    {/* Логотип */}
                    <div className="flex items-center justify-center bg-black p-2">
                      <div className="relative h-20 w-full ">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center border-l-2 border-r-2 border-black px-6">
                      <p className="text-xs font-bold uppercase mb-2 text-gray-500">BONUS DOBRODOŠLICE</p>
                      <h3 className="text-3xl font-black mb-1 text-black">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-lg font-bold text-black">{site.dopBonus}</p>}
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="text-center">
                        <div className="text-5xl font-black mb-2 text-yellow-400">{site.rating.toFixed(1)}</div>
                        <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-xs text-gray-500">({formatNumber(site.reviews)} recenzija)</p>
                      </div>

                      <button
                        className={`w-full ${cardStyle.buttonClass} font-bold py-3 px-4 rounded-lg text-sm uppercase transition-colors`}
                      >
                        Preuzmite Bonus
                      </button>
                      <span className="text-gray-500 text-xs">Posjetite {site.name}</span>
                    </div>
                  </div>

                  <div className="border-t border-black px-6 py-3 bg-gray-50 rounded-b-xl">
                    <p className="text-xs text-center text-gray-600">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Tablet Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block lg:hidden cursor-pointer"
                >
                  <div className="grid grid-cols-2 min-h-[240px]">
                    <div className="p-6 flex flex-col items-center justify-center border-r-2 border-black">
                      <div className="relative h-20 w-40 mb-4 bg-black p-2">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">{renderStars(site.rating)}</div>
                        <span className="font-black text-2xl text-yellow-400">{site.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-xs text-gray-500">({formatNumber(site.reviews)} recenzija)</p>
                    </div>

                    <div className="p-6 flex flex-col items-center justify-center">
                      <p className="text-xs font-bold uppercase mb-2 text-gray-500">BONUS DOBRODOŠLICE</p>
                      <h3 className="text-2xl font-black text-center mb-2 text-black">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-base font-bold mb-3 text-black">{site.dopBonus}</p>}
                      <button
                        className={`w-full ${cardStyle.buttonClass} font-bold py-3 px-4 rounded-lg text-sm uppercase mb-2 transition-colors`}
                      >
                        Preuzmite Bonus
                      </button>
                      <span className="text-gray-500 text-xs">Posjetite {site.name}</span>
                    </div>
                  </div>

                  <div className="px-6 py-3 border-t border-black bg-gray-50 rounded-b-xl">
                    <p className="text-xs text-center text-gray-600">
                      18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                {/* Mobile Layout */}
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden block cursor-pointer"
                >
                  <div className="grid grid-cols-[40%_60%]">
                    <div className="p-4 flex flex-col items-center justify-center border-r-2 bg-black rounded-lg border-black">
                      <div className="relative h-18 w-32 mb-3 ">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>

                      <div className="flex items-center gap-1 mb-1">
                        <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                        <span className="font-black text-lg text-yellow-400">{site.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-[10px] text-white">({formatNumber(site.reviews)})</p>
                    </div>

                    <div className="p-4 flex flex-col items-center justify-around">
                      <p className="text-[10px] font-bold uppercase mb-1 text-gray-500">BONUS</p>
                      <h3 className="text-lg font-black text-center mb-1 text-black">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-sm  font-bold mb-2 text-black">{site.dopBonus}</p>}
                      <button
                        className={`w-full ${cardStyle.buttonClass} font-bold py-2 px-2 rounded-lg text-[11px] uppercase mb-1 transition-colors`}
                      >
                        Preuzmite
                      </button>
                    </div>
                  </div>

                  <div className="px-4 py-2 border-t border-black bg-gray-50 rounded-b-xl">
                    <p className="text-[10px] text-center text-gray-600">18+ | Igrajte odgovorno</p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
