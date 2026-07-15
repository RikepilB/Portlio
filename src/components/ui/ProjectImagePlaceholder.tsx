import { cn } from '@/lib/utils'

interface ProjectImagePlaceholderProps {
  title: string
  category: string
  className?: string
}

/** Designed felt-panel placeholder when a project has no screenshot. */
export function ProjectImagePlaceholder({
  title,
  category,
  className,
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col justify-end overflow-hidden bg-felt-frame p-6',
        className
      )}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 project-placeholder-wash opacity-90" />
      <div className="pointer-events-none absolute -right-8 top-1/4 h-24 w-[140%] -rotate-12 project-placeholder-stripe opacity-30" />

      <div className="relative z-[1] space-y-2">
        <p className="font-accent text-sm italic tracking-[0.08em] text-gold-bright">{category}</p>
        <p className="line-clamp-3 font-display text-xl font-bold leading-snug text-matte">{title}</p>
      </div>
    </div>
  )
}
