import { Link } from "@tanstack/react-router";
import ctaImage from "@/assets/cta-mountain.jpg";
import { Reveal } from "./Reveal";

export function CtaBanner({
  title = "Experience Nature Without Leaving A Trace",
  text = "Join a small group of guests, not tourists. Every journey is measured, offset and shared with the communities who protect these mountains.",
  action = "Start Your Sustainable Journey",
}: {
  title?: string;
  text?: string;
  action?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={ctaImage}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={900}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden
      />
      <div className="container-x relative py-28 md:py-40">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-snow text-3xl sm:text-5xl">{title}</h2>
          <p className="text-snow/80 mx-auto mt-6 max-w-xl text-base leading-relaxed">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-base btn-primary">
              {action}
            </Link>
            <Link to="/carbon-neutral" className="btn-base btn-ghost-light">
              How Offsetting Works
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
