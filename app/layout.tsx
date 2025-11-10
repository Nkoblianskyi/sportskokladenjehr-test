import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald, Roboto_Condensed } from "next/font/google"
import "./globals.css"
import { HrvatskaCookieBanner } from "@/components/hrvatska-cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
})

const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
})

export const metadata: Metadata = {
  title: "Sportsko Klađenje Hrvatska - Najbolje Kladionice 2025 | sportskokladenjehr.com",
  description:
    "Stručne recenzije najboljih stranica za sportsko klađenje u Hrvatskoj 2025. Usporedite bonuse, kvote i sigurnost licenciranih kladionica. Odgovorno klađenje 18+.",
  keywords: [
    "sportsko klađenje hrvatska",
    "kladionice hrvatska 2025",
    "online klađenje hrvatska",
    "najbolje kladionice",
    "sportsko klađenje",
    "nogometno klađenje hrvatska",
    "bonusi kladionice",
    "legalne kladionice hrvatska",
    "usporedba kladionica",
    "sigurno klađenje",
    "odgovorno klađenje",
    "licencirane kladionice",
  ],
  authors: [{ name: "sportskokladenjehr.com" }],
  creator: "sportskokladenjehr.com",
  publisher: "sportskokladenjehr.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://sportskokladenjehr.com",
    siteName: "sportskokladenjehr.com",
    title: "Sportsko Klađenje Hrvatska - Najbolje Kladionice 2025",
    description:
      "Stručne recenzije najboljih stranica za sportsko klađenje u Hrvatskoj. Usporedite bonuse, kvote i sigurnost licenciranih kladionica.",
    images: [
      {
        url: "https://sportskokladenjehr.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sportsko Klađenje Hrvatska",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sportsko Klađenje Hrvatska - Najbolje Kladionice 2025",
    description: "Stručne recenzije najboljih stranica za sportsko klađenje u Hrvatskoj.",
    images: ["https://sportskokladenjehr.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sportskokladenjehr.com",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#EF4444" />
        <link rel="canonical" href="https://sportskokladenjehr.com" />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} ${robotoCondensed.variable} font-sans`}
      >
        <div className="min-h-screen"
        >
          {children}
          <HrvatskaCookieBanner />
        </div>
      </body>
    </html>
  )
}
