import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import type { Program } from "@/data/programs";
import Reveal from "./Reveal";

export default function ProgramCard({ program, delay = 0 }: { program: Program; delay?: number }) {
  const Icon = program.icon;
  return (
    <Reveal delay={delay} className="h-full">
      <article className="paper-card group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[8px_12px_0_0_oklch(0.46_0.075_121/0.2)]">
        <div className="relative aspect-16/10 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 eyebrow text-primary">
            {program.category}
          </span>
          <span className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-forest shadow-sm">
            <Icon className="h-5 w-5" />
          </span>
        </div>

        <div className="relative flex flex-1 flex-col p-5">
          <div aria-hidden className="halftone absolute right-3 top-2 h-10 w-16" />
          <h3 className="font-display text-xl font-extrabold leading-tight text-forest">
            {program.title}
          </h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
            {program.description}
          </p>
          <Link
            to={program.route}
            className="mt-5 inline-flex items-center gap-2 self-start border-b-2 border-secondary pb-0.5 text-sm font-bold text-primary transition-colors hover:text-ember"
          >
            Lihat Selengkapnya
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
