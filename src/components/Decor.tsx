import type { ReactNode } from "react";

export function Halftone({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`halftone pointer-events-none absolute ${className}`} />;
}

export function HalftoneWarm({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`halftone-sun pointer-events-none absolute ${className}`} />;
}

export function Sun({ className = "", spin = true }: { className?: string; spin?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${className}`}
    >
      <circle cx="100" cy="100" r="46" fill="var(--sun)" />
      <g className={spin ? "animate-spin-slow origin-center" : "origin-center"}>
        {Array.from({ length: 24 }).map((_, i) => (
          <rect
            key={i}
            x="99"
            y="16"
            width="2.4"
            height={i % 2 === 0 ? 26 : 16}
            rx="1.2"
            fill="var(--sun)"
            transform={`rotate(${i * 15} 100 100)`}
          />
        ))}
      </g>
    </svg>
  );
}

export function LeafShape({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={`pointer-events-none absolute ${className}`}>
      <path
        d="M50 4C22 18 8 44 12 74c0 0 26 10 46-8s26-48 26-48-14-2-34-14Z"
        fill="var(--leaf)"
        opacity="0.5"
      />
      <path
        d="M20 78C34 58 52 38 78 22"
        stroke="var(--forest)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 80" className={`pointer-events-none absolute ${className}`}>
      <path
        d="M30 66c-14 0-24-9-24-20s10-19 22-19c4-13 17-22 32-22 17 0 31 11 34 26 3-2 7-3 11-3 12 0 21 8 21 19s-9 19-22 19H30Z"
        fill="var(--paper)"
      />
    </svg>
  );
}

export function Blob({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={`pointer-events-none absolute ${className}`}>
      <path
        d="M158 42c18 21 22 55 8 78s-46 34-72 33-49-14-59-36 0-51 20-70 51-31 74-25 20 5 29 20Z"
        fill="var(--sun-soft)"
      />
    </svg>
  );
}

export function Ticker({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-y border-primary/30 bg-primary py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        <div className="flex gap-10">{children}</div>
        <div aria-hidden className="flex gap-10">
          {children}
        </div>
      </div>
    </div>
  );
}
