import { describe, expect, it } from 'vitest'
import { isComingSoon, projects, type Project } from '@/data/projects'
import { projectMatchesDisciplineKey } from '@/lib/disciplines'
import { essays } from '@/data/essays'
import { essaysEs } from '@/data/essays-es'

const stub = (overrides: Partial<Project>): Project =>
  ({
    id: 'x',
    slug: 'x',
    category: 'FULL STACK',
    catColor: '#000',
    title: 'x',
    tagline: 'x',
    duration: '2026',
    readTime: '1 min',
    overview: '',
    problem: '',
    questions: [],
    methodology: [],
    results: [],
    keyFindings: [],
    conclusion: '',
    github: '',
    stack: [],
    ...overrides,
  }) as Project

describe('isComingSoon', () => {
  it('is false when status is omitted', () => {
    expect(isComingSoon(stub({}))).toBe(false)
  })

  it('is true only for coming-soon status', () => {
    expect(isComingSoon(stub({ status: 'coming-soon' }))).toBe(true)
    expect(isComingSoon(stub({ status: 'shipped' }))).toBe(false)
  })
})

describe('projectMatchesDisciplineKey', () => {
  it('matches AI engineering to the ai filter', () => {
    expect(projectMatchesDisciplineKey('AI ENGINEERING', 'ai')).toBe(true)
    expect(projectMatchesDisciplineKey('AI ENGINEERING', 'data')).toBe(false)
    expect(projectMatchesDisciplineKey('AI ENGINEERING', 'all')).toBe(true)
  })
})

describe('essays', () => {
  it('ships three essays with bodies in both locales', () => {
    expect(essays).toHaveLength(3)
    expect(essaysEs).toHaveLength(3)
    for (const essay of [...essays, ...essaysEs]) {
      expect(essay.body.length).toBeGreaterThan(0)
    }
    expect(essays.map((e) => e.slug)).toEqual(essaysEs.map((e) => e.slug))
  })
})

describe('shipped projects', () => {
  it('include at least one real visual', () => {
    const shipped = projects.filter((project) => !isComingSoon(project))
    expect(shipped.length).toBeGreaterThan(0)
    for (const project of shipped) {
      const visual = project.image ?? project.images?.[0]
      expect(visual, `${project.slug} is missing an image`).toBeTruthy()
    }
  })
})
