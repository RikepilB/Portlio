import { BoardCanvas, DraggablePiece, PolaroidCard, NoteCard, QuoteCard } from '../vision-board';
import { PHOTO, IMG } from './images';

export function Communities() {
  return (
    <BoardCanvas height="h-[760px]">
      {/* Row 1 */}
      <DraggablePiece position="top-[0%] left-[0%] w-[200px]" rotation={-3} zIndex={14}>
        <PolaroidCard
          src={PHOTO.laso}
          alt="Latin American Student Association event table at UBCO"
          caption="LASO — UBCO"
          sub="VP Internal"
          imgClass="aspect-[4/3]"
        />
      </DraggablePiece>

      <DraggablePiece position="top-[2%] left-[27%] w-[190px]" rotation={2} zIndex={12}>
        <PolaroidCard
          src={PHOTO.dinner}
          alt="Hispanotech community dinner in Toronto"
          caption="hispanotech.ca"
          sub="Latinos in Canadian tech"
          imgClass="aspect-[4/3]"
        />
      </DraggablePiece>

      <DraggablePiece position="top-[0%] left-[52%] w-[195px]" rotation={-2} zIndex={13}>
        <PolaroidCard
          src={PHOTO.otin}
          alt="Okanagan Tech Industry Night team photo"
          caption="Okanagan Tech Night"
          sub="Co-founded · 200+ people"
          imgClass="aspect-[4/3]"
        />
      </DraggablePiece>

      <DraggablePiece position="top-[3%] right-[0%] w-[185px]" rotation={3} zIndex={11}>
        <PolaroidCard
          src={PHOTO.wealthsimple}
          alt="Wealthsimple Foundation banner"
          caption="Wealthsimple Fdn."
          sub="Economic empowerment"
          imgClass="aspect-[3/2]"
        />
      </DraggablePiece>

      {/* Row 2 */}
      <DraggablePiece position="top-[36%] left-[1%] w-[190px]" rotation={2} zIndex={10}>
        <PolaroidCard
          src={PHOTO.hilltop}
          alt="Community group overlooking Kelowna"
          caption="Scale Without Borders"
          sub="Newcomers in tech"
          imgClass="aspect-[4/3]"
        />
      </DraggablePiece>

      <DraggablePiece position="top-[38%] left-[27%] w-[185px]" rotation={-2} zIndex={9}>
        <NoteCard title="BrainTrainr" tone="accent" body="Web & UX lead for an AI-powered learning platform closing the education gap." />
      </DraggablePiece>

      <DraggablePiece position="top-[36%] left-[51%] w-[185px]" rotation={3} zIndex={8}>
        <NoteCard title="Alianza Latina" body="National network building data power for Latinos across Canada." />
      </DraggablePiece>

      <DraggablePiece position="top-[38%] right-[0%] w-[185px]" rotation={-3} zIndex={7}>
        <PolaroidCard
          src={IMG.networking}
          alt="Two people talking at a networking event"
          caption="Cursor AI Community"
          sub="AI-assisted coding circle"
          imgClass="aspect-[4/3]"
        />
      </DraggablePiece>

      {/* Row 3 */}
      <DraggablePiece position="top-[72%] left-[6%] w-[185px]" rotation={-2} zIndex={9}>
        <PolaroidCard
          src={PHOTO.groupOutdoor}
          alt="Large community group gathered outdoors"
          caption="Canadian Cancer Society"
          sub="Fundraising & outreach"
          imgClass="aspect-[4/3]"
        />
      </DraggablePiece>

      <DraggablePiece position="top-[74%] left-[34%] w-[190px]" rotation={3} zIndex={8}>
        <NoteCard title="How I show up" body="Logistics, budgets, sponsorships, marketing — I like being the person who makes the room happen." />
      </DraggablePiece>

      <DraggablePiece position="top-[72%] right-[4%] w-[190px]" rotation={-3} zIndex={7}>
        <NoteCard title="Why it matters" body="Every community here mixes culture, tech, and mentorship — the intersection I care about most." />
      </DraggablePiece>

      {/* Floating quote */}
      <DraggablePiece position="top-[30%] left-[40%] w-[190px]" rotation={2} zIndex={20}>
        <QuoteCard>"Community is why the work is worth it."</QuoteCard>
      </DraggablePiece>
    </BoardCanvas>
  );
}
