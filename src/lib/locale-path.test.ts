import { describe, expect, it } from 'vitest'
import { localePath, stripLocaleFromPath, switchLocalePath } from '@/lib/locale-path'

describe('localePath', () => {
  it('prefixes the home path with the locale', () => {
    expect(localePath('en', '/')).toBe('/en')
    expect(localePath('es', '/')).toBe('/es')
  })

  it('prefixes nested paths', () => {
    expect(localePath('en', '/projects')).toBe('/en/projects')
    expect(localePath('es', 'about')).toBe('/es/about')
  })
})

describe('stripLocaleFromPath', () => {
  it('removes a known locale prefix', () => {
    expect(stripLocaleFromPath('/es/projects', ['en', 'es'])).toBe('/projects')
    expect(stripLocaleFromPath('/en', ['en', 'es'])).toBe('/')
  })
})

describe('switchLocalePath', () => {
  it('swaps locale and keeps the tail', () => {
    expect(switchLocalePath('/en/essays', 'es', ['en', 'es'])).toBe('/es/essays')
  })
})
