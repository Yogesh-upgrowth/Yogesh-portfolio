import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // ── SEO endpoints ─────────────────────────────────────────
  // sitemap.xml and robots.txt are generated at build time as static files
  // (script/gen-sitemap.ts + client/public/robots.txt) and served from
  // dist/public, so there are no dynamic handlers here.

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
