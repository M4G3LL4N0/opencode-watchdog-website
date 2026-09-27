import type { MetadataRoute } from "next";

const site = "https://opencode-watchdog.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site}/commands`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
