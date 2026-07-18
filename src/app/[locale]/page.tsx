'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Twitter, Database, Code2, Sparkles } from 'lucide-react'
import { getProjects } from '@/data/locale'
import { isComingSoon, type Project } from '@/data/projects'
import { socialLinks } from '@/data/social'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { ProjectImagePlaceholder } from '@/components/ui/ProjectImagePlaceholder'
import { Reveal } from '@/components/ui/Reveal'

const featuredSlugs = [
  'peru-tech-map',
  'el-umbral',
  'empenalo-fintech',
  'scoutlane-recruitment',
  'exam-analysis-system',
  'bike-share-optimization',
]

const areaIcons = [
  <Code2 key="code" size={24} strokeWidth={1.5} />,
  <Sparkles key="ai" size={24} strokeWidth={1.5} />,
  <Database key="data" size={24} strokeWidth={1.5} />,
]

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
}

export default function HomePage() {
  const { locale } = useLocale()
  const dict = useDictionary()
  const projects = useMemo(() => getProjects(locale), [locale])

  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => p !== undefined && !isComingSoon(p))
  const remainingCount = projects.filter((p) => !isComingSoon(p)).length - featuredProjects.length

  const areas = dict.home.areas.map((area, i) => ({
    ...area,
    icon: areaIcons[i],
  }))

  return (
    <>
      <section
        className="relative overflow-x-clip pb-20 pt-24 md:pb-28 md:pt-32"
        aria-label={dict.home.introAria}
      >
        <div className="side-light" aria-hidden="true" />

        <div className="shell relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/hero-portrait.png"
                alt={dict.home.heroAlt}
                width={554}
                height={672}
                className="h-auto w-full max-w-[280px] drop-shadow-[0_18px_40px_rgba(32,40,34,0.35)]"
                priority
              />
              <p className="flex items-center justify-center gap-[6px] font-mono text-[10.5px] tracking-[0.06em] text-ink-on-felt">
                <span className="text-gold" aria-hidden="true">
                  📍
                </span>
                {dict.home.location}
              </p>
            </div>

            <h1 className="m-0 font-display text-[clamp(42px,7vw,72px)] font-extrabold uppercase leading-[0.95] tracking-[0.12em] text-foil">
              Richard Pillaca
            </h1>

            <div className="mt-2 flex w-full max-w-xl flex-col items-center gap-3 border-y border-rule py-4">
              <span className="text-center font-accent text-[18px] font-light italic tracking-[-0.01em] text-gold-bright">
                {dict.home.traits}
              </span>
              <div className="mt-1 flex items-center gap-4">
                {socialLinks.slice(0, 4).map((link) => {
                  const Icon = iconMap[link.platform] ?? Github
                  return (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-felt-deep/60 text-matte transition-all hover:border-gold hover:bg-gold-soft hover:text-gold-bright hover:shadow-md"
                      aria-label={link.label}
                    >
                      <Icon size={20} strokeWidth={2} className="transition-transform group-hover:scale-110" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-rule pb-24 pt-[72px]">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
            <h2 className="m-0 font-display text-[clamp(32px,3.5vw,44px)] font-bold leading-[1.05] tracking-[-0.02em]">
              My {dict.home.workTitleEm}
            </h2>
            <Link href={localePath(locale, '/projects')} className="section-link">
              {dict.home.viewAllProjects}
              <span>↗</span>
            </Link>
          </div>

          <div className="flex flex-col">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delayMs={i * 60}>
                <ProjectRow project={project} index={i} flipped={i % 2 === 1} locale={locale} dict={dict} />
              </Reveal>
            ))}
          </div>

          {remainingCount > 0 && (
            <div className="mt-8 text-center">
              <Link
                href={localePath(locale, '/projects')}
                className="inline-flex items-center gap-3 rounded-full border border-rule bg-felt-deep/30 px-5 py-3 font-mono text-[11.5px] uppercase tracking-[0.08em] text-gold-bright transition-all hover:border-gold hover:bg-gold-soft"
              >
                {dict.home.viewAllProjects}
                <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-[10px] font-medium text-gold">
                  +{remainingCount} {dict.home.moreProjectsSuffix}
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-rule bg-felt-soft/40 py-24">
        <div className="shell">
          <div className="mb-14">
            <h2 className="m-0 font-display text-[clamp(32px,3.5vw,46px)] font-bold leading-[1.02] tracking-[-0.02em]">
              {dict.home.skillsTitle.split('&')[0].trim()} &amp; {dict.home.skillsTitleEm}
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
              <p className="text-[17px] leading-[1.75] text-ink-on-felt">{dict.home.skillsIntro1}</p>
              <p className="border-l-2 border-gold/40 pl-5 text-base leading-[1.75] text-muted md:pl-6">
                {dict.home.skillsIntro2}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal key={area.title} delayMs={i * 90}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-felt-deep/35 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-felt md:p-8">
                  <span
                    className="pointer-events-none absolute -top-4 right-3 select-none font-display text-[88px] font-light leading-none text-gold opacity-[0.12]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold transition-transform duration-300 group-hover:scale-105">
                    {area.icon}
                  </span>

                  <h3 className="mt-6 font-display text-[24px] font-bold leading-tight tracking-[-0.01em] text-matte md:text-[27px]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.65] text-ink-on-felt">{area.desc}</p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-7">
                    {area.tools.map((t) => (
                      <span key={t} className="skill-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span
                    className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectRow({
  project,
  index,
  flipped,
  locale,
  dict,
}: {
  project: Project
  index: number
  flipped: boolean
  locale: Locale
  dict: Dictionary
}) {
  const demoHref = project.demoVideo ?? '#'

  return (
    <article className="group grid grid-cols-1 items-center gap-7 border-b border-rule py-11 last:border-b-0 md:grid-cols-2 md:gap-14 md:py-16">
      <div
        className={`relative aspect-[16/10] w-full overflow-visible ${
          flipped ? 'md:order-2' : ''
        }`}
      >
        {project.image ? (
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain object-center p-3 transition-transform duration-700 ease-out group-hover:scale-[1.02] md:p-5"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 overflow-hidden rounded-[14px] border border-rule bg-felt-frame">
            <ProjectImagePlaceholder
              title={project.title}
              category={project.category}
              index={index}
              metric={project.results[0]?.metric}
            />
          </div>
        )}
      </div>

      <div className={`flex flex-col justify-center gap-3.5 ${flipped ? 'md:order-1' : ''}`}>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
          <span className="font-semibold tabular-nums text-gold">{String(index + 1).padStart(2, '0')}</span>
          <span className="h-px w-6 bg-rule-2" aria-hidden="true" />
          <span className="font-accent italic text-gold-bright">{project.category}</span>
          <span className="text-muted-2">{project.duration}</span>
        </div>

        <h3 className="m-0 font-display text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.08] tracking-[-0.02em] text-matte transition-colors group-hover:text-gold-bright">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-[6px]">
          {project.stack.slice(0, 6).map((s) => (
            <span key={s} className="tag-pill">
              {s}
            </span>
          ))}
        </div>

        <p className="m-0 max-w-[60ch] text-sm leading-[1.6] text-ink-on-felt">{project.tagline}</p>

        <div className="mt-1 flex flex-wrap gap-2">
          <a
            href={demoHref}
            target={demoHref.startsWith('http') ? '_blank' : undefined}
            rel={demoHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="work-btn work-btn-demo"
          >
            {dict.home.demo}
          </a>
          <Link href={localePath(locale, `/projects/${project.slug}`)} className="work-btn work-btn-details">
            {dict.home.details}
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="work-btn work-btn-code"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-.99-.02-1.95-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.07 11.07 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .3.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            {dict.home.code}
          </a>
        </div>
      </div>
    </article>
  )
}
