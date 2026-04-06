import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#1A1A1A] py-32 px-6 md:px-12">
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="font-[family-name:var(--font-label)] text-[#b8965a] text-sm uppercase tracking-[0.25em]">
          NUESTROS SERVICIOS
        </h2>
      </div>

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
