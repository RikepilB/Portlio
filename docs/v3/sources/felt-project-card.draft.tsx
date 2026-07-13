/**
 * Reference draft — FeltProjectCard visual language.
 * Immutable source input. Do not import into the app.
 * Live implementation: src/components/ui/ProjectCard.tsx
 */
'use client'

import { useRef } from 'react'
import Link from 'next/link'

export function FeltProjectCardDraft({
  category,
  title,
  href,
}: {
  category: string
  title: string
  href: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  return (
    <div className="rounded-2xl border border-white/10 bg-[#607466] p-8 shadow-2xl">
      <p className="font-serif text-sm italic uppercase tracking-[0.18em] text-[#F2E3C6]">
        {category}
      </p>
      <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
      <Link
        ref={ref}
        href={href}
        className="mt-6 inline-block bg-gradient-to-br from-[#F2E3C6] via-[#D4AF37] to-[#AA7C11] bg-clip-text font-semibold text-transparent"
        onMouseMove={(e) => {
          const el = ref.current
          if (!el) return
          const rect = el.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          el.style.setProperty('--foil-x', `${x}%`)
        }}
      >
        View case analysis →
      </Link>
    </div>
  )
}
