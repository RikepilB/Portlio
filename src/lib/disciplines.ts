/** Maps raw project.category values to discipline keys (locale-independent). */

export const DISCIPLINE_KEYS = ['software', 'ai', 'data'] as const
export type DisciplineKey = (typeof DISCIPLINE_KEYS)[number]

const CATEGORY_TO_KEY: Record<string, DisciplineKey> = {
  'FULL STACK': 'software',
  'FULL STACK 2026': 'software',
  'OPEN SOURCE': 'software',
  'DESARROLLO FULL STACK': 'software',
  'DESARROLLO FULL STACK 2026': 'software',
  'CÓDIGO ABIERTO': 'software',
  'AI ENGINEERING': 'ai',
  'INGENIERÍA DE IA': 'ai',
  'DATA SCIENCE': 'data',
  'CIENCIA DE DATOS': 'data',
  RESEARCH: 'data',
  INVESTIGACIÓN: 'data',
  'EXCEL AUTOMATION': 'data',
  'AUTOMATIZACIÓN EXCEL': 'data',
  'HCI RESEARCH': 'data',
  'INVESTIGACIÓN HCI': 'data',
}

export function disciplineKeyForCategory(category: string): DisciplineKey {
  return CATEGORY_TO_KEY[category] ?? 'software'
}

export function projectMatchesDisciplineKey(
  category: string,
  filter: DisciplineKey | 'all'
): boolean {
  if (filter === 'all') return true
  return disciplineKeyForCategory(category) === filter
}

/** @deprecated Use discipline keys with locale dictionaries */
export const DISCIPLINES = [
  'Software Engineering',
  'AI & Automation',
  'Data & Analytics',
] as const

export type Discipline = (typeof DISCIPLINES)[number]

export function disciplineForCategory(category: string): Discipline {
  const key = disciplineKeyForCategory(category)
  const map: Record<DisciplineKey, Discipline> = {
    software: 'Software Engineering',
    ai: 'AI & Automation',
    data: 'Data & Analytics',
  }
  return map[key]
}

export function projectMatchesDiscipline(
  category: string,
  discipline: Discipline | 'All'
): boolean {
  if (discipline === 'All') return true
  return disciplineForCategory(category) === discipline
}
