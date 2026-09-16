import { projectHealth } from '@/data/project-health'
import type { Locale } from '@/i18n/config'

export function ProjectHealth({ slug, locale }: { slug: string; locale: Locale }) {
  const health = projectHealth[slug]
  if (!health) return null
  return (
    <div className="border-l-2 border-gold/50 pl-4">
      <p className="font-mono text-xs text-gold-bright">{health.stage[locale]}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-on-felt">{health.summary[locale]}</p>
      {health.url && <a href={health.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-sm text-gold-bright underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-gold">{health.availability[locale]} ↗</a>}
      <p className="mt-2 font-mono text-[10px] text-muted">
        {locale === 'es' ? 'Estado documentado' : 'Status documented'} <time dateTime={health.checked}>{health.checked}</time>
      </p>
    </div>
  )
}
