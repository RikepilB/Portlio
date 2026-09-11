'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { getEssays, getProjects } from '@/data/locale'
import { isComingSoon, type Project } from '@/data/projects'
import { socialLinks } from '@/data/social'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { EssayCard } from '@/components/ui/EssayCard'

const featuredSlugs = [
  'voidscape',
  'findleads',
  'peru-tech-map',
  'el-umbral',
  'scoutlane-recruitment',
  'exam-analysis-system',
]

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
}

export default function HomePage() {
  const { locale } = useLocale()
  const dict = useDictionary()
  const projects = useMemo(() => getProjects(locale), [locale])
  const essays = useMemo(() => getEssays(locale), [locale])

  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => p !== undefined && !isComingSoon(p))
  return (
    <div className="portfolio-page">
      <section
        className="portfolio-hero relative overflow-hidden border-b border-rule pb-20 pt-24 md:pb-28 md:pt-32"
        aria-label={dict.home.introAria}
      >
        <div className="portfolio-aura" aria-hidden="true" />

        <div className="shell relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
                <filter id="hero-dark-key" colorInterpolationFilters="sRGB">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0.6378 2.1456 0.2166 0 -0.5"
                  />
                </filter>
              </svg>
              <Image
                src="/images/hero-portrait-glass.png"
                alt={dict.home.heroAlt}
                width={1139}
                height={1381}
                className="hero-glass-image h-auto w-full max-w-[280px]"
                priority
              />
              <p className="flex items-center justify-center gap-[6px] font-mono text-[10.5px] tracking-[0.06em] text-ink-on-felt">
                <span className="text-gold" aria-hidden="true">📍</span>
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
              <nav className="mt-1 flex items-center gap-4" aria-label="Social links">
                {socialLinks.slice(0, 4).map((link) => {
                  const Icon = iconMap[link.platform] ?? Github
                  return (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-felt-deep/45 text-matte transition-colors hover:border-gold hover:text-gold-bright"
                      aria-label={link.label}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </a>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-ground scroll-mt-[72px] pb-24 pt-[72px]">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
            <h2 className="m-0 font-display text-[clamp(38px,4.5vw,58px)] font-medium leading-[0.95] tracking-[-0.035em]">
              {dict.home.workTitle}
            </h2>
            <Link href={localePath(locale, '/projects')} className="section-link">
              {dict.home.viewAllProjects}
              <span>↗</span>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delayMs={i * 60}>
                <ProjectCard project={project} index={i} showActions />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="section-ground scroll-mt-[72px] border-t border-rule py-24">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
            <h2 className="m-0 font-display text-[clamp(38px,4.5vw,58px)] font-medium leading-[0.95] tracking-[-0.035em]">
              {dict.home.essaysTitle}
            </h2>
            <Link href={localePath(locale, '/essays')} className="section-link">
              {dict.home.viewAllEssays}
              <span>↗</span>
            </Link>
          </div>

          <div className="max-w-3xl" aria-label={dict.home.essaysTitle}>
            {essays.map((essay) => (
              <EssayCard key={essay.slug} essay={essay} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-ground border-t border-rule py-24">
        <div className="shell">
          <div className="grid gap-10 border-b border-rule pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <h2 className="m-0 max-w-[9ch] font-display text-[clamp(38px,4.5vw,58px)] font-medium leading-[0.95] tracking-[-0.035em]">
              {dict.home.skillsTitle}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              <p className="text-[17px] leading-[1.75] text-ink-on-felt">{dict.home.skillsIntro1}</p>
              <p className="text-base leading-[1.75] text-muted">
                {dict.home.skillsIntro2}
              </p>
            </div>
          </div>

          <div className="divide-y divide-rule">
            {dict.home.areas.map((area, i) => (
              <Reveal key={area.title} delayMs={i * 90}>
                <article className="grid gap-4 py-8 md:grid-cols-[0.78fr_1.22fr] md:gap-12 md:py-10">
                  <h3 className="m-0 font-display text-[26px] font-medium leading-tight tracking-[-0.02em] text-matte md:text-[31px]">
                    {area.title}
                  </h3>
                  <div>
                    <p className="m-0 max-w-[64ch] text-[15px] leading-[1.7] text-ink-on-felt">{area.desc}</p>
                    <p className="mb-0 mt-4 font-mono text-[10.5px] uppercase leading-[1.8] tracking-[0.08em] text-muted">
                      {area.tools.join(' / ')}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
