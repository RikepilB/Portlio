import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { locales, isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getProjectBySlug, getProjects } from '@/data/locale'
import { isComingSoon } from '@/data/projects'
import { localePath } from '@/lib/locale-path'
import { TechTag } from '@/components/ui/TechTag'

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjects(locale).map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const project = getProjectBySlug(slug, locale)
  if (!project) return {}
  return {
    title: `${project.title} — Richard Pillaca`,
    description: project.tagline,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)
  const project = getProjectBySlug(slug, locale)
  if (!project) notFound()

  const comingSoon = isComingSoon(project)

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Link
        href={localePath(locale, '/projects')}
        aria-label={dict.caseStudy.backAria}
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 hover:text-gold-bright"
      >
        ← {dict.caseStudy.back}
      </Link>

      <header className="mb-12 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-accent text-[13px] uppercase italic tracking-[0.18em] text-gold-bright">
            {project.category}
          </span>
          <span className="font-mono text-sm text-muted">{project.duration}</span>
          {project.readTime ? (
            <span className="font-mono text-sm text-muted">{project.readTime}</span>
          ) : null}
          {comingSoon ? (
            <span className="rounded-full border border-gold/40 bg-gold-soft px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-gold-bright">
              {dict.caseStudy.comingSoonBadge}
            </span>
          ) : null}
        </div>
        <h1 className="font-display text-4xl font-bold leading-tight text-matte sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed text-ink-on-felt sm:text-xl">{project.tagline}</p>
        {project.stack.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>
        ) : null}
      </header>

      <section className="mb-10" aria-label={dict.caseStudy.overview}>
        <h2 className="mb-3 font-display text-xl font-bold text-matte">{dict.caseStudy.overview}</h2>
        <p className="leading-relaxed text-ink-on-felt">{project.overview}</p>
      </section>

      {project.problem ? (
        <section className="mb-10" aria-label={dict.caseStudy.problem}>
          <div className="rounded-r-lg border-l-4 border-gold bg-felt-deep/40 p-5">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-gold-bright">
              {dict.caseStudy.problem}
            </h2>
            <p className="leading-relaxed text-ink-on-felt">{project.problem}</p>
          </div>
        </section>
      ) : null}

      {project.questions.length > 0 ? (
        <section className="mb-10" aria-label={dict.caseStudy.questions}>
          <h2 className="mb-4 font-display text-xl font-bold text-matte">{dict.caseStudy.questions}</h2>
          <ol className="flex list-none flex-col gap-3">
            {project.questions.map((q, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-sm font-bold text-gold-bright">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="leading-relaxed text-muted">{q}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {project.methodology.length > 0 ? (
        <section className="mb-10" aria-label={dict.caseStudy.methodology}>
          <h2 className="mb-6 font-display text-xl font-bold text-matte">{dict.caseStudy.methodology}</h2>
          <div className="flex flex-col gap-6">
            {project.methodology.map((m, i) => (
              <div key={i} className="flex flex-col gap-4 sm:flex-row">
                <div className="w-full shrink-0 sm:w-28">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold">
                    {m.phase}
                  </span>
                  <p className="mt-0.5 font-display text-sm font-semibold text-matte">{m.title}</p>
                </div>
                <div className="flex-1 border-l border-rule pl-4 sm:pl-6">
                  <p className="mb-3 text-sm leading-relaxed text-muted">{m.detail}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.tech.map((t) => (
                      <TechTag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.keyFindings.length > 0 ? (
        <section className="mb-10" aria-label={dict.caseStudy.findings}>
          <h2 className="mb-4 font-display text-xl font-bold text-matte">{dict.caseStudy.findings}</h2>
          <div className="flex flex-col gap-4">
            {project.keyFindings.map((finding, i) => (
              <div key={i} className="flex gap-3 rounded-lg border border-rule bg-felt-deep/35 p-4">
                <span className="mt-0.5 shrink-0 font-mono text-sm font-bold text-gold-bright">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed text-ink-on-felt">{finding}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.conclusion ? (
        <section className="mb-10" aria-label={dict.caseStudy.conclusion}>
          <h2 className="mb-3 font-display text-xl font-bold text-matte">{dict.caseStudy.conclusion}</h2>
          <p className="leading-relaxed text-ink-on-felt">{project.conclusion}</p>
        </section>
      ) : null}

      {project.images && project.images.length > 0 ? (
        <section className="mb-10" aria-label={dict.caseStudy.gallery}>
          <h2 className="mb-4 font-display text-xl font-bold text-matte">{dict.caseStudy.gallery}</h2>
          <div
            className={`grid gap-4 ${project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}
          >
            {project.images.map((src, i) => (
              <div
                key={i}
                className="relative aspect-video w-full overflow-hidden rounded-xl border border-rule bg-felt-deep/35"
              >
                <Image
                  src={src}
                  alt={`${project.title} ${dict.caseStudy.screenshotAltPrefix} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {(project.github ||
        (project.demoVideo && !project.demoVideo.startsWith('PLACEHOLDER'))) && (
        <div className="mt-8 flex flex-wrap gap-3 border-t border-rule pt-8">
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${dict.caseStudy.githubAriaPrefix} ${project.title}`}
              className="inline-flex items-center gap-2 rounded-lg bg-matte px-5 py-2.5 text-sm font-semibold text-felt-deep transition-colors duration-150 hover:bg-gold"
            >
              {dict.caseStudy.github}
            </Link>
          ) : null}
          {project.demoVideo && !project.demoVideo.startsWith('PLACEHOLDER') ? (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-gold-soft px-5 py-2.5 text-sm font-semibold text-gold-bright transition-colors duration-150 hover:bg-gold hover:text-felt-deep"
            >
              {project.demoVideo.includes('drive.google.com') ? (
                <>
                  <span className="text-lg">▶️</span> {dict.caseStudy.watchDemo}
                </>
              ) : (
                <>{dict.caseStudy.liveDemo}</>
              )}
            </a>
          ) : null}
        </div>
      )}
    </article>
  )
}
