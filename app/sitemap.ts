import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://basicallyincome.org";
  const routes = ["", "/basic-income", "/campaigns", "/candidates", "/strategy", "/evidence", "/blog", "/calendar", "/results", "/take-action", "/fund", "/fund/strategic-backing", "/fund/brief", "/about"];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "/campaigns" || route === "/results" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/campaigns" || route === "/take-action" ? .9 : .7 }));
}
