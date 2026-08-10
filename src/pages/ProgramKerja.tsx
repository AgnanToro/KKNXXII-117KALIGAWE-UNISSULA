import ActivityCard from "@/components/ActivityCard";
import { Halftone, LeafShape, Sun } from "@/components/Decor";
import ProgramCard from "@/components/ProgramCard";
import SectionTitle from "@/components/SectionTitle";
import { activities } from "@/data/activities";
import { programs } from "@/data/programs";

export default function ProgramKerja() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-24">
        <Sun className="-right-24 -top-20 h-80 w-80 opacity-70" />
        <Halftone className="bottom-0 left-0 h-48 w-64" />
        <LeafShape className="-bottom-6 right-1/4 h-36 w-36 opacity-40" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 eyebrow text-primary-foreground">
              Kelompok 117 · Kaligawe
            </span>
            <h1 className="mt-6 text-balance-tight font-display text-4xl font-extrabold leading-[1.03] text-forest sm:text-5xl lg:text-6xl">
              Program Kerja
            </h1>
            <p className="mt-5 text-base leading-relaxed text-forest/75 sm:text-lg">
              Empat program utama Kelompok 117 untuk memberikan kontribusi nyata bagi masyarakat
              Kaligawe.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {programs.map((p, i) => (
              <ProgramCard key={p.id} program={p} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <Halftone className="inset-0 h-full w-full" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Kegiatan Pendukung"
            title="Kegiatan Bersama Masyarakat"
            subtitle="Kegiatan berikut merupakan kegiatan pendukung, bukan bagian dari empat program utama."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <ActivityCard key={a.id} activity={a} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
