import type { ReactNode } from "react";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Newsreader({
  variable: "--font-sans-face",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const site = "https://opencode-watchdog.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "OpenCode Watchdog — a local circuit breaker",
    template: "%s — OpenCode Watchdog",
  },
  description:
    "A local circuit breaker for runaway OpenCode sessions. It detects repetition on your machine and can abort the affected session. It does not call a model.",
  applicationName: "OpenCode Watchdog",
  openGraph: {
    title: "OpenCode Watchdog — a local circuit breaker",
    description:
      "Watch an OpenCode server for runaway repetition. Observe by default. Protect aborts the affected session.",
    url: site,
    siteName: "OpenCode Watchdog",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCode Watchdog",
    description: "A local circuit breaker for runaway OpenCode sessions.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
