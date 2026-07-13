import type { Locale } from '@/i18n/config'
import { projects } from '@/data/projects'
import { projectOverlaysEs } from '@/data/projects-es-overlays'
import { experiences } from '@/data/experience'
import { experiencesEs } from '@/data/experience-es'
import { essays } from '@/data/essays'
import { essaysEs } from '@/data/essays-es'
import type { Project } from '@/data/projects'
import type { Experience } from '@/data/experience'
import type { Essay } from '@/data/essays'

export function getProjects(locale: Locale): Project[] {
  if (locale === 'en') return projects
  return projects.map((project) => {
    const overlay = projectOverlaysEs[project.slug]
    return overlay ? { ...project, ...overlay } : project
  })
}

export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug)
}

export function getExperiences(locale: Locale): Experience[] {
  return locale === 'es' ? experiencesEs : experiences
}

export function getEssays(locale: Locale): Essay[] {
  return locale === 'es' ? essaysEs : essays
}

export function getEssayBySlug(slug: string, locale: Locale): Essay | undefined {
  return getEssays(locale).find((e) => e.slug === slug)
}
