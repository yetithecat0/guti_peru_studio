import { Users, Camera, BadgeCheck } from "lucide-react";

// Propuesta de valor — tres pilares del estudio
const VALUE_PILLARS = [
  {
    id: "colaborativo",
    icon: Users,
    title: "Colaborativo",
    description:
      "Fomentamos el crecimiento mutuo entre artistas y creadores locales.",
  },
  {
    id: "profesional",
    icon: Camera,
    title: "Profesional",
    description:
      "Equipamiento de alta gama para resultados de nivel editorial internacional.",
  },
  {
    id: "accesible",
    icon: BadgeCheck,
    title: "Accesible",
    description:
      "Tarifas competitivas pensadas para potenciar el emprendimiento creativo.",
  },
] as const;

export function ValuePropSection() {
  return (
    <section className="bg-[#F5F0E8] py-24 px-6 md:px-12">
      {/* Encabezado editorial */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="font-[family-name:var(--font-label)] text-[#131313] text-sm uppercase tracking-[0.2em] mb-4">
          UN ESTUDIO. INFINITAS POSIBILIDADES.
        </h2>
        <p className="font-[family-name:var(--font-headline)] italic text-3xl md:text-4xl text-[#131313]/80 leading-snug">
          Más que un estudio — un espacio donde el talento emergente encuentra
          su primer escenario.
        </p>
      </div>

      {/* Tres pilares */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
        {VALUE_PILLARS.map(({ id, icon: Icon, title, description }) => (
          <div key={id} className="text-center">
            {/* Ícono */}
            <Icon
              size={36}
              className="text-[#b8965a] mx-auto mb-6"
              strokeWidth={1.25}
              aria-hidden="true"
            />
            {/* Título pilar */}
            <h3 className="font-[family-name:var(--font-label)] text-[#131313] uppercase text-xs tracking-widest mb-4">
              {title}
            </h3>
            {/* Filamento dorado — separador editorial */}
            <div className="w-12 h-px bg-[#b8965a]/30 mx-auto mb-6" />
            {/* Descripción */}
            <p className="font-[family-name:var(--font-body)] text-[#131313]/70 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
