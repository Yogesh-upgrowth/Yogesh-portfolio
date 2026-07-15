import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";
import path from "path";
import { prerender } from "./prerender";
import { genGitDates } from "./gen-git-dates";
import { genSitemap } from "./gen-sitemap";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("generating git-derived page dates...");
  genGitDates();

  console.log("building client...");
  await viteBuild();

  console.log("building SSR bundle for prerendering...");
  await viteBuild({
    build: {
      ssr: path.resolve("client/src/entry-server.tsx"),
      outDir: path.resolve("dist/server"),
      emptyOutDir: true,
      rollupOptions: {
        output: { entryFileNames: "entry-server.js", format: "esm" },
      },
    },
  });

  console.log("prerendering routes to static HTML...");
  await prerender();

  console.log("generating sitemap.xml...");
  genSitemap();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
