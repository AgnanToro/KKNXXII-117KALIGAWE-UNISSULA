import { Camera } from "lucide-react";

import type { GalleryItem } from "@/data/gallery";
import Reveal from "./Reveal";

type Props = {
  item: GalleryItem;
  delay?: number;
  className?: string;
  onOpen?: (item: GalleryItem) => void;
};

export default function GalleryCard({ item, delay = 0, className = "", onOpen }: Props) {
  return (
    <Reveal delay={delay} className={className}>
      <button
        type="button"
        onClick={() => onOpen?.(item)}
        className="group relative block h-full w-full overflow-hidden rounded-2xl border border-primary/30 bg-card text-left transition-all duration-500 hover:-translate-y-1"
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-forest/85 via-forest/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="eyebrow text-secondary">{item.category}</span>
          <p className="mt-1 font-display text-base font-bold leading-tight text-cream">
            {item.title}
          </p>
        </div>
        <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/95 text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Camera className="h-4 w-4" />
        </span>
      </button>
    </Reveal>
  );
}
