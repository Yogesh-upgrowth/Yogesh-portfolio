import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { SITE_URL } from "../shared/seo-data";

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
  // sitemap.xml is generated at build time as a static file (script/gen-sitemap.ts)
  // and served from dist/public, so there is no dynamic handler here.

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
