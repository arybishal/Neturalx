import { Link } from "@tanstack/react-router";
import { Mountain, Instagram, Facebook, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { BRAND, CONTACT, NAV, SERVICES, TREKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="dark-section">
      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="border-snow/35 grid size-10 shrink-0 place-items-center rounded-full border">
                <Mountain className="size-5" strokeWidth={1.5} aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="font-display block text-base font-semibold">Ruta Vanta</span>
                <span className="block text-[0.62rem] tracking-[0.28em] uppercase opacity-70">
                  NaturelaX
                </span>
              </span>
            </div>
            <p className="text-snow/70 mt-6 text-sm leading-relaxed">
              {BRAND.philosophy} Carbon-neutral trekking and regenerative adventure travel from
              Kathmandu to the high Himalaya.
            </p>

            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <label
                htmlFor="newsletter"
                className="text-snow/60 block text-xs tracking-[0.2em] uppercase"
              >
                Field notes newsletter
              </label>
              <div className="border-snow/25 mt-3 flex items-center gap-2 rounded-full border p-1.5">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="text-snow placeholder:text-snow/45 min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none"
                />
                <button type="submit" className="btn-base btn-primary !px-5 !py-2.5 text-xs">
                  Join
                </button>
              </div>
            </form>

            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="border-snow/25 hover:bg-snow/10 grid size-10 place-items-center rounded-full border transition-colors"
                >
                  <Icon className="size-4" strokeWidth={1.5} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explore">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {SERVICES.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </FooterCol>

          <FooterCol title="Destinations">
            {TREKS.map((t) => (
              <li key={t.slug}>
                <Link to="/treks" className="hover:text-gold transition-colors">
                  {t.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              {CONTACT.phones.map((p) => (
                <span key={p} className="mt-2 flex items-center gap-2">
                  <Phone className="size-3.5 shrink-0" aria-hidden />
                  {p}
                </span>
              ))}
              {CONTACT.emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="hover:text-gold mt-2 flex items-center gap-2 break-all transition-colors"
                >
                  <Mail className="size-3.5 shrink-0" aria-hidden />
                  {e}
                </a>
              ))}
            </li>
          </FooterCol>
        </div>

        <div className="border-snow/15 text-snow/50 mt-16 flex flex-col gap-3 border-t pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Kathmandu, Nepal.
          </p>
          <p>Certified carbon-neutral operations · Registered with Nepal Tourism Board</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-snow/55 text-xs tracking-[0.2em] uppercase">{title}</h3>
      <ul className="text-snow/80 mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}
