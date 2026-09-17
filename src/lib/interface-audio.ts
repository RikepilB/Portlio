export type InterfaceCue = 'navigate' | 'filter' | 'expand' | 'collapse' | 'project' | 'outbound' | 'action'

const cueSpecs: Record<InterfaceCue, {
  wave: OscillatorType
  startHz: number
  endHz: number
  duration: number
  gain: number
}> = {
  navigate: { wave: 'sine', startHz: 420, endHz: 560, duration: 0.065, gain: 0.014 },
  filter: { wave: 'triangle', startHz: 760, endHz: 940, duration: 0.045, gain: 0.011 },
  expand: { wave: 'sine', startHz: 330, endHz: 520, duration: 0.085, gain: 0.016 },
  collapse: { wave: 'sine', startHz: 520, endHz: 330, duration: 0.075, gain: 0.013 },
  project: { wave: 'triangle', startHz: 480, endHz: 360, duration: 0.08, gain: 0.015 },
  outbound: { wave: 'triangle', startHz: 440, endHz: 680, duration: 0.09, gain: 0.013 },
  action: { wave: 'sine', startHz: 560, endHz: 450, duration: 0.055, gain: 0.012 },
}

export function getInterfaceCueSpec(cue: InterfaceCue) {
  return cueSpecs[cue]
}

// Re-check the current preference after resume: the visitor may mute while the browser wakes audio.
export async function playInterfaceTone(
  getContext: () => AudioContext,
  isActive: () => boolean,
  cue: InterfaceCue = 'action',
) {
  if (!isActive()) return
  const context = getContext()
  await context.resume()
  if (!isActive() || context.state !== 'running') return
  const spec = cueSpecs[cue]
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  oscillator.type = spec.wave
  oscillator.frequency.setValueAtTime(spec.startHz, context.currentTime)
  oscillator.frequency.exponentialRampToValueAtTime(spec.endHz, context.currentTime + spec.duration * 0.82)
  gain.gain.setValueAtTime(spec.gain, context.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + spec.duration * 0.92)
  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start()
  oscillator.stop(context.currentTime + spec.duration)
  oscillator.onended = () => { oscillator.disconnect(); gain.disconnect() }
}
