import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://basicallyincome.org";
  const routes = ["", "/basic-income", "/campaigns", "/candidates", "/bill-tracker", "/strategy", "/evidence", "/blog", "/calendar", "/contact", "/results", "/take-action", "/fund", "/fund/strategic-backing", "/fund/brief", "/about"];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "/campaigns" || route === "/results" || route === "/bill-tracker" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/campaigns" || route === "/take-action" || route === "/bill-tracker" ? .9 : .7 }));
}
