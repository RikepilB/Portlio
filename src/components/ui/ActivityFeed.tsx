'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { activity, activityLabels, activityProjectSlugs, additionalActivityProjects } from '@/data/activity'
import { useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { getProjects } from '@/data/locale'
import { projectHealth } from '@/data/project-health'

export function ActivityFeed({ preview = false }: { preview?: boolean }) {
  const { locale } = useLocale()
  const es = locale === 'es'
  const copy = activityLabels[locale]
  const Heading = preview ? 'h3' : 'h2'
  const [filter, setFilter] = useState<'all' | 'project' | 'release' | 'contribution' | 'idea' | 'post'>('all')
  const projects = getProjects(locale).filter((project) => activityProjectSlugs.includes(project.slug))
  const entries = preview
    ? [...activity.filter((entry) => entry.kind === 'release').slice(0, 2), ...activity.filter((entry) => entry.kind === 'contribution').slice(0, 1)]
    : activity.filter((entry) => filter === 'all' || entry.kind === filter)

  return <div>
    {!preview && <div className="mb-5 flex flex-wrap gap-x-5 gap-y-1 border-b border-rule" role="group" aria-label={es ? 'Filtrar actividad' : 'Filter activity'}>
      {(['all', 'project', 'release', 'contribution', 'idea', 'post'] as const).map((kind) => {
        const count = kind === 'project' ? projects.length + additionalActivityProjects.length : kind === 'all' ? activity.length + projects.length + additionalActivityProjects.length : activity.filter((item) => item.kind === kind).length
        return <button key={kind} type="button" aria-pressed={filter === kind} onClick={() => setFilter(kind)} className={`min-h-12 border-b-2 text-sm transition-colors ${filter === kind ? 'border-gold text-gold-bright' : 'border-transparent text-muted hover:text-matte'}`}>
          {kind === 'project' ? (es ? 'Proyectos' : 'Projects') : copy[kind]} <span aria-hidden="true" className="ml-1 font-mono text-[10px] opacity-60">{count}</span>
        </button>
      })}
    </div>}
    <div key={filter} className="index-enter" aria-live="polite">
      {!preview && (filter === 'all' || filter === 'project') && <section className="mb-8" aria-labelledby="my-projects">
        <h2 id="my-projects" className="sr-only">{es ? 'Mis proyectos' : 'My projects'}</h2>
        <div className="grid gap-x-10 sm:grid-cols-2">
          {projects.map((project) => <Link key={project.slug} href={localePath(locale, `/projects/${project.slug}`)} className="index-row group flex min-w-0 items-center gap-4 border-b border-rule py-5">
            {project.image && <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded border border-rule bg-felt-deep"><Image src={project.image} alt="" fill sizes="80px" className="object-contain p-1 transition-opacity group-hover:opacity-80" /></div>}
            <div className="min-w-0 flex-1"><h3 className="font-display text-2xl leading-tight text-matte">{project.title.split(' — ')[0]}</h3><p className="mt-1 text-[11px] leading-5 text-muted">{projectHealth[project.slug].stage[locale]}</p></div>
            <span className="index-arrow text-gold-bright" aria-hidden="true">↗</span>
          </Link>)}
          {additionalActivityProjects.map((project) => <details key={project.href} className="quiet-disclosure border-b border-rule py-2">
            <summary className="flex min-h-20 cursor-pointer items-center justify-between gap-4"><h3 className="font-display text-2xl text-matte">{project.title}</h3><span className="disclosure-mark text-gold-bright" aria-hidden="true">+</span></summary>
            <div className="disclosure-body pb-4"><p className="text-sm leading-7 text-muted">{project.description[locale]}</p><a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm text-gold-bright">{es ? 'Explorar guía' : 'Explore guide'} ↗</a></div>
          </details>)}
        </div>
        <Link className="section-link mt-4 inline-flex min-h-11 items-center" href={localePath(locale, '/projects')}>{es ? 'Todos los proyectos' : 'All projects'} ↗</Link>
      </section>}
      <div className="divide-y divide-rule">
        {entries.map((entry) => <details key={entry.id} className="quiet-disclosure group">
          <summary className="grid min-h-20 cursor-pointer grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 py-5 md:grid-cols-[110px_1fr_auto]">
            <span className="col-span-2 font-mono text-[10px] text-muted md:col-span-1">{copy[entry.kind]}</span>
            <Heading className="font-display text-[23px] leading-tight text-matte transition-colors group-hover:text-gold-bright md:text-[27px]">{entry.title[locale]}</Heading>
            <span className="disclosure-mark text-gold-bright" aria-hidden="true">+</span>
          </summary>
          <div className="disclosure-body max-w-2xl pb-6 md:ml-[130px]">
            <p className="text-sm leading-7 text-ink-on-felt">{entry.description[locale]}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-6">{entry.href && <a href={entry.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-xs text-gold-bright">{copy.open} ↗</a>}{entry.date && <time className="font-mono text-[10px] text-muted" dateTime={entry.date}>{entry.date}</time>}</div>
          </div>
        </details>)}
      </div>
    </div>
    {preview && <Link className="section-link mt-5 inline-flex min-h-11 items-center" href={localePath(locale, '/activity')}>{copy.more} ↗</Link>}
  </div>
}
