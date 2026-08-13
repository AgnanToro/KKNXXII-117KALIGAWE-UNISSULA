import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Leaf, MapPin, Users } from "lucide-react";

import kelompokImg from "@/assets/images/kelompok.jpg";
import logo from "@/assets/logo/logo-117.jpg";
import { Blob, Halftone, LeafShape, Sun } from "@/components/Decor";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const identitas = [
  { label: "Program", value: "KKN Tematik XXII" },
  { label: "Kelompok", value: "117" },
  { label: "Universitas", value: "UNISSULA" },
  { label: "Lokasi", value: "Kaligawe" },
];

const nilai = [
  { icon: HeartHandshake, title: "Peduli", text: "Hadir dan mendengar kebutuhan masyarakat Kaligawe." },
  { icon: Users, title: "Kolaborasi", text: "Bekerja bersama warga, RT, RW, dan perangkat kelurahan." },
  { icon: MapPin, title: "Pengabdian", text: "Menjalankan program dengan sungguh-sungguh di lapangan." },
  { icon: Leaf, title: "Keberlanjutan", text: "Meninggalkan manfaat yang dapat dirawat warga." },
];

export default function Profil() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-24">
        <Sun className="-right-24 -top-24 h-80 w-80 opacity-70" />
        <Blob className="-left-24 bottom-0 h-72 w-72 opacity-50" />
        <Halftone className="left-1/3 top-8 h-40 w-56" />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 eyebrow text-primary-foreground">
              Profil
            </span>
            <h1 className="mt-6 text-balance-tight font-display text-4xl font-extrabold leading-[1.03] text-forest sm:text-5xl lg:text-6xl">
              Tentang Kelompok 117
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-forest/75 sm:text-lg">
              Menuju Kaligawe yang lebih hijau, lebih sehat, dan lebih berdaya.
            </p>
            <dl className="mt-9 grid gap-3 sm:grid-cols-2">
              {identitas.map((item) => (
                <div key={item.label} className="paper-card rounded-2xl px-5 py-4">
                  <dt className="eyebrow text-forest/55">{item.label}</dt>
                  <dd className="mt-1.5 font-display text-lg font-bold text-forest">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Reveal delay={80}>
            <div className="paper-card relative overflow-hidden rounded-[2rem] p-6 text-center">
              <img
                src={logo}
                alt="Logo KKN Kelompok 117 Kaligawe"
                loading="lazy"
                width={220}
                height={220}
                className="mx-auto h-48 w-48 sm:h-56 sm:w-56"
              />
              <p className="mt-4 font-display text-2xl font-extrabold text-forest">
                KKN KELOMPOK 117
              </p>
              <p className="eyebrow mt-2 text-primary">Kaligawe · Gayamsari · Semarang</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SIAPA KAMI */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-24">
        <LeafShape className="-left-10 top-12 h-44 w-44 opacity-35" />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionTitle
              eyebrow="Siapa Kami"
              title="Mahasiswa yang belajar bersama masyarakat"
              subtitle="Kelompok 117 merupakan kelompok KKN Tematik XXII Universitas Islam Sultan Agung (UNISSULA) yang melaksanakan pengabdian di Kelurahan Kaligawe. Kegiatan kami berfokus pada pendidikan, lingkungan, kesehatan, pemetaan wilayah, serta kegiatan sosial bersama masyarakat."
            />
            <Reveal delay={100}>
              <p className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-cream px-5 py-4 text-sm text-muted-foreground">
                Struktur kepengurusan Kelompok 117 dapat dilihat pada bagian Struktur Kelompok di
                bawah. [PLACEHOLDER] Data dosen pembimbing lapangan akan ditambahkan menyusul.
              </p>
              <Link
                to="/program-kerja"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
              >
                Lihat Program Kerja
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>

          </div>

          <Reveal delay={80}>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-[2rem] border-2 border-secondary sm:block"
              />
              <img
                src={kelompokImg}
                alt="Foto kelompok KKN 117 (placeholder, ganti dengan foto kelompok)"
                loading="lazy"
                width={1600}
                height={1000}
                className="relative aspect-4/3 w-full rounded-[2rem] border border-primary/30 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEMPAT KAMI MENGABDI */}
      <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-20">
        <Halftone className="inset-0 h-full w-full" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Lokasi"
            title="Tempat Kami Mengabdi"
            subtitle="Kelurahan Kaligawe, Kecamatan Gayamsari, Kota Semarang, Jawa Tengah."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Kelurahan", value: "Kaligawe" },
              { label: "Kecamatan", value: "Gayamsari" },
              { label: "Kota", value: "Semarang" },
              { label: "Provinsi", value: "Jawa Tengah" },
            ].map((l, i) => (
              <Reveal key={l.label} delay={i * 70}>
                <div className="paper-card h-full rounded-2xl px-5 py-6">
                  <MapPin className="h-5 w-5 text-ember" />
                  <p className="mt-4 eyebrow text-forest/55">{l.label}</p>
                  <p className="mt-1.5 font-display text-xl font-bold text-forest">{l.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NILAI */}
      <section className="relative overflow-hidden bg-forest py-16 text-cream sm:py-24">
        <Halftone className="inset-0 h-full w-full opacity-10" />
        <Sun className="-right-24 top-0 h-72 w-72 opacity-35" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Nilai Kami"
            title="Nilai yang Kami Bawa"
            subtitle="Empat nilai yang menemani setiap langkah Kelompok 117 di Kaligawe."
            tone="light"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nilai.map((n, i) => {
              const Icon = n.icon;
              return (
                <Reveal key={n.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-cream/20 bg-cream/5 p-6 transition-transform duration-300 hover:-translate-y-1.5">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-forest">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold">{n.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-cream/75">{n.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
