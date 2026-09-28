/**
 * pnpm price:check --app <slug> --region IN --os android — 03 §4.
 *
 * The only source of device_check facts. A price read off a marketing page is
 * not a price: stores localise, run intro offers, and show different tiers by
 * account state. So this records what a human saw on a real device, with the
 * conditions that make it reproducible.
 */
import { appendFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createInterface } from "node:readline/promises";
import { runScript } from "../lib/net";

const DIR = join(process.cwd(), "..", "seo", "data", "pricing");

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function main(): Promise<void> {
  const app = arg("app");
  const region = arg("region") ?? "IN";
  const os = arg("os") ?? "android";
  const category = arg("category") ?? "uncategorised";
  if (!app) throw new Error("price:check needs --app <slug>");

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  console.log(`\nRecording a device-checked price for ${app} (${region}, ${os}).`);
  console.log("Read these off the device, not off a marketing page.\n");

  const accountState = await rl.question("Account state (new / trialled / lapsed / subscribed): ");
  const tier = await rl.question("Tier name as shown: ");
  const price = await rl.question("Price as shown, digits only: ");
  const currency = await rl.question("Currency symbol or code as shown: ");
  const period = await rl.question("Period (month / year / week / lifetime): ");
  const trial = await rl.question("Trial shown, or blank: ");
  const intro = await rl.question("Intro offer shown, or blank: ");
  const notes = await rl.question("Anything else worth recording: ");
  rl.close();

  mkdirSync(DIR, { recursive: true });
  const csv = join(DIR, `${category}.csv`);
  if (!existsSync(csv)) {
    writeFileSync(csv,
      "checked_on,app,region,os,account_state,tier,price,currency,period,trial,intro,notes\n",
      "utf8");
  }
  const today = new Date().toISOString().slice(0, 10);
  const row = [today, app, region, os, accountState, tier, price, currency, period,
               trial, intro, notes]
    .map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",");
  appendFileSync(csv, row + "\n", "utf8");

  console.log(`\n[price:check] appended to ${csv}`);
  console.log("[price:check] This is now the only legitimate source for a price fact on " +
    `${app}. research.ts may draft the price table from it and from nothing else.`);
}

runScript("price:check", main);
