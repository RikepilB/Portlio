'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Twitter, Database, Code2, Sparkles } from 'lucide-react'
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
  const essays = useMemo(() => getEssays(locale), [locale])

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
        className="relative overflow-x-clip pb-16 pt-24 md:pb-24 md:pt-32"
        aria-label={dict.home.introAria}
      >
        <div className="side-light" aria-hidden="true" />

        <div className="shell relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="flex max-w-xl flex-col items-start gap-6">
              <p className="m-0 font-accent text-[20px] italic leading-none tracking-[-0.01em] text-gold-bright">
                {dict.home.kicker}
              </p>
              <h1 className="m-0 font-display text-[clamp(44px,7vw,84px)] font-semibold leading-[0.95] tracking-[-0.03em] text-matte">
                Richard Pillaca
              </h1>
              <p className="m-0 max-w-[38ch] text-[17px] leading-[1.7] text-ink-on-felt md:text-[18px]">
                {dict.home.lede}
              </p>
              <p className="m-0 flex items-center gap-[6px] font-mono text-[11px] tracking-[0.06em] text-muted">
                <span className="text-gold" aria-hidden="true">
                  📍
                </span>
                {dict.home.location}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-matte px-[22px] py-[12px] text-[14px] font-medium text-felt-deep transition-all duration-200 hover:-translate-y-px hover:bg-gold"
                >
                  {dict.home.viewWork}
                  <span aria-hidden="true">↓</span>
                </a>
                <div className="flex items-center gap-3">
                  {socialLinks.slice(0, 4).map((link) => {
                    const Icon = iconMap[link.platform] ?? Github
                    return (
                      <a
                        key={link.platform}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-felt-deep/60 text-matte transition-all hover:border-gold hover:bg-gold-soft hover:text-gold-bright"
                        aria-label={link.label}
                      >
                        <Icon size={18} strokeWidth={2} className="transition-transform group-hover:scale-110" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[340px] lg:mx-0 lg:justify-self-end">
              <Image
                src="/images/hero-portrait.png"
                alt={dict.home.heroAlt}
                width={554}
                height={672}
                className="h-auto w-full drop-shadow-[0_18px_40px_rgba(32,40,34,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-[72px] border-t border-rule pb-24 pt-[72px]">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="m-0 mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                {dict.home.workKicker}
              </p>
              <h2 className="m-0 font-display text-[clamp(32px,3.5vw,48px)] font-semibold leading-[1.05] tracking-[-0.02em]">
                {dict.home.workTitle}
              </h2>
            </div>
            <Link href={localePath(locale, '/projects')} className="section-link">
              {dict.home.viewAllProjects}
              <span>↗</span>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delayMs={i * 60}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>

          {remainingCount > 0 && (
            <div className="mt-10 text-center">
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

      <section id="writing" className="scroll-mt-[72px] border-t border-rule py-24">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="m-0 mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
                {dict.home.essaysKicker}
              </p>
              <h2 className="m-0 font-display text-[clamp(32px,3.5vw,48px)] font-semibold leading-[1.05] tracking-[-0.02em]">
                {dict.home.essaysTitle}
              </h2>
            </div>
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

      <section className="border-t border-rule bg-felt-soft/40 py-24">
        <div className="shell">
          <div className="mb-14">
            <h2 className="m-0 font-display text-[clamp(32px,3.5vw,46px)] font-semibold leading-[1.02] tracking-[-0.02em]">
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

                  <h3 className="mt-6 font-display text-[24px] font-semibold leading-tight tracking-[-0.01em] text-matte md:text-[27px]">
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
