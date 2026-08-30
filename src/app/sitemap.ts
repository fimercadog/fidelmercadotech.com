import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { SOLUTIONS } from "@/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/soluciones`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/precios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terminos`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${base}/soluciones/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...solutionRoutes];
}
