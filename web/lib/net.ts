/**
 * Network guard for the pipeline scripts.
 *
 * This environment's egress is refused at the proxy for every host but package
 * registries, GitHub and the Anthropic API (AUDIT.md §4). A script that hits
 * that wall should say so in one line and exit, rather than surface a TLS or
 * ECONNREFUSED trace that reads like a bug in the script.
 */
export class EgressBlocked extends Error {
  constructor(host: string, cause: string) {
    super(
      `Cannot reach ${host}: ${cause}\n` +
      `This container's network policy blocks it. Either widen Network access on ` +
      `the environment, or run this script locally. See seo/AUDIT.md §4.`,
    );
    this.name = "EgressBlocked";
  }
}

export class MissingSecret extends Error {
  constructor(names: string[]) {
    super(
      `Missing ${names.join(", ")} in the environment.\n` +
      `Add them to web/.env.local (never committed) — 03-TECHNICAL-SPEC §1.`,
    );
    this.name = "MissingSecret";
  }
}

/**
 * Returns the named variables, typed so destructuring yields `string` rather
 * than `string | undefined`. A plain Record<string, string> loses that under
 * noUncheckedIndexedAccess, which pushes a non-null assertion onto every call
 * site for a value this function has already guaranteed.
 */
export function requireEnv<const N extends readonly string[]>(
  ...names: N
): { [K in N[number]]: string } {
  const missing = names.filter((n) => !process.env[n]);
  if (missing.length) throw new MissingSecret(missing);
  return Object.fromEntries(names.map((n) => [n, process.env[n]!])) as {
    [K in N[number]]: string;
  };
}

/**
 * fetch that turns a blocked host into EgressBlocked.
 *
 * Two shapes to catch. A refused CONNECT throws, but the agent proxy answers a
 * disallowed host with a real 403 response instead — so the fetch resolves and
 * the script would otherwise report whatever generic error its own status check
 * raises, burying the actual cause. The 403 body names the host and the remedy,
 * so it is passed through verbatim.
 */
export async function guardedFetch(url: string, init?: RequestInit): Promise<Response> {
  try {
    const res = await fetch(url, init);
    if (res.status === 403) {
      const body = await res.clone().text().catch(() => "");
      if (/not in allowlist|egress|proxy/i.test(body)) {
        throw new EgressBlocked(new URL(url).host, body.trim());
      }
    }
    return res;
  } catch (err) {
    if (err instanceof EgressBlocked) throw err;
    const msg = (err as Error).message ?? String(err);
    if (/fetch failed|ECONNREFUSED|ENOTFOUND|certificate|tunnel|403/i.test(msg)) {
      throw new EgressBlocked(new URL(url).host, msg);
    }
    throw err;
  }
}

/** Runs a script body, printing pipeline errors as one clear line. */
export async function runScript(name: string, body: () => Promise<void> | void): Promise<void> {
  try {
    await body();
  } catch (err) {
    if (err instanceof EgressBlocked || err instanceof MissingSecret) {
      console.error(`[${name}] ${err.message}`);
      process.exit(2);
    }
    throw err;
  }
}
