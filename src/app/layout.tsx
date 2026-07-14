import type { Metadata } from 'next'
import { Manrope, Montserrat, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://richardpillaca.com'),
  title: 'Richard Pillaca',
  description:
    'Portfolio of Richard Pillaca Burga — Software & Data Engineer based in Toronto.',
  openGraph: {
    title: 'Richard Pillaca',
    description: 'Software & Data projects, scalable solutions, and robust systems — built in Toronto.',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 955,
        height: 726,
        alt: 'Richard Pillaca — Software & Data Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Pillaca',
    description: 'Software & Data projects, scalable solutions, and robust systems — built in Toronto.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${montserrat.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-felt text-matte min-h-screen">
        <GrainOverlay />
        {children}
      </body>
    </html>
  )
}
