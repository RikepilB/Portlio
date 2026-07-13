'use client'

import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const VISION_TABS = [
  { id: 'communities', label: 'Communities' },
  { id: 'exploring', label: 'Exploring' },
  { id: 'beyond-work', label: 'Beyond Work' },
  { id: 'shelf', label: 'Shelf' },
] as const

export type VisionTabId = (typeof VISION_TABS)[number]['id']

export function VisionBoardShell({
  panels,
}: {
  panels: Record<VisionTabId, ReactNode>
}) {
  const [active, setActive] = useState<VisionTabId>('communities')
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="mx-auto w-full max-w-6xl px-2" aria-label="Vision board">
      <div className="flex flex-wrap gap-1.5 border-b border-silver/35 pb-3" role="tablist" aria-label="Vision board sections">
        {VISION_TABS.map((t) => {
          const isActive = t.id === active
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              id={`vision-tab-${t.id}`}
              onClick={() => setActive(t.id)}
              className={cn(
                'rounded-[3px] px-4 py-2 font-display text-[0.8rem] font-extrabold uppercase tracking-[0.14em] transition-colors',
                isActive
                  ? 'bg-anthracite text-mist-ice'
                  : 'text-[#6e7481] hover:bg-mist-soft hover:text-anthracite',
              )}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          aria-labelledby={`vision-tab-${active}`}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="pt-8"
        >
          {panels[active]}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
