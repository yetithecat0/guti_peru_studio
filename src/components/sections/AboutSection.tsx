import Image from "next/image";
import { Instagram } from "lucide-react";
import { PHOTOGRAPHER_NAME, PHOTOGRAPHER_INSTAGRAM } from "@/lib/constants";

// Tags de equipamiento del fotógrafo
const GEAR_BRANDS = ["Nikon", "DJI", "Godox", "Yongnuo"] as const;
const STUDIO_PARTNERS = ["Fotex", "Inka Photo"] as const;

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-[#F5F0E8] py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">

        {/* Imagen del fotógrafo con decoración editorial de esquinas */}
        <div className="w-full md:w-1/2 relative">
          {/* Esquina superior izquierda — accento dorado */}
          <div className="absolute -top-8 -left-8 w-32 h-32 border-l border-t border-[#b8965a]/40 pointer-events-none" />

          <Image
            src="/images/perfil-web.png"
            alt={`${PHOTOGRAPHER_NAME}, fotógrafo y fundador de Guti Perú Studio`}
            width={600}
            height={800}
            className="w-full aspect-[3/4] object-cover grayscale rounded-sm shadow-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Esquina inferior derecha */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r border-b border-[#b8965a]/40 pointer-events-none" />
        </div>

        {/* Texto biográfico */}
        <div className="w-full md:w-1/2">
          {/* Eyebrow label */}
          <span className="font-[family-name:var(--font-label)] text-[#131313]/40 text-xs uppercase tracking-[0.3em] mb-4 block">
            EL FOTÓGRAFO
          </span>

          {/* Nombre */}
          <h2 className="font-[family-name:var(--font-headline)] text-5xl md:text-6xl text-[#131313] mb-6">
            {PHOTOGRAPHER_NAME}
          </h2>

          {/* Filamento dorado */}
          <div className="w-24 h-px bg-[#b8965a] mb-8" />

          {/* Biografía */}
          <p className="font-[family-name:var(--font-body)] text-[#131313]/80 text-lg leading-relaxed mb-8">
            Mi viaje comenzó en la quietud de la pandemia, donde encontré en el
            lente la forma más honesta de conectar con el mundo. Con formación
            técnica rigurosa y una visión autodidacta, he transformado mi pasión
            en Guti Perú Studio, un espacio dedicado a la narrativa visual
            impecable.
          </p>

          {/* Instagram Personal */}
          <a
            href={PHOTOGRAPHER_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#131313] hover:text-[#b8965a] transition-all duration-300 mb-10 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#b8965a]/30 flex items-center justify-center group-hover:border-[#b8965a] transition-colors">
              <Instagram size={18} className="text-[#b8965a]" />
            </div>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-widest font-bold">
              @arturocguti18
            </span>
          </a>

          {/* Tags de equipamiento — fondo oscuro */}
          <div className="flex flex-wrap gap-3 mb-4">
            {GEAR_BRANDS.map((brand) => (
              <span
                key={brand}
                className="bg-[#131313] text-[#e7c181] text-[10px] font-[family-name:var(--font-label)] px-4 py-1.5 uppercase tracking-widest"
              >
                {brand}
              </span>
            ))}
          </div>

          {/* Tags de socios — borde dorado */}
          <div className="flex flex-wrap gap-3">
            {STUDIO_PARTNERS.map((partner) => (
              <span
                key={partner}
                className="border border-[#b8965a] text-[#b8965a] text-[10px] font-[family-name:var(--font-label)] px-4 py-1.5 uppercase tracking-widest"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
