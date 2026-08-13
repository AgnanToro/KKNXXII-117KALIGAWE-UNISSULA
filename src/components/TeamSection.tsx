import { UserRound } from "lucide-react";

import Reveal from "@/components/Reveal";
import { divisions, type Division, type Member } from "@/data/team";

function MemberTile({ member, delay }: { member: Member; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="group h-full overflow-hidden rounded-2xl border border-primary/30 bg-card transition-transform duration-500 hover:-translate-y-1.5">
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
      </figure>
    </Reveal>
  );
}

function BannerTile({ division, delay }: { division: Division; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full overflow-hidden rounded-2xl border border-primary/30 bg-cream-deep">
        {division.banner ? (
          <img
            src={division.banner}
            alt={`Banner divisi ${division.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="halftone flex h-full min-h-[280px] flex-col items-center justify-center gap-2 px-6 py-10 text-center">
            <p className="eyebrow text-forest/55">Divisi</p>
            <p className="font-display text-4xl font-extrabold leading-none text-forest/85">
              {division.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{division.subtitle}</p>
            <p className="eyebrow mt-3 text-primary">@117.kknunissula</p>
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function TeamSection() {
  return (
    <div className="mt-12 space-y-14">
      {divisions.map((div) => {
        const tiles: Array<{ key: string; node: React.ReactNode }> = [];
        const mid = Math.ceil(div.members.length / 2);
        div.members.slice(0, mid).forEach((m, i) =>
          tiles.push({ key: m.name, node: <MemberTile member={m} delay={i * 70} /> }),
        );
        tiles.push({ key: `${div.id}-banner`, node: <BannerTile division={div} delay={80} /> });
        div.members.slice(mid).forEach((m, i) =>
          tiles.push({ key: m.name, node: <MemberTile member={m} delay={(i + 1) * 70} /> }),
        );

        return (
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
              {tiles.map((t) => (
                <div key={t.key}>{t.node}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
