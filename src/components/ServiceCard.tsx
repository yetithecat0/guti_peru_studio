import { Service } from "@/lib/constants";

// Tarjeta de servicio con efecto hover de línea dorada animada
export function ServiceCard({ title, description }: Service) {
  return (
    <article className="bg-[#2a2a2a] p-10 rounded-xl border border-[#b8965a]/10 hover:border-[#b8965a]/40 transition-all duration-500 group">
      {/* Título */}
      <h3 className="font-[family-name:var(--font-headline)] text-2xl text-white mb-4">
        {title}
      </h3>

      {/* Descripción */}
      <p className="font-[family-name:var(--font-body)] text-[#d1c5b5] text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Línea animada — se expande en hover del contenedor padre */}
      <div className="w-0 group-hover:w-full h-px bg-[#b8965a] transition-all duration-700" />
    </article>
  );
}
