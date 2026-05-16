import { SectionHeader } from "./SectionHeader";

const facts = [
  { k: "EDU", v: "B.Tech in Computer Science" },
  { k: "BASE", v: "Kerala, India" },
  { k: "EXP", v: "AI / ML · Computer Vision · MLOps" },
  { k: "INTRSTS", v: "Generative models, retrieval, agents" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 border-t border-border">
      <div className="absolute inset-0 bg-grid-sm opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader index="// 02" title="ABOUT_ME.md" subtitle="who_is_running_this_process" />

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="text-neon">$</span> cat about.txt
            </p>
            <p>
              I'm an AI/ML engineer and CS student who likes turning messy data into
              systems that <span className="text-foreground">see</span>,{" "}
              <span className="text-foreground">search</span> and{" "}
              <span className="text-foreground">reason</span>. My work spans
              underwater image restoration, vector search engines for manga, knowledge
              graphs and bias analysis pipelines.
            </p>
            <p>
              I care about end-to-end thinking — from training loops and feature
              engineering down to the FastAPI service that actually ships. When I'm
              not training models, I'm reading papers, breaking my Linux install, or
              architecting hackathon prototypes at 3am.
            </p>
            <p className="text-neon-2">&gt; mission :: build useful, honest, slightly weird tech.</p>
          </div>

          <div className="lg:col-span-5">
            <div className="corner-frame border border-border bg-surface/40 p-6 space-y-3 text-[11px] font-mono">
              <div className="text-neon mb-2">// IDENTITY.SYS</div>
              {facts.map((f) => (
                <div key={f.k} className="flex justify-between gap-4 py-1 border-b border-border/50 last:border-0">
                  <span className="text-neon-2 uppercase">{f.k}</span>
                  <span className="text-foreground text-right">{f.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
