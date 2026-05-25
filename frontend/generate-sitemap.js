import puppeteer from "puppeteer";
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const BASE_URL = "https://pmyogesh.com";

const visited = new Set();

async function crawl(page, url) {
  if (visited.has(url)) return;

  visited.add(url);

  console.log("Crawling:", url);

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  // Wait for React rendering
  await page.waitForSelector("a", {
    timeout: 5000,
  }).catch(() => {});

  const links = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll("a")
    )
      .map((a) => a.href)
      .filter((href) =>
        href.startsWith(
          "https://pmyogesh.com"
        )
      );
  });

  for (const link of links) {
    if (!visited.has(link)) {
      await crawl(page, link);
    }
  }
}

async function generateSitemap() {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await crawl(page, BASE_URL);

  const sitemap = new SitemapStream({
    hostname: BASE_URL,
  });

  visited.forEach((url) => {
    sitemap.write({
      url: url.replace(BASE_URL, ""),
      changefreq: "weekly",
      priority: url === BASE_URL ? 1.0 : 0.8,
      lastmod: new Date(),
    });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap);

  const formatted = xml
    .toString()
    .replace(/></g, ">\n<");

  fs.writeFileSync(
    "./frontend/public/sitemap.xml",
    formatted
  );

  console.log(
    "✅ Sitemap generated successfully"
  );

  console.log(
    "Total URLs:",
    visited.size
  );

  await browser.close();
}

generateSitemap();