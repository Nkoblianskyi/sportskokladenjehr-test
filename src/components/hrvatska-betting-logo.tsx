import Link from "next/link"
import Image from "next/image"

export function HrvatskaBettingLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/favicon.ico" alt="sportskokladenjehr Logo" width={32} height={32} />
      <div className="flex items-center gap-1 text-xl md:text-2xl font-bold uppercase tracking-tight">
        <span className="text-croatia-red">SPORTSKO</span>
        <span className="text-croatia-blue">KLAĐENJE</span>
        <span className="text-croatia-red">HR</span>
      </div>
    </Link>
  )
}
