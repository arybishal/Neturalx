import { Link } from "@tanstack/react-router";
import { Clock, Signal, Leaf } from "lucide-react";
import type { Trek } from "@/data/site";

export function TrekCard({ trek, detailed = false }: { trek: Trek; detailed?: boolean }) {
  return (
    <article className="surface-card zoom-slow flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={trek.image}
          alt={`${trek.name} trekking route in ${trek.region}`}
          loading="lazy"
          width={1024}
          height={768}
          className="size-full object-cover"
        />
        <span className="glass-card text-snow absolute top-4 left-4 !rounded-full px-4 py-1.5 text-xs font-semibold">
          Sustainability {trek.score}/100
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow">{trek.region}</p>
        <h3 className="mt-3 text-2xl">{trek.name}</h3>
        {detailed && (
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{trek.overview}</p>
        )}

        <dl className="text-muted-foreground mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="flex items-center gap-2 text-xs tracking-widest uppercase">
              <Clock className="size-3.5" aria-hidden /> Duration
            </dt>
            <dd className="text-foreground mt-1 font-semibold">{trek.duration}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-xs tracking-widest uppercase">
              <Signal className="size-3.5" aria-hidden /> Difficulty
            </dt>
            <dd className="text-foreground mt-1 font-semibold">{trek.difficulty}</dd>
          </div>
        </dl>

        <p className="text-primary mt-6 flex items-center gap-2 text-sm font-medium">
          <Leaf className="size-4 shrink-0" aria-hidden />
          {trek.impact}
        </p>

        <div className="mt-auto pt-7">
          <Link to="/contact" className="btn-base btn-forest w-full">
            Request This Journey
          </Link>
        </div>
      </div>
    </article>
  );
}
