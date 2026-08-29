'use client'

import Link from 'next/link'
import type { Essay } from '@/data/essays'
import { useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { formatDate } from '@/lib/utils'

interface EssayCardProps {
  essay: Essay
}

export function EssayCard({ essay }: EssayCardProps) {
  const { locale } = useLocale()

  return (
    <Link
      href={localePath(locale, `/essays/${essay.slug}`)}
      aria-label={`Read essay: ${essay.title}`}
      className="group -mx-3 flex flex-col gap-2 rounded-lg border-b border-rule px-3 py-5 last:border-b-0 hover:bg-felt-deep/20"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold leading-snug text-matte transition-colors duration-150 group-hover:text-gold-bright">
          {essay.title}
        </h3>
        <span className="mt-0.5 shrink-0 font-mono text-xs text-muted">{essay.readTime}</span>
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-ink-on-felt">{essay.excerpt}</p>
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-muted">{formatDate(essay.date)}</span>
        <span className="text-muted-2">·</span>
        {essay.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded border border-rule bg-felt-deep/35 px-1.5 py-0.5 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
