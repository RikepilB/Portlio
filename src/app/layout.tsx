import type { Metadata } from 'next'
import { Manrope, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
    'Portfolio of Richard Pillaca Burga — a full-stack engineer with a frontend and AI focus, based in Toronto.',
  openGraph: {
    title: 'Richard Pillaca',
    description: 'Full-stack, frontend & AI engineering — scalable products and robust systems, built in Toronto.',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 955,
        height: 726,
        alt: 'Richard Pillaca — Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Pillaca',
    description: 'Full-stack, frontend & AI engineering — scalable products and robust systems, built in Toronto.',
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
      className={`${manrope.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased bg-felt text-matte min-h-screen"
        suppressHydrationWarning
      >
        <GrainOverlay />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
