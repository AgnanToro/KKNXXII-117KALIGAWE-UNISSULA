import ActivityCard from "@/components/ActivityCard";
import { Blob, Halftone, LeafShape } from "@/components/Decor";
import SectionTitle from "@/components/SectionTitle";
import { activities } from "@/data/activities";

export default function Kegiatan() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-24">
        <Blob className="-left-24 top-6 h-72 w-72 opacity-50" />
        <LeafShape className="-right-8 bottom-0 h-44 w-44 rotate-180 opacity-40" />
        <Halftone className="right-1/3 top-6 h-40 w-56" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 eyebrow text-primary-foreground">
              Kegiatan Pendukung
            </span>
            <h1 className="mt-6 text-balance-tight font-display text-4xl font-extrabold leading-[1.03] text-forest sm:text-5xl lg:text-6xl">
              Lebih dari Sekadar Program Kerja
            </h1>
            <p className="mt-5 text-base leading-relaxed text-forest/75 sm:text-lg">
              Selain program utama, Kelompok 117 juga terlibat dalam berbagai kegiatan bersama
              masyarakat.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <ActivityCard key={a.id} activity={a} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <Halftone className="inset-0 h-full w-full" />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionTitle
            eyebrow="Catatan"
            title="Dokumentasi kegiatan terus diperbarui"
            subtitle="Kegiatan tambahan lain akan ditambahkan pada halaman ini seiring berjalannya masa pengabdian."
          />
          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={kelompokImg}
                alt="Kebersamaan Kelompok 117 bersama warga Kaligawe"
                loading="lazy"
                className="col-span-2 aspect-16/9 w-full rounded-[2rem] border border-primary/30 object-cover"
              />
              <img
                src={kerjaBaktiImg}
                alt="Kerja bakti bersama warga"
                loading="lazy"
                className="aspect-4/3 w-full rounded-2xl border border-primary/30 object-cover"
              />
              <img
                src={sosialImg}
                alt="Kegiatan sosial bersama masyarakat"
                loading="lazy"
                className="aspect-4/3 w-full rounded-2xl border border-primary/30 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
