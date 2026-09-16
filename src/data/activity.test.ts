import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { activity, activityProjectSlugs } from './activity'
import { projectHealth } from './project-health'
import { projects } from './projects'

describe('public evidence', () => {
  it('links each featured activity project to an existing case study', () => {
    for (const slug of activityProjectSlugs) {
      expect(projects.some((project) => project.slug === slug)).toBe(true)
    }
  })
  it('links contributions to upstream PRs, not fork ownership', () => {
    for (const item of activity.filter((entry) => entry.kind === 'contribution')) {
      expect(item.href).toMatch(/^https:\/\/github.com\/(?!RikepilB\/)[^/]+\/[^/]+\/pull\/\d+$/)
    }
  })
  it('keeps every activity entry uniquely identified, dated and linked', () => {
    const ids = activity.map((entry) => entry.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const entry of activity) {
      if (entry.href) expect(entry.href).toMatch(/^https:\/\//)
      expect(entry.title.en && entry.title.es).toBeTruthy()
      expect(entry.description.en && entry.description.es).toBeTruthy()
      if (entry.date) expect(entry.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      if (entry.kind === 'post') expect(entry.href).toBeUndefined()
    }
  })
  it('keeps health entries attached to real projects and dates', () => {
    expect(Object.keys(projectHealth).sort()).toEqual(projects.map((project) => project.slug).sort())
    for (const [slug, entry] of Object.entries(projectHealth)) {
      expect(projects.some((project) => project.slug === slug)).toBe(true)
      expect(entry.checked).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(entry.summary.en).toBeTruthy()
      expect(entry.summary.es).toBeTruthy()
    }
  })
  it('does not promote the FindLeads pilot as self-service', () => {
    expect(projectHealth.findleads.url).toBeUndefined()
  })
  it('preserves the approved hero exactly', () => {
    const path = 'src/app/[locale]/page.tsx'
    const current = readFileSync(path, 'utf8')
    const hero = (source: string) => source.slice(source.indexOf('      <section'), source.indexOf('      <section id="work"')).replace(/\r\n/g, '\n')
    // Approved hero at 89d507e; keep this independent of the checkout's current HEAD.
    expect(createHash('sha256').update(hero(current)).digest('hex')).toBe('047f7bde260182a61dacf6ae9df41dc0bc61a6f1827ecd34a3c539e4f7925722')
  })
})
