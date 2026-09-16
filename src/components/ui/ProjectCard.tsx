'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { isComingSoon, type Project } from '@/data/projects'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { ProjectImagePlaceholder } from '@/components/ui/ProjectImagePlaceholder'
import { projectHealth } from '@/data/project-health'

interface ProjectCardProps {
  project: Project
  index?: number
  showActions?: boolean
}

export function ProjectCard({ project, index = 0, showActions = false }: ProjectCardProps) {
  const { locale } = useLocale()
  const dict = useDictionary()
  const [imageFailed, setImageFailed] = useState(false)
  const health = projectHealth[project.slug]
  const href = localePath(locale, `/projects/${project.slug}`)
  const title = project.title.split(' — ')[0]
  const Heading = showActions ? 'h3' : 'h2'
  const comingSoon = isComingSoon(project)
  const demo = project.slug !== 'findleads' && !project.demoVideo?.startsWith('PLACEHOLDER') ? health?.url ?? project.demoVideo : undefined
  const content = <>
    <div className="project-media relative aspect-[16/10] overflow-hidden border border-rule bg-felt-deep transition-colors duration-300 group-hover:border-gold/60 group-focus-within:border-gold/60">
      {project.image && !imageFailed ? <Image src={project.image} alt="" fill priority={index < 2} className="object-contain object-center p-3 transition-[filter] duration-300 group-hover:brightness-110 md:p-5" sizes="(max-width: 768px) 100vw, 50vw" onError={() => setImageFailed(true)} /> : <ProjectImagePlaceholder title={project.title} category={project.category} index={index} metric={project.results[0]?.metric} />}
      <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-rule bg-felt-deep text-gold-bright transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none">↗</span>
    </div>
    <div className="pt-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <Heading className="font-display text-[28px] leading-tight text-matte transition-colors group-hover:text-gold-bright">{title}</Heading>
        <span className="font-mono text-[10px] text-muted">{health?.stage[locale] ?? project.category}</span>
      </div>
      <p className="mt-2 max-w-[55ch] text-sm leading-6 text-ink-on-felt">{project.blurb ?? project.tagline}</p>
    </div>
  </>

  if (!showActions) return <Link href={href} aria-label={`${dict.projects.viewCaseAriaPrefix} ${project.title}`} className="group block h-full pb-4">{content}</Link>

  return <article className="group flex h-full flex-col">
    <Link href={href} aria-label={`${dict.projects.viewCaseAriaPrefix} ${project.title}`} className="block">{content}</Link>
    <div className="mt-auto flex flex-wrap items-start justify-between gap-4 pt-4">
      <Link href={href} className="inline-flex min-h-11 items-center text-xs text-gold-bright">{comingSoon ? dict.projects.comingSoonCta : dict.projects.details} ↗</Link>
      <details className="quiet-disclosure max-w-full flex-1 text-right">
        <summary className="ml-auto flex min-h-11 w-fit cursor-pointer items-center gap-3 text-xs text-muted">{locale === 'es' ? 'Stack y enlaces' : 'Stack & links'}<span className="disclosure-mark" aria-hidden="true">+</span></summary>
        <div className="disclosure-body border-t border-rule py-4 text-left">
          {health && <p className="mb-3 text-xs leading-6 text-muted">{health.summary[locale]}</p>}
          <p className="font-mono text-[10px] leading-6 text-muted">{project.stack.join(' · ')}</p>
          <div className="mt-3 flex flex-wrap gap-x-5">
            {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-xs text-gold-bright">{health?.availability[locale] ?? dict.projects.demo} ↗</a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-xs text-gold-bright">{dict.projects.code} ↗</a>}
            {project.codebaseMapUrl && <a href={project.codebaseMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-xs text-gold-bright">{dict.projects.codebase} ↗</a>}
          </div>
        </div>
      </details>
    </div>
  </article>
}
