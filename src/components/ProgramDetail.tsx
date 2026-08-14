import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles } from "lucide-react";

import BackButton from "@/components/BackButton";
import { Blob, Halftone, LeafShape, Sun } from "@/components/Decor";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import type { Program } from "@/data/programs";

export default function ProgramDetail({ program }: { program: Program }) {
  const Icon = program.icon;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-deep pb-16 pt-12 sm:pb-20 sm:pt-16">
        <Sun className="-right-20 -top-24 h-72 w-72 opacity-70" />
        <Halftone className="bottom-0 left-0 h-48 w-64" />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="animate-fade-up">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-forest/60">
              <Link to="/" className="transition-colors hover:text-primary">
                Beranda
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/program-kerja" className="transition-colors hover:text-primary">
                Program Kerja
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-primary">{program.title}</span>
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 eyebrow text-primary-foreground">
              <Icon className="h-3.5 w-3.5" />
              {program.heroLabel}
            </span>

            <h1 className="mt-5 text-balance-tight font-display text-4xl font-extrabold leading-[1.03] text-forest sm:text-5xl lg:text-6xl">
              {program.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-forest/75 sm:text-lg">
              {program.description}
            </p>
          </div>

          <Reveal delay={80}>
            <div className="paper-card relative overflow-hidden rounded-[2rem] p-3">
              <img
                src={program.image}
                alt={program.title}
                width={1600}
                height={1000}
                className="aspect-16/10 w-full rounded-[1.5rem] object-cover"
              />
              <span className="absolute right-6 top-6 rounded-full bg-secondary px-3 py-1 eyebrow text-forest">
                {program.category}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LATAR BELAKANG */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <LeafShape className="-left-8 top-10 h-40 w-40 opacity-35" />
        <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionTitle eyebrow="Latar Belakang" title="Mengapa Program Ini" />
          <Reveal delay={80} className="space-y-5">
            {program.background.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TUJUAN */}
      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <Halftone className="inset-0 h-full w-full" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Tujuan"
            title={program.id === "pemetaan-rw3" ? "Tujuan Pemetaan" : program.id === "stunting" ? "Tujuan Penyuluhan" : "Tujuan Kegiatan"}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {program.goals.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="paper-card h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary font-display text-sm font-extrabold text-forest">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-forest">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE (pemetaan) */}
      {program.timeline ? (
        <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
          <Blob className="-right-24 top-10 h-72 w-72 opacity-40" />
          <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Proses" title="Proses Pemetaan" />
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {program.timeline.map((t, i) => (
                <Reveal key={t.step} delay={i * 80} as="li">
                  <div className="h-full rounded-2xl border border-primary/30 bg-cream p-5">
                    <p className="font-display text-3xl font-extrabold leading-none text-secondary">
                      {t.step}
                    </p>
                    <h3 className="mt-3 font-display text-base font-bold text-forest">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* TANAMAN (toga) */}
      {program.plants ? (
        <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
          <LeafShape className="-right-10 bottom-4 h-48 w-48 rotate-180 opacity-35" />
          <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Tanaman" title="Tanaman yang Ditanam" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {program.plants.map((plant, i) => (
                <Reveal key={plant.name} delay={i * 90}>
                  <article className="paper-card group h-full overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="aspect-16/10 overflow-hidden">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-extrabold text-forest">
                        {plant.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {plant.description}
                      </p>
                      <div className="mt-5 rounded-xl border border-primary/25 bg-cream px-4 py-3">
                        <p className="eyebrow text-forest/55">Pemanfaatan</p>
                        <p className="mt-1.5 text-sm text-forest/85">{plant.benefit}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* MATERI (stunting) */}
      {program.materials ? (
        <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Materi" title="Materi yang Disampaikan" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {program.materials.map((m, i) => (
                <Reveal key={m} delay={i * 70}>
                  <div className="flex items-center gap-4 rounded-2xl border border-primary/30 bg-cream px-5 py-4">
                    <span className="font-display text-2xl font-extrabold text-secondary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-semibold text-forest">{m}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* KEGIATAN + SASARAN */}
      <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-20">
        <Halftone className="right-0 top-0 h-48 w-64" />
        <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <SectionTitle eyebrow="Pelaksanaan" title="Kegiatan yang Dilaksanakan" />
            <ul className="mt-8 space-y-3">
              {program.activities.map((a, i) => (
                <Reveal key={a} delay={i * 70} as="li">
                  <div className="paper-card flex items-center gap-4 rounded-2xl px-5 py-4">
                    <Sparkles className="h-4 w-4 shrink-0 text-ember" />
                    <span className="font-semibold text-forest">{a}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={100} className="space-y-5">
            <div className="rounded-2xl border border-primary/30 bg-forest p-6 text-cream">
              <p className="eyebrow text-secondary">Sasaran</p>
              <p className="mt-3 font-display text-xl font-bold leading-snug">{program.target}</p>
            </div>
            {program.execution ? (
              <div className="paper-card rounded-2xl p-6">
                <p className="eyebrow text-forest/55">Catatan Pelaksanaan</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {program.execution}
                </p>
                {program.schedule ? (
                  <p className="mt-4 rounded-xl bg-secondary/40 px-4 py-3 text-xs font-semibold text-forest">
                    {program.schedule}
                  </p>
                ) : null}
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* HASIL PEMETAAN */}
      {program.result ? (
        <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
          <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionTitle eyebrow="Hasil" title="Hasil Pemetaan" subtitle={program.result.text} />
            </div>
            <Reveal delay={80}>
              <figure className="paper-card overflow-hidden rounded-[2rem] p-3">
                <img
                  src={program.result.image}
                  alt="Hasil peta wilayah RW 3 (placeholder)"
                  loading="lazy"
                  className="aspect-4/3 w-full rounded-[1.5rem] object-cover"
                />
                <figcaption className="px-2 pb-1 pt-3 text-xs text-muted-foreground">
                  {program.result.caption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* DOKUMENTASI */}
      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <Halftone className="inset-0 h-full w-full" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Dokumentasi" title="Dokumentasi Kegiatan" align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {program.documentation.map((doc, i) => (
              <Reveal key={`${doc.caption}-${i}`} delay={i * 80}>
                <figure className="group overflow-hidden rounded-2xl border border-primary/30 bg-card">
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={doc.src}
                      alt={doc.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-medium text-forest/80">
                    {doc.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>       
        </div>
      </section>

      {/* HASIL & DAMPAK */}
      <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-20">
        <Halftone className="inset-0 h-full w-full opacity-10" />
        <LeafShape className="-left-10 bottom-0 h-48 w-48 opacity-25" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={program.plants ? "Dampak" : "Hasil"}
            title={program.plants ? "Dampak Kegiatan" : "Hasil dan Dampak"}
            tone="light"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {program.impact.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-cream/20 bg-cream/5 p-6">
                  <p className="font-display text-lg font-bold text-secondary">{item.title}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/75">{item.text}</p>
                </div>
              </Reveal>
            ))}
            
          </div>

        </div>
      </section>

    </>
  );
}
