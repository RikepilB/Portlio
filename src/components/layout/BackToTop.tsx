'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useDictionary } from '@/contexts/LocaleContext'
import { cn } from '@/lib/utils'

const SCROLL_THRESHOLD = 320

export function BackToTop() {
  const dict = useDictionary()
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={dict.home.backToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md transition-all duration-300',
        'border-rule bg-felt-deep/90 text-muted hover:border-gold/40 hover:text-gold-bright',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-rule-2 transition-colors" aria-hidden="true" />
      ↑ {dict.home.backToTop}
    </button>
  )
}
