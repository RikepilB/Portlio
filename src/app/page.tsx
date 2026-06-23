'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Twitter, Database, Code2, Sparkles } from 'lucide-react'
import { projects } from '@/data/projects'
import { socialLinks } from '@/data/social'

const featuredSlugs = [
  'empenalo-fintech',
  'scoutlane-recruitment',
  'exam-analysis-system',
  'bike-share-optimization',
]

const areas = [
  {
    icon: <Code2 size={24} strokeWidth={1.5} />,
    title: 'Software Engineering',
    desc: 'Full-stack with a frontend focus. I turn designs into responsive, event-driven interfaces and back them with modular auth, reusable components, and CI/CD pipelines.',
    tools: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Django',
      'Laravel',
      'Tailwind CSS',
      'Docker',
      'CI/CD',
    ],
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    title: 'AI & Automation',
    desc: 'I wire LLMs into real products, like AI that parses resumes into structured, filterable data, and automate the busywork around them with agents, RAG, and webhooks.',
    tools: [
      'LLM Integration',
      'RAG',
      'AI Agents',
      'LangGraph',
      'MCP',
      'Vercel AI',
      'Event-driven',
      'Webhooks',
    ],
  },
  {
    icon: <Database size={24} strokeWidth={1.5} />,
    title: 'Data & Analytics',
    desc: 'Data-driven by default. I build ETL pipelines that process millions of records and turn them into Power BI dashboards and reporting that replace hours of manual work.',
    tools: ['SQL', 'PostgreSQL', 'Power BI / DAX', 'ETL', 'Pandas', 'Excel'],
  },
]

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
}

export default function HomePage() {
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => p !== undefined)
  const remainingCount = projects.length - featuredProjects.length

  return (
    <>
      <ScrollProgress />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative overflow-x-clip pt-20 pb-20 md:pt-28 md:pb-28" aria-label="Introduction">
        <div
          className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] pointer-events-none -z-10"
          style={{ background: 'radial-gradient(circle, rgba(43,192,143,0.10) 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            {/* Left: Name + Bio */}
            <div className="flex flex-col gap-5">
              <h1 className="font-display font-normal text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-[-0.025em] text-[#1A1A1A] m-0">
                Richard Pillaca
              </h1>

              <div className="flex flex-col gap-[14px] leading-relaxed">
                <p className="font-display text-[16px] font-light text-[#1A1A1A] m-0 leading-[1.65]">
                  <span className="text-[#0c5a40] font-bold text-[18px]">Full-stack engineer</span>, currently
                  focused on the frontend, building scalable interfaces with{' '}
                  <span className="text-[#1A1A1A] font-normal">React, Next.js, and Node.js</span>. I&apos;ve
                  shipped an AI-driven API web app and engineered systems end to end.
                </p>
                <p className="font-display text-[16px] font-light text-[#1A1A1A] m-0 leading-[1.6]">
                  Now going deeper into{' '}
                  <span className="text-[#1A1A1A] font-normal">AI infrastructure and high-performance
                  engineering</span>.
                </p>
              </div>

              <div className="flex flex-col gap-3 items-center py-4 border-t border-b border-[#e6e8eb] mt-2">
                <span className="font-display text-[18px] font-light text-[#1A1A1A] tracking-[-0.01em] text-center">
                  <b className="text-[#0c5a40] font-medium italic">Tenacious.</b>
                  <span className="text-[#0c5a40] mx-[6px] font-light">·</span>
                  <b className="text-[#0c5a40] font-medium italic">Analytical.</b>
                  <span className="text-[#0c5a40] mx-[6px] font-light">·</span>
                  <b className="text-[#0c5a40] font-medium italic">Charismatic.</b>
                </span>
                <div className="flex items-center gap-4 mt-1">
                  {socialLinks.slice(0, 4).map((link) => {
                    const Icon = iconMap[link.platform] ?? Github
                    return (
                      <a
                        key={link.platform}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#f3fbf8] border border-[#d1d2d8] flex items-center justify-center text-[#6e7481] hover:text-[#0c5a40] hover:border-[#2bc08f] hover:shadow-md transition-all group"
                        aria-label={link.label}
                      >
                        <Icon size={18} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right: Line-art portrait */}
            <div className="flex flex-col justify-center items-center p-6 lg:order-none -order-1">
              <Image
                src="/images/hero-portrait.png"
                alt="Line-art portrait of Richard Pillaca"
                width={554}
                height={672}
                className="w-full max-w-[320px] h-auto drop-shadow-[0_18px_40px_rgba(12,90,64,0.14)]"
                priority
              />
              <p className="font-mono text-[10.5px] tracking-[0.06em] text-[#1A1A1A] text-center mt-3 flex justify-center items-center gap-[6px]">
                <span className="text-[#0c5a40]">📍</span>
                Toronto, ON
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────── */}
      <section className="pb-24 border-t border-[#e6e8eb]" style={{ paddingTop: '72px' }}>
        <div className="shell">
          <div className="flex items-end justify-between mb-10 gap-8 flex-wrap">
            <h2 className="font-display font-normal text-[clamp(32px,3.5vw,44px)] tracking-[-0.02em] leading-[1.05] m-0">
              My <em className="italic text-[#0c5a40] font-light">work</em>
            </h2>
            <Link href="/projects" className="section-link">
              View all projects
              <span>↗</span>
            </Link>
          </div>

          <div className="flex flex-col">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id}>
                <ProjectRow project={project} index={i} flipped={i % 2 === 1} />
              </Reveal>
            ))}
          </div>

          {remainingCount > 0 && (
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 font-mono text-[11.5px] uppercase tracking-[0.08em] text-[#0c5a40] px-5 py-3 rounded-full border border-[#d1d2d8] bg-white hover:border-[#2bc08f] hover:bg-[#f3fbf8] transition-all"
              >
                View all projects
                <span className="rounded-full bg-[#2bc08f]/10 text-[#0c5a40] px-2.5 py-0.5 text-[10px] font-medium">
                  +{remainingCount} more
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────── */}
      <section className="py-24 border-t border-[#e6e8eb] bg-[#f3fbf8]">
        <div className="shell">
          {/* Heading */}
          <div className="max-w-2xl mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a6516] mb-4">
              What I do
            </p>
            <h2 className="font-display font-normal text-[clamp(32px,3.5vw,46px)] tracking-[-0.02em] leading-[1.02] m-0">
              Skills &amp; <em className="italic text-[#0c5a40] font-light">Stack</em>
            </h2>
            <p className="text-base text-[#6e7481] leading-relaxed mt-5 max-w-[52ch]">
              Three disciplines I move between, usually on the same project: engineering,
              AI, and data.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areas.map((area, i) => {
              const accent = i === 1 ? 'text-[#8a6516]' : 'text-[#0c5a40]'
              const accentBg = i === 1 ? 'bg-[#8a6516]' : 'bg-[#0c5a40]'
              return (
                <Reveal key={area.title} delay={i * 90}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d4e3db] bg-white p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-22px_rgba(12,90,64,0.28)]">
                    {/* Big index watermark */}
                    <span
                      className={`pointer-events-none absolute -top-4 right-3 font-display text-[88px] font-light leading-none opacity-[0.07] select-none ${accent}`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3fbf8] transition-transform duration-300 group-hover:scale-105 ${accent}`}
                    >
                      {area.icon}
                    </span>

                    <h3 className="font-display text-[24px] md:text-[27px] font-normal text-[#1A1A1A] tracking-[-0.01em] leading-tight mt-6">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[#52585f] leading-[1.65] mt-3">{area.desc}</p>

                    <div className="mt-auto flex flex-wrap gap-2 pt-7">
                      {area.tools.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] rounded-full border border-[#e6e8eb] bg-[#fafbfc] px-2.5 py-1 text-[#6e7481]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Accent base line on hover */}
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-300 group-hover:w-full ${accentBg}`}
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="flex justify-center pb-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest uppercase text-[#6e7481] hover:text-[#0c5a40] transition-colors group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d1d2d8] group-hover:bg-[#2bc08f] transition-colors" />
          ↑ Back to top
        </button>
      </div>
    </>
  )
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.animation = `fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`
            io.disconnect()
          }
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement
        const max = doc.scrollHeight - doc.clientHeight
        el.style.width = max > 0 ? `${(doc.scrollTop / max) * 100}%` : '0%'
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 h-[2px] z-[60] pointer-events-none" aria-hidden="true">
      <div
        ref={ref}
        className="h-full w-0"
        style={{ background: 'linear-gradient(90deg, #2bc08f 0%, #c79a3a 100%)' }}
      />
    </div>
  )
}

function ProjectRow({
  project,
  index,
  flipped,
}: {
  project: (typeof projects)[number]
  index: number
  flipped: boolean
}) {
  const demoHref = project.demoVideo ?? '#'

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-14 items-center py-11 md:py-16 border-b border-[#e6e8eb] last:border-b-0 group">
      {/* Thumbnail */}
      <div
        className={`relative w-full aspect-[16/10] rounded-[14px] overflow-hidden bg-[#f8f9fa] border border-[#e6e8eb] ${
          flipped ? 'md:order-2' : ''
        }`}
      >
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.03] rounded-[14px] pointer-events-none" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-[11px] text-[#6e7481] uppercase tracking-[0.1em] bg-[#f3fbf8]">
            {project.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-3.5 justify-center ${flipped ? 'md:order-1' : ''}`}>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
          <span className="text-[#c79a3a] font-semibold tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-6 h-px bg-[#d8cfbf]" aria-hidden="true" />
          <span className="text-[#0c5a40] font-medium">{project.category}</span>
          <span className="text-[#8a909b]">{project.duration}</span>
        </div>

        <h3 className="font-display font-normal text-[clamp(22px,2.4vw,30px)] tracking-[-0.02em] leading-[1.08] m-0 text-[#1A1A1A] group-hover:text-[#0c5a40] transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-[6px]">
          {project.stack.slice(0, 6).map((s) => (
            <span key={s} className="tag-pill">
              {s}
            </span>
          ))}
        </div>

        <p className="text-sm text-[#474747] leading-[1.6] m-0 max-w-[60ch]">
          {project.tagline}
        </p>

        <div className="flex gap-2 mt-1 flex-wrap">
          <a
            href={demoHref}
            target={demoHref.startsWith('http') ? '_blank' : undefined}
            rel={demoHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="work-btn work-btn-demo"
          >
            ↗ Demo
          </a>
          <Link href={`/projects/${project.slug}`} className="work-btn work-btn-details">
            Details
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
            Code
          </a>
        </div>
      </div>
    </article>
  )
}
