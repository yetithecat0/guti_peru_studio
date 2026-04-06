import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "@/lib/constants";

export function TestimonialCard({
  quote,
  name,
  role,
  avatarSrc,
  avatarAlt,
}: Testimonial) {
  return (
    <article className="bg-white p-10 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
      {/* Estrellas de calificación */}
      <div
        className="flex gap-1 text-[#b8965a] mb-6"
        aria-label="Calificación 5 de 5 estrellas"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
        ))}
      </div>

      {/* Cita */}
      <blockquote>
        <p className="font-[family-name:var(--font-body)] text-[#131313]/70 italic mb-8 leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Autor */}
      <footer className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#b8965a]/10 shrink-0">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            width={48}
            height={48}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div>
          <h4 className="font-[family-name:var(--font-label)] text-xs uppercase tracking-widest text-[#131313]">
            {name}
          </h4>
          <p className="font-[family-name:var(--font-body)] text-[10px] text-[#131313]/50 uppercase mt-0.5">
            {role}
          </p>
        </div>
      </footer>
    </article>
  );
}
