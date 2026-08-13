import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://basicallyincome.org";
  const routes = ["", "/basic-income", "/candidates", "/bill-tracker", "/evidence", "/blog", "/calendar", "/outreach", "/contact", "/take-action", "/fund", "/fund/strategic-backing", "/fund/brief", "/about"];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "/candidates" || route === "/bill-tracker" || route === "/outreach" || route === "/blog" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/candidates" || route === "/take-action" || route === "/bill-tracker" ? .9 : route === "/outreach" || route === "/evidence" ? .8 : .7 }));
}
