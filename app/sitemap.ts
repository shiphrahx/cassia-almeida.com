import type { MetadataRoute } from "next";

const SITE_URL = "https://cassia-almeida.com";

const routes = [
  "",
  "/about",
  "/writing",
  "/projects",
  "/tools-templates",
  "/reading",
  "/good",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/writing" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
