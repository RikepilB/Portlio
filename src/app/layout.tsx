import type { Metadata } from 'next'
import { Geist, Newsreader, JetBrains_Mono } from 'next/font/google'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
    <html lang="en" className={`${geist.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#f8f9fa] text-[#1A1A1A] min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
