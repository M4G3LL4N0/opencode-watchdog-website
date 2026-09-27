import type { Metadata } from "next";
import { Frame } from "@/components/Frame";

export const metadata: Metadata = {
  title: "Commands",
  description: "OpenCode Watchdog CLI commands from version 0.1.0.",
};

const commands = [
  ["ocw start [--mode observe|protect|recover]", "Start or adopt the shared OpenCode server and watch sessions."],
  ["ocw desktop", "Same as start, then print Desktop connection instructions."],
  ["ocw cli", "Point your terminal CLI at the running shared server."],
  ["ocw run [args...]", "Pass through to opencode run on that server."],
  ["ocw watch", "Watch a server that is already running. Does not manage it."],
  ["ocw stop", "Stop a server this watchdog started. Never an external server."],
  ["ocw status", "Watchdog, server, and per-session circuit state."],
  ["ocw doctor", "Capability probes and health."],
  ["ocw incidents", "Show the incident log. Add --json for a machine readout."],
  ["ocw incidents mark <id> false-positive", "Tag an incident as a false positive."],
  ["ocw stats", "Session and incident summary."],
  ["ocw sessions", "Server sessions with circuit state."],
  ["ocw mode [observe|protect|recover]", "Show or set the action mode."],
  ["ocw session reset <sessionID>", "Reset breaker, recovery, and detector state for one session."],
  ["ocw config", "Show the effective configuration."],
  ["ocw config set <key> <value>", "Persist one configuration value."],
  ["ocw simulate [fixture...]", "Run fixture scenarios through the detector. Optional --mode and --pace."],
  ["ocw install [--prefix DIR]", "Symlink the launcher into a bin directory. Default ~/.local/bin."],
];

export default function CommandsPage() {
  return (
    <Frame>
      <h1 className="pt-6 text-5xl tracking-tight">Commands</h1>
      <p className="mt-4 max-w-2xl text-[var(--mute)]">
        Version 0.1.0. Run <code>ocw --help</code> on your machine if this list and the binary disagree — the binary wins.
      </p>
      <ul className="mt-10 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
        {commands.map(([cmd, body]) => (
          <li key={cmd} className="grid gap-2 py-4 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-8">
            <code className="font-mono text-sm">{cmd}</code>
            <p className="text-[var(--mute)]">{body}</p>
          </li>
        ))}
      </ul>
    </Frame>
  );
}
