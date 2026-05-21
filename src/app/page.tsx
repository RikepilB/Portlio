'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Twitter, Database, Code2, Network } from 'lucide-react'
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
    icon: <Database size={24} strokeWidth={1.5} />,
    title: 'Data & Analytics',
    desc: 'Translating messy data into clean, automated reporting pipelines. I build solutions that replace hours of manual spreadsheet work with reliable refreshable reports.',
    tools: ['SQL', 'Power BI / DAX', 'Python (Pandas, Numpy)', 'Power Query / M', 'Excel (VBA)'],
  },
  {
    icon: <Code2 size={24} strokeWidth={1.5} />,
    title: 'Software Engineering',
    desc: 'Building full-stack applications with an emphasis on robust backends, continuous integration, and clean user interfaces.',
    tools: ['Python', 'TypeScript', 'Java', 'React / Next.js', 'Django'],
  },
  {
    icon: <Network size={24} strokeWidth={1.5} />,
    title: 'Modeling & Research',
    desc: 'Applying statistical methods and graph theory to uncover patterns. From analyzing 5,000+ codebases for technical debt to optimizing city-wide bike share networks.',
    tools: ['Graph Theory (NetworkX)', 'SciPy', 'Statistical Testing', 'Geopandas'],
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
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28" aria-label="Introduction">
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
                  <span className="text-[#2bc08f] font-bold text-[18px]">Software engineer</span> with hands-on
                  experience in technologies such as Django, React, Next.js, relational databases, and others. I
                  focus on improving user experience and code quality, and I apply best practices to create
                  scalable and functional interfaces. Deploying a mobile app, optimizing workflows and developing a
                  system end to end.
                </p>
                <p className="font-display text-[16px] font-light text-[#1A1A1A] m-0 leading-[1.6]">
                  I&apos;m currently expanding my knowledge in{' '}
                  <span className="text-[#1A1A1A] font-normal">AI infrastructure</span> and{' '}
                  <span className="text-[#1A1A1A] font-normal">high-performance, robust engineering</span>.
                </p>
              </div>

              <div className="flex flex-col gap-3 items-center py-4 border-t border-b border-[#e6e8eb] mt-2">
                <span className="font-display text-[18px] font-light text-[#1A1A1A] tracking-[-0.01em] text-center">
                  <b className="text-[#2bc08f] font-medium italic">Tenacious.</b>
                  <span className="text-[#2bc08f] mx-[6px] font-light">·</span>
                  <b className="text-[#2bc08f] font-medium italic">Analytical.</b>
                  <span className="text-[#2bc08f] mx-[6px] font-light">·</span>
                  <b className="text-[#2bc08f] font-medium italic">Charismatic.</b>
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
                        className="w-10 h-10 rounded-full bg-[#f3fbf8] border border-[#d1d2d8] flex items-center justify-center text-[#6e7481] hover:text-[#2bc08f] hover:border-[#2bc08f] hover:shadow-md transition-all group"
                        aria-label={link.label}
                      >
                        <Icon size={18} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right: Polaroid */}
            <div className="flex justify-center items-center p-6 lg:order-none -order-1">
              <div className="polaroid max-w-[280px] w-full">
                <div className="aspect-[4/5] rounded-[2px] relative overflow-hidden">
                  <Image
                    src="/images/mainpage.jpg"
                    alt="Richard Pillaca"
                    fill
                    className="object-cover object-top"
                    priority
                  />
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
            <Link href="/projects" className="section-link">
              View all projects
              <span>↗</span>
            </Link>
          </div>

          <div className="flex flex-col border border-[#e6e8eb] rounded-[14px] overflow-hidden">
            {featuredProjects.map((project) => (
              <ProjectRow key={project.id} project={project} />
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
      <section className="py-24 border-t border-[#e6e8eb]" style={{ background: '#f3fbf8' }}>
        <div className="shell">
          <h2 className="font-display font-normal text-[clamp(32px,3.5vw,44px)] tracking-[-0.02em] leading-[1.05] m-0 mb-4">
            Skills &amp; <em className="italic text-[#0c5a40] font-light">Stack</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div
                key={area.title}
                className="flex flex-col h-full bg-white p-8 rounded-2xl border border-[#e6e8eb] hover:border-[#2bc08f] transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#f3fbf8] rounded-xl border border-[#d1d2d8] flex items-center justify-center text-[#2bc08f] mb-6">
                  {area.icon}
                </div>
                <h3 className="font-display text-xl font-normal text-[#1A1A1A] mb-3">{area.title}</h3>
                <p className="text-sm text-[#6e7481] leading-relaxed mb-8 flex-1">{area.desc}</p>

                <div className="border-t border-[#e6e8eb] pt-6 mt-auto">
                  <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] mb-3">
                    Core Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-[#6e7481] bg-[#f8f9fa] border border-[#e6e8eb] rounded px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="flex justify-center pb-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest uppercase text-[#6e7481] hover:text-[#2bc08f] transition-colors group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d1d2d8] group-hover:bg-[#2bc08f] transition-colors" />
          ↑ Back to top
        </button>
      </div>
    </>
  )
}

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  const demoHref = project.demoVideo ?? '#'

  return (
    <article className="grid grid-cols-1 md:grid-cols-[1fr_1fr] border-b border-[#e6e8eb] last:border-b-0 bg-white hover:bg-[#f3fbf8] transition-colors group">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9] md:aspect-[4/3] flex-shrink-0 md:border-r md:border-[#e6e8eb] md:border-b-0 border-b border-[#e6e8eb] overflow-hidden bg-[#f8f9fa]">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-mono text-[11px] text-[#6e7481] uppercase tracking-[0.1em]"
            style={{ background: 'linear-gradient(135deg, #0f1a47 0%, #091233 100%)' }}
          >
            {project.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 md:p-10 flex flex-col gap-3 justify-center md:pl-12">
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
