import { createFileRoute } from "@tanstack/react-router";
import everest from "@/assets/dest-everest.jpg";
import { TREKS } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TrekCard } from "@/components/site/TrekCard";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Trekking Experiences in Nepal — Ruta Vanta NaturelaX";
const DESC =
  "Everest Base Camp, Annapurna Circuit, Langtang Valley and remote Himalayan expeditions, each with a published sustainability score.";

export const Route = createFileRoute("/treks")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/treks" },
    ],
    links: [{ rel: "canonical", href: "/treks" }],
  }),
  component: TreksPage,
});

function TreksPage() {
  return (
    <>
      <PageHero
        eyebrow="Trekking Experiences"
        title="Four journeys. One standard of care."
        intro="Every itinerary is capped at twelve guests, led by licensed Nepali guides and operated plastic-free from the trailhead to the summit day."
        image={everest}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Choose Your Route"
            title="Sustainability scored, guest reviewed"
            intro="The sustainability score combines waste handling, transport emissions, lodge ownership and local employment on each route."
          />
          <ul className="mt-16 grid gap-8 md:grid-cols-2">
            {TREKS.map((t, i) => (
              <Reveal as="li" key={t.slug} delay={i * 90}>
                <TrekCard trek={t} detailed />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
      <CtaBanner
        title="Not Sure Which Trail Is Yours?"
        text="Tell us your dates, fitness and what you want to give back. We will design the route around it."
        action="Plan With A Guide"
      />
    </>
  );
}
