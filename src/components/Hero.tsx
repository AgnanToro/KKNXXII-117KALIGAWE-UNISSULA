import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import heroImg from "@/assets/images/hero-community.webp";
import logo from "@/assets/logo/logo-117.jpg";
import { Blob, Cloud, Halftone, HalftoneWarm, LeafShape, Sun } from "./Decor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-deep">
      <Sun className="-right-16 -top-24 h-80 w-80 opacity-90 sm:h-[26rem] sm:w-[26rem]" />
      <Blob className="-left-28 top-20 h-80 w-80 opacity-60" />
      <HalftoneWarm className="left-0 top-0 h-64 w-64" />
      <Halftone className="bottom-8 right-1/3 h-40 w-56" />
      <Cloud className="left-[12%] top-[18%] hidden h-16 w-40 animate-float opacity-90 md:block" />
      <Cloud className="right-[26%] top-[8%] hidden h-12 w-32 animate-float opacity-80 lg:block" />
      <LeafShape className="-bottom-6 left-[46%] h-40 w-40 rotate-12 opacity-70" />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="animate-fade-up">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-primary/40 bg-paper px-3.5 py-1.5 eyebrow text-primary">
              KKN Tematik XXII
            </span>
            <span className="rounded-full bg-primary px-3.5 py-1.5 eyebrow text-primary-foreground">
              Kelompok 117
            </span>
            <span className="rounded-full border border-primary/40 bg-secondary/50 px-3.5 py-1.5 eyebrow text-forest">
              Kaligawe
            </span>
          </div>

          <h1 className="mt-7 text-balance-tight font-display text-4xl font-extrabold leading-[1.02] text-forest sm:text-5xl lg:text-6xl">
            Menuju Kaligawe yang lebih hijau,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">lebih sehat,</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3.5 -rotate-1 bg-secondary/70"
              />
            </span>{" "}
            dan lebih berdaya.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-forest/75 sm:text-lg">
            Website resmi profil, dokumentasi, dan showcase kegiatan KKN Kelompok 117 di Kelurahan
            Kaligawe, Kecamatan Gayamsari, Kota Semarang.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/program-kerja"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
            >
              Lihat Program Kerja
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/kegiatan"
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-paper px-6 py-3.5 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/50"
            >
              Jelajahi Kegiatan
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-2 text-sm font-semibold text-forest/70">
            <MapPin className="h-4 w-4 text-ember" />
            Kelurahan Kaligawe · Gayamsari · Kota Semarang
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <span
              aria-hidden
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] border-2 border-primary/35 sm:block"
            />
            <div className="paper-card relative overflow-hidden rounded-[2rem] p-3">
              <img
                src={heroImg}
                alt="Mahasiswa KKN Kelompok 117 bersama warga Kaligawe"
                width={1600}
                height={1100}
                className="aspect-4/3 w-full rounded-[1.5rem] object-cover"
              />
              <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
                <div className="leading-none">
                  <p className="font-display text-5xl font-extrabold text-primary">117</p>
                  <p className="mt-1.5 eyebrow text-forest/60">Kelompok KKN</p>
                </div>
                <img
                  src={logo}
                  alt="Logo KKN Kelompok 117 Kaligawe"
                  loading="lazy"
                  width={72}
                  height={72}
                  className="h-16 w-16 sm:h-18 sm:w-18"
                />
              </div>
            </div>
            <span className="absolute -bottom-5 -left-5 hidden rotate-[-6deg] rounded-full bg-ember px-4 py-2 font-display text-sm font-extrabold text-cream sm:block">
              UNISSULA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
