import type { ReactNode } from "react";
import Link from "next/link";
import { GITHUB } from "@/lib/site";

export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-full max-w-5xl flex-col px-5 sm:px-8">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-[var(--paper)]"
      >
        Skip to content
      </a>
      <header className="flex flex-wrap items-baseline justify-between gap-4 py-6">
        <Link href="/" className="font-mono text-xs tracking-[0.18em] uppercase no-underline">
          OpenCode Watchdog
        </Link>
        <nav aria-label="Primary" className="flex gap-5 font-mono text-xs tracking-[0.12em] uppercase">
          <Link href="/commands">Commands</Link>
          <a href={GITHUB}>GitHub</a>
        </nav>
      </header>
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="mt-16 border-t border-[var(--rule)] py-8 text-sm text-[var(--mute)]">
        <p>
          Built by Noaerth. Independent of the OpenCode team — not affiliated, endorsed, or maintained by them.
        </p>
        <p className="mt-2">
          <a href={GITHUB}>Source</a>
          {" · "}
          <a href="https://noaerth.vercel.app">Noaerth</a>
        </p>
      </footer>
    </div>
  );
}
