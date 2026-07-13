import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PolaroidCard, QuoteCard, DraggablePiece } from './components/vision-board';
import { Communities } from './components/sections/communities';
import { Exploring } from './components/sections/exploring';
import { BeyondWork } from './components/sections/beyond-work';
import { Shelf } from './components/sections/shelf';
import { PHOTO } from './components/sections/images';

const TABS = [
  { id: 'communities', label: 'Communities', kicker: '01 · The people who make it worth it', Component: Communities },
  { id: 'exploring', label: 'Exploring', kicker: '02 · 14 countries & counting', Component: Exploring },
  { id: 'beyond', label: 'Beyond Work', kicker: '03 · Off the clock', Component: BeyondWork },
  { id: 'shelf', label: 'Shelf', kicker: "04 · What I'm into", Component: Shelf },
] as const;

function BoardTabs() {
  const [active, setActive] = useState<(typeof TABS)[number]['id']>('communities');
  const current = TABS.find((t) => t.id === active)!;
  const Active = current.Component;

  return (
    <section className="max-w-6xl mx-auto px-2 mt-6">
      {/* Tab strip */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--vb-line)] pb-3">
        <div className="flex flex-wrap gap-1.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`font-display font-extrabold text-[0.8rem] tracking-[0.14em] uppercase px-4 py-2 rounded-[3px] transition-colors ${
                active === t.id
                  ? 'bg-[var(--vb-ink)] text-[var(--vb-paper)]'
                  : 'text-[var(--vb-ink-soft)] hover:bg-[var(--vb-paper)]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        
      </div>

      {/* Active board */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="pt-6"
        >
          <Active />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function Hero() {
  return (
    <header className="relative max-w-6xl mx-auto px-2 pt-16 pb-8">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <div>
          <span className="font-mono-tag text-[0.65rem] tracking-[0.3em] uppercase text-[var(--vb-accent)]">
            Richard Pillaca // About
          </span>
          <h1 className="font-display font-black uppercase text-chrome text-[clamp(2.4rem,6.5vw,4.2rem)] tracking-[0.14em] leading-[1.02] mt-3">
            Hi, I'm Richard
          </h1>
          <p className="font-sans-body text-[0.95rem] leading-relaxed text-[var(--vb-ink-soft)] max-w-lg mt-5">
            Today I work across frontend, full-stack, and data — focusing on AI-driven products,
            high-volume systems, and accessible user experiences. Originally from Peru, now based
            in Toronto. This is my vision board: the people, places, and pastimes that shape how I work.
          </p>
          <p className="font-sans-body text-[0.8rem] text-[var(--vb-ink-soft)] mt-4">
            <span className="text-[var(--vb-ink)]">B.Sc. Computer Science · Minor in Economics</span>
            <br />
            University of British Columbia — Sep 2021 – Nov 2025 · Kelowna, BC
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Family ❤️', 'Travelling 🌍', 'Toronto 🏙️'].map((t) => (
              <span
                key={t}
                className="font-mono-tag text-[0.65rem] tracking-wide uppercase bg-[var(--vb-paper)] border border-[var(--vb-line)] rounded-full px-3 py-1 text-[var(--vb-ink-soft)]"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="font-mono-tag text-[0.6rem] tracking-[0.25em] uppercase text-[var(--vb-muted)] mt-6">
            [ Every piece is interactive — drag them around ]
          </p>
        </div>

        <div className="relative h-[340px] md:h-[380px]">
          <DraggablePiece position="top-[0%] left-[8%] w-[220px]" rotation={-4} zIndex={10}>
            <PolaroidCard
              src={PHOTO.portrait}
              alt="Portrait of Richard at a networking event"
              caption="Richard, IRL"
              sub="Frontend · full-stack · data"
              imgClass="aspect-[3/4]"
            />
          </DraggablePiece>
          <DraggablePiece position="top-[46%] right-[2%] w-[200px]" rotation={5} zIndex={14}>
            <QuoteCard>"Data mind, designer's eye."</QuoteCard>
          </DraggablePiece>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[var(--vb-bg-1)] via-[var(--vb-bg-2)] to-[var(--vb-bg-3)] text-[var(--vb-ink)] select-none overflow-x-hidden">
      {/* subtle paper grain */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative px-4 md:px-6 pb-24"
      >
        <Hero />
        <BoardTabs />

        <footer className="max-w-6xl mx-auto px-2 pt-10 text-center">
          
          
        </footer>
      </motion.div>
    </div>
  );
}
