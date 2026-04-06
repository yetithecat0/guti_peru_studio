import Image from "next/image";
import Link from "next/link";
import { PHOTOGRAPHER_NAME } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con prioridad máxima (LCP) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/arturo-GPS-head.png"
          alt={`${PHOTOGRAPHER_NAME}, fotógrafo de Guti Perú Studio, en sesión profesional con iluminación dramática`}
          fill
          priority
          className="object-cover brightness-[40%] grayscale-[20%]"
          sizes="100vw"
        />
        {/* Overlay oscuro adicional */}
        <div className="absolute inset-0 bg-[#1A1A1A]/55" />
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* Eyebrow label */}
        <span className="font-[family-name:var(--font-label)] text-[#b8965a] text-xs uppercase tracking-[0.2em] mb-6 block">
          HOME STUDIO · JESÚS MARÍA, LIMA
        </span>

        {/* Titular principal */}
        <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-[72px] leading-[1.1] text-white mb-8">
          Capturamos lo que las palabras no pueden decir
        </h1>

        {/* Subtítulo */}
        <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Fotografía profesional, producción audiovisual y espacio colaborativo
          diseñado para materializar tu visión artística.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="#contacto"
            id="hero-cta-primary"
            className="w-full sm:w-auto bg-[#b8965a] text-[#271900] px-10 py-4 rounded-full font-[family-name:var(--font-label)] text-xs uppercase tracking-widest hover:scale-105 transition-transform duration-300 active:scale-95 text-center"
          >
            Agendar mi sesión
          </Link>
          <Link
            href="#portafolio"
            id="hero-cta-secondary"
            className="w-full sm:w-auto border border-[#b8965a]/50 text-[#e7c181] px-10 py-4 rounded-full font-[family-name:var(--font-label)] text-xs uppercase tracking-widest hover:bg-[#b8965a]/10 transition-colors duration-300 text-center"
          >
            Ver portafolio
          </Link>
        </div>
      </div>
    </section>
  );
}
