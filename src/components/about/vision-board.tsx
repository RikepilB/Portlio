'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
  type RefObject,
} from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const BoardConstraintsContext = createContext<RefObject<HTMLDivElement | null> | null>(null)

export type BoardPlacement = {
  top: string
  left?: string
  right?: string
  width: string
}

export function BoardCanvas({
  children,
  className = '',
  minHeight = 820,
}: {
  children: ReactNode
  className?: string
  minHeight?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <BoardConstraintsContext.Provider value={ref}>
      <div
        ref={ref}
        className={cn(
          'relative mx-auto w-full max-w-6xl overflow-visible',
          // Mobile / tablet: wrap collage as a readable grid
          'grid grid-cols-2 gap-4 sm:grid-cols-3 md:block',
          className,
        )}
        style={{ minHeight: `${minHeight}px` }}
      >
        {children}
      </div>
    </BoardConstraintsContext.Provider>
  )
}

export function DraggablePiece({
  children,
  placement,
  rotation = 0,
  zIndex = 1,
  dragConstraints: dragConstraintsProp,
  className = '',
  dragDisabled = false,
}: {
  children: ReactNode
  placement?: BoardPlacement
  rotation?: number
  zIndex?: number
  dragConstraints?: RefObject<HTMLDivElement | null>
  className?: string
  dragDisabled?: boolean
}) {
  const contextConstraints = useContext(BoardConstraintsContext)
  const dragConstraints = dragConstraintsProp ?? contextConstraints
  const prefersReducedMotion = useReducedMotion()
  const [canScatter, setCanScatter] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setCanScatter(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const canDrag = !dragDisabled && canScatter && !prefersReducedMotion

  const scatterStyle: CSSProperties | undefined = canScatter && placement
    ? {
        position: 'absolute',
        top: placement.top,
        left: placement.left,
        right: placement.right,
        width: placement.width,
        zIndex,
        rotate: `${rotation}deg`,
      }
    : { zIndex, rotate: `${rotation * 0.35}deg` }

  return (
    <motion.div
      drag={canDrag}
      dragConstraints={canDrag ? dragConstraints ?? undefined : undefined}
      dragElastic={0.12}
      dragMomentum={false}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={canDrag ? { scale: 1.04, rotate: 0, zIndex: 60 } : undefined}
      whileDrag={canDrag ? { scale: 1.06, zIndex: 80 } : undefined}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      style={scatterStyle}
      className={cn(
        'w-full max-w-[200px] justify-self-center md:max-w-none',
        canDrag ? 'cursor-grab active:cursor-grabbing' : 'cursor-default',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export function PolaroidCard({
  src,
  alt,
  caption,
  sub,
  onClick,
  imgClass = 'aspect-[4/3]',
  objectPosition = 'object-top',
}: {
  src: string
  alt: string
  caption: string
  sub?: string
  onClick?: () => void
  imgClass?: string
  objectPosition?: string
}) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      className={cn(
        'w-full rounded-[2px] border border-white/70 bg-mist-ice p-2.5 pb-4 shadow-[6px_10px_24px_rgba(47,53,66,0.14)]',
        onClick && 'cursor-zoom-in',
      )}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      aria-label={onClick ? `Open postcard: ${caption}` : undefined}
    >
      <div className={cn('relative w-full overflow-hidden bg-mist-soft', imgClass)}>
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', objectPosition)}
          sizes="220px"
        />
      </div>
      <p className="mt-1.5 px-1 font-accent text-[1.05rem] italic leading-tight text-anthracite">
        {caption}
      </p>
      {sub ? (
        <p className="mt-0.5 px-1 font-sans text-[0.7rem] text-[#6e7481]">{sub}</p>
      ) : null}
    </div>
  )
}

export function NoteCard({
  title,
  body,
  icon,
  tone = 'paper',
}: {
  title: string
  body: string
  icon?: ReactNode
  tone?: 'paper' | 'accent'
}) {
  const isAccent = tone === 'accent'

  return (
    <div
      className={cn(
        'rounded-[2px] border p-5 shadow-[5px_9px_20px_rgba(47,53,66,0.12)]',
        isAccent
          ? 'border-anthracite/40 bg-anthracite text-mist-ice'
          : 'border-white/60 bg-mist-ice text-anthracite',
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        {icon ? (
          <span className={isAccent ? 'text-mist-ice' : 'text-silver-shadow'}>{icon}</span>
        ) : null}
        <h3 className="font-display text-[0.8rem] font-extrabold uppercase tracking-[0.12em]">
          {title}
        </h3>
      </div>
      <p
        className={cn(
          'font-sans text-[0.8rem] leading-relaxed',
          isAccent ? 'text-mist-ice/85' : 'text-[#6e7481]',
        )}
      >
        {body}
      </p>
    </div>
  )
}

export function QuoteCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-[2px] border border-white/60 bg-mist-soft p-6 text-center shadow-[4px_7px_16px_rgba(47,53,66,0.1)]">
      <p className="font-accent text-[1.15rem] italic leading-snug text-anthracite">{children}</p>
    </div>
  )
}

export function TagChip({ label, flag }: { label: string; flag?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-silver/35 bg-mist-ice px-3 py-1.5 shadow-[2px_3px_8px_rgba(47,53,66,0.08)]">
      {flag ? <span className="text-[0.95rem] leading-none">{flag}</span> : null}
      <span className="font-mono text-[0.7rem] uppercase tracking-wide text-[#6e7481]">{label}</span>
    </span>
  )
}

/** Tiny collage label — not a section break */
export function SectionLabel({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div
      className={cn(
        'rounded-[2px] border px-3.5 py-2 shadow-[3px_5px_12px_rgba(47,53,66,0.1)]',
        dark
          ? 'border-anthracite/40 bg-anthracite text-mist-ice'
          : 'border-white/70 bg-mist-ice text-anthracite',
      )}
    >
      <p className="font-accent text-[1.05rem] italic leading-none tracking-wide">{children}</p>
    </div>
  )
}

