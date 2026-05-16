import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    id: "AI_ML",
    title: "AI / ML",
    items: ["Python", "PyTorch", "LightGBM", "Feature Engineering", "scikit-learn", " NLP"],
  },
  {
    id: "DATA_CV",
    title: "Data / CV",
    items: ["OpenCV", "Pandas", "NumPy", "BERT", "Sentence-Transformers", "FAISS"],
  },
  {
    id: "MLOPS",
    title: "MLOps",
    items: ["FastAPI", "Docker", "Git", "Linux", "CI/CD", "Vector DBs", "LangChain", "RAG",],
  },
  {
    id: "WEB_BASE",
    title: "Web Base",
    items: ["React", "Vite", "TypeScript", "Tailwind", "Supabase", "Node.js"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader index="// 03" title="SKILLs" subtitle="loaded_modules" />

        <div className="grid gap-5 sm:grid-cols-2">
          {groups.map((g, i) => (
            <div
              key={g.id}
              className="corner-frame border border-border bg-surface/50 p-5 sm:p-6 hover:border-neon transition-colors group"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[10px] px-2 py-0.5 border border-neon-2 text-neon-2 tracking-widest">
                    MOD_{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground group-hover:text-neon transition-colors">
                    {g.title}
                  </h3>
                </div>
                <span className="text-[10px] text-neon animate-blink">●</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono px-2.5 py-1 border border-border text-muted-foreground hover:border-neon hover:text-neon transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
