import { cn } from '@/lib/utils'

interface ProjectImagePlaceholderProps {
  title: string
  category: string
  index?: number
  metric?: string
  className?: string
}

/** Designed felt-panel placeholder when a project has no screenshot. */
export function ProjectImagePlaceholder({
  title,
  category,
  index = 0,
  metric,
  className,
}: ProjectImagePlaceholderProps) {
  const initials = title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col justify-between overflow-hidden bg-felt-frame p-6',
        className
      )}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 project-placeholder-wash opacity-90" />
      <div className="pointer-events-none absolute -right-8 top-1/4 h-24 w-[140%] -rotate-12 project-placeholder-stripe opacity-30" />
      <div className="relative z-[1] flex items-start justify-between">
        <span className="font-mono text-[11px] tabular-nums text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-gold-soft font-display text-sm font-bold tracking-wide text-gold-bright">
          {initials || 'RP'}
        </span>
      </div>

      <div className="relative z-[1] space-y-2">
        <p className="font-accent text-sm italic tracking-[0.08em] text-gold-bright">{category}</p>
        <p className="line-clamp-2 font-display text-xl font-bold leading-snug text-matte">{title}</p>
        {metric ? (
          <p className="font-display text-2xl font-bold text-foil">{metric}</p>
        ) : (
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Case study</p>
        )}
      </div>
    </div>
  )
}
