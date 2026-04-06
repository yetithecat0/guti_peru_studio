import { MessageCircle } from "lucide-react";
import { COLLABORATION_TYPES, WHATSAPP_NUMBER } from "@/lib/constants";
import { CollaborationCard } from "@/components/CollaborationCard";

export function CollaborationSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20colaborar%20con%20Guti%20Per%C3%BA%20Studio.`;

  return (
    <section className="bg-[#1A1A1A] py-32 px-6 md:px-12">
      {/* Encabezado editorial */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="font-[family-name:var(--font-label)] text-[#b8965a] text-sm uppercase tracking-[0.2em] mb-4">
          COLABORA CONMIGO
        </h2>
        <p className="font-[family-name:var(--font-headline)] italic text-3xl md:text-4xl text-white/90">
          Creamos sinergia para elevar tu proyecto al siguiente nivel.
        </p>
      </div>

      {/* Grid de tipos de colaboración */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {COLLABORATION_TYPES.map((collab) => (
          <CollaborationCard key={collab.id} {...collab} />
        ))}
      </div>

      {/* CTA de WhatsApp */}
      <div className="flex justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-whatsapp"
          className="bg-[#25D366] text-white px-10 py-4 rounded-full font-[family-name:var(--font-label)] text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#25D366]/20 active:scale-95"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
}
