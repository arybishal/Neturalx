import { createFileRoute } from "@tanstack/react-router";
import { Gauge, TrendingDown, Leaf, ShieldCheck } from "lucide-react";
import cta from "@/assets/cta-mountain.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CarbonFootprint } from "@/components/home/HomeSections";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Carbon Neutral Travel — Ruta Vanta NaturelaX";
const DESC =
  "How we measure, reduce, offset and protect: the four-step carbon-neutral process behind every Himalayan journey we operate.";

export const Route = createFileRoute("/carbon-neutral")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/carbon-neutral" },
    ],
    links: [{ rel: "canonical", href: "/carbon-neutral" }],
  }),
  component: CarbonPage,
});

const STEPS = [
  {
    icon: Gauge,
    title: "Measure",
    text: "We calculate emissions for flights, ground transport, lodges, food and porter logistics using published emission factors — per guest, per day.",
  },
  {
    icon: TrendingDown,
    title: "Reduce",
    text: "Then we cut what we can: overland transfers instead of domestic flights where possible, solar lodges, local food supply and zero single-use plastic.",
  },
  {
    icon: Leaf,
    title: "Offset",
    text: "The remainder is offset at 110% through verified Nepali projects — community forestry, clean cookstoves and micro-hydro.",
  },
  {
    icon: ShieldCheck,
    title: "Protect",
    text: "A fixed share of every booking funds long-term habitat protection, so the offset keeps working after the trek ends.",
  },
];

function CarbonPage() {
  return (
    <>
      <PageHero
        eyebrow="Carbon Neutral Travel"
        title="Measured. Reduced. Offset. Protected."
        intro="Carbon neutrality is not a badge we bought. It is a process we publish, journey by journey."
        image={cta}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Process"
            title="A four-step climate commitment"
            align="center"
          />
          <ol className="relative mx-auto mt-16 max-w-3xl">
            <span className="bg-border absolute top-2 bottom-2 left-6 w-px md:left-1/2" aria-hidden />
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 110} className="relative pb-12 last:pb-0">
                <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-6 md:grid-cols-2 md:gap-12">
                  <span
                    className={
                      "bg-primary text-primary-foreground z-10 grid size-12 shrink-0 place-items-center rounded-full md:absolute md:left-1/2 md:-translate-x-1/2"
                    }
                  >
                    <s.icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div
                    className={
                      i % 2 === 0
                        ? "md:col-start-1 md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }
                  >
                    <p className="eyebrow">Step {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-2xl">{s.title}</h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="bg-mist">
        <CarbonFootprint />
      </div>

      <CtaBanner
        title="Travel That Leaves The Balance Positive"
        text="Every guest receives a signed carbon report at the end of their journey."
        action="Request A Sample Report"
      />
    </>
  );
}
