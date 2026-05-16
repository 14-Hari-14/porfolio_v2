export function Footer() {
  const tags = ["AI", "ML", "CV", "MLOps", "RESEARCH", "OPEN_SOURCE", "PYTHON", "PYTORCH", "REACT"];
  return (
    <footer className="border-t border-border">
      <div className="overflow-hidden border-b border-border bg-surface/40 py-3">
        <div className="flex gap-8 animate-marquee whitespace-nowrap text-[11px] tracking-[0.3em] text-neon-2">
          {[...tags, ...tags, ...tags].map((t, i) => (
            <span key={i}>// {t}</span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-neon animate-blink" />
          <span>HARI//NAIR — v2.0.26 · built with React + Vite</span>
        </div>
        <div className="font-mono">© {new Date().getFullYear()} ALL_SYSTEMS_NOMINAL</div>
      </div>
    </footer>
  );
}
