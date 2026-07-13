'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * App Router `template.tsx` remounts on every navigation, so the enter
 * animation fires reliably and the incoming page always renders. This replaces
 * an `AnimatePresence mode="wait"` in the (persistent) layout, which left the
 * new page stuck at opacity:0 until a second interaction.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname])

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
