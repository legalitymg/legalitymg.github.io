import type { MetadataRoute } from "next";
import { accountingServicePages } from "@/components/accounting-service-data";
import { articles, practiceAreas } from "@/components/site-data";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://legality.mg"
).replace(/\/$/, "");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/cabinet",
    "/expertises",
    "/comptabilite",
    "/consultation",
    "/actualites",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
  ];

  return [
    ...pages.map((path) => ({
      url: path ? `${siteUrl}${path}/` : `${siteUrl}/`,
      lastModified: new Date(path === "/comptabilite" ? "2026-09-28" : "2026-08-01"),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === ""
          ? 1
          : ["/cabinet", "/expertises", "/comptabilite", "/contact"].includes(path)
            ? 0.9
            : 0.7,
    })),
    ...practiceAreas.map((area) => ({
      url: `${siteUrl}/expertises/${area.slug}/`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...accountingServicePages.map((page) => ({
      url: `${siteUrl}/comptabilite/${page.slug}/`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/actualites/${article.slug}/`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
