import type { Metadata } from 'next'
import { DM_Sans, Manrope } from 'next/font/google'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { CursorBubble } from '@/components/ui/CursorBubble'
import './globals.css'

/* DM Sans for body and functional text */
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

/* Manrope for elegant, geometric headings */
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Richard Pillaca',
  description:
    'Portfolio of Richard Pillaca Burga — Software & Data Engineer based in Toronto. Building scalable products, data pipelines, and robust software systems.',
  openGraph: {
    title: 'Richard Pillaca',
    description: 'Software & Data projects, scalable solutions, and robust systems — built in Toronto.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-white text-[#1A1A1A] min-h-screen selection:bg-[#10B981]/10 selection:text-[#10B981]">
        <CursorBubble />
        <Nav />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
