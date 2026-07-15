'use client'

import { useCallback, useRef, useState, type MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { cn } from '@/lib/utils'
import { ProjectImagePlaceholder } from '@/components/ui/ProjectImagePlaceholder'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { locale } = useLocale()
  const dict = useDictionary()
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(project.image) && !imageFailed

  const onMove = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = linkRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    el.style.setProperty('--foil-x', `${Math.max(0, Math.min(100, x))}%`)
  }, [])

  return (
    <Link
      ref={linkRef}
      href={localePath(locale, `/projects/${project.slug}`)}
      aria-label={`${dict.projects.viewCaseAriaPrefix} ${project.title}`}
      onMouseMove={onMove}
      className={cn(
        'group felt-panel relative flex h-full flex-col overflow-hidden rounded-2xl p-0 transition-transform duration-300 hover:-translate-y-1'
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-felt-border bg-felt-frame">
        {showImage ? (
          <Image
            src={project.image!}
            alt={project.title}
            fill
            className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <ProjectImagePlaceholder
            title={project.title}
            category={project.category}
            index={index}
            metric={project.results[0]?.metric}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-7 md:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="font-accent text-[13px] uppercase tracking-[0.18em] text-gold-bright italic">
            {project.category}
          </span>
          <span className="font-mono text-xs text-muted">{project.duration}</span>
        </div>

        <h2 className="font-display text-2xl font-bold leading-snug text-matte">{project.title}</h2>
        <p className="text-sm leading-relaxed text-ink-on-felt">{project.tagline}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-rule bg-felt-deep/35 px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 ? (
            <span className="flex items-center px-1 text-xs font-medium text-muted">
              +{project.stack.length - 4}
            </span>
          ) : null}
        </div>

        <div className="mt-4 border-t border-rule pt-5">
          <span className="foil-link text-sm font-semibold">{dict.projects.viewCase} →</span>
        </div>
      </div>
    </Link>
  )
}
