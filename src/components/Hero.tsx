export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neon">
            <span className="px-2 py-0.5 border border-neon">SYS_ID::001</span>
            <span className="text-muted-foreground">// initializing portfolio_v2.exe</span>
          </div>

          <h1 className="font-display font-bold leading-[0.9]">
            <span className="block text-sm md:text-base text-muted-foreground mb-3 tracking-[0.4em] uppercase">
              &gt; HI :: I_AM
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl text-foreground glow">
              HARISHANKER
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl text-neon-2 glow-2">
              S<span className="text-neon">.</span>NAIR
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
            <span className="text-sm md:text-base font-mono tracking-widest text-neon">
              [ STUDENT ]
            </span>
            <span className="text-neon-2">/</span>
            <span className="text-sm md:text-base font-mono tracking-widest text-neon-2">
              [ AI_ML_ENGINEER ]
            </span>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-mono text-muted-foreground">
              GURGAON::IN
            </span>
          </div>

          <p className="max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
            Building intelligent systems at the intersection of machine learning,
            computer vision and real-world data. Currently engineering tools that
            see, search and reason.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a href="#projects" className="corner-frame px-5 py-3 text-xs uppercase tracking-[0.25em] border border-neon text-neon hover:bg-neon hover:text-background transition-colors">
              &gt; VIEW_PROJECTS
            </a>
            <a href="#contact" className="corner-frame px-5 py-3 text-xs uppercase tracking-[0.25em] border border-neon-2 text-neon-2 hover:bg-[var(--neon-2)] hover:text-background transition-colors">
              &gt; ESTABLISH_LINK
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <div className="corner-frame border border-neon/40 p-5 bg-surface/40 text-[11px] font-mono space-y-2">
            <div className="flex items-center justify-between border-b border-border pb-2 mb-2">
              <span className="text-neon">// STATUS.LOG</span>
              <span className="flex items-center gap-1 text-neon-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-blink" />
                ONLINE
              </span>
            </div>
            {[
              ["LOC", "Gurgaon, IN"],
              ["ROLE", "AI/ML Engineer"],
              ["STACK", "Python · PyTorch"],
              ["FOCUS", "CV · NLP · MLOps"],
              ["AVAIL", "Open to work"],
              ["UPTIME", "21y · stable"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 text-muted-foreground">
                <span className="text-neon-2">{k}</span>
                <span className="text-foreground">{v}</span>
              </div>
            ))}
            <div className="pt-3 border-t border-border mt-3 text-neon">
              &gt; READY<span className="animate-blink">_</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-flicker">
        ↓ SCROLL_TO_CONTINUE ↓
      </div>
    </section>
  );
}
