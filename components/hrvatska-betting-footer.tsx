"use client"

import Link from "next/link"
import Image from "next/image"

export function HrvatskaBettingFooter() {
  return (
    <footer className="bg-white text-gray-900 border-t-2 border-gray-200">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">O nama</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              sportskokladenjehr je vaš pouzdani vodič kroz svijet online klađenja u Hrvatskoj. Pružamo stručne
              recenzije i usporedbe najboljih kladionica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  O nama
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">Pravne informacije</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Politika kolačića
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gambling Organizations */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>

            <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link href="https://www.hupis.hr/klok" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/hupis.png" alt="hupis" fill className="object-contain" />
              </div>
            </Link>

            <Link href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] rounded px-2 py-1">
                <Image src="/pbsvi.svg" alt="pbsvi" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} sportskokladenjehr.com. Sva prava pridržana. Klađenje može izazvati ovisnost.
            18+
          </p>
        </div>
      </div>
    </footer>
  )
}

export default HrvatskaBettingFooter
