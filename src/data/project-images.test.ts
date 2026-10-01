import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { getProjects } from '@/data/locale'
import { projects } from '@/data/projects'
import { projectImages } from '@/data/project-images'

describe('public project screenshots', () => {
  it('references real catalog entries and bundled assets', () => {
    for (const [slug, image] of Object.entries(projectImages)) {
      expect(projects.some((project) => project.slug === slug), slug).toBe(true)
      expect(existsSync(resolve('public', image.slice(1))), image).toBe(true)
    }
  })

  it('keeps current and historical visuals available in both languages', () => {
    for (const locale of ['en', 'es'] as const) {
      for (const project of getProjects(locale)) {
        const image = projectImages[project.slug]
        if (!image) continue
        const original = projects.find((entry) => entry.slug === project.slug)!
        expect(project.image, project.slug).toBe(image)
        expect(project.images?.[0], project.slug).toBe(image)
        for (const previous of original.images ?? (original.image ? [original.image] : [])) {
          expect(project.images, project.slug).toContain(previous)
        }
        expect(new Set(project.images).size, project.slug).toBe(project.images?.length)
      }
    }
  })
})
