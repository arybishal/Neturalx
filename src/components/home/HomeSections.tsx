import { Link } from "@tanstack/react-router";
import {
  Footprints,
  Leaf,
  PawPrint,
  Recycle,
  Users,
  Check,
  X,
  Plane,
  Bus,
  Home,
  Backpack,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import community from "@/assets/community.jpg";
import snowLeopard from "@/assets/snow-leopard.jpg";
import langtang from "@/assets/dest-langtang.jpg";
import { SERVICES, TREKS, TEAM } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrekCard } from "@/components/site/TrekCard";
import { TeamCard } from "@/components/site/TeamCard";

const ICONS: Record<string, LucideIcon> = { Footprints, Leaf, PawPrint, Recycle, Users };

export function Philosophy() {
  return (
    <section className="section-y">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Our Philosophy"
            title={
              <>
                Every Step Should Give Back
                <br className="hidden sm:block" /> More Than It Takes.
              </>
            }
            intro="We design journeys around a single rule: the valley should be measurably better after we walk through it. That means cleaner trails, restored forest, and income that stays in the mountains."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Guests leave trails cleaner than they found them",
              "Respect nature, wildlife and sacred ground",
              "Support local communities and fair wages",
              "Travel slowly, quietly and responsibly",
            ].map((item, i) => (
              <Reveal as="li" key={item} delay={i * 90}>
                <div className="surface-card h-full p-6 text-sm leading-relaxed">
                  <Check className="text-gold size-5" strokeWidth={2} aria-hidden />
                  <p className="mt-4">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={120} className="media-frame zoom-slow">
          <img
            src={community}
            alt="Local Nepali community planting rhododendron saplings in a Himalayan forest"
            loading="lazy"
            width={1400}
            height={1000}
            className="size-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="bg-mist section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Core Services"
          title="Five commitments behind every journey"
          align="center"
        />
        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Leaf;
            return (
              <Reveal as="li" key={s.title} delay={i * 90}>
                <div className="surface-card h-full p-8">
                  <span className="bg-primary text-primary-foreground grid size-12 place-items-center rounded-full">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-xl">{s.title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function FeaturedDestinations() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Featured Destinations"
            title="Journeys measured in impact, not kilometres"
          />
          <Reveal delay={100}>
            <Link to="/treks" className="btn-base btn-forest">
              View All Treks
            </Link>
          </Reveal>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TREKS.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={i * 90}>
              <TrekCard trek={t} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const COMPARISON = [
  "Carbon neutral trekking",
  "Conservation contribution",
  "Local community impact",
  "Sustainable operations",
  "Technology-driven travel planning",
];

export function WhyUs() {
  return (
    <section className="dark-section section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Ruta Vanta NaturelaX"
          title="A different kind of expedition company"
          tone="dark"
          align="center"
        />
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="border-snow/15 h-full rounded-[20px] border p-8">
              <h3 className="text-snow/70 text-xl">Traditional Tourism</h3>
              <ul className="mt-6 space-y-4">
                {COMPARISON.map((c) => (
                  <li key={c} className="text-snow/55 flex items-start gap-3 text-sm">
                    <X className="mt-0.5 size-4 shrink-0" aria-hidden />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-card border-gold/40 h-full p-8">
              <h3 className="text-snow text-xl">Ruta Vanta NaturelaX</h3>
              <ul className="mt-6 space-y-4">
                {COMPARISON.map((c) => (
                  <li key={c} className="text-snow flex items-start gap-3 text-sm">
                    <Check className="text-gold mt-0.5 size-4 shrink-0" aria-hidden />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FOOTPRINT = [
  { icon: Plane, label: "International Flights", value: 62, note: "1.42 t CO₂e" },
  { icon: Bus, label: "Ground Transport", value: 14, note: "0.32 t CO₂e" },
  { icon: Home, label: "Accommodation", value: 12, note: "0.27 t CO₂e" },
  { icon: Backpack, label: "Trekking Logistics", value: 12, note: "0.26 t CO₂e" },
];

export function CarbonFootprint() {
  return (
    <section className="section-y">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Carbon Footprint"
          title="Your adventure protects the planet."
          intro="We measure the full footprint of a 14-day Himalayan journey — then offset 110% of it through verified Nepali forest restoration and clean cookstove programmes."
        />
        <Reveal delay={100}>
          <div className="surface-card p-8 sm:p-10">
            <ul className="space-y-7">
              {FOOTPRINT.map((f) => (
                <li key={f.label}>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="flex min-w-0 items-center gap-3 font-medium">
                      <f.icon className="text-primary size-4 shrink-0" aria-hidden />
                      <span className="truncate">{f.label}</span>
                    </span>
                    <span className="text-muted-foreground shrink-0">{f.note}</span>
                  </div>
                  <div className="bg-secondary mt-3 h-2 overflow-hidden rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${f.value}%`,
                        background: "var(--gradient-sunrise)",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-primary text-primary-foreground mt-9 flex items-center justify-between gap-4 rounded-[20px] p-6">
              <span className="min-w-0">
                <span className="block text-xs tracking-[0.2em] uppercase opacity-70">
                  Total offset contribution
                </span>
                <span className="font-display mt-1 block text-2xl">2.51 t CO₂e · 110%</span>
              </span>
              <TreePine className="size-9 shrink-0 opacity-80" strokeWidth={1.2} aria-hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ConservationImpact() {
  return (
    <section className="dark-section section-y">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal className="media-frame zoom-slow order-2 lg:order-1">
          <img
            src={snowLeopard}
            alt="A snow leopard standing on a rocky Himalayan ridge at dusk"
            loading="lazy"
            width={1408}
            height={1008}
            className="size-full object-cover"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Conservation Impact"
            title="The Himalaya is not scenery. It is a living system."
            intro="A share of every booking funds field conservation work led by Nepali researchers and mountain communities."
            tone="dark"
          />
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              ["Snow Leopard Conservation", "17 camera-trap corridors monitored in Humla & Dolpa"],
              ["Forest Restoration", "84,000 native saplings planted since 2021"],
              ["Biodiversity Protection", "Habitat surveys across 6 protected valleys"],
              ["Mountain Ecosystem", "38 tonnes of waste removed from trekking routes"],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="border-snow/15 h-full rounded-[20px] border p-6">
                  <dt className="text-sand text-sm font-semibold">{title}</dt>
                  <dd className="text-snow/70 mt-2 text-sm leading-relaxed">{text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function TravelWithUs() {
  return (
    <section className="section-y">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Travel With Us"
          title={
            <>
              Trek Beyond Limits,
              <br className="hidden sm:block" /> Discover A Better Tomorrow
            </>
          }
          intro="Adventure is not only reaching destinations. It is connecting with nature, walking at the pace of the valley, and returning home as a more responsible traveller than you left."
        />
        <Reveal delay={100} className="media-frame zoom-slow">
          <img
            src={langtang}
            alt="Forested trail in the Langtang valley with mountains behind"
            loading="lazy"
            width={1024}
            height={1280}
            className="max-h-[520px] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function TeamPreview() {
  return (
    <section className="bg-mist section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Team"
          title="Guides, engineers and analysts from Nepal"
          align="center"
        />
        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 110}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
