import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import aboutImg from "@/assets/images/kelompok.webp";
import mapImg from "@/assets/images/peta-rw3.webp";
import ActivityCard from "@/components/ActivityCard";
import { Blob, Halftone, LeafShape, Sun, Ticker } from "@/components/Decor";
import GalleryCard from "@/components/GalleryCard";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import { activities } from "@/data/activities";
import { gallery } from "@/data/gallery";
import { programs } from "@/data/programs";

const stats = [
  { value: "117", label: "Kelompok KKN" },
  { value: "4", label: "Program Utama" },
  { value: "1", label: "Kelurahan" },
  { value: "2026", label: "Tahun Pengabdian" },
];

const lokasi = [
  { label: "Kelurahan", value: "Kaligawe" },
  { label: "Kecamatan", value: "Gayamsari" },
  { label: "Kota", value: "Semarang" },
  { label: "Provinsi", value: "Jawa Tengah" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Ticker>
        {["KELOMPOK 117", "KALIGAWE", "KKN TEMATIK XXII", "UNISSULA", "GAYAMSARI"].map((t) => (
          <span
            key={t}
            className="font-display text-sm font-extrabold tracking-[0.2em] text-primary-foreground/85"
          >
            {t} <span className="text-secondary">✦</span>
          </span>
        ))}
      </Ticker>

      {/* STATISTIK */}
      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <Halftone className="inset-0 h-full w-full" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG KKN */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-24">
        <LeafShape className="-left-10 top-10 h-48 w-48 opacity-40" />
        <Blob className="-right-24 bottom-0 h-72 w-72 opacity-40" />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[2rem] border-2 border-secondary sm:block"
              />
              <img
                src={aboutImg}
                alt="Kelompok 117 bersama masyarakat Kaligawe"
                loading="lazy"
                width={1600}
                height={1000}
                className="relative aspect-4/3 w-full rounded-[2rem] border border-primary/30 object-cover"
              />
              <div className="paper-card absolute -bottom-6 left-4 hidden rounded-2xl px-5 py-4 sm:block">
                <p className="font-display text-3xl font-extrabold leading-none text-primary">117</p>
                <p className="mt-1 eyebrow text-forest/60">Kelompok</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionTitle
              eyebrow="Tentang KKN"
              title="Bergerak Bersama Kaligawe"
              subtitle="Kelompok KKN 117 melaksanakan pengabdian kepada masyarakat di Kelurahan Kaligawe melalui berbagai kegiatan yang berfokus pada pendidikan, lingkungan, kesehatan, pemetaan wilayah, serta kegiatan sosial bersama masyarakat."
            />
            <Reveal delay={120}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Pendidikan", "Lingkungan", "Kesehatan", "Pemetaan Wilayah"].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 rounded-xl border border-primary/25 bg-cream px-4 py-3 text-sm font-semibold text-forest"
                  >
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    {f}
                  </div>
                ))}
              </div>
              <Link
                to="/profil"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
              >
                Kenal Lebih Dekat
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-24">
        <Sun className="-left-24 -top-24 h-72 w-72 opacity-70" />
        <Halftone className="bottom-0 right-0 h-56 w-72" />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="order-2 lg:order-1">
            <SectionTitle
              eyebrow="Lokasi Pengabdian"
              title="Tempat Kami Mengabdi"
              subtitle="Seluruh kegiatan Kelompok 117 berpusat di Kelurahan Kaligawe bersama warga dan perangkat kelurahan."
            />
            <Reveal delay={120}>
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {lokasi.map((l) => (
                  <div key={l.label} className="paper-card rounded-2xl px-5 py-4">
                    <dt className="eyebrow text-forest/55">{l.label}</dt>
                    <dd className="mt-1.5 font-display text-lg font-bold text-forest">{l.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={80} className="order-1 lg:order-2">
            <div className="paper-card relative overflow-hidden rounded-[2rem] p-3">
              <img
                src={mapImg}
                alt="Ilustrasi peta wilayah tempat pengabdian Kelompok 117 (placeholder)"
                loading="lazy"
                width={1400}
                height={1000}
                className="aspect-4/3 w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="inline-flex animate-float items-center gap-2 rounded-full bg-secondary px-4 py-2 font-display text-sm font-extrabold text-forest shadow-md">
                  <MapPin className="h-4 w-4" /> Kaligawe
                </span>
              </div>
              <p className="px-2 pb-1 pt-3 text-xs text-muted-foreground">
                Tempat kami mengabdi selama KKN.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAM KERJA UTAMA */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-24">
        <LeafShape className="-right-10 top-8 h-44 w-44 rotate-180 opacity-40" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Program Kerja"
            title="Program Kerja Utama"
            subtitle="Empat langkah untuk memberikan kontribusi nyata bagi masyarakat Kaligawe."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <ProgramCard key={p.id} program={p} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* KEGIATAN PENDUKUNG */}
      <section className="relative overflow-hidden bg-cream py-16 sm:py-24">
        <Halftone className="inset-0 h-full w-full" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Kegiatan Pendukung"
              title="Lebih dari Sekadar Program Kerja"
              subtitle="Selain program utama, Kelompok 117 juga terlibat dalam berbagai kegiatan bersama masyarakat."
            />
            <Reveal delay={100}>
              <Link
                to="/kegiatan"
                className="group inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-paper px-5 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/50"
              >
                Semua Kegiatan
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.slice(0, 3).map((a, i) => (
              <ActivityCard key={a.id} activity={a} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* GALERI PREVIEW */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-24">
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Dokumentasi"
            title="Jejak Perjalanan Kami"
            subtitle="Dokumentasi perjalanan Kelompok 117 bersama masyarakat Kaligawe."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.slice(0, 8).map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                delay={i * 60}
                className={`${i === 0 ? "col-span-2 row-span-2" : ""} aspect-square`}
              />
            ))}
          </div>
          <Reveal delay={120} className="mt-10 text-center">
            <Link
              to="/galeri"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
            >
              Buka Galeri Lengkap
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest py-20 text-cream">
        <Halftone className="inset-0 h-full w-full opacity-10" />
        <Sun className="-right-20 -top-20 h-72 w-72 opacity-40" />
        <LeafShape className="-bottom-8 -left-8 h-52 w-52 opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow text-secondary">Kelompok 117 · Kaligawe</p>
            <h2 className="mt-5 text-balance-tight font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Ikuti Perjalanan KKN Kami
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/75">
              Simak dokumentasi kegiatan, program kerja, dan cerita kebersamaan Kelompok 117 bersama
              masyarakat Kelurahan Kaligawe.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/kontak"
                className="group inline-flex items-center gap-2.5 rounded-full bg-secondary px-6 py-3.5 text-sm font-bold text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember hover:text-cream"
              >
                Terhubung Bersama Kami
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/galeri"
                className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
              >
                Lihat Dokumentasi
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
