'use client'

import { useMemo } from 'react'
import { getExperiences } from '@/data/locale'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'

const coreSkills = [
  'Python',
  'TypeScript',
  'SQL',
  'React/Next.js',
  'Django',
  'Docker',
  'PostgreSQL',
  'GitHub Actions',
]

/** Satin-paper résumé sheet — embedded on Journey. */
export function ResumePaper({ className = '' }: { className?: string }) {
  const { locale } = useLocale()
  const dict = useDictionary()
  const experiences = useMemo(() => getExperiences(locale), [locale])

  return (
    <div
      className={`satin-panel border-y px-8 py-12 shadow-felt sm:rounded-2xl sm:border sm:px-12 ${className}`}
    >
      <header className="mb-8 border-b border-rose/25 pb-8 text-center sm:text-left">
        <h2 className="mb-2 font-display text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
          Richard Pillaca
        </h2>
        <p className="mb-4 font-mono text-sm tracking-wide text-rose-shadow">{dict.resume.title}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs text-[#6e7481] sm:justify-start">
          <span>{dict.resume.location}</span>
          <span className="hidden sm:inline">|</span>
          <span>ridi.pillaca@gmail.com</span>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://linkedin.com/in/richard-pillaca"
            rel="noopener noreferrer"
            className="hover:text-rose-shadow"
          >
            linkedin.com/in/richard-pillaca
          </a>
        </div>
      </header>

      <section className="mb-10">
        <h3 className="mb-4 border-b border-rose/25 pb-2 text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
          {dict.resume.summaryHeading}
        </h3>
        <p className="text-sm leading-relaxed text-[#6e7481]">{dict.resume.summary}</p>
      </section>

      <section className="mb-10">
        <h3 className="mb-4 border-b border-rose/25 pb-2 text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
          {dict.resume.competenciesHeading}
        </h3>
        <div className="flex flex-wrap gap-2">
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="rounded border border-rose/20 bg-pearl-soft px-2.5 py-1 font-mono text-xs text-[#1a1a1a]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="mb-6 border-b border-rose/25 pb-2 text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
          {dict.resume.experienceHeading}
        </h3>
        <div className="flex flex-col gap-8">
          {experiences.slice(0, 4).map((exp) => (
            <div key={exp.id}>
              <div className="mb-1 flex flex-col justify-between sm:flex-row sm:items-baseline">
                <h4 className="text-[15px] font-bold text-[#1a1a1a]">{exp.role}</h4>
                <span className="font-mono text-xs text-[#6e7481]">{exp.period}</span>
              </div>
              <p className="mb-3 text-sm font-medium text-rose-shadow">
                {exp.org} <span className="font-normal text-[#6e7481]">— {exp.location}</span>
              </p>
              <ul className="space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="relative pl-4 text-xs leading-relaxed text-[#6e7481]">
                    <span className="absolute left-0 top-1.5 h-[3px] w-[3px] rounded-full bg-rose" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-4 border-b border-rose/25 pb-2 text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
          {dict.resume.educationHeading}
        </h3>
        <div className="mb-1 flex flex-col items-baseline justify-between sm:flex-row">
          <h4 className="text-[15px] font-bold text-[#1a1a1a]">{dict.resume.school}</h4>
          <span className="font-mono text-xs text-[#6e7481]">{dict.resume.schoolPeriod}</span>
        </div>
        <p className="mb-1 text-sm font-medium text-rose-shadow">
          {dict.resume.degree}{' '}
          <span className="font-normal text-[#6e7481]">— {dict.resume.minor}</span>
        </p>
        <p className="text-xs text-[#6e7481]">{dict.resume.certifications}</p>
      </section>
    </div>
  )
}
