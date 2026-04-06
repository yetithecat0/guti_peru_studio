import { CollaborationType } from "@/lib/constants";

export function CollaborationCard({ title, description }: CollaborationType) {
  return (
    <article className="bg-[#2a2a2a] border border-[#b8965a]/20 p-12 text-center hover:bg-[#353535] transition-colors duration-300">
      {/* Título */}
      <h3 className="font-[family-name:var(--font-label)] text-white uppercase text-xs tracking-[0.2em] mb-6">
        {title}
      </h3>

      {/* Descripción */}
      <p className="font-[family-name:var(--font-body)] text-[#d1c5b5] text-sm mb-8">
        {description}
      </p>

      {/* Filamento dorado centralizado */}
      <div className="h-px w-8 bg-[#b8965a] mx-auto" />
    </article>
  );
}
