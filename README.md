# OpenCode Watchdog website

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/hero-reduced.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/hero-light.svg">
    <img src="assets/hero/hero-motion.svg" alt="opencode-watchdog-website — animated project plate showing task &rarr; assign &rarr; run &rarr; report. Motion depicts this project's real state transition." width="100%">
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/computational-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/computational-light.svg">
    <img src="assets/hero/computational-motion.svg" alt="State machine: task &rarr; assign &rarr; run &rarr; report." width="100%">
  </picture>
</p>

Public site for [OpenCode Watchdog](https://github.com/M4G3LL4N0/opencode-watchdog), a local circuit breaker for runaway OpenCode sessions.

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

The page describes version 0.1.0. It does not embed the watchdog runtime.
