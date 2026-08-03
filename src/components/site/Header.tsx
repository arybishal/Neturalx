import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Mountain } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, BRAND } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-background/90 border-b backdrop-blur-xl"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-x grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Link
          to="/"
          className={cn(
            "flex min-w-0 items-center gap-3 transition-colors",
            solid ? "text-foreground" : "text-snow",
          )}
          aria-label={`${BRAND.name} home`}
        >
          <span
            className={cn(
              "grid size-10 shrink-0 place-items-center rounded-full border",
              solid ? "border-border" : "border-snow/40",
            )}
          >
            <Mountain className="size-5" strokeWidth={1.5} aria-hidden />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="font-display block truncate text-base font-semibold tracking-tight">
              Ruta Vanta
            </span>
            <span className="block text-[0.62rem] tracking-[0.28em] uppercase opacity-70">
              NaturelaX
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative text-sm font-medium transition-opacity hover:opacity-100",
                solid ? "text-foreground/75" : "text-snow/85",
              )}
              activeProps={{ className: "opacity-100 text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/treks" className="btn-base btn-primary !px-6 !py-3 text-sm">
            Plan Your Trek
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-full border lg:hidden",
            solid ? "border-border text-foreground" : "border-snow/40 text-snow",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="bg-background border-t lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-foreground/80 border-b py-4 text-base font-medium last:border-b-0"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/treks" className="btn-base btn-primary mt-5">
              Plan Your Trek
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
