import type { MetadataRoute } from "next";
import { SITE, FUTURE_PAGES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const futureRoutes = FUTURE_PAGES.map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE.url,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${SITE.url}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...futureRoutes,
  ];
}
