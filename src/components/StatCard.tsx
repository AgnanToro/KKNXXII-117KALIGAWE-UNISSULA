import Reveal from "./Reveal";

type Props = {
  value: string;
  label: string;
  delay?: number;
};

export default function StatCard({ value, label, delay = 0 }: Props) {
  return (
    <Reveal delay={delay}>
      <div className="paper-card group relative overflow-hidden rounded-2xl px-5 py-7 text-center transition-transform duration-300 hover:-translate-y-1">
        <div
          aria-hidden
          className="halftone absolute -right-4 -top-4 h-16 w-16 rounded-full"
        />
        <div className="font-display text-4xl font-extrabold leading-none text-primary sm:text-5xl">
          {value}
        </div>
        <div className="mt-3 eyebrow text-forest/70">{label}</div>
        <span
          aria-hidden
          className="absolute inset-x-6 bottom-3 h-1 origin-left scale-x-0 rounded-full bg-secondary transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>
    </Reveal>
  );
}
