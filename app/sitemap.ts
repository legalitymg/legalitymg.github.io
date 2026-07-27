import type { MetadataRoute } from "next";
import { articles } from "@/components/site-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://cabinet-avocate.major-bell-4313.chatgpt.site";

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
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/actualites/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
