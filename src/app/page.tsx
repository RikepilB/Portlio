'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

const thumbClassMap: Record<string, string> = {
  'bike-share-optimization': 'thumb-data',
  'ai-technical-debt-research': 'thumb-research',
  'accounting-automation': 'thumb-automation',
  'exam-analysis-system': 'thumb-stack',
  'empenalo-fintech': 'thumb-fintech',
  'scoutlane-recruitment': 'thumb-recruitment',
  'vans-voice-navigation': 'thumb-hci',
  'sublime-event-ticketing': 'thumb-ticketing',
  'bookstore-app': 'thumb-mobile',
}

const featuredSlugs = [
  'bike-share-optimization',
  'empenalo-fintech',
  'scoutlane-recruitment',
  'exam-analysis-system',
]

const skillGroups = [
  {
    label: 'Data',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'dbt'],
  },
  {
    label: 'Engineering',
    items: ['TypeScript', 'Django', 'FastAPI', 'Postgres', 'Docker'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind', 'Alpine.js', 'Laravel'],
  },
  {
    label: 'Modeling',
    items: ['R', 'NetworkX', 'SciPy', 'Statistical Testing'],
  },
  {
    label: 'Automation',
    items: ['Power Query', 'VBA', 'M Language', 'GitHub Actions'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Linux', 'Vercel', 'Figma', 'Cursor'],
  },
]

export default function HomePage() {
  const [showAll, setShowAll] = useState(false)

  const featuredProjects = projects.filter((p) => featuredSlugs.includes(p.slug))
  const moreProjects = projects.filter((p) => !featuredSlugs.includes(p.slug))

  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28" aria-label="Introduction">
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] pointer-events-none -z-10"
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
                <p className="font-display text-[17px] font-light text-[#1A1A1A] m-0">
                  I&apos;m a{' '}
                  <span className="text-[#0c5a40] font-normal text-[18px]">
                    Software &amp; Data Engineer
                  </span>{' '}
                  focused on building products, data pipelines, and technology solutions that remove
                  manual friction from work.
                </p>

                <p className="font-display text-[16px] font-light text-[#474747] m-0 leading-[1.65]">
                  Deploying a mobile app, optimizing workflows, developing a system end to end — I
                  build systems that scale.
                </p>

                <p className="font-display text-[16px] font-light text-[#474747] m-0 leading-[1.6]">
                  I&apos;m currently expanding my knowledge in{' '}
                  <span className="text-[#1A1A1A] font-normal">AI infrastructure</span> and{' '}
                  <span className="text-[#1A1A1A] font-normal">
                    high-performance, robust engineering
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-0 items-center py-4 border-t border-b border-[#e6e8eb] mt-2">
                <span className="font-display text-[18px] font-light text-[#1A1A1A] tracking-[-0.01em] text-center">
                  <b className="text-[#2bc08f] font-medium italic">Tenacious.</b>
                  <span className="text-[#2bc08f] mx-[6px] font-light">·</span>
                  <b className="text-[#2bc08f] font-medium italic">Analytical.</b>
                  <span className="text-[#2bc08f] mx-[6px] font-light">·</span>
                  <b className="text-[#2bc08f] font-medium italic">Charismatic.</b>
                </span>
              </div>
            </div>

            {/* Right: Polaroid */}
            <div className="flex justify-center items-center p-6 lg:order-none -order-1">
              <div className="polaroid max-w-[280px] w-full">
                <div className="aspect-[4/5] rounded-[2px] relative overflow-hidden flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(165deg, #1a1a1a 0%, #091233 100%)',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at 30% 80%, rgba(43,192,143,0.18) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(45,65,150,0.4) 0%, transparent 50%)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
                    }}
                  />
                  <Image
                    src="/images/mainpage.jpg"
                    alt="Richard Pillaca"
                    fill
                    className="object-cover object-top opacity-90 mix-blend-luminosity"
                  />
                  <div className="relative z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 text-center leading-[1.6]">
                    <b className="block font-display text-[14px] tracking-normal font-light text-white/90 mb-1">
                      Richard
                    </b>
                    Portrait
                  </div>
                </div>
                <p className="font-mono text-[10.5px] tracking-[0.06em] text-[#1A1A1A] text-center mt-4 flex justify-center items-center gap-[6px]">
                  <span className="text-[#0c5a40]">📍</span>
                  Toronto, ON
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────── */}
      <section className="pb-24" style={{ paddingTop: '32px' }}>
        <div className="shell">
          <div className="flex items-end justify-between mb-10 gap-8 flex-wrap">
            <h2 className="font-display font-normal text-[clamp(32px,3.5vw,44px)] tracking-[-0.02em] leading-[1.05] m-0">
              My <em className="italic text-[#0c5a40] font-light">work</em>
            </h2>
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="section-link"
            >
              {showAll ? 'Hide all' : 'View all'}
              <span>{showAll ? '↙' : '↗'}</span>
            </button>
          </div>

          {/* Featured Projects */}
          <div className="flex flex-col border border-[#e6e8eb] rounded-[14px] overflow-hidden">
            {featuredProjects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}

            {/* More Projects (toggled) */}
            {showAll && (
              <div className="animate-fade-up">
                {moreProjects.map((project) => (
                  <ProjectRow key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────── */}
      <section
        className="py-[72px] mt-12 border-y border-[#e6e8eb]"
        style={{ background: '#f3fbf8' }}
      >
        <div className="shell grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-16 items-start">
          <div>
            <h2 className="font-display font-normal text-[32px] leading-[1.1] tracking-[-0.015em] m-0 mb-3">
              The <em className="italic text-[#0c5a40] font-light">stack.</em>
            </h2>
            <p className="m-0 text-[#6e7481] text-sm max-w-[30ch] leading-[1.5]">
              Tools I reach for first. Curated — not a wall of badges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <div
                key={group.label}
                className={`py-[18px] border-b border-[#d1d2d8] grid grid-cols-[130px_1fr] gap-6 items-start ${i % 2 === 0 ? 'sm:pr-6' : 'sm:pl-6 sm:border-l sm:border-[#d1d2d8]'
                  } ${i >= skillGroups.length - 2 ? 'border-b-0' : ''}`}
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#6e7481] pt-1 flex items-center gap-2">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#2bc08f] flex-shrink-0" />
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-[6px]">
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="bg-[#f8f9fa] py-12 mt-20 border-t border-[#e6e8eb]" aria-label="Site footer">
        <div className="shell flex items-center justify-between flex-wrap gap-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#0c5a40] font-medium hover:text-[#2bc08f] transition-colors"
          >
            ← Back to top
          </a>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-[#6e7481] m-0">
            © {new Date().getFullYear()} Richard Pillaca ·{' '}
            <a href="mailto:ridi.pillaca@gmail.com" className="text-[#0c5a40] hover:text-[#2bc08f] transition-colors">
              ridi.pillaca@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  const thumbClass = thumbClassMap[project.slug] ?? 'thumb-stack'

  return (
    <article className="grid grid-cols-1 md:grid-cols-[340px_1fr] border-b border-[#e6e8eb] last:border-b-0 bg-white hover:bg-[#f3fbf8] transition-colors">
      {/* Thumbnail */}
      <div
        className={`${thumbClass} w-full aspect-[16/10] flex-shrink-0 md:border-r md:border-[#e6e8eb] md:border-b-0 border-b border-[#e6e8eb]`}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="p-7 md:p-8 flex flex-col gap-3 justify-center">
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.1em] text-[#6e7481]">
          <span className="text-[#0c5a40] font-medium">{project.category}</span>
          <span>{project.duration}</span>
        </div>

        <h3 className="font-display font-normal text-[clamp(20px,2vw,26px)] tracking-[-0.02em] leading-[1.1] m-0 text-[#1A1A1A]">
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
          <Link href={project.demoVideo ?? '#'} className="work-btn work-btn-demo">
            ↗ Demo
          </Link>
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
