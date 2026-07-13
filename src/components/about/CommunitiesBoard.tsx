'use client'

import { useEffect, useRef, useState, type FormEvent, type PointerEvent, type ReactNode } from 'react'
import { Plus, X } from 'lucide-react'
import {
  BoardCanvas,
  DraggablePiece,
  NoteCard,
  PolaroidCard,
  QuoteCard,
  type BoardPlacement,
} from '@/components/about/vision-board'
import { PostcardModal } from '@/components/about/PostcardModal'
import type { Community, SessionPiece } from '@/components/about/types'

type CommunityInput = Omit<Community, 'boardCaption' | 'boardSub'>

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

const POLAROID_SLOTS: {
  title: string
  placement: BoardPlacement
  rotation: number
  zIndex: number
  imgClass: string
}[] = [
  { title: 'LASO', placement: { top: '0%', left: '0%', width: '200px' }, rotation: -3, zIndex: 14, imgClass: 'aspect-[4/3]' },
  { title: 'Hispanotech', placement: { top: '2%', left: '26%', width: '190px' }, rotation: 2, zIndex: 12, imgClass: 'aspect-[4/3]' },
  { title: 'OTIN', placement: { top: '0%', left: '50%', width: '195px' }, rotation: -2, zIndex: 13, imgClass: 'aspect-[4/3]' },
  { title: 'Wealthsimple Foundation', placement: { top: '3%', right: '0%', width: '185px' }, rotation: 3, zIndex: 11, imgClass: 'aspect-[3/2]' },
  { title: 'Scale Without Borders', placement: { top: '34%', left: '1%', width: '190px' }, rotation: 2, zIndex: 10, imgClass: 'aspect-[4/3]' },
  { title: 'Cursor Community', placement: { top: '36%', right: '0%', width: '185px' }, rotation: -3, zIndex: 7, imgClass: 'aspect-[4/3]' },
  { title: 'Canadian Cancer Society', placement: { top: '68%', left: '4%', width: '185px' }, rotation: -2, zIndex: 9, imgClass: 'aspect-[4/3]' },
]

const CLICK_DRAG_THRESHOLD_PX = 6

function toCommunity(c: CommunityInput): Community {
  const meta = BOARD_META[c.title] ?? { caption: c.title, sub: c.org }
  return { ...c, boardCaption: meta.caption, boardSub: meta.sub }
}

export function CommunitiesAddControl({
  menuOpen,
  setMenuOpen,
  onAddNote,
  onPickImage,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  onAddNote: () => void
  onPickImage: (file: File | undefined) => void
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-[3px] border border-rule bg-felt-deep/35 text-muted transition hover:border-gold hover:text-gold-bright"
        aria-label="Add to vision board"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={14} /> : <Plus size={14} />}
      </button>
      {menuOpen ? (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-[3px] border border-silver/35 bg-mist-ice shadow-lg">
          <button
            type="button"
            className="block w-full px-3 py-2 text-left font-mono text-[11px] uppercase tracking-wide text-anthracite hover:bg-mist-soft"
            onClick={onAddNote}
          >
            Add note
          </button>
          <button
            type="button"
            className="block w-full px-3 py-2 text-left font-mono text-[11px] uppercase tracking-wide text-anthracite hover:bg-mist-soft"
            onClick={() => fileInputRef.current?.click()}
          >
            Add image
          </button>
        </div>
      ) : null}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          onPickImage(e.target.files?.[0])
          e.target.value = ''
        }}
      />
    </div>
  )
}

export function useCommunitiesBoardState(communities: CommunityInput[]) {
  const [sessionPieces, setSessionPieces] = useState<SessionPiece[]>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [noteFormOpen, setNoteFormOpen] = useState(false)
  const [noteTitle, setNoteTitle] = useState('')
  const [noteBody, setNoteBody] = useState('')
  const objectUrls = useRef<string[]>([])

  useEffect(() => {
    const urls = objectUrls.current
    return () => {
      for (const url of urls) URL.revokeObjectURL(url)
    }
  }, [])

  const onPickImage = (file: File | undefined) => {
    if (!file || !file.type.startsWith('image/')) return
    const src = URL.createObjectURL(file)
    objectUrls.current.push(src)
    setSessionPieces((prev) => [
      ...prev,
      { id: crypto.randomUUID(), kind: 'polaroid', src, caption: 'Untitled' },
    ])
    setMenuOpen(false)
  }

  const addNote = (e: FormEvent) => {
    e.preventDefault()
    const title = noteTitle.trim()
    const body = noteBody.trim()
    if (!title || !body) return
    setSessionPieces((prev) => [
      ...prev,
      { id: crypto.randomUUID(), kind: 'note', title, body },
    ])
    setNoteTitle('')
    setNoteBody('')
    setNoteFormOpen(false)
    setMenuOpen(false)
  }

  return {
    communities,
    sessionPieces,
    menuOpen,
    setMenuOpen,
    noteFormOpen,
    setNoteFormOpen,
    noteTitle,
    setNoteTitle,
    noteBody,
    setNoteBody,
    onPickImage,
    addNote,
  }
}

export function CommunitiesBoard({
  communities,
  sessionPieces = [],
  noteForm,
}: {
  communities: CommunityInput[]
  sessionPieces?: SessionPiece[]
  noteForm?: ReactNode
}) {
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
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (Math.hypot(dx, dy) < CLICK_DRAG_THRESHOLD_PX) {
      openPostcard(community)
    }
  }

  const brain = byTitle.get('BrainTrainr')
  const alianza = byTitle.get('Alianza Latina')

  return (
    <div className="relative">
      {noteForm}
      <BoardCanvas minHeight={860}>
        {POLAROID_SLOTS.map((slot) => {
          const community = byTitle.get(slot.title)
          if (!community || community.images.length === 0) return null
          return (
            <DraggablePiece
              key={slot.title}
              placement={slot.placement}
              rotation={slot.rotation}
              zIndex={slot.zIndex}
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
                  imgClass={slot.imgClass}
                />
              </div>
            </DraggablePiece>
          )
        })}

        {brain ? (
          <DraggablePiece
            placement={{ top: '36%', left: '27%', width: '185px' }}
            rotation={-2}
            zIndex={9}
          >
            <div
              onPointerDown={onPiecePointerDown}
              onPointerUp={(e) => onPiecePointerUp(e, brain)}
              className="cursor-pointer"
            >
              <NoteCard
                title="BrainTrainr"
                tone="accent"
                body="Web & UX lead for an AI-powered learning platform closing the education gap."
              />
            </div>
          </DraggablePiece>
        ) : null}

        {alianza ? (
          <DraggablePiece
            placement={{ top: '34%', left: '50%', width: '185px' }}
            rotation={3}
            zIndex={8}
          >
            <div
              onPointerDown={onPiecePointerDown}
              onPointerUp={(e) => onPiecePointerUp(e, alianza)}
              className="cursor-pointer"
            >
              <NoteCard
                title="Alianza Latina"
                body="National network building data power for Latinos across Canada."
              />
            </div>
          </DraggablePiece>
        ) : null}

        <DraggablePiece
          placement={{ top: '70%', left: '32%', width: '190px' }}
          rotation={3}
          zIndex={8}
        >
          <NoteCard
            title="How I show up"
            body="Logistics, budgets, sponsorships, marketing — I like being the person who makes the room happen."
          />
        </DraggablePiece>

        <DraggablePiece
          placement={{ top: '68%', right: '4%', width: '190px' }}
          rotation={-3}
          zIndex={7}
        >
          <NoteCard
            title="Why it matters"
            body="Every community here mixes culture, tech, and mentorship — the intersection I care about most."
          />
        </DraggablePiece>

        <DraggablePiece
          placement={{ top: '28%', left: '39%', width: '190px' }}
          rotation={2}
          zIndex={20}
        >
          <QuoteCard>&ldquo;Community is why the work is worth it.&rdquo;</QuoteCard>
        </DraggablePiece>

        {sessionPieces.map((piece, i) => (
          <DraggablePiece
            key={piece.id}
            placement={
              i % 2 === 0
                ? { top: '78%', left: '18%', width: '180px' }
                : { top: '80%', right: '16%', width: '180px' }
            }
            rotation={i % 2 === 0 ? -2 : 2}
            zIndex={30 + i}
          >
            {piece.kind === 'note' ? (
              <NoteCard title={piece.title} body={piece.body} />
            ) : (
              <PolaroidCard
                src={piece.src}
                alt={piece.caption}
                caption={piece.caption}
                imgClass="aspect-[4/3]"
              />
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
