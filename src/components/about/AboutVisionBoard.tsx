'use client'

import { useRef, useState, type PointerEvent } from 'react'
import {
  BoardCanvas,
  DraggablePiece,
  NoteCard,
  PolaroidCard,
  QuoteCard,
  SectionLabel,
  TagChip,
} from '@/components/about/vision-board'
import { PostcardModal } from '@/components/about/PostcardModal'
import {
  CommunitiesAddControl,
  useCommunitiesBoardState,
} from '@/components/about/CommunitiesBoard'
import type { Community } from '@/components/about/types'

type CommunityInput = Omit<Community, 'boardCaption' | 'boardSub'>

type BeyondItem = { emoji: string; title: string; description: string }

type ImagePick = { src: string; label?: string }

const W = '205px'
const WN = '185px'

const BOARD_META: Record<string, { caption: string; sub: string }> = {
  LASO: { caption: 'LASO — UBCO', sub: 'VP Internal' },
  Hispanotech: { caption: 'hispanotech.ca', sub: 'Latinos in Canadian tech' },
  OTIN: { caption: 'Okanagan Tech Night', sub: 'Co-founded · 200+ people' },
  'Wealthsimple Foundation': { caption: 'Wealthsimple Fdn.', sub: 'Economic empowerment' },
  'Scale Without Borders': { caption: 'Scale Without Borders', sub: 'Newcomers in tech' },
  'Cursor Community': { caption: 'Cursor AI Community', sub: 'AI-assisted coding circle' },
  'Canadian Cancer Society': { caption: 'Canadian Cancer Society', sub: 'Fundraising & outreach' },
  BrainTrainr: { caption: 'BrainTrainr', sub: 'Web & UX lead' },
  'Alianza Latina': { caption: 'Alianza Latina', sub: 'National Latino network' },
}

/** Images + text interleaved — scrapbook density */
const COMMUNITY_SLOTS = [
  { title: 'LASO', top: '1%', left: '1%', width: W, rotation: -3, z: 12, img: 'aspect-[4/3]', objectPosition: 'object-top' },
  { title: 'Hispanotech', top: '0.5%', left: '22%', width: W, rotation: 2, z: 11, img: 'aspect-[4/3]', objectPosition: 'object-top' },
  { title: 'OTIN', top: '1%', left: '44%', width: W, rotation: -2, z: 13, img: 'aspect-[4/3]', objectPosition: 'object-top' },
  { title: 'Wealthsimple Foundation', top: '0.5%', left: '72%', width: W, rotation: 3, z: 10, img: 'aspect-[4/3]', objectPosition: 'object-top' },
  /* Row 2 — photos + notes woven (per user arrows) */
  { title: 'Scale Without Borders', top: '10%', left: '0%', width: W, rotation: 2, z: 9, img: 'aspect-[4/3]', objectPosition: 'object-top' },
  { title: 'BrainTrainr', top: '9.5%', left: '34%', width: W, rotation: -2, z: 14, img: 'aspect-[4/3]', objectPosition: 'object-top' },
  { title: 'Alianza Latina', top: '10%', left: '54%', width: W, rotation: 2, z: 12, img: 'aspect-[4/3]', objectPosition: 'object-top' },
  { title: 'Cursor Community', top: '9.5%', left: '78%', width: '195px', rotation: -3, z: 11, img: 'aspect-[4/3]', objectPosition: 'object-top' },
  { title: 'Canadian Cancer Society', top: '20%', left: '2%', width: W, rotation: -2, z: 8, img: 'aspect-[4/3]', objectPosition: 'object-center' },
] as const

const PLACES = [
  { label: 'Canada', flag: '🇨🇦' },
  { label: 'Peru', flag: '🇵🇪' },
  { label: 'UK', flag: '🇬🇧' },
  { label: 'Switzerland', flag: '🇨🇭' },
  { label: 'Greece', flag: '🇬🇷' },
  { label: 'Mexico', flag: '🇲🇽' },
  { label: 'Ecuador', flag: '🇪🇨' },
  { label: 'USA', flag: '🇺🇸' },
  { label: 'Dom. Republic', flag: '🇩🇴' },
  { label: 'and more', flag: '✨' },
]

const SHELF_FAVES: Array<ImagePick & { objectPosition?: string }> = [
  { src: '/images/Favorites/61LsXpUgxdL.jpg', label: 'Music 🎵', objectPosition: 'object-top' },
  { src: '/images/Favorites/81FYASoyw0L._AC_UF894,1000_QL80_.jpg', label: 'Sports 🏃', objectPosition: 'object-top' },
  { src: '/images/Favorites/Tintin_movie_poster_01.webp', label: 'Movies 🎬', objectPosition: 'object-top' },
  { src: '/images/Favorites/MV5BZWNjZjQwZmItMWU1ZS00YTJhLWExYjUtYjk3YjcxMjJlOTdmXkEyXkFqcGc@._V1_.jpg', label: 'Music 🎶', objectPosition: 'object-top' },
]

const CLICK_DRAG_THRESHOLD_PX = 6

function toCommunity(c: CommunityInput): Community {
  const meta = BOARD_META[c.title] ?? { caption: c.title, sub: c.org }
  return { ...c, boardCaption: meta.caption, boardSub: meta.sub }
}

export function AboutVisionBoard({
  communities,
  beyondWork,
  onPickImage,
  hint,
}: {
  communities: CommunityInput[]
  beyondWork: BeyondItem[]
  onPickImage: (item: ImagePick) => void
  hint?: string
}) {
  const board = useCommunitiesBoardState(communities)
  const byTitle = new Map(communities.map((c) => [c.title, toCommunity(c)]))
  const [postcard, setPostcard] = useState<{ community: Community; imageIndex: number } | null>(null)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  const openPostcard = (community: Community) => {
    setPostcard({ community, imageIndex: 0 })
  }

  const onPiecePointerDown = (e: PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }

  const onPiecePointerUp = (e: PointerEvent, community: Community) => {
    const start = pointerStart.current
    pointerStart.current = null
    if (!start) return
    if (Math.hypot(e.clientX - start.x, e.clientY - start.y) < CLICK_DRAG_THRESHOLD_PX) {
      openPostcard(community)
    }
  }

  const noteForm = board.noteFormOpen ? (
    <form
      onSubmit={board.addNote}
      className="mb-6 grid max-w-md gap-2 rounded-[3px] border border-silver/35 bg-mist-soft/80 p-4"
    >
      <label className="font-mono text-[10px] uppercase tracking-wider text-[#6e7481]">
        Note title
        <input
          value={board.noteTitle}
          onChange={(e) => board.setNoteTitle(e.target.value)}
          className="mt-1 w-full rounded border border-silver/35 bg-mist-ice px-2 py-1.5 font-sans text-sm text-anthracite"
          required
        />
      </label>
      <label className="font-mono text-[10px] uppercase tracking-wider text-[#6e7481]">
        Body
        <textarea
          value={board.noteBody}
          onChange={(e) => board.setNoteBody(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded border border-silver/35 bg-mist-ice px-2 py-1.5 font-sans text-sm text-anthracite"
          required
        />
      </label>
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-[3px] bg-anthracite px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-mist-ice"
        >
          Pin note
        </button>
        <button
          type="button"
          onClick={() => board.setNoteFormOpen(false)}
          className="rounded-[3px] border border-silver/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#6e7481]"
        >
          Cancel
        </button>
      </div>
    </form>
  ) : null

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-end gap-3">
        {hint ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:text-[11px]">
            ↔ {hint}
          </span>
        ) : null}
        <CommunitiesAddControl
          menuOpen={board.menuOpen}
          setMenuOpen={board.setMenuOpen}
          onAddNote={() => {
            board.setNoteFormOpen(true)
            board.setMenuOpen(false)
          }}
          onPickImage={board.onPickImage}
        />
      </div>
      {noteForm}

      <BoardCanvas minHeight={2800}>
        <DraggablePiece placement={{ top: '0%', left: '38%', width: '140px' }} rotation={3} zIndex={40}>
          <SectionLabel tone="dark">Communities</SectionLabel>
        </DraggablePiece>

        {COMMUNITY_SLOTS.map((slot) => {
          const community = byTitle.get(slot.title)
          if (!community?.images[0]) return null
          return (
            <DraggablePiece
              key={slot.title}
              placement={{ top: slot.top, left: slot.left, width: slot.width }}
              rotation={slot.rotation}
              zIndex={slot.z}
            >
              <div
                onPointerDown={onPiecePointerDown}
                onPointerUp={(e) => onPiecePointerUp(e, community)}
              >
                <PolaroidCard
                  src={community.images[0]}
                  alt={community.labels[0] ?? community.boardCaption}
                  caption={community.boardCaption}
                  sub={community.boardSub}
                  imgClass={slot.img}
                  objectPosition={slot.objectPosition}
                />
              </div>
            </DraggablePiece>
          )
        })}

        {/* Text tucked BETWEEN photos (row 2) */}
        <DraggablePiece placement={{ top: '11%', left: '17%', width: WN }} rotation={-4} zIndex={28}>
          <NoteCard
            tone="accent"
            title="Learning"
            body="Rooms grow when someone owns the details — budgets, sponsors, follow-ups."
          />
        </DraggablePiece>

        <DraggablePiece placement={{ top: '12%', left: '46%', width: '170px' }} rotation={3} zIndex={27}>
          <QuoteCard>&ldquo;Community is why the work is worth it.&rdquo;</QuoteCard>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '11.5%', left: '68%', width: WN }} rotation={-2} zIndex={26}>
          <NoteCard
            title="How I show up"
            body="Logistics, budgets, sponsorships, marketing — I like being the person who makes the room happen."
          />
        </DraggablePiece>

        <DraggablePiece placement={{ top: '20%', left: '24%', width: WN }} rotation={2} zIndex={22}>
          <NoteCard
            tone="accent"
            title="Ship the room"
            body="Events taught me the same loop as products: plan lean, host, listen, iterate."
          />
        </DraggablePiece>

        <DraggablePiece placement={{ top: '21%', left: '46%', width: '170px' }} rotation={-3} zIndex={21}>
          <QuoteCard>&ldquo;Belonging is a product decision.&rdquo;</QuoteCard>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '20%', left: '68%', width: WN }} rotation={2} zIndex={20}>
          <NoteCard
            title="Mentorship loop"
            body="Ask for one intro. Give two. Networks compound when generosity is the default."
          />
        </DraggablePiece>

        <DraggablePiece placement={{ top: '29%', left: '4%', width: '280px' }} rotation={-1} zIndex={15}>
          <div className="flex flex-wrap gap-2 rounded-[2px] border border-white/60 bg-mist-ice p-3 shadow-[5px_9px_20px_rgba(47,53,66,0.12)]">
            {['Culture', 'Tech', 'Latinx', 'Fundraising', 'AI circles', 'Newcomers'].map((label) => (
              <TagChip key={label} label={label} />
            ))}
          </div>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '30%', left: '42%', width: WN }} rotation={3} zIndex={16}>
          <NoteCard
            title="Why it matters"
            body="Every community here mixes culture, tech, and mentorship — the intersection I care about most."
          />
        </DraggablePiece>

        <DraggablePiece placement={{ top: '29.5%', left: '68%', width: '120px' }} rotation={-3} zIndex={35}>
          <SectionLabel>Exploring</SectionLabel>
        </DraggablePiece>

        {/* Exploring — images + phrases mixed in one band */}
        <DraggablePiece placement={{ top: '36%', left: '1%', width: W }} rotation={-2} zIndex={14}>
          <button type="button" className="w-full text-left" onClick={() => onPickImage({ src: '/images/trips/UK.jpeg', label: 'United Kingdom 🇬🇧' })}>
            <PolaroidCard
              src="/images/trips/UK.jpeg"
              alt="United Kingdom"
              caption="United Kingdom 🇬🇧"
              imgClass="aspect-[4/3]"
              objectPosition="object-[center_42%]"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '37%', left: '22%', width: WN }} rotation={3} zIndex={24}>
          <QuoteCard>&ldquo;Adapt fast, listen harder, ship anywhere.&rdquo;</QuoteCard>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '36%', left: '44%', width: W }} rotation={-2} zIndex={13}>
          <button type="button" className="w-full text-left" onClick={() => onPickImage({ src: '/images/trips/Peru.jpeg', label: 'Peru 🇵🇪' })}>
            <PolaroidCard
              src="/images/trips/Peru.jpeg"
              alt="Peru"
              caption="Peru 🇵🇪"
              sub="Where it started"
              imgClass="aspect-[4/3]"
              objectPosition="object-[center_72%]"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '36.5%', left: '68%', width: W }} rotation={2} zIndex={12}>
          <button type="button" className="w-full text-left" onClick={() => onPickImage({ src: '/images/About_hero/toronto.jpeg', label: 'Toronto 🏙️' })}>
            <PolaroidCard
              src="/images/About_hero/toronto.jpeg"
              alt="Toronto"
              caption="Toronto 🏙️"
              sub="Current home base"
              imgClass="aspect-[4/3]"
              objectPosition="object-[center_38%]"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '46%', left: '2%', width: '300px' }} rotation={1} zIndex={10}>
          <div className="flex flex-wrap gap-2 rounded-[2px] border border-white/60 bg-mist-ice p-3 shadow-[5px_9px_20px_rgba(47,53,66,0.12)]">
            {PLACES.map((p) => (
              <TagChip key={p.label} label={p.label} flag={p.flag} />
            ))}
          </div>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '46%', left: '40%', width: WN }} rotation={-2} zIndex={18}>
          <NoteCard
            tone="accent"
            title="Why I roam"
            body="Every border crossing rewires how I solve problems and read people."
          />
        </DraggablePiece>

        <DraggablePiece placement={{ top: '47%', left: '66%', width: '130px' }} rotation={3} zIndex={34}>
          <SectionLabel tone="dark">Beyond Work</SectionLabel>
        </DraggablePiece>

        {/* Beyond — photo / phrase / photo / phrase */}
        <DraggablePiece placement={{ top: '53%', left: '1%', width: W }} rotation={-2} zIndex={14}>
          <button
            type="button"
            className="w-full text-left"
            onClick={() =>
              onPickImage({
                src: '/images/Football club/WhatsApp Image 2026-03-02 at 1.14.12 PM.jpeg',
                label: 'Football ⚽',
              })
            }
          >
            <PolaroidCard
              src="/images/Football club/WhatsApp Image 2026-03-02 at 1.14.12 PM.jpeg"
              alt="Football"
              caption="Football ⚽"
              sub="10+ years"
              imgClass="aspect-[4/3]"
              objectPosition="object-top"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '54%', left: '23%', width: WN }} rotation={2} zIndex={23}>
          <QuoteCard>&ldquo;Same stubbornness on the pitch and in the debugger.&rdquo;</QuoteCard>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '53%', left: '46%', width: W }} rotation={-2} zIndex={13}>
          <button
            type="button"
            className="w-full text-left"
            onClick={() => onPickImage({ src: '/images/Running club/download.jpeg', label: 'Running 🏃' })}
          >
            <PolaroidCard
              src="/images/Running club/download.jpeg"
              alt="Running"
              caption="Running 🏃"
              sub="Off-season engine"
              imgClass="aspect-[4/3]"
              objectPosition="object-top"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '54%', left: '70%', width: WN }} rotation={3} zIndex={22}>
          <NoteCard
            tone="accent"
            title="Off the clock"
            body="Pitch, trail, dance floor — same stubborn practice that shows up in the debugger."
          />
        </DraggablePiece>

        {beyondWork.map((item, i) => {
          const placements = [
            { top: '63%', left: '1%', rotation: 2 },
            { top: '62.5%', left: '26%', rotation: -3 },
            { top: '63%', left: '51%', rotation: 2 },
            { top: '62.5%', left: '76%', rotation: -2 },
          ] as const
          const p = placements[i]
          if (!p) return null
          return (
            <DraggablePiece
              key={item.title}
              placement={{ top: p.top, left: p.left, width: WN }}
              rotation={p.rotation}
              zIndex={10 - i}
            >
              <NoteCard title={`${item.emoji} ${item.title}`} body={item.description} />
            </DraggablePiece>
          )
        })}

        <DraggablePiece placement={{ top: '72%', left: '40%', width: '100px' }} rotation={-2} zIndex={33}>
          <SectionLabel>Shelf</SectionLabel>
        </DraggablePiece>

        {/* Shelf — image / quote / image / note pattern */}
        <DraggablePiece placement={{ top: '75%', left: '1%', width: '190px' }} rotation={-3} zIndex={14}>
          <button type="button" className="w-full text-left" onClick={() => onPickImage(SHELF_FAVES[0]!)}>
            <PolaroidCard
              src={SHELF_FAVES[0]!.src}
              alt={SHELF_FAVES[0]!.label ?? ''}
              caption={SHELF_FAVES[0]!.label ?? ''}
              imgClass="aspect-[4/3]"
              objectPosition="object-top"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '76%', left: '22%', width: WN }} rotation={2} zIndex={20}>
          <QuoteCard>&ldquo;Read widely, ship often, drive far.&rdquo;</QuoteCard>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '75%', left: '44%', width: '190px' }} rotation={-2} zIndex={13}>
          <button type="button" className="w-full text-left" onClick={() => onPickImage(SHELF_FAVES[1]!)}>
            <PolaroidCard
              src={SHELF_FAVES[1]!.src}
              alt={SHELF_FAVES[1]!.label ?? ''}
              caption={SHELF_FAVES[1]!.label ?? ''}
              imgClass="aspect-[4/3]"
              objectPosition="object-top"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '75%', left: '66%', width: '190px' }} rotation={3} zIndex={12}>
          <button type="button" className="w-full text-left" onClick={() => onPickImage(SHELF_FAVES[2]!)}>
            <PolaroidCard
              src={SHELF_FAVES[2]!.src}
              alt={SHELF_FAVES[2]!.label ?? ''}
              caption={SHELF_FAVES[2]!.label ?? ''}
              imgClass="aspect-[4/3]"
              objectPosition="object-top"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '84%', left: '4%', width: '190px' }} rotation={2} zIndex={11}>
          <button type="button" className="w-full text-left" onClick={() => onPickImage(SHELF_FAVES[3]!)}>
            <PolaroidCard
              src={SHELF_FAVES[3]!.src}
              alt={SHELF_FAVES[3]!.label ?? ''}
              caption={SHELF_FAVES[3]!.label ?? ''}
              imgClass="aspect-[4/3]"
              objectPosition="object-top"
            />
          </button>
        </DraggablePiece>

        <DraggablePiece placement={{ top: '84%', left: '26%', width: WN }} rotation={-2} zIndex={19}>
          <NoteCard
            tone="accent"
            title="Currently"
            body="Reading Gladwell · Listening to AI Chat · Learning French · Training for football."
          />
        </DraggablePiece>

        <DraggablePiece placement={{ top: '84%', left: '50%', width: WN }} rotation={3} zIndex={18}>
          <NoteCard
            title="Hunting for"
            body="Hidden food spots and the next beautifully designed notebook."
          />
        </DraggablePiece>

        <DraggablePiece placement={{ top: '85%', left: '74%', width: '170px' }} rotation={-3} zIndex={17}>
          <QuoteCard>&ldquo;Curiosity is the only permanent stack.&rdquo;</QuoteCard>
        </DraggablePiece>

        {board.sessionPieces.map((piece, i) => (
          <DraggablePiece
            key={piece.id}
            placement={
              i % 2 === 0
                ? { top: '94%', left: '20%', width: WN }
                : { top: '94%', left: '48%', width: WN }
            }
            rotation={i % 2 === 0 ? -2 : 2}
            zIndex={40 + i}
          >
            {piece.kind === 'note' ? (
              <NoteCard title={piece.title} body={piece.body} />
            ) : (
              <PolaroidCard src={piece.src} alt={piece.caption} caption={piece.caption} imgClass="aspect-[4/3]" />
            )}
          </DraggablePiece>
        ))}
      </BoardCanvas>

      <PostcardModal
        open={Boolean(postcard)}
        community={postcard?.community ?? null}
        imageIndex={postcard?.imageIndex ?? 0}
        onClose={() => setPostcard(null)}
        onPrev={() =>
          setPostcard((p) => {
            if (!p) return p
            const len = p.community.images.length
            return { ...p, imageIndex: (p.imageIndex - 1 + len) % len }
          })
        }
        onNext={() =>
          setPostcard((p) => {
            if (!p) return p
            const len = p.community.images.length
            return { ...p, imageIndex: (p.imageIndex + 1) % len }
          })
        }
      />
    </div>
  )
}
