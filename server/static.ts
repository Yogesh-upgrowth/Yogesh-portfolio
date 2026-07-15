import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve real, hashed assets and files (JS/CSS/images/sitemap/robots/404.html).
  // index:false so "/" is handled by the route resolver below; redirect:false so
  // we never bounce "/foo" -> "/foo/" (keeps URLs trailing-slash-free).
  app.use(express.static(distPath, { index: false, redirect: false }));

  // Resolve every remaining GET/HEAD to its prerendered HTML, or a real 404.
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();

    const send404 = () => {
      const notFound = path.join(distPath, "404.html");
      if (fs.existsSync(notFound)) {
        return res.status(404).sendFile(notFound);
      }
      return res.status(404).type("text/plain").send("Not Found");
    };

    // A request for a missing static asset (has a file extension) is a hard 404,
    // never the HTML app shell.
    if (path.extname(req.path) !== "") return send404();

    const clean = req.path.replace(/^\/+/, "").replace(/\/+$/, "");
    const candidate =
      clean === ""
        ? path.join(distPath, "index.html")
        : path.join(distPath, clean, "index.html");

    if (fs.existsSync(candidate)) {
      return res.status(200).sendFile(candidate);
    }
    return send404();
  });
}
