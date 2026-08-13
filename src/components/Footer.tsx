import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import logo from "@/assets/logo/logo-117.jpg";
import { Halftone, LeafShape } from "./Decor";
import SocialLinks from "./SocialLinks";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil" },
  { to: "/program-kerja", label: "Program Kerja" },
  { to: "/kegiatan", label: "Kegiatan" },
  { to: "/galeri", label: "Galeri" },
  { to: "/kontak", label: "Kontak" },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <Halftone className="inset-0 h-full w-full opacity-10" />
      <LeafShape className="-left-10 bottom-0 h-56 w-56 opacity-30" />
      <LeafShape className="-right-8 top-4 h-40 w-40 rotate-180 opacity-20" />

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Logo KKN Kelompok 117 Kaligawe"
              loading="lazy"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full border border-cream/25 bg-cream/95 p-1"
            />
            <div>
              <p className="font-display text-xl font-extrabold leading-none">KKN KELOMPOK 117</p>
              <p className="font-display text-2xl font-extrabold leading-tight text-secondary">
                KALIGAWE
              </p>
            </div>
          </div>
          <p className="mt-4 eyebrow text-cream/60">KKN Tematik XXII — UNISSULA</p>
          <p className="mt-5 max-w-sm text-lg font-medium leading-snug text-cream/85">
            Menuju Kaligawe yang lebih hijau,
            <br />
            lebih sehat, dan lebih berdaya.
          </p>
          <div className="mt-6 flex items-start gap-2 text-sm text-cream/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
            <span>
              Kelurahan Kaligawe, Kecamatan Gayamsari,
              <br />
              Kota Semarang, Jawa Tengah
            </span>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-secondary">Navigasi</h3>
          <ul className="mt-5 space-y-2.5">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm font-medium text-cream/75 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-secondary">Ikuti Kami</h3>
          <p className="mt-5 text-sm text-cream/70">
            Dokumentasi perjalanan Kelompok 117 bersama masyarakat Kaligawe.
          </p>
          <SocialLinks variant="ghost" className="mt-5" />
        </div>
      </div>

      <div className="relative border-t border-cream/15">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-4 py-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 KKN Kelompok 117 Kaligawe UNISSULA</p>
          <p className="eyebrow text-cream/40">KKN Tematik XXII</p>
        </div>
      </div>
    </footer>
  );
}
