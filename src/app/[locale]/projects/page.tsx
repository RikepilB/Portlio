'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { getProjects } from '@/data/locale'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { cn } from '@/lib/utils'
import {
  DISCIPLINE_KEYS,
  projectMatchesDisciplineKey,
  type DisciplineKey,
} from '@/lib/disciplines'

type FilterKey = 'all' | DisciplineKey

export default function ProjectsPage() {
  const { locale } = useLocale()
  const dict = useDictionary()
  const [active, setActive] = useState<FilterKey>('all')
  const prefersReducedMotion = useReducedMotion()

  const projects = useMemo(() => getProjects(locale), [locale])

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: dict.projects.filterAll },
    ...DISCIPLINE_KEYS.map((key, i) => ({
      key,
      label: dict.projects.disciplines[i],
    })),
  ]

  const filtered = projects.filter((p) => projectMatchesDisciplineKey(p.category, active))

  const sorted = [...filtered].sort((a, b) => {
    const getLatestYear = (d: string) => {
      const years = d.match(/\d{4}/g)
      return years ? parseInt(years[years.length - 1]) : 0
    }
    const yearDiff = getLatestYear(b.duration) - getLatestYear(a.duration)
    if (yearDiff !== 0) return yearDiff
    const months = [
      'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
      'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
    ]
    const getLatestMonth = (d: string) => {
      const found = d.toLowerCase().match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|ene|abr|ago|dic)\b/g)
      if (!found || found.length === 0) return 0
      return months.indexOf(found[found.length - 1]) + 1
    }
    return getLatestMonth(b.duration) - getLatestMonth(a.duration)
  })

  return (
    <div className="min-h-screen bg-felt">
      <div className="side-light" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-16 sm:px-12">
        <h1 className="mb-4 animate-fade-up font-display text-4xl font-bold tracking-[0.08em] text-matte sm:text-5xl">
          {dict.projects.title}
        </h1>
        <p className="animate-fade-up stagger-1 max-w-xl text-lg leading-relaxed text-muted">
          {dict.projects.subtitle}
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl border-t border-rule px-6 pb-24 pt-12 sm:px-12">
        <div
          role="group"
          aria-label={dict.projects.filterAria}
          className="animate-fade-up stagger-2 mb-12 flex flex-wrap gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              aria-pressed={active === filter.key}
              aria-label={`${dict.projects.filterByPrefix} ${filter.label}`}
              onClick={() => setActive(filter.key)}
              className={cn(
                'min-h-11 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200',
                active === filter.key
                  ? 'border-gold bg-gold text-felt-deep'
                  : 'border-rule bg-felt-deep/30 text-muted hover:border-gold hover:text-gold-bright'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 md:grid-cols-2"
            role="list"
          >
            {sorted.map((project, i) => (
              <article key={project.id} role="listitem">
                <ProjectCard project={project} index={i} />
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
