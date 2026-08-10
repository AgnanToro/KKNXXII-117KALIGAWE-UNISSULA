import type { Activity } from "@/data/activities";
import Reveal from "./Reveal";

export default function ActivityCard({
  activity,
  delay = 0,
  className = "",
}: {
  activity: Activity;
  delay?: number;
  className?: string;
}) {
  const Icon = activity.icon;
  return (
    <Reveal delay={delay} className={`h-full ${className}`}>
      <article className="group relative h-full overflow-hidden rounded-2xl border border-primary/30 bg-card transition-all duration-500 hover:-translate-y-1.5">
        <div className="relative aspect-16/10 overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-forest/80 via-forest/10 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 eyebrow text-forest">
            {activity.tag}
          </span>
          <div className="absolute inset-x-4 bottom-3 flex items-center gap-2.5 text-cream">
            <Icon className="h-4 w-4 shrink-0 text-secondary" />
            <h3 className="font-display text-lg font-bold leading-tight">{activity.title}</h3>
          </div>
        </div>
        <p className="p-4 text-sm leading-relaxed text-muted-foreground">{activity.description}</p>
      </article>
    </Reveal>
  );
}
