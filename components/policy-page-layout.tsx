import type { ReactNode } from "react"
import { HrvatskaBettingHeader } from "@/components/hrvatska-betting-header"
import { HrvatskaBettingFooter } from "@/components/hrvatska-betting-footer"
import { HrvatskaCookieBanner } from "@/components/hrvatska-cookie-banner"

interface PolicyPageLayoutProps {
  children: ReactNode
  title: string
  lastUpdated?: string
}

export function PolicyPageLayout({ children, title, lastUpdated }: PolicyPageLayoutProps) {
  return (
    <>
      <HrvatskaBettingHeader />
      <main>
        <div className="relative bg-gradient-to-r from-portugal-green to-portugal-green-light py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2">{title}</h1>
              {lastUpdated && <p className="text-sm text-white/90 text-center">Última atualização: {lastUpdated}</p>}
            </div>
          </div>
        </div>

        <div className="relative min-h-screen bg-gradient-to-b from-white to-amber-50/30">
          <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl border border-portugal-gold/20 p-6 md:p-8 lg:p-10">
              {children}
            </div>
          </div>
        </div>
      </main>
      <HrvatskaBettingFooter />
      <HrvatskaCookieBanner />
    </>
  )
}
