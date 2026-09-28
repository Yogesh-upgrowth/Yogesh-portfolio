import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/analytics/Analytics";

export const metadata: Metadata = {
  title: "pmyogesh.com",
  description:
    "Product growth and monetization consulting for consumer and subscription apps — India-first, global.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics measurementId={process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
