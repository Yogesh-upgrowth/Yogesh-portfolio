import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  SITE_URL,
  STATIC_ROUTES,
  WORK_STORY_SLUGS,
  BLOG_SLUGS,
  CASE_STUDY_SLUGS,
} from "../shared/seo-data";

function buildSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const urls: { loc: string; priority: number; changefreq: string; lastmod: string }[] = [];

  for (const r of STATIC_ROUTES) {
    urls.push({
      loc: `${SITE_URL}${r.path}`,
      priority: r.priority,
      changefreq: r.changefreq,
      lastmod: today,
    });
  }
  for (const slug of WORK_STORY_SLUGS) {
    urls.push({
      loc: `${SITE_URL}/work/${slug}`,
      priority: 0.85,
      changefreq: "monthly",
      lastmod: today,
    });
  }
  for (const slug of CASE_STUDY_SLUGS) {
    urls.push({
      loc: `${SITE_URL}/case-study/${slug}`,
      priority: 0.8,
      changefreq: "monthly",
      lastmod: today,
    });
  }
  for (const slug of BLOG_SLUGS) {
    urls.push({
      loc: `${SITE_URL}/blog/${slug}`,
      priority: 0.7,
      changefreq: "monthly",
      lastmod: today,
    });
  }

  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(2)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}

function buildRobots(): string {
  return `# robots.txt for ${SITE_URL}
User-agent: *
Allow: /
Disallow: /api/

# AI crawlers — explicitly allowed for AI search discoverability
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // ── SEO endpoints ─────────────────────────────────────────
  app.get("/sitemap.xml", (_req: Request, res: Response) => {
    res.type("application/xml");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(buildSitemap());
  });

  app.get("/robots.txt", (_req: Request, res: Response) => {
    res.type("text/plain");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(buildRobots());
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
