# Gutiperuestudio - Reglas de Desarrollo

## Contexto del Proyecto
Landing page para estudio fotográfico profesional. Diseño moderno, minimalista y de alto rendimiento.

## Stack Tecnológico
- Framework: Next.js 15 (App Router).
- Lenguaje: TypeScript (estricto, sin 'any').
- Estilos: Tailwind CSS (Mobile-first).
- Componentes: Lucide React (para iconos), Framer Motion (para animaciones suaves).
- Optimización: Uso obligatorio de 'next/image' con prioridad en el Hero.

## Reglas de Arquitectura
1. Estructura de carpetas:
   - /src/app: Páginas y Layouts.
   - /src/components: Componentes atómicos (Button, Input, GalleryItem, Header, Footer).
   - /src/hooks: Hooks personalizados.
   - /src/lib: Utilidades y configuraciones.
2. Modularidad: Un archivo por componente. Exportación nombrada por defecto.
3. Código Limpio: Nombres de funciones descriptivos en inglés. Comentarios breves en español.

## Estilo de Diseño (Basado en /Brand)
- Mantener la paleta de colores definida en el Brand.
- Tipografía: Usar 'next/font/google' para optimizar el renderizado.
- Espaciado: Seguir las reglas de espacio definidas en el mockup de /Stitch.

## Comportamiento del Agente
- Prioriza siempre el rendimiento (Core Web Vitals).
- Si no estás seguro de un componente, propón primero la estructura antes de escribir todo el código.
- Asegúrate de que todas las imágenes en el mockup tengan un `alt` descriptivo para accesibilidad.