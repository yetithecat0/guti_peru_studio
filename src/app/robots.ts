import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Bloquear rastreo de rutas internas del servidor
    },
    sitemap: "https://gutiperu.com/sitemap.xml",
  };
}
