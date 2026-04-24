import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)


  // Test route
  app.get("/api/test", (req, res) => {
    res.json({ message: "API working 🚀" });
  });

  // Example users route
  app.get("/api/users", (req, res) => {
    res.json([
      { id: 1, name: "Yogesh" },
      { id: 2, name: "Test User" }
    ]);
  });

  return httpServer;
}
