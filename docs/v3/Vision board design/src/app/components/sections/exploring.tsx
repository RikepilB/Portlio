import { BoardCanvas, DraggablePiece, PolaroidCard, NoteCard, QuoteCard, TagChip } from '../vision-board';
import { IMG, PHOTO } from './images';

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
];

export function Exploring() {
  return (
    <div>
      <p className="font-sans-body text-[0.85rem] leading-relaxed text-[var(--vb-ink-soft)] max-w-xl">
        14 countries and counting. Moving across continents taught me to adapt quickly and
        communicate clearly — even when the words aren't perfect.
      </p>
      <div className="flex flex-wrap gap-2 mt-4 mb-2">
        {PLACES.map((p) => (
          <TagChip key={p.label} label={p.label} flag={p.flag} />
        ))}
      </div>

      <BoardCanvas height="h-[540px]">
        {/* Row 1 */}
        <DraggablePiece position="top-[4%] left-[2%] w-[215px]" rotation={-3} zIndex={10}>
          <PolaroidCard src={IMG.fog} alt="Foggy mountains in the UK" caption="United Kingdom 🇬🇧" imgClass="aspect-video" />
        </DraggablePiece>
        <DraggablePiece position="top-[8%] left-[32%] w-[210px]" rotation={3} zIndex={14}>
          <PolaroidCard src={IMG.mountains} alt="Andes in Peru" caption="Peru 🇵🇪" sub="Where it started" imgClass="aspect-[4/3]" />
        </DraggablePiece>
        <DraggablePiece position="top-[3%] right-[2%] w-[200px]" rotation={-2} zIndex={9}>
          <PolaroidCard src={PHOTO.hilltop} alt="Overlook above Kelowna" caption="Okanagan 🇨🇦" imgClass="aspect-video" />
        </DraggablePiece>

        {/* Row 2 */}
        <DraggablePiece position="top-[55%] left-[3%] w-[205px]" rotation={2} zIndex={11}>
          <PolaroidCard src={IMG.skyline} alt="City skyline at dusk" caption="Toronto 🏙️" sub="Current home base" imgClass="aspect-[4/3]" />
        </DraggablePiece>
        <DraggablePiece position="top-[58%] left-[34%] w-[195px]" rotation={-3} zIndex={8}>
          <NoteCard tone="accent" title="Why I roam" body="Every border crossing rewires how I solve problems and read people." />
        </DraggablePiece>
        <DraggablePiece position="top-[52%] right-[3%] w-[200px]" rotation={3} zIndex={13}>
          <QuoteCard>"Adapt fast, listen harder, ship anywhere."</QuoteCard>
        </DraggablePiece>
      </BoardCanvas>
    </div>
  );
}
