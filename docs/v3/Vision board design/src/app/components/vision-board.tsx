import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

/* ------------------------------------------------------------------ *
 * BoardCanvas
 * A positioned "workspace" that scatters draggable pieces on desktop
 * and collapses to a stacked flow on small screens.
 * ------------------------------------------------------------------ */
export function BoardCanvas({
  children,
  className = '',
  height = 'h-[620px]',
}: {
  children: React.ReactNode;
  className?: string;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`relative mx-auto w-full max-w-6xl ${height} max-md:h-auto max-md:flex max-md:flex-col max-md:gap-6 max-md:items-center ${className}`}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { dragConstraints: ref })
          : child,
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * DraggablePiece
 * Wraps content in a draggable, spring-animated card. On desktop it is
 * absolutely positioned (via `position` classes); on mobile it flows.
 * ------------------------------------------------------------------ */
export function DraggablePiece({
  children,
  position = '',
  rotation = 0,
  zIndex = 1,
  dragConstraints,
  className = '',
}: {
  children: React.ReactNode;
  position?: string;
  rotation?: number;
  zIndex?: number;
  dragConstraints?: React.RefObject<HTMLDivElement>;
  className?: string;
}) {
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.12}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9, rotate: rotation }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ scale: 1.03, rotate: 0, zIndex: 60 }}
      whileDrag={{ scale: 1.06, rotate: rotation * 0.4, zIndex: 80 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      style={{ zIndex }}
      className={`md:absolute ${position} cursor-grab active:cursor-grabbing ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 * PolaroidCard — framed photo with a handwritten caption.
 * ------------------------------------------------------------------ */
export function PolaroidCard({
  src,
  alt,
  caption,
  sub,
  imgClass = 'aspect-square',
}: {
  src: string;
  alt: string;
  caption: string;
  sub?: string;
  imgClass?: string;
}) {
  return (
    <div className="w-full bg-[var(--vb-paper)] p-3 pb-5 shadow-[6px_10px_24px_rgba(47,53,66,0.14)] rounded-[2px] border border-white/70">
      <div className={`w-full overflow-hidden bg-[var(--vb-paper-2)] ${imgClass}`}>
        <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <p className="font-serif-thin italic text-[1.05rem] leading-tight text-[var(--vb-ink)] mt-2 px-1">
        {caption}
      </p>
      {sub ? (
        <p className="font-sans-body text-[0.7rem] text-[var(--vb-muted)] px-1 mt-0.5">{sub}</p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * NoteCard — a paper card with a title + body (no photo).
 * ------------------------------------------------------------------ */
export function NoteCard({
  title,
  body,
  icon,
  tone = 'paper',
}: {
  title: string;
  body: string;
  icon?: React.ReactNode;
  tone?: 'paper' | 'accent';
}) {
  const bg = tone === 'accent' ? 'bg-[var(--vb-accent)] text-[var(--vb-paper)]' : 'bg-[var(--vb-paper)] text-[var(--vb-ink)]';
  return (
    <div className={`${bg} p-5 shadow-[5px_9px_20px_rgba(47,53,66,0.12)] rounded-[2px] border border-white/60`}>
      <div className="flex items-center gap-2 mb-2">
        {icon ? <span className={tone === 'accent' ? 'text-[var(--vb-paper)]' : 'text-[var(--vb-accent)]'}>{icon}</span> : null}
        <h3 className="font-display text-[0.8rem] font-extrabold uppercase tracking-[0.12em]">{title}</h3>
      </div>
      <p className={`font-sans-body text-[0.8rem] leading-relaxed ${tone === 'accent' ? 'text-[var(--vb-paper)]/85' : 'text-[var(--vb-ink-soft)]'}`}>
        {body}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * QuoteCard — a handwritten quote on paper.
 * ------------------------------------------------------------------ */
export function QuoteCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--vb-paper-2)] p-6 flex items-center justify-center text-center shadow-[4px_7px_16px_rgba(47,53,66,0.1)] rounded-[2px] border border-white/60">
      <p className="font-serif-thin italic text-[1.15rem] leading-snug text-[var(--vb-ink)]">{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * TagChip — small pill (used for Exploring countries / interests).
 * ------------------------------------------------------------------ */
export function TagChip({ label, flag }: { label: string; flag?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-[var(--vb-paper)] border border-[var(--vb-line)] rounded-full px-3 py-1.5 shadow-[2px_3px_8px_rgba(47,53,66,0.08)]">
      {flag ? <span className="text-[0.95rem] leading-none">{flag}</span> : null}
      <span className="font-mono-tag text-[0.7rem] tracking-wide text-[var(--vb-ink-soft)] uppercase">{label}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * SectionTitle — big editorial section header for each board.
 * ------------------------------------------------------------------ */
export function SectionTitle({ label, kicker }: { label: string; kicker?: string }) {
  return (
    <div className="max-w-6xl mx-auto mb-8 px-2">
      {kicker ? (
        <span className="font-mono-tag text-[0.65rem] tracking-[0.3em] uppercase text-[var(--vb-accent)]">
          {kicker}
        </span>
      ) : null}
      <h2 className="font-display font-black text-[clamp(2.2rem,6vw,4rem)] tracking-[0.18em] uppercase text-chrome leading-none mt-1">
        {label}
      </h2>
    </div>
  );
}
