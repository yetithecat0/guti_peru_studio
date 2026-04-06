import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="bg-[#F5F0E8] py-32 px-6 md:px-12">
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="font-[family-name:var(--font-label)] text-[#131313] text-sm uppercase tracking-[0.2em] mb-4">
          LO QUE DICEN MIS CLIENTES
        </h2>
        <div className="w-16 h-0.5 bg-[#b8965a] mx-auto" />
      </div>

      {/* Grid de testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-7xl mx-auto">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
