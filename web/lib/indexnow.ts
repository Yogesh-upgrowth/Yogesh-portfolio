/**
 * IndexNow — 03-TECHNICAL-SPEC §5.
 *
 * Submits newly indexable URLs to the IndexNow endpoint, which covers Bing,
 * Yandex and others in one call. Google does not participate; GSC submission is
 * handled separately in publish.ts.
 *
 * The key file must be served at /<key>.txt containing the key, or the endpoint
 * rejects the batch. Generating the key is a local operation; publishing it is
 * not, which is why keyFilePath() is exported and checked before any submit.
 */
import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { randomBytes } from "node:crypto";

const ENDPOINT = "https://api.indexnow.org/IndexNow";
const PUBLIC_DIR = join(process.cwd(), "public");

export function keyFilePath(key: string): string {
  return join(PUBLIC_DIR, `${key}.txt`);
}

/** Creates the key file if missing. Returns the key. */
export function ensureKeyFile(existing?: string): string {
  const key = existing ?? randomBytes(16).toString("hex");
  const p = keyFilePath(key);
  if (!existsSync(p)) writeFileSync(p, key, "utf8");
  return key;
}

export interface SubmitResult {
  ok: boolean;
  status: number | null;
  submitted: number;
  reason?: string;
}

/**
 * Submit up to 10,000 URLs. Returns rather than throws on a network failure:
 * a publish run should record that the ping failed and carry on, since the
 * pages are live either way and the ping can be retried.
 */
export async function submitUrls(
  { host, key, urls }: { host: string; key: string; urls: string[] },
): Promise<SubmitResult> {
  if (!urls.length) return { ok: true, status: null, submitted: 0 };
  if (!existsSync(keyFilePath(key))) {
    return {
      ok: false, status: null, submitted: 0,
      reason: `key file ${key}.txt is not in public/ — the endpoint will reject the batch`,
    };
  }
  const body = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls.slice(0, 10_000).map((u) => (u.startsWith("http") ? u : `https://${host}${u}`)),
  };
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    return {
      ok: res.ok, status: res.status, submitted: body.urlList.length,
      ...(res.ok ? {} : { reason: `endpoint returned ${res.status}` }),
    };
  } catch (err) {
    return {
      ok: false, status: null, submitted: 0,
      reason: `network failure: ${(err as Error).message}. ` +
        "This environment's egress is restricted (AUDIT.md §4); run publish locally.",
    };
  }
}
