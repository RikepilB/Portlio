'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  delayMs?: number
  className?: string
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  return rect.top < vh * 0.92 && rect.bottom > 0
}

export function Reveal({ children, delayMs = 0, className }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const element = elementRef.current
    if (!element) return

    // Route transitions remount content; if already on-screen, reveal immediately
    // so IntersectionObserver races don't leave sections stuck at opacity-0.
    if (isInViewport(element)) {
      setIsRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsRevealed(true)
        observer.disconnect()
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={cn(isRevealed ? 'animate-fade-up' : 'opacity-0', className)}
      style={isRevealed && delayMs > 0 ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
