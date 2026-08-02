import type { MetadataRoute } from "next";
import { articles } from "@/components/site-data";

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
    "/consultation",
    "/actualites",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
  ];

  return [
    ...pages.map((path) => ({
      url: path ? `${siteUrl}${path}/` : `${siteUrl}/`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === ""
          ? 1
          : ["/cabinet", "/expertises", "/contact"].includes(path)
            ? 0.9
            : 0.7,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/actualites/${article.slug}/`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
