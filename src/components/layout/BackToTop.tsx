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
        'fixed bottom-4 right-4 z-50 inline-flex h-11 w-11 items-center justify-center border font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2.5',
        'border-rule bg-felt-deep/90 text-muted hover:border-gold/40 hover:text-gold-bright',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <span aria-hidden="true">↑</span>
      <span className="sr-only sm:not-sr-only">{dict.home.backToTop}</span>
    </button>
  )
}
