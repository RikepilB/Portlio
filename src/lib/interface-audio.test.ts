import { describe, expect, it, vi } from 'vitest'
import { playInterfaceTone } from './interface-audio'

function audioFixture() {
  const oscillator = { type: '', frequency: { setValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() }, connect: vi.fn(), start: vi.fn(), stop: vi.fn(), disconnect: vi.fn(), onended: null as (() => void) | null }
  const gain = { gain: { setValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() }, connect: vi.fn(), disconnect: vi.fn() }
  const context = { resume: vi.fn().mockResolvedValue(undefined), state: 'running', currentTime: 1, destination: {}, createOscillator: vi.fn(() => oscillator), createGain: vi.fn(() => gain) }
  return { context, oscillator, gain, getContext: () => context as unknown as AudioContext }
}

describe('optional interface audio', () => {
  it('does not even initialize audio without opt-in', async () => {
    const getContext = vi.fn()
    await playInterfaceTone(getContext, () => false)
    expect(getContext).not.toHaveBeenCalled()
  })
  it('stays silent when muted while audio is resuming', async () => {
    const audio = audioFixture()
    let finishResume: (() => void) | undefined
    audio.context.resume.mockImplementation(() => new Promise<void>((resolve) => { finishResume = resolve }))
    let enabled = true
    const playing = playInterfaceTone(audio.getContext, () => enabled)
    enabled = false
    finishResume?.()
    await playing
    expect(audio.context.createOscillator).not.toHaveBeenCalled()
  })
  it('fails closed when the browser cannot resume audio', async () => {
    const audio = audioFixture()
    audio.context.resume.mockRejectedValue(new Error('Audio unavailable'))
    await expect(playInterfaceTone(audio.getContext, () => true)).rejects.toThrow('Audio unavailable')
    expect(audio.oscillator.start).not.toHaveBeenCalled()
  })
  it('keeps cues quiet, short and releases their audio nodes', async () => {
    const audio = audioFixture()
    await playInterfaceTone(audio.getContext, () => true)
    expect(audio.gain.gain.setValueAtTime.mock.calls[0][0]).toBeLessThan(0.03)
    expect(audio.oscillator.stop.mock.calls[0][0] - audio.context.currentTime).toBeLessThan(0.1)
    audio.oscillator.onended?.()
    expect(audio.oscillator.disconnect).toHaveBeenCalledOnce()
    expect(audio.gain.disconnect).toHaveBeenCalledOnce()
  })
})
