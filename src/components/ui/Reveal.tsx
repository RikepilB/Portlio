'use client'

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  delayMs?: number
  className?: string
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY)
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function isInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  return rect.top < vh * 0.92 && rect.bottom > 0
}

export function Reveal({ children, delayMs = 0, className }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )
  const [isRevealed, setIsRevealed] = useState(false)
  const visible = prefersReducedMotion || isRevealed

  useEffect(() => {
    if (prefersReducedMotion) return

    const element = elementRef.current
    if (!element) return

    // Route transitions remount content; if already on-screen, reveal on the
    // next frame so IntersectionObserver races don't leave opacity-0 stuck.
    if (isInViewport(element)) {
      const frame = requestAnimationFrame(() => setIsRevealed(true))
      return () => cancelAnimationFrame(frame)
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
  }, [prefersReducedMotion])

  return (
    <div
      ref={elementRef}
      className={cn(visible ? 'animate-fade-up' : 'opacity-0', className)}
      style={visible && delayMs > 0 ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
