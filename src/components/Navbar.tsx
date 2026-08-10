import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo/logo-117.png";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil" },
  { to: "/program-kerja", label: "Program Kerja" },
  { to: "/kegiatan", label: "Kegiatan" },
  { to: "/galeri", label: "Galeri" },
  { to: "/kontak", label: "Kontak" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/20 bg-cream/95 shadow-[0_10px_30px_-24px_oklch(0.33_0.062_140/0.8)] backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-paper transition-transform duration-300 group-hover:rotate-6">
            <img src={logo} alt="Logo KKN Kelompok 117 Kaligawe" width={44} height={44} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-extrabold tracking-tight text-forest sm:text-base">
              KKN KELOMPOK 117
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/70">
              Kaligawe · UNISSULA
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-secondary/60 text-forest" }}
                className="relative rounded-full px-4 py-2 text-sm font-semibold text-forest/80 transition-all duration-300 hover:bg-secondary/40 hover:text-forest"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              to="/program-kerja"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
            >
              Program Kerja
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-paper text-forest transition-colors hover:bg-secondary/50 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[4.5rem] z-40 origin-top overflow-hidden border-b border-primary/20 bg-cream transition-all duration-300 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-[1280px] flex-col gap-1 px-4 py-5 sm:px-6">
          {links.map((link, i) => (
            <li key={link.to} style={{ transitionDelay: `${i * 40}ms` }}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-secondary/60" }}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-bold text-forest transition-colors hover:bg-secondary/40"
              >
                {link.label}
                <span aria-hidden className="h-2 w-2 rounded-full bg-primary/40" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
