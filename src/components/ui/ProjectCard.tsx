'use client'

import { useCallback, useState, type MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { isComingSoon, type Project } from '@/data/projects'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { cn } from '@/lib/utils'
import { ProjectImagePlaceholder } from '@/components/ui/ProjectImagePlaceholder'

interface ProjectCardProps {
  project: Project
  index?: number
  showActions?: boolean
}

export function ProjectCard({ project, index = 0, showActions = false }: ProjectCardProps) {
  const { locale } = useLocale()
  const dict = useDictionary()
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(project.image) && !imageFailed
  const comingSoon = isComingSoon(project)
  const detailHref = localePath(locale, `/projects/${project.slug}`)
  const detailAria = comingSoon
    ? `${dict.projects.comingSoonAriaPrefix} ${project.title}`
    : `${dict.projects.viewCaseAriaPrefix} ${project.title}`

  const onMove = useCallback((event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    el.style.setProperty('--foil-x', `${Math.max(0, Math.min(100, x))}%`)
  }, [])

  const media = (
    <div className="project-media relative aspect-[16/10] w-full overflow-hidden border border-rule bg-felt-deep">
        {showImage ? (
          <Image
            src={project.image!}
            alt=""
            fill
            priority={index < 2}
            className="object-contain object-center p-3 transition-opacity duration-300 group-hover:opacity-90 md:p-5"
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
  )

  const content = (
    <>
      {showActions ? (
        <Link href={detailHref} aria-label={detailAria} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
          {media}
        </Link>
      ) : media}

      <div className="flex flex-1 flex-col gap-4 py-6">
        <div className="flex items-center justify-between gap-3">
          <span className="flex flex-wrap items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
            {project.category}
            {project.inProgress ? (
              <><span aria-hidden="true">/</span><span className="text-gold-bright">IN PROGRESS</span></>
            ) : null}
          </span>
          <span className="shrink-0 font-mono text-[10.5px] text-muted">{project.duration}</span>
        </div>

        {showActions ? (
          <Link href={detailHref} aria-label={detailAria} className="w-fit hover:text-gold-bright">
            <h2 className="font-display text-[27px] font-medium leading-[1.06] tracking-[-0.025em] text-matte transition-colors md:text-[31px]">
              {project.title}
            </h2>
          </Link>
        ) : (
          <h2 className="font-display text-[27px] font-medium leading-[1.06] tracking-[-0.025em] text-matte md:text-[31px]">{project.title}</h2>
        )}
        <p className="max-w-[58ch] text-sm leading-[1.7] text-ink-on-felt">{project.tagline}</p>

        {showActions && project.stack.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-2 pt-2" aria-label={`${dict.projects.techStackAria}: ${project.title}`}>
            {project.stack.slice(0, 6).map((tech) => (
              <span key={tech} className="rounded border border-rule bg-felt-deep/35 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.05em] text-muted">
                {tech}
              </span>
            ))}
            {project.stack.length > 6 ? (
              <span className="flex items-center px-1 font-mono text-[10px] text-muted">+{project.stack.length - 6}</span>
            ) : null}
          </div>
        ) : project.stack.length > 0 ? (
          <p className="mt-auto pt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.07em] text-muted">
            {project.stack.slice(0, 4).join(' / ')}
            {project.stack.length > 4 ? (
              <span> / +{project.stack.length - 4}</span>
            ) : null}
          </p>
        ) : (
          <div className="mt-auto pt-2" />
        )}

        {showActions ? (
          <nav className="mt-2 flex flex-wrap gap-2 border-t border-rule pt-4" aria-label={`${dict.projects.projectLinksAria}: ${project.title}`}>
            <Link href={detailHref} aria-label={detailAria} className="inline-flex min-h-11 items-center rounded border border-matte bg-matte px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-felt-deep transition-colors hover:border-gold hover:bg-gold">
              {comingSoon ? dict.projects.comingSoonCta : dict.projects.details}
            </Link>
            {project.demoVideo && !project.demoVideo.startsWith('PLACEHOLDER') ? (
              <a href={project.demoVideo} target="_blank" rel="noopener noreferrer" aria-label={`${dict.projects.demo}: ${project.title}`} className="inline-flex min-h-11 items-center rounded border border-gold/50 bg-gold-soft px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-gold-bright transition-colors hover:bg-gold hover:text-felt-deep">
                ↗ {dict.projects.demo}
              </a>
            ) : null}
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${dict.projects.code}: ${project.title}`} className="inline-flex min-h-11 items-center rounded border border-rule bg-felt-deep/35 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-ink-on-felt transition-colors hover:border-gold hover:text-gold-bright">
                ↗ {dict.projects.code}
              </a>
            ) : null}
            {project.codebaseMapUrl ? (
              <a href={project.codebaseMapUrl} target="_blank" rel="noopener noreferrer" aria-label={`${dict.projects.codebase}: ${project.title}`} className="inline-flex min-h-11 items-center rounded border border-rule bg-felt-deep/35 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-ink-on-felt transition-colors hover:border-gold hover:text-gold-bright">
                ↗ {dict.projects.codebase}
              </a>
            ) : null}
          </nav>
        ) : (
          <div className="mt-2 border-t border-rule pt-4">
            <span className="text-link text-[12px]">
              {comingSoon ? dict.projects.comingSoonCta : `${dict.projects.viewCase} →`}
            </span>
          </div>
        )}
      </div>
    </>
  )

  if (showActions) {
    return (
      <article onMouseMove={onMove} className={cn('group relative flex h-full flex-col border-t border-rule pt-4')}>
        {content}
      </article>
    )
  }

  return (
    <Link href={detailHref} aria-label={detailAria} onMouseMove={onMove} className={cn('group relative flex h-full flex-col border-t border-rule pt-4')}>
      {content}
    </Link>
  )
}
