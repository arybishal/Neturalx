import { Link } from "@tanstack/react-router";
import { Leaf, Users, Route } from "lucide-react";
import heroImage from "@/assets/hero-himalaya.jpg";
import { Reveal } from "@/components/site/Reveal";

const STATS = [
  { icon: Leaf, value: "100%", label: "Carbon Offset" },
  { icon: Users, value: "48", label: "Local Communities Supported" },
  { icon: Route, value: "22", label: "Eco-Friendly Routes" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Sunrise over the Himalayan range in Nepal"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="ken-burns absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden
      />

      <div className="container-x relative py-36">
        <Reveal className="max-w-4xl">
          <span className="glass-card text-snow inline-flex items-center gap-2 !rounded-full px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase">
            <span className="bg-gold size-1.5 rounded-full" aria-hidden />
            Carbon Neutral Himalayan Adventures
          </span>

          <h1 className="text-snow mt-8 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            The World Doesn't Need Tourists.
            <span className="text-sand block">It Needs Guests.</span>
          </h1>

          <p className="text-snow/80 mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">
            Sustainable trekking and carbon-neutral adventure experiences designed to protect
            nature, support communities, and preserve the Himalayas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/treks" className="btn-base btn-primary">
              Explore Our Journeys
            </Link>
            <Link to="/carbon-neutral" className="btn-base btn-ghost-light">
              Why Sustainability Matters
            </Link>
          </div>
        </Reveal>

        <ul className="mt-20 grid gap-4 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal as="li" key={s.label} delay={200 + i * 130}>
              <div className="glass-card float-slow flex items-center gap-4 p-5">
                <span className="border-snow/25 text-gold grid size-11 shrink-0 place-items-center rounded-full border">
                  <s.icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="text-snow font-display block text-2xl">{s.value}</span>
                  <span className="text-snow/70 block text-xs tracking-[0.16em] uppercase">
                    {s.label}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
