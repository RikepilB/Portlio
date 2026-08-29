import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { essays } from '@/data/essays'
import { projects } from '@/data/projects'

const BASE = 'https://richardpillaca.com'

const staticPaths = ['', '/about', '/projects', '/essays', '/journey'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
    }))
  )

  const projectEntries = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${BASE}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
    }))
  )

  const essayEntries = locales.flatMap((locale) =>
    essays.map((essay) => ({
      url: `${BASE}/${locale}/essays/${essay.slug}`,
      lastModified: new Date(),
    }))
  )

  return [...staticEntries, ...projectEntries, ...essayEntries]
}
