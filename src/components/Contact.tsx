import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader index="// 05" title="ESTABLISH_LINK" subtitle="open_a_channel" />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm open to <span className="text-neon">collaborations</span>,{" "}
              <span className="text-neon-2">internships</span> and interesting research
              chatter. The fastest channel is email.
            </p>

            <a
              href="mailto:nhari142004@gmail.com"
              className="inline-block corner-frame border border-neon p-5 bg-surface/40 hover:bg-neon hover:text-background transition-colors group"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-neon-2 group-hover:text-background mb-1">
                // primary_channel
              </div>
              <div className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-background">
                nhari142004@gmail.com
              </div>
            </a>

            <div className="flex flex-wrap gap-3 pt-4 text-[11px] uppercase tracking-[0.25em]">
              {["GitHub", "LinkedIn", "CV.pdf"].map((l) => (
                <a key={l} href="#" className="corner-frame px-4 py-2 border border-neon-2 text-neon-2 hover:bg-[var(--neon-2)] hover:text-background transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="corner-frame border border-border bg-surface/60 p-6 text-[11px] font-mono space-y-2">
              <div className="text-neon mb-3">// transmission_log</div>
              {[
                "$ ping harishanker.dev",
                "Reply from 192.0.2.1: time=4ms",
                "$ handshake --secure",
                "TLS established · v1.3",
                "$ awaiting_message...",
              ].map((line, i) => (
                <div key={i} className="text-muted-foreground">
                  <span className="text-neon-2">[{String(i + 1).padStart(2, "0")}]</span> {line}
                </div>
              ))}
              <div className="text-neon pt-2">
                &gt; READY<span className="animate-blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
