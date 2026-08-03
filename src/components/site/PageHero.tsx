import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
};

/** Shared inner-page hero: image, dark veil, cinematic heading. */
export function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden
        className="ken-burns absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden
      />
      <div className="container-x relative pt-40 pb-20">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-sand">{eyebrow}</p>
          <h1 className="text-snow mt-5 text-4xl sm:text-6xl">{title}</h1>
          <p className="text-snow/80 mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
