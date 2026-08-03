import { createFileRoute } from "@tanstack/react-router";
import { Compass, Target, Cpu, HeartHandshake, Sparkles } from "lucide-react";
import annapurna from "@/assets/dest-annapurna.jpg";
import community from "@/assets/community.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "About Ruta Vanta NaturelaX — Regenerative Tourism in Nepal";
const DESC =
  "Who we are, our mission, and how technology and sustainability shape a new generation of Himalayan adventure travel.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    icon: Compass,
    title: "Who We Are",
    text: "A Kathmandu-based team of guides, engineers and conservationists who grew up in these valleys and refuse to watch them degrade.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To make regenerative travel the default in Nepal — where every journey restores more than it consumes.",
  },
  {
    icon: Cpu,
    title: "Technology + Sustainability",
    text: "We model emissions, route load and lodge capacity so decisions are made with data, not guesswork.",
  },
  {
    icon: HeartHandshake,
    title: "Responsible Tourism",
    text: "Fair wages, insured porters, community-owned lodges and honest pricing on every itinerary we operate.",
  },
  {
    icon: Sparkles,
    title: "Future Vision",
    text: "By 2030: climate-positive operations, 250,000 native trees planted, and 100 mountain households earning from conservation.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We are not an agency. We are a movement with a trail map."
        intro="Ruta Vanta NaturelaX exists because the Himalaya cannot survive another decade of extractive tourism. So we rebuilt the model from the ground up."
        image={annapurna}
      />

      <section className="section-y">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal className="media-frame zoom-slow">
            <img
              src={community}
              alt="Community forest restoration work in the Nepali hills"
              loading="lazy"
              width={1400}
              height={1000}
              className="size-full object-cover"
            />
          </Reveal>
          <SectionHeading
            eyebrow="Our Story"
            title="Born on the trail, built for the next generation"
            intro="After two decades of guiding, our founders watched the same trails fill with waste and the same villages see none of the income. Ruta Vanta was founded to close that gap — pairing Himalayan expertise with transparent carbon accounting and community ownership."
          />
        </div>
      </section>

      <section className="bg-mist section-y">
        <div className="container-x">
          <SectionHeading eyebrow="What Guides Us" title="Five pillars" align="center" />
          <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90}>
                <div className="surface-card h-full p-8">
                  <span className="bg-primary text-primary-foreground grid size-12 place-items-center rounded-full">
                    <p.icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-xl">{p.title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Join The Movement, Not The Crowd"
        text="Small groups. Local leadership. Verified impact on every journey."
        action="Talk To Our Team"
      />
    </>
  );
}
