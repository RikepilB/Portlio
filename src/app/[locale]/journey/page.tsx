'use client'

import { useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { getExperiences } from '@/data/locale'
import { ResumePaper } from '@/components/ResumePaper'
import { Reveal } from '@/components/ui/Reveal'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { cn } from '@/lib/utils'

export default function JourneyPage() {
  const { locale } = useLocale()
  const dict = useDictionary()
  const experiences = useMemo(() => getExperiences(locale), [locale])
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="min-h-screen bg-felt">
      <div className="side-light" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-16 sm:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="mb-4 animate-fade-up font-display text-4xl font-bold text-matte sm:text-5xl">
              {dict.journey.title}
            </h1>
            <p className="animate-fade-up stagger-1 max-w-xl text-lg leading-relaxed text-muted">
              {dict.journey.subtitle}
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1VpbB1Tdf9J2r2MXrHKJCqCw3cYZMhdux/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.journey.viewResumeAria}
            className="animate-fade-up stagger-2 inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-matte px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-felt-deep transition-colors hover:bg-gold sm:self-auto"
          >
            <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
            {dict.journey.viewResume}
          </a>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl border-t border-rule px-6 pb-24 pt-12 sm:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
          <div>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
              {dict.journey.pathLabel}
            </p>
            <div className="relative ml-3 space-y-16 border-l-2 border-rule sm:ml-0 md:pl-8">
              {experiences.map((exp, index) => {
                const isOpen = openId === exp.id
                const typeLabel = dict.journey.experienceTypes[exp.type] ?? exp.type
                return (
                  <Reveal key={exp.id} delayMs={index * 70}>
                    <article
                      className="group relative cursor-pointer pl-8 md:pl-0"
                    onClick={() => toggle(exp.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggle(exp.id)
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                  >
                    <div
                      className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-rule bg-felt transition-colors group-hover:border-gold md:-left-[41px]"
                      aria-hidden
                    >
                      <div
                        className={cn(
                          'h-2 w-2 rounded-full transition-colors',
                          isOpen ? 'bg-gold' : 'bg-matte'
                        )}
                      />
                    </div>

                    <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                      <div className="shrink-0 md:w-48">
                        <p className="font-mono text-sm text-muted">{exp.period}</p>
                        {exp.type ? (
                          <p className="mt-1 font-accent text-[10px] font-bold uppercase tracking-widest text-gold-bright italic">
                            {typeLabel}
                          </p>
                        ) : null}
                      </div>
                      <div className="flex-1">
                        <h2 className="mb-1 font-display text-2xl font-bold text-matte transition-colors group-hover:text-gold-bright">
                          {exp.role}
                        </h2>
                        <p className="text-lg font-medium text-gold-bright">
                          {exp.org}{' '}
                          <span className="text-sm font-normal text-muted md:text-base">
                            — {exp.location}
                          </span>
                        </p>
                      </div>
                      <span
                        className={cn(
                          'text-xs text-muted transition-transform duration-200',
                          isOpen ? 'rotate-180' : ''
                        )}
                      >
                        ▼
                      </span>
                    </div>

                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300 ease-out md:pl-56',
                        isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      <div className="pb-2">
                        {exp.description ? (
                          <p className="mb-4 text-sm leading-relaxed text-ink-on-felt">{exp.description}</p>
                        ) : null}

                        <ul className="mb-6 space-y-3">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="relative pl-4 text-sm leading-relaxed text-muted">
                              <span
                                className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-gold"
                                aria-hidden
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills?.map((skill) => (
                            <span
                              key={skill}
                              className="rounded border border-rule bg-felt-deep/35 px-2.5 py-1 font-mono text-[11px] text-muted"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {exp.partnerLink ? (
                          <a
                            href={exp.partnerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-bright hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            🔗 {dict.journey.viewPartner}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <Reveal delayMs={120}>
            <aside aria-label={dict.journey.resumeLabel}>
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                {dict.journey.resumeLabel}
              </p>
              <ResumePaper />
            </aside>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
