import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import {
  Philosophy,
  Services,
  FeaturedDestinations,
  WhyUs,
  CarbonFootprint,
  ConservationImpact,
  TravelWithUs,
  TeamPreview,
} from "@/components/home/HomeSections";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Ruta Vanta NaturelaX — Carbon Neutral Trekking in Nepal";
const DESC =
  "Sustainable trekking and carbon-neutral Himalayan adventures that protect nature, support local communities and preserve Nepal's mountains.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Ruta Vanta NaturelaX",
          description: DESC,
          areaServed: "Nepal",
          address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
          telephone: "+977 9762651574",
          email: "info.contact@rutavanta.com",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <FeaturedDestinations />
      <WhyUs />
      <CarbonFootprint />
      <ConservationImpact />
      <TravelWithUs />
      <TeamPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
