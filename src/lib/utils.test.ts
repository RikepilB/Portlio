import { describe, expect, it } from 'vitest'
import { formatDate } from '@/lib/utils'

describe('formatDate', () => {
  it('formats date-only values independently of the machine timezone', () => {
    expect(formatDate('2025-03-01')).toBe('March 2025')
  })
})
