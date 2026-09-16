'use client'

import Link from 'next/link'
import type { Essay } from '@/data/essays'
import { useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { formatDate } from '@/lib/utils'

interface EssayCardProps {
  essay: Essay
}

export function EssayCard({ essay, compact = false }: EssayCardProps & { compact?: boolean }) {
  const { locale } = useLocale()

  return (
    <Link
      href={localePath(locale, `/essays/${essay.slug}`)}
      aria-label={essay.title}
      className="group grid gap-4 border-t border-rule py-7 md:grid-cols-[120px_1fr_auto] md:items-start md:gap-8"
    >
      <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">{formatDate(essay.date)}</span>
      <div>
        <h3 className="m-0 font-display text-[24px] font-medium leading-[1.08] tracking-[-0.02em] text-matte transition-colors duration-150 group-hover:text-gold-bright md:text-[28px]">
          {essay.title}
        </h3>
        {!compact && <p className="mb-0 mt-3 line-clamp-2 max-w-[60ch] text-sm leading-[1.7] text-ink-on-felt">{essay.excerpt}</p>}
        {!compact && <p className="mb-0 mt-4 font-mono text-[10px] uppercase tracking-[0.07em] text-muted">
          {essay.tags.slice(0, 3).join(' / ')}
        </p>}
      </div>
      <span className="shrink-0 font-mono text-[10.5px] uppercase tracking-[0.07em] text-muted">{essay.readTime}</span>
    </Link>
  )
}
