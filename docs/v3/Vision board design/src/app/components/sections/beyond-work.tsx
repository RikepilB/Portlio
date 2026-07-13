import { Trophy, Plane, Music, Languages as LanguagesIcon, Dumbbell } from 'lucide-react';
import { BoardCanvas, DraggablePiece, PolaroidCard, NoteCard, QuoteCard } from '../vision-board';
import { IMG, PHOTO } from './images';

export function BeyondWork() {
  return (
    <BoardCanvas height="h-[680px]">
      {/* Row 1 — photos */}
      <DraggablePiece position="top-[0%] left-[1%] w-[205px]" rotation={-3} zIndex={12}>
        <PolaroidCard src={IMG.football} alt="Football pitch at golden hour" caption="Football ⚽" sub="10+ years" imgClass="aspect-[4/3]" />
      </DraggablePiece>

      <DraggablePiece position="top-[2%] left-[30%] w-[200px]" rotation={2} zIndex={11}>
        <PolaroidCard src={PHOTO.running} alt="Group run outdoors" caption="Running 🏃" sub="Off-season engine" imgClass="aspect-[4/3]" />
      </DraggablePiece>

      <DraggablePiece position="top-[0%] right-[1%] w-[200px]" rotation={-2} zIndex={10}>
        <PolaroidCard src={IMG.dance} alt="Silhouettes dancing" caption="Dance 💃" sub="Salsa & bachata" imgClass="aspect-[3/4]" />
      </DraggablePiece>

      {/* Floating quote */}
      <DraggablePiece position="top-[34%] left-[40%] w-[210px]" rotation={2} zIndex={16}>
        <QuoteCard>"Same stubbornness on the pitch and in the debugger."</QuoteCard>
      </DraggablePiece>

      {/* Row 2 — notes */}
      <DraggablePiece position="top-[56%] left-[1%] w-[190px]" rotation={2} zIndex={8}>
        <NoteCard icon={<Trophy size={16} />} title="Football" body="From flat feet and no technique to holding my own — that grit shows up in my debugging." />
      </DraggablePiece>

      <DraggablePiece position="top-[58%] left-[27%] w-[190px]" rotation={-3} zIndex={9}>
        <NoteCard icon={<Plane size={16} />} title="Travel" body="14 countries taught me to adapt fast and communicate clearly." />
      </DraggablePiece>

      <DraggablePiece position="top-[56%] left-[53%] w-[190px]" rotation={3} zIndex={7}>
        <NoteCard icon={<Music size={16} />} title="Dance" body="Coming from Peru, rhythm is part of the package." />
      </DraggablePiece>

      <DraggablePiece position="top-[58%] right-[0%] w-[190px]" rotation={-2} zIndex={6}>
        <NoteCard icon={<Dumbbell size={16} />} title="Training" body="Consistent gym + pitch sessions — discipline compounds like clean code." />
      </DraggablePiece>

      {/* Row 3 — languages highlight */}
      <DraggablePiece position="top-[84%] left-[28%] w-[300px]" rotation={2} zIndex={13}>
        <NoteCard
          tone="accent"
          icon={<LanguagesIcon size={16} />}
          title="Languages"
          body="Spanish (native), English (fluent), French (4hr/day). Same muscle as coding: pattern recognition + daily practice."
        />
      </DraggablePiece>
    </BoardCanvas>
  );
}
