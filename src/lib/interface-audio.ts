// Re-check consent after resume: the user may mute while the browser wakes its audio context.
export async function playInterfaceTone(getContext: () => AudioContext, isActive: () => boolean) {
  if (!isActive()) return
  const context = getContext()
  await context.resume()
  if (!isActive() || context.state !== 'running') return
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  oscillator.type = 'sine'
  oscillator.frequency.setValueAtTime(520, context.currentTime)
  oscillator.frequency.exponentialRampToValueAtTime(360, context.currentTime + 0.055)
  gain.gain.setValueAtTime(0.018, context.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.065)
  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start()
  oscillator.stop(context.currentTime + 0.07)
  oscillator.onended = () => { oscillator.disconnect(); gain.disconnect() }
}
