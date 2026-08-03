import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-mist section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Travellers who became guests"
          intro="Reviews from people who walked with us and left the trail better than they found it."
          align="center"
        />
        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 110}>
              <figure className="surface-card flex h-full flex-col p-8">
                <Quote className="text-gold size-7" strokeWidth={1.5} aria-hidden />
                <blockquote className="mt-6 flex-1 text-base leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t pt-6">
                  <span className="text-2xl" aria-hidden>
                    {t.flag}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold">{t.name}</span>
                    <span className="text-muted-foreground block truncate text-sm">
                      {t.country} · {t.trek}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
