import { UserRound } from "lucide-react";

import Reveal from "@/components/Reveal";
import { divisions, type Member, type Tile } from "@/data/team";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <figure className="group h-full overflow-hidden rounded-2xl border border-primary/30 bg-card transition-transform duration-500 hover:-translate-y-1.5">
      {children}
    </figure>
  );
}

function MemberTile({ member }: { member: Member }) {
  return (
    <Frame>
      <div className="relative aspect-4/5 overflow-hidden bg-cream-deep">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.role} — ${member.name}, ${member.program}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="halftone flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-forest">
              <UserRound className="h-7 w-7" />
            </span>
            <p className="font-display text-2xl font-extrabold text-forest">{member.name}</p>
            <p className="eyebrow text-forest/55">Foto menyusul</p>
          </div>
        )}
      </div>
      <figcaption className="px-4 py-3.5">
        <p className="eyebrow text-primary">{member.role}</p>
        <p className="mt-1 font-display text-lg font-bold text-forest">{member.name}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {member.faculty} · {member.program}
        </p>
      </figcaption>
    </Frame>
  );
}

function ImageTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-primary/30 bg-cream-deep">
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

function PlaceholderTile({ title, caption }: { title: string; caption?: string | undefined }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-primary/30 bg-cream-deep">
      <div className="halftone flex h-full min-h-[280px] flex-col items-center justify-center gap-2 px-6 py-10 text-center">
        <p className="font-display text-3xl font-extrabold leading-none text-forest/85">{title}</p>
        {caption ? <p className="eyebrow mt-2 text-primary">{caption}</p> : null}
      </div>
    </div>
  );
}

function TileView({ tile }: { tile: Tile }) {
  if (tile.kind === "member") return <MemberTile member={tile.member} />;
  if (tile.kind === "image") return <ImageTile src={tile.src} alt={tile.alt} />;
  return <PlaceholderTile title={tile.title} caption={tile.caption} />;
}

export default function TeamSection() {
  return (
    <div className="mt-12 space-y-14">
      {divisions.map((div) => (
        <div key={div.id}>
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="font-display text-xl font-extrabold text-forest sm:text-2xl">
                {div.subtitle}
              </h3>
              <span className="h-px flex-1 bg-primary/25" />
              <span className="eyebrow rounded-full bg-secondary px-3 py-1 text-forest">
                {div.name}
              </span>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {div.tiles.map((tile, i) => (
              <Reveal key={`${div.id}-${i}`} delay={i * 70} className="h-full">
                <TileView tile={tile} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
