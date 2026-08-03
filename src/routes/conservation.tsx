import { createFileRoute } from "@tanstack/react-router";
import snowLeopard from "@/assets/snow-leopard.jpg";
import community from "@/assets/community.jpg";
import langtang from "@/assets/dest-langtang.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Conservation Programs — Ruta Vanta NaturelaX";
const DESC =
  "Snow leopard monitoring, clean mountain programs, forest restoration and community projects funded by every trek we operate in Nepal.";

export const Route = createFileRoute("/conservation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/conservation" },
    ],
    links: [{ rel: "canonical", href: "/conservation" }],
  }),
  component: ConservationPage,
});

const PROGRAMS = [
  {
    title: "Wildlife Protection",
    text: "Anti-poaching patrols and habitat surveys across six protected valleys, staffed by local rangers we help fund year-round.",
    image: langtang,
    stat: "6 valleys protected",
  },
  {
    title: "Snow Leopard Conservation",
    text: "Camera-trap corridors in Humla and Dolpa, plus livestock insurance that removes the incentive for retaliatory killings.",
    image: snowLeopard,
    stat: "17 monitored corridors",
  },
  {
    title: "Clean Mountain Program",
    text: "Plastic-free trekking kits, refill stations along major routes and organised clean-up expeditions each post-monsoon season.",
    image: langtang,
    stat: "38 tonnes waste removed",
  },
  {
    title: "Community Projects",
    text: "School support, guide training and women-led lodge cooperatives in the villages our routes pass through.",
    image: community,
    stat: "48 communities supported",
  },
];

function ConservationPage() {
  return (
    <>
      <PageHero
        eyebrow="Conservation"
        title="Protecting what we are lucky enough to walk through."
        intro="Conservation is not a marketing line on our itineraries. It is a budget line in every booking."
        image={snowLeopard}
      />

      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Programs"
            title="Four fronts, one ecosystem"
            intro="Each program is run with Nepali partners and reported publicly every season."
          />
          <div className="mt-16 space-y-16">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={60}>
                <article className="grid items-center gap-10 lg:grid-cols-2">
                  <div
                    className={`media-frame zoom-slow ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1400}
                      height={1000}
                      className="max-h-[440px] w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="eyebrow">{p.stat}</p>
                    <h3 className="mt-4 text-3xl">{p.title}</h3>
                    <p className="text-muted-foreground mt-5 leading-relaxed">{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Every Booking Funds The Field"
        text="Trek with us and your journey becomes part of the conservation budget for the season."
        action="Join A Conservation Trek"
      />
    </>
  );
}
