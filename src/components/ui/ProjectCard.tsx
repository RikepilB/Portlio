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

    {project.stack.length > 0 && (
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${dict.projects.techStackAria}: ${project.title}`}>
        {project.stack.slice(0, 6).map((tech) => (
          <li key={tech} className="rounded border border-rule bg-felt-deep/35 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.05em] text-muted">{tech}</li>
        ))}
        {project.stack.length > 6 && (
          <li className="flex items-center px-1 font-mono text-[10px] text-muted">+{project.stack.length - 6}</li>
        )}
      </ul>
    )}

    <nav data-sound-zone="project" className="mt-auto flex flex-wrap gap-2.5 pt-5" aria-label={`${dict.projects.projectLinksAria}: ${project.title}`}>
      <Link href={href} className="work-btn work-btn-details">
        {comingSoon ? dict.projects.comingSoonCta : dict.projects.details}
      </Link>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${dict.projects.code}: ${project.title}`} className="work-btn work-btn-code">
          {dict.projects.code} <span className="work-btn-arrow" aria-hidden="true">↗</span>
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`${health?.availability[locale] ?? dict.projects.demo}: ${project.title}`} className="work-btn work-btn-demo">
          {health?.availability[locale] ?? dict.projects.demo} <span className="work-btn-arrow" aria-hidden="true">↗</span>
        </a>
      )}
    </nav>
  </article>
}
