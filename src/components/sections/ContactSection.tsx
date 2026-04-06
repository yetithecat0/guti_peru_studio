"use client";

import { useState, FormEvent } from "react";

// Tipos de sesión disponibles
const SESSION_TYPES = [
  "Book Profesional",
  "Retratos & Lifestyle",
  "Fotografía Comercial",
  "Boudoir & Arte",
  "Eventos & Moda",
  "Producción Audiovisual",
] as const;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sessionType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Maneja el submit del formulario mediante Formspree
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/maqlarbd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reseteamos el formulario después de un envío exitoso
        setFormData({
          name: "",
          email: "",
          sessionType: "",
          message: "",
        });
      } else {
        // Error del servidor Formspree
        alert("Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      // Error de red
      console.error("Error submitting form:", error);
      alert("Error de conexión. Revisa tu internet e intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="bg-[#1A1A1A] py-32 px-6 md:px-12">
      {/* Encabezado */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl text-white mb-6">
          ¿Listo para tu próxima sesión?
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[#d1c5b5] text-lg">
          Cuéntanos tu visión y la haremos realidad.
        </p>
      </div>

      {/* Formulario */}
      {isSuccess ? (
        <div className="max-w-[480px] mx-auto text-center py-16">
          <p className="font-[family-name:var(--font-headline)] text-3xl text-[#b8965a] mb-4">
            ¡Mensaje enviado!
          </p>
          <p className="font-[family-name:var(--font-body)] text-[#d1c5b5]">
            Te contactaremos pronto para coordinar tu sesión.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-[480px] mx-auto space-y-8"
          aria-label="Formulario de contacto"
        >
          {/* Campo: Nombre */}
          <div className="relative">
            <label htmlFor="contact-name" className="sr-only">
              Nombre completo
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full bg-transparent border-b border-[#b8965a]/20 text-white py-4 focus:outline-none focus:border-[#b8965a] transition-colors placeholder:text-white/20 font-[family-name:var(--font-body)] text-sm"
            />
          </div>

          {/* Campo: Email */}
          <div className="relative">
            <label htmlFor="contact-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full bg-transparent border-b border-[#b8965a]/20 text-white py-4 focus:outline-none focus:border-[#b8965a] transition-colors placeholder:text-white/20 font-[family-name:var(--font-body)] text-sm"
            />
          </div>

          {/* Campo: Tipo de sesión */}
          <div className="relative">
            <label htmlFor="contact-session" className="sr-only">
              Tipo de sesión
            </label>
            <select
              id="contact-session"
              value={formData.sessionType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  sessionType: e.target.value,
                }))
              }
              className="w-full bg-transparent border-b border-[#b8965a]/20 text-white/50 py-4 focus:outline-none focus:border-[#b8965a] transition-colors font-[family-name:var(--font-body)] text-sm appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#1A1A1A]">
                Tipo de sesión
              </option>
              {SESSION_TYPES.map((type) => (
                <option key={type} value={type} className="bg-[#1A1A1A]">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Campo: Mensaje */}
          <div className="relative">
            <label htmlFor="contact-message" className="sr-only">
              Describe tu proyecto
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full bg-transparent border-b border-[#b8965a]/20 text-white py-4 focus:outline-none focus:border-[#b8965a] transition-colors placeholder:text-white/20 font-[family-name:var(--font-body)] text-sm resize-none"
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            id="contact-submit"
            disabled={isSubmitting}
            className="w-full bg-[#b8965a] text-[#271900] py-5 rounded-full font-[family-name:var(--font-label)] text-xs uppercase tracking-widest hover:brightness-110 transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      )}
    </section>
  );
}
