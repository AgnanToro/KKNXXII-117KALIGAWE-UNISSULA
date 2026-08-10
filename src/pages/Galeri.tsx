import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Halftone, Sun } from "@/components/Decor";
import GalleryCard from "@/components/GalleryCard";
import { gallery, galleryCategories, type GalleryItem } from "@/data/gallery";

const filters = ["Semua", ...galleryCategories] as const;

export default function Galeri() {
  const [active, setActive] = useState<string>("Semua");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const items = active === "Semua" ? gallery : gallery.filter((g) => g.category === active);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section className="relative overflow-hidden bg-cream-deep py-16 sm:py-24">
        <Sun className="-left-20 -top-20 h-72 w-72 opacity-70" />
        <Halftone className="bottom-0 right-0 h-48 w-64" />
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 eyebrow text-primary-foreground">
              Dokumentasi
            </span>
            <h1 className="mt-6 text-balance-tight font-display text-4xl font-extrabold leading-[1.03] text-forest sm:text-5xl lg:text-6xl">
              Jejak Perjalanan Kami
            </h1>
            <p className="mt-5 text-base leading-relaxed text-forest/75 sm:text-lg">
              Dokumentasi perjalanan Kelompok 117 bersama masyarakat Kaligawe.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-12 sm:py-16">
        <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-primary/30 bg-cream text-forest/80 hover:bg-secondary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {items.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                delay={(i % 6) * 60}
                className="break-inside-avoid"
                onOpen={setLightbox}
              />
            ))}
          </div>

          {items.length === 0 ? (
            <p className="mt-10 rounded-2xl border border-dashed border-primary/40 bg-cream px-6 py-12 text-center text-sm text-muted-foreground">
              Belum ada dokumentasi pada kategori ini. [PLACEHOLDER — tambahkan foto pada
              src/data/gallery.ts]
            </p>
          ) : null}
        </div>
      </section>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest/90 p-4 animate-fade-up"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Tutup"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-forest transition-transform hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-[86vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-cream/25 bg-paper"
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="max-h-[72vh] w-full object-contain"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-2 px-5 py-4">
              <span className="font-display text-base font-bold text-forest">{lightbox.title}</span>
              <span className="eyebrow text-primary">{lightbox.category}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
