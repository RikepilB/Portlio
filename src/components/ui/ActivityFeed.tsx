'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { activity, activityLabels } from '@/data/activity'
import { useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { getProjects } from '@/data/locale'
import { projectHealth } from '@/data/project-health'

export function ActivityFeed({ preview = false }: { preview?: boolean }) {
  const { locale } = useLocale()
  const copy = activityLabels[locale]
  const Heading = preview ? 'h3' : 'h2'
  const [filter, setFilter] = useState<'all' | 'project' | 'release' | 'contribution' | 'idea'>('all')
  const [sound, setSound] = useState(false)
  const [soundError, setSoundError] = useState(false)
  const audio = useRef<AudioContext | null>(null)
  const enabled = useRef(false)

  useEffect(() => () => {
    enabled.current = false
    if (audio.current) void audio.current.close().catch(() => {})
  }, [])

  async function play() {
    if (!enabled.current) return
    try {
      audio.current ??= new AudioContext()
      const context = audio.current
      await context.resume()
      if (!enabled.current || context.state !== 'running') return
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(660, context.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(440, context.currentTime + 0.06)
      gain.gain.setValueAtTime(0.025, context.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.08)
      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start()
      oscillator.stop(context.currentTime + 0.09)
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect() }
    } catch {
      enabled.current = false
      setSound(false)
      setSoundError(true)
    }
  }

  const entries = preview ? activity.filter((entry) => entry.kind === 'release').slice(0, 2) : activity.filter((entry) => filter === 'all' || entry.kind === filter)
  return (
    <div>
      {!preview && (
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-5">
          <div className="flex flex-wrap gap-2" role="group" aria-label={locale === 'es' ? 'Filtrar actividad' : 'Filter activity'}>
            {(['all', 'project', 'release', 'contribution', 'idea'] as const).map((kind) => (
              <button key={kind} type="button" aria-pressed={filter === kind} onClick={() => { setFilter(kind); void play() }} className={`min-h-11 border-b-2 px-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-gold ${filter === kind ? 'border-gold text-gold-bright' : 'border-transparent text-muted hover:text-matte'}`}>
                {kind === 'project' ? (locale === 'es' ? 'Mis proyectos' : 'My projects') : copy[kind]}
              </button>
            ))}
          </div>
          <button type="button" aria-pressed={sound} disabled={soundError} onClick={() => { enabled.current = !sound; setSound(!sound); if (!sound) void play(); else if (audio.current) void audio.current.suspend().catch(() => {}) }} className="min-h-11 px-3 font-mono text-xs text-muted hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold">
            {soundError ? (locale === 'es' ? 'Sonido no disponible' : 'Sound unavailable') : `${locale === 'es' ? 'Sonido' : 'Sound'}: ${sound ? (locale === 'es' ? 'activado' : 'on') : (locale === 'es' ? 'desactivado' : 'off')}`}
          </button>
        </div>
      )}
      <div className="divide-y divide-rule" aria-live="polite">
        {!preview && (filter === 'all' || filter === 'project') && <section className="py-7" aria-labelledby="my-projects">
          <h2 id="my-projects" className="font-display text-3xl text-matte">{locale === 'es' ? 'Mis proyectos' : 'My projects'}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{locale === 'es' ? 'Productos, experimentos y trabajo en equipo. Cada caso detalla mi papel y el estado actual.' : 'Products, experiments, and team work. Each case study describes my role and the current stage.'}</p>
          <div className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {getProjects(locale).filter((project) => ['voidscape', 'findleads', 'peru-tech-map', 'scoutlane-recruitment', 'empenalo-fintech', 'el-umbral'].includes(project.slug)).map((project) => <article key={project.slug} className="border-t border-rule py-5">
              <h3 className="font-display text-2xl text-matte"><Link className="hover:text-gold-bright" href={localePath(locale, `/projects/${project.slug}`)}>{project.title} →</Link></h3>
              <p className="mt-2 text-sm leading-7 text-ink-on-felt">{projectHealth[project.slug].summary[locale]}</p>
            </article>)}
            <article className="border-t border-rule py-5"><h3 className="font-display text-2xl text-matte"><a href="https://canada-research-path-pe.ridi-pillaca.chatgpt.site" target="_blank" rel="noopener noreferrer" className="hover:text-gold-bright">Canada Research Path PE ↗</a></h3><p className="mt-2 text-sm leading-7 text-ink-on-felt">{locale === 'es' ? 'Guía editable de oportunidades de investigación tecnológica entre Perú y Canadá, con fuentes oficiales y fechas por verificar.' : 'An editable guide to technology research opportunities between Peru and Canada, with official sources and dates to verify.'}</p></article>
          </div>
          <Link className="section-link mt-5 inline-flex min-h-11 items-center" href={localePath(locale, '/projects')}>{locale === 'es' ? 'Todos los proyectos' : 'All projects'} →</Link>
        </section>}
        {entries.map((entry) => (
          <article key={entry.id} className="grid gap-3 py-7 md:grid-cols-[150px_1fr] md:gap-8">
            <div className="font-mono text-xs leading-6 text-muted">
              <p>{copy[entry.kind]}</p>
              {entry.date ? <time dateTime={entry.date}>{entry.date}</time> : <span>{copy.undated}</span>}
            </div>
            <div>
              <Heading className="font-display text-2xl leading-tight text-matte"><a className="hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold" href={entry.href} target="_blank" rel="noopener noreferrer">{entry.title[locale]} ↗</a></Heading>
              <p className="mt-3 max-w-[65ch] text-sm leading-7 text-ink-on-felt">{entry.description[locale]}</p>
            </div>
          </article>
        ))}
      </div>
      {preview && <Link className="section-link mt-6 inline-flex min-h-11 items-center" href={localePath(locale, '/activity')}>{copy.more} ↗</Link>}
    </div>
  )
}
