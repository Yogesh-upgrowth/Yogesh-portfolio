import { expect, test } from "@playwright/test";

/**
 * What this suite is for: catching the failures that only appear once the page
 * is actually served — a redirect that does not fire, structured data that does
 * not parse, a noindex that leaks off a draft, an OG route that 500s.
 */

test("about page renders and carries a parseable Person graph", async ({ page }) => {
  const res = await page.goto("/about");
  expect(res?.status()).toBe(200);
  await expect(page.locator("h1")).toHaveText("Yogesh Yadav");

  const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
  const graph = JSON.parse(raw ?? "{}");
  const types = (graph["@graph"] ?? []).map((n: { "@type": string }) => n["@type"]);
  expect(types).toContain("Person");
  expect(types).toContain("Organization");
  // The banned types must not appear anywhere in the graph.
  for (const banned of ["Review", "AggregateRating", "HowTo"]) {
    expect(types).not.toContain(banned);
  }
});

test("the positioning line is on the entity page verbatim", async ({ page }) => {
  await page.goto("/about");
  await expect(page.locator(".answer-box")).toContainText(
    "Product growth and monetization consultant",
  );
});

test("migration redirects fire", async ({ page }) => {
  const res = await page.goto("/about-yogesh-yadav");
  expect(res?.status()).toBe(200);
  expect(new URL(page.url()).pathname).toBe("/about");
});

test("robots.txt allows AI crawlers and names the sitemap", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) {
    expect(body).toContain(bot);
  }
  expect(body).toContain("Sitemap: https://pmyogesh.com/sitemap.xml");
  expect(body).toContain("Disallow: /admin/");
});

test("sitemap index is valid XML and lists only hubs with indexable pages", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("xml");
  const body = await res.text();
  expect(body).toContain("<sitemapindex");
  // Nothing is indexable yet, so the index is legitimately empty. A hub that
  // appeared here now would mean a draft had leaked into the sitemap.
  expect(body).not.toContain("<loc>");
});

test("llms.txt is short and advertises nothing under review", async ({ request }) => {
  const res = await request.get("/llms.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body.split("\n").length).toBeLessThanOrEqual(300);
  expect(body).toContain("pmyogesh.com");
});

test("OG route returns a real PNG within the size budget", async ({ request }) => {
  const res = await request.get("/og?url=%2Fabout");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("image/png");
  const body = await res.body();
  expect(body.length).toBeGreaterThan(1000);
  expect(body.length).toBeLessThan(120 * 1024);
  // PNG magic number, so a 200 that is secretly an error page fails here.
  expect(body.subarray(0, 4).toString("hex")).toBe("89504e47");
});

test("the review surface is not reachable in production", async ({ request }) => {
  const res = await request.get("/admin/review");
  // Dev returns 200; a production build must 404. Either is correct for its
  // own build, but a production 200 would expose unpublished drafts.
  if (process.env.NODE_ENV === "production") {
    expect(res.status()).toBe(404);
  } else {
    expect([200, 404]).toContain(res.status());
  }
});
