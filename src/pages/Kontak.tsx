import { MapPin } from "lucide-react";

import logo from "@/assets/logo/logo-117.png";
import { Blob, Halftone, LeafShape, Sun } from "@/components/Decor";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import SocialLinks from "@/components/SocialLinks";

export default function Kontak() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-24">
        <Sun className="-left-24 -top-20 h-72 w-72 opacity-70" />
        <Blob className="-right-24 bottom-0 h-72 w-72 opacity-50" />
        <Halftone className="right-1/3 top-8 h-40 w-56" />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 eyebrow text-primary-foreground">
              Kontak
            </span>
            <h1 className="mt-6 text-balance-tight font-display text-4xl font-extrabold leading-[1.03] text-forest sm:text-5xl lg:text-6xl">
              Terhubung Bersama Kami
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-forest/75 sm:text-lg">
              KKN Kelompok 117 Kaligawe — Universitas Islam Sultan Agung (UNISSULA).
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="paper-card rounded-2xl px-5 py-5">
                <p className="eyebrow text-forest/55">Kelompok</p>
                <p className="mt-2 font-display text-xl font-bold text-forest">
                  KKN Kelompok 117 Kaligawe
                </p>
                <p className="mt-1 text-sm text-muted-foreground">KKN Tematik XXII — UNISSULA</p>
              </div>
              <div className="paper-card rounded-2xl px-5 py-5">
                <p className="eyebrow flex items-center gap-2 text-forest/55">
                  <MapPin className="h-4 w-4 text-ember" /> Lokasi
                </p>
                <p className="mt-2 text-sm leading-relaxed text-forest/85">
                  Kelurahan Kaligawe
                  <br />
                  Kecamatan Gayamsari
                  <br />
                  Kota Semarang, Jawa Tengah
                </p>
              </div>
            </div>
          </div>

          <Reveal delay={80}>
            <div className="paper-card rounded-[2rem] p-6 text-center">
              <img
                src={logo}
                alt="Logo KKN Kelompok 117 Kaligawe"
                loading="lazy"
                width={200}
                height={200}
                className="mx-auto h-44 w-44 sm:h-52 sm:w-52"
              />
              <p className="mt-4 font-display text-xl font-extrabold text-forest">KELOMPOK 117</p>
              <p className="eyebrow mt-2 text-primary">Kaligawe</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <LeafShape className="-left-8 bottom-0 h-44 w-44 opacity-35" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Media Sosial"
            title="Ikuti Perjalanan KKN Kami"
            subtitle="Dokumentasi kegiatan harian Kelompok 117 dibagikan melalui media sosial. URL berikut masih placeholder dan mudah diganti."
          />
          <Reveal delay={100} className="mt-8">
            <SocialLinks variant="outline" showHandle />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-20">
        <Halftone className="inset-0 h-full w-full opacity-10" />
        <Sun className="-right-20 -top-16 h-64 w-64 opacity-35" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-balance-tight font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Menuju Kaligawe yang lebih hijau, lebih sehat, dan lebih berdaya.
            </h2>
            <SocialLinks variant="ghost" className="mt-8 justify-center" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
