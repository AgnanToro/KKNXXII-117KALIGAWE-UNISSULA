import type { ReactNode } from "react";

import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 eyebrow ${
            tone === "light"
              ? "border-cream/40 bg-cream/10 text-cream"
              : "border-primary/40 bg-secondary/40 text-primary"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={`text-balance-tight text-3xl font-extrabold leading-[1.05] sm:text-4xl md:text-5xl ${
          tone === "light" ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-cream/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
