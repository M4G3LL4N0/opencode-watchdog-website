import { Frame } from "@/components/Frame";
import { GITHUB } from "@/lib/site";

const catches = [
  "Repeated tokens",
  "Repeated sentences or narration",
  "The same tool called with no progress",
  "Activity that is not moving the session forward",
];

const modes = [
  {
    name: "Observe",
    state: "Default",
    body: "Log the incident. Leave the session running. Use this until the stream looks right.",
  },
  {
    name: "Protect",
    state: "Recommended",
    body: "Abort the affected session when the policy is sure. Files stay. Other sessions stay.",
  },
  {
    name: "Recover",
    state: "Experimental",
    body: "Abort, then send one bounded recovery prompt. Treat this as optional, not the default.",
  },
];

export default function HomePage() {
  return (
    <Frame>
      <section className="grid items-end gap-10 pb-16 pt-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-[var(--hazard)] uppercase">
            Local · deterministic · no model
          </p>
          <h1 className="mt-4 max-w-xl text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            The model is repeating. Stop that session.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--mute)]">
            OpenCode Watchdog sits on your OpenCode server and trips when a session falls into a loop.
            Detection does not call a model. Protect mode aborts the affected session and leaves your files alone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={GITHUB}
              className="bg-[var(--ink)] px-4 py-3 font-mono text-xs tracking-[0.14em] text-[var(--paper)] uppercase no-underline"
            >
              View the source
            </a>
            <a
              href="#install"
              className="border border-[var(--ink)] px-4 py-3 font-mono text-xs tracking-[0.14em] uppercase no-underline"
            >
              Install locally
            </a>
          </div>
        </div>
        <Breaker />
      </section>

      <section className="border-t border-[var(--rule)] py-14" aria-labelledby="catches">
        <h2 id="catches" className="text-3xl">
          What trips the breaker
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {catches.map((item) => (
            <li key={item} className="border border-[var(--rule)] bg-[var(--panel)] px-4 py-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-[var(--rule)] py-14" aria-labelledby="modes">
        <h2 id="modes" className="text-3xl">
          Three modes
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--mute)]">
          The default is observe. Switch only after you have watched a real stream.
        </p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {modes.map((mode) => (
            <li key={mode.name} className="border-t-2 border-[var(--ink)] pt-4">
              <p className="font-mono text-xs tracking-[0.14em] text-[var(--hazard)] uppercase">{mode.state}</p>
              <h3 className="mt-2 text-2xl">{mode.name}</h3>
              <p className="mt-2 text-[var(--mute)]">{mode.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-[var(--rule)] py-14" aria-labelledby="how">
        <h2 id="how" className="text-3xl">
          How a trip happens
        </h2>
        <ol className="mt-6 max-w-2xl space-y-3 font-mono text-sm leading-relaxed">
          <li>1. Desktop or CLI talks to your OpenCode server.</li>
          <li>2. Watchdog reads that server&apos;s event stream on the machine.</li>
          <li>3. Detectors score repetition. A single odd line is not enough.</li>
          <li>4. In protect mode, the affected session is aborted.</li>
          <li>5. The incident stays in a local log you can mark as a false positive.</li>
        </ol>
      </section>

      <section id="install" className="border-t border-[var(--rule)] py-14">
        <h2 className="text-3xl">Install</h2>
        <p className="mt-3 max-w-2xl text-[var(--mute)]">
          Node 22+. There is no hosted service. The watchdog only talks to the OpenCode server you point it at.
        </p>
        <pre className="mt-6 overflow-x-auto bg-[var(--ink)] p-5 font-mono text-sm leading-relaxed text-[var(--paper)]">
          <code>{`git clone ${GITHUB}.git
cd opencode-watchdog
pnpm install
pnpm run build
./bin/ocw.js start`}</code>
        </pre>
        <p className="mt-4 text-sm text-[var(--mute)]">
          <code>ocw start</code> adopts or starts the shared server and watches every session.
          The command list is on <a href="/commands">Commands</a>.
        </p>
      </section>

      <section className="border-t border-[var(--rule)] py-14" aria-labelledby="limits">
        <h2 id="limits" className="text-3xl">
          What it will not do
        </h2>
        <ul className="mt-6 max-w-2xl space-y-2 text-[var(--mute)]">
          <li>It does not send your session to another service for detection.</li>
          <li>It does not reset git or roll back files.</li>
          <li>It does not kill the Desktop app or sessions it is not watching.</li>
          <li>It does not log server passwords. Those stay in your environment, if you set them.</li>
        </ul>
      </section>
    </Frame>
  );
}

function Breaker() {
  const token = "the the the the the the";
  return (
    <figure className="border border-[var(--ink)] bg-[#241f1a] p-4 text-[var(--paper)]" aria-label="Session tripping a circuit">
      <figcaption className="flex justify-between font-mono text-[10px] tracking-[0.16em] uppercase text-[#cbbfa8]">
        <span>session</span>
        <span>protect</span>
      </figcaption>
      <div className="relative mt-4 font-mono text-sm break-words text-[#e7d7bc]">
        {token}
        <div className="trip-bar absolute inset-x-0 top-1/2 h-px bg-[var(--hazard)]" />
      </div>
      <p className="mt-6 font-mono text-xs tracking-[0.14em] text-[#e8a080] uppercase">
        Breaker open · session aborted · files untouched
      </p>
    </figure>
  );
}
