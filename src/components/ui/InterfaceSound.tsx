'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import { playInterfaceTone } from '@/lib/interface-audio'

const SoundContext = createContext({ enabled: false, unavailable: false, toggle: () => {} })

export function InterfaceSound({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false)
  const [unavailable, setUnavailable] = useState(false)
  const active = useRef(false)
  const mounted = useRef(true)
  const audio = useRef<AudioContext | null>(null)
  const lastPlayed = useRef(0)

  async function play() {
    if (!active.current || Date.now() - lastPlayed.current < 65) return
    lastPlayed.current = Date.now()
    try {
      await playInterfaceTone(
        () => { audio.current ??= new AudioContext(); return audio.current },
        () => active.current && mounted.current,
      )
    } catch {
      active.current = false
      if (mounted.current) { setEnabled(false); setUnavailable(true) }
    }
  }

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      active.current = false
      if (audio.current) void audio.current.close().catch(() => {})
      audio.current = null
    }
  }, [])

  function toggle() {
    active.current = !active.current
    setEnabled(active.current)
    if (active.current) void play()
    else if (audio.current) void audio.current.suspend().catch(() => {})
  }

  return <SoundContext.Provider value={{ enabled, unavailable, toggle }}>
    <div onClickCapture={(event) => {
      const target = event.target
      if (!(target instanceof Element) || target.closest('.portfolio-hero, [data-sound-toggle]')) return
      if (target.closest('a, button:not(:disabled), summary')) void play()
    }}>{children}</div>
  </SoundContext.Provider>
}

export function SoundToggle() {
  const { locale } = useLocale()
  const { enabled, unavailable, toggle } = useContext(SoundContext)
  const label = unavailable ? (locale === 'es' ? 'Sonido no disponible' : 'Sound unavailable') : `${locale === 'es' ? 'Sonido' : 'Sound'}: ${enabled ? (locale === 'es' ? 'activado' : 'on') : (locale === 'es' ? 'desactivado' : 'off')}`
  const Icon = enabled ? Volume2 : VolumeX
  return <button type="button" data-sound-toggle aria-label={label} title={label} aria-pressed={enabled} disabled={unavailable} onClick={toggle} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-gold-soft hover:text-gold-bright disabled:opacity-40"><Icon size={17} strokeWidth={1.5} aria-hidden="true" /></button>
}
