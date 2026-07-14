'use client'

import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Community } from '@/components/about/types'

type PostcardModalProps = {
  open: boolean
  community: Community | null
  imageIndex: number
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export function PostcardModal({
  open,
  community,
  imageIndex,
  onClose,
  onPrev,
  onNext,
}: PostcardModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, onPrev, onNext])

  if (!open || !community || typeof document === 'undefined') return null

  const src = community.images[imageIndex] ?? community.images[0]
  const label = community.labels[imageIndex] ?? community.boardCaption
  const hasMany = community.images.length > 1

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-mist-ice/85 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-6xl cursor-default flex-col overflow-hidden rounded-2xl border border-silver/35 bg-mist-ice shadow-2xl md:flex-row"
      >
        <div className="relative aspect-[4/3] w-full bg-mist-soft md:aspect-auto md:min-h-[540px] md:w-[62%]">
          <Image src={src} alt={label} fill className="object-contain p-2" priority sizes="(max-width: 768px) 100vw, 60vw" />
          {hasMany ? (
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={onPrev}
                className="rounded-full border border-silver/40 bg-mist-ice/90 p-2 text-anthracite shadow-sm hover:border-silver"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-mono text-[10px] tabular-nums text-[#6e7481]">
                {imageIndex + 1}/{community.images.length}
              </span>
              <button
                type="button"
                onClick={onNext}
                className="rounded-full border border-silver/40 bg-mist-ice/90 p-2 text-anthracite shadow-sm hover:border-silver"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-4 overflow-y-auto border-t border-silver/35 p-6 md:w-[38%] md:border-l md:border-t-0 md:p-9">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 id={titleId} className="font-display text-2xl font-bold tracking-tight text-anthracite">
                {community.boardCaption}
              </h3>
              {community.url ? (
                <a
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-mono text-[11px] text-silver-shadow hover:text-anthracite"
                >
                  {community.org}
                </a>
              ) : (
                <p className="mt-1 font-mono text-[11px] text-[#6e7481]">{community.org}</p>
              )}
              {community.boardSub ? (
                <p className="mt-2 font-accent text-sm italic text-silver-shadow">{community.boardSub}</p>
              ) : null}
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-lg p-1 text-[#6e7481] transition-colors hover:bg-mist-deep hover:text-anthracite"
              aria-label="Close postcard"
            >
              <X size={20} />
            </button>
          </div>
          <p className="m-0 font-sans text-[15px] font-light leading-relaxed text-anthracite/85">
            {community.description}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  )
}
