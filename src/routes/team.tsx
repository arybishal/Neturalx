import { createFileRoute } from "@tanstack/react-router";
import humla from "@/assets/dest-humla.jpg";
import { TEAM } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TeamCard } from "@/components/site/TeamCard";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Our Team — Ruta Vanta NaturelaX";
const DESC =
  "Meet the founders, engineers and analysts building carbon-neutral Himalayan adventure travel from Kathmandu.";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind the footprint."
        intro="A small Nepali team of guides, engineers and analysts obsessed with proving that adventure travel can regenerate a landscape."
        image={humla}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="Built in Kathmandu" align="center" />
          <ul className="mt-16 grid gap-8 md:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 110}>
                <TeamCard member={m} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Walk With The People Who Built This"
        text="Our founders still lead expeditions every season. Ask us which ones."
        action="Get In Touch"
      />
    </>
  );
}
