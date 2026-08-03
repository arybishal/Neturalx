import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "dark" && "text-snow",
        className,
      )}
    >
      {eyebrow && <p className={cn("eyebrow", tone === "dark" && "text-sand")}>{eyebrow}</p>}
      <h2 className="mt-4 text-3xl sm:text-5xl">{title}</h2>
      {intro && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed",
            tone === "dark" ? "text-snow/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
