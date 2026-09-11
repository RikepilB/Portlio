'use client'

import { useCallback, useRef, useState, type MouseEvent } from 'react'
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
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { locale } = useLocale()
  const dict = useDictionary()
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(project.image) && !imageFailed
  const comingSoon = isComingSoon(project)

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
      aria-label={
        comingSoon
          ? `${dict.projects.comingSoonAriaPrefix} ${project.title}`
          : `${dict.projects.viewCaseAriaPrefix} ${project.title}`
      }
      onMouseMove={onMove}
      className={cn('group relative flex h-full flex-col border-t border-rule pt-4')}
    >
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

        <h2 className="font-display text-[27px] font-medium leading-[1.06] tracking-[-0.025em] text-matte md:text-[31px]">{project.title}</h2>
        <p className="max-w-[58ch] text-sm leading-[1.7] text-ink-on-felt">{project.tagline}</p>

        {project.stack.length > 0 ? (
          <p className="mt-auto pt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.07em] text-muted">
            {project.stack.slice(0, 4).join(' / ')}
            {project.stack.length > 4 ? (
              <span> / +{project.stack.length - 4}</span>
            ) : null}
          </p>
        ) : (
          <div className="mt-auto pt-2" />
        )}

        <div className="mt-2 border-t border-rule pt-4">
          <span className="text-link text-[12px]">
            {comingSoon ? dict.projects.comingSoonCta : `${dict.projects.viewCase} →`}
          </span>
        </div>
      </div>
    </Link>
  )
}
