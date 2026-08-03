import { Linkedin } from "lucide-react";

type Member = { name: string; role: string; image: string; bio: string };

export function TeamCard({ member }: { member: Member }) {
  return (
    <article className="surface-card zoom-slow overflow-hidden">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={`Portrait of ${member.name}, ${member.role}`}
          loading="lazy"
          width={1024}
          height={1280}
          className="size-full object-cover"
        />
      </div>
      <div className="p-7">
        <h3 className="text-xl">{member.name}</h3>
        <p className="eyebrow mt-2">{member.role}</p>
        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{member.bio}</p>
        <a
          href="#"
          className="btn-base border-border text-foreground hover:bg-secondary mt-6 border !px-5 !py-2.5 text-xs"
          aria-label={`${member.name} on LinkedIn`}
        >
          <Linkedin className="size-4" aria-hidden /> Connect
        </a>
      </div>
    </article>
  );
}
