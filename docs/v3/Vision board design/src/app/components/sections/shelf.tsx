import { Music, Film, Activity, BookOpen, Headphones, PenTool } from 'lucide-react';
import { BoardCanvas, DraggablePiece, PolaroidCard, NoteCard, QuoteCard } from '../vision-board';
import { IMG } from './images';

export function Shelf() {
  return (
    <div>
      <p className="font-sans-body text-[0.85rem] leading-relaxed text-[var(--vb-ink-soft)] max-w-xl mb-2">
        I love discovering new hidden food spots, getting excited about beautifully designed
        stationery, and listening to audiobooks on long drives.
      </p>

      <BoardCanvas height="h-[620px]">
        {/* Row 1 — photos */}
        <DraggablePiece position="top-[2%] left-[2%] w-[200px]" rotation={-3} zIndex={12}>
          <PolaroidCard src={IMG.books} alt="Stack of books" caption="Reading 📚" sub="Non-fiction & essays" imgClass="aspect-[4/3]" />
        </DraggablePiece>

        <DraggablePiece position="top-[4%] left-[32%] w-[195px]" rotation={2} zIndex={11}>
          <PolaroidCard src={IMG.coffee} alt="Coffee and a book" caption="Slow mornings ☕" sub="Café hunting" imgClass="aspect-[3/4]" />
        </DraggablePiece>

        <DraggablePiece position="top-[2%] right-[2%] w-[200px]" rotation={-2} zIndex={10}>
          <PolaroidCard src={IMG.desk} alt="Tidy desk with computer" caption="Stationery ✍️" sub="Well-designed tools" imgClass="aspect-[4/3]" />
        </DraggablePiece>

        {/* Floating quote */}
        <DraggablePiece position="top-[34%] left-[40%] w-[200px]" rotation={2} zIndex={16}>
          <QuoteCard>"Read widely, ship often, drive far."</QuoteCard>
        </DraggablePiece>

        {/* Row 2 — notes */}
        <DraggablePiece position="top-[54%] left-[1%] w-[180px]" rotation={2} zIndex={8}>
          <NoteCard icon={<Music size={16} />} title="Music" body="Latin rhythms, hip-hop, whatever keeps momentum." />
        </DraggablePiece>

        <DraggablePiece position="top-[56%] left-[26%] w-[180px]" rotation={-3} zIndex={9}>
          <NoteCard icon={<Activity size={16} />} title="Sports" body="Football first, but down for any match or new stats." />
        </DraggablePiece>

        <DraggablePiece position="top-[54%] left-[51%] w-[180px]" rotation={3} zIndex={7}>
          <NoteCard icon={<Film size={16} />} title="Movies" body="Long drives need a good watchlist." />
        </DraggablePiece>

        <DraggablePiece position="top-[56%] right-[0%] w-[180px]" rotation={-2} zIndex={6}>
          <NoteCard icon={<Headphones size={16} />} title="Audiobooks" body="My favourite way to eat up highway miles." />
        </DraggablePiece>

        {/* Row 3 — currently */}
        <DraggablePiece position="top-[84%] left-[10%] w-[220px]" rotation={-2} zIndex={13}>
          <NoteCard
            tone="accent"
            icon={<BookOpen size={16} />}
            title="Currently"
            body="Reading Gladwell · Listening to AI Chat · Learning French · Training for football."
          />
        </DraggablePiece>

        <DraggablePiece position="top-[86%] right-[10%] w-[210px]" rotation={3} zIndex={9}>
          <NoteCard icon={<PenTool size={16} />} title="Hunting for" body="Hidden food spots and the next beautifully designed notebook." />
        </DraggablePiece>
      </BoardCanvas>
    </div>
  );
}
