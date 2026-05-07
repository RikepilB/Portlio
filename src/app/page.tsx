import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { experiences } from '@/data/experience'
import { contactInfo } from '@/data/social'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Richard Pillaca — Software & Data Engineer',
  description: 'Portfolio of Richard Pillaca Burga — building scalable products, data pipelines, and robust software systems.',
}

const certBadges = [
  { name: 'Power BI — PL-300' },
  { name: 'Scrum Master — CSM' },
  { name: 'Python Institute' },
]

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3)
  const recentExperience = experiences.slice(0, 3)

  return (
    <>
      {/* ── Minimalist Hero ────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-white" aria-label="Introduction">
        {/* Soft pastel mesh gradient top edge */}
        <div className="absolute top-0 inset-x-0 h-[40vh] pointer-events-none bg-mesh opacity-80" aria-hidden />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-12 pt-32 pb-40 flex justify-between items-center z-10">
          <div className="max-w-xl flex flex-col gap-6">
            <h1 className="font-display text-5xl sm:text-[4rem] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight animate-fade-up">
              Hi, I&#39;m Richard!
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-[13px] font-medium text-[#6B7280] uppercase tracking-widest animate-fade-up stagger-1">
              <span className="flex items-center gap-1.5"><span aria-hidden>📍</span> Toronto, ON</span>
              <span className="hidden sm:inline-block">·</span>
              <span className="flex items-center gap-1.5"><span aria-hidden>🎓</span> CS B.Sc. + Econ / UBC &#39;25</span>
            </div>

            <p className="text-lg text-[#1A1A1A] leading-relaxed animate-fade-up stagger-2 mt-2 font-medium">
              I am a Software & Data Engineer focused on building products, data pipelines, and technology solutions that remove manual friction from work.
            </p>

            <p className="text-[#6B7280] leading-relaxed animate-fade-up stagger-2">
              Whether it&#39;s deploying a mobile inventory app, training graph neural networks on transit data, or optimizing accounting workflows—I build systems that scale. I&#39;m currently expanding my knowledge in AI infrastructure and high-performance, robust engineering.
            </p>

            <p className="text-[#6B7280] italic animate-fade-up stagger-3">
              3 words to describe me: Tenacious. Analytical. Driven. (And I play a lot of football).
            </p>

            <div className="pt-4 flex items-center animate-fade-up stagger-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] hover:bg-[#10B981]/20 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" aria-hidden />
                Available for contract roles — Get in touch!
              </a>
            </div>
          </div>

          {/* Polaroid Image Cluster (Hero Right Side) */}
          <div className="hidden lg:block relative w-[340px] h-[380px] animate-fade-up stagger-3" aria-hidden>
            {/* Replace with actual image in public/images/profile.jpg */}
            <div className="absolute top-4 right-0 w-[240px] h-[300px] polaroid rotate-3 overflow-hidden">
              <div className="relative w-full h-[245px] bg-[#E5E7EB] rounded overflow-hidden">
                <Image src="/images/mainpage.jpg" alt="Richard Pillaca" fill className="object-cover object-top" />
              </div>
              <p className="text-center mt-3 font-mono text-[10px] text-[#6B7280]">📍 Kelowna → Toronto</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metric Strip (Clean, borderless) ───────────── */}
      <section className="bg-white border-y border-[#F3F4F6]">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: '6+', label: 'Projects Finished' },
            { num: '5K+', label: 'Repos analyzed' },
            { num: '15+', label: 'Technologies used' },
            { num: '3', label: 'Certifications' },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tighter">{num}</span>
              <span className="text-sm font-medium text-[#6B7280]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects (Clean Cards) ────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-2xl font-bold text-[#1A1A1A]">Selected Work</h2>
            <Link href="/projects" className="text-sm font-semibold text-[#10B981] hover:text-[#059669] transition-colors">
              View all projects ↗
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.id}
                className="group flex flex-col p-6 card-ultra-clean"
              >
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] mb-4">
                  {project.category}
                </p>
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#10B981] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6 flex-1">
                  {project.tagline}
                </p>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {project.stack.slice(0, 3).map(s => (
                    <span key={s} className="pill-badge">{s}</span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-[10px] text-[#6B7280] font-medium">+{project.stack.length - 3}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Experience ──────────────────────────── */}
      <section className="bg-[#F9FAFB] py-24 border-t border-[#F3F4F6]">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Experience</h2>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
              A blend of software engineering, data analytics, and consulting roles.
            </p>
            <Link href="/resume" className="pill-badge bg-white shadow-sm hover:border-[#10B981] transition-colors">
              View Resume ↗
            </Link>
          </div>

          <div className="md:w-2/3 flex flex-col gap-8">
            {recentExperience.map((exp) => (
              <div key={exp.id} className="group relative flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="font-display text-lg font-bold text-[#1A1A1A]">{exp.role}</h3>
                  <span className="text-xs font-mono text-[#6B7280]">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-[#10B981] mb-2">{exp.org} <span className="text-[#6B7280] font-normal">— {exp.location}</span></p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{exp.highlight || exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
