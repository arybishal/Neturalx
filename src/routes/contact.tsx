import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import annapurna from "@/assets/dest-annapurna.jpg";
import cta from "@/assets/cta-mountain.jpg";
import { CONTACT, TREKS } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Contact Ruta Vanta NaturelaX — Plan Your Himalayan Journey";
const DESC =
  "Speak with our Kathmandu team about carbon-neutral treks in Nepal. Phone, email and journey planning enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's design a journey worth taking."
        intro="Tell us your dates, your pace and what you want your trek to protect. A guide replies within one working day."
        image={annapurna}
      />

      <section className="section-y relative overflow-hidden">
        <img
          src={cta}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full object-cover opacity-[0.06]"
        />
        <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="space-y-6">
              <ContactItem icon={Phone} label="Call us">
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold block">
                    {p}
                  </a>
                ))}
              </ContactItem>
              <ContactItem icon={Mail} label="Email us">
                {CONTACT.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="hover:text-gold block break-all">
                    {e}
                  </a>
                ))}
              </ContactItem>
              <ContactItem icon={MapPin} label="Visit us">
                <p>{CONTACT.location}</p>
                <p className="text-muted-foreground text-sm">Sun–Fri, 9:00–18:00 NPT</p>
              </ContactItem>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="surface-card p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <h2 className="text-2xl">Plan your journey</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                No deposit, no obligation — just a conversation with a guide.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" id="name" />
                <Field label="Email" id="email" type="email" />
                <Field label="Country" id="country" />
                <div>
                  <label htmlFor="trek" className="text-sm font-medium">
                    Journey of interest
                  </label>
                  <select
                    id="trek"
                    className="border-input bg-background focus:ring-ring mt-2 h-12 w-full rounded-full border px-5 text-sm outline-none focus:ring-2"
                  >
                    {TREKS.map((t) => (
                      <option key={t.slug}>{t.name}</option>
                    ))}
                    <option>Custom itinerary</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">
                  Tell us about your trip
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="border-input bg-background focus:ring-ring mt-2 w-full rounded-[20px] border px-5 py-4 text-sm outline-none focus:ring-2"
                  placeholder="Dates, group size, fitness level, what you'd like to support…"
                />
              </div>

              <button type="submit" className="btn-base btn-forest mt-8 w-full">
                <Send className="size-4" aria-hidden /> Send Enquiry
              </button>

              {sent && (
                <p
                  role="status"
                  className="text-primary mt-5 text-center text-sm font-medium"
                >
                  Thank you — your enquiry has been noted. A guide will be in touch.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="surface-card flex gap-5 p-7">
      <span className="bg-secondary text-primary grid size-12 shrink-0 place-items-center rounded-full">
        <Icon className="size-5" strokeWidth={1.5} aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="eyebrow">{label}</p>
        <div className="mt-2 space-y-1 font-medium">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="border-input bg-background focus:ring-ring mt-2 h-12 w-full rounded-full border px-5 text-sm outline-none focus:ring-2"
      />
    </div>
  );
}
