import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    n: "01",
    title: "Underwater Image Restoration",
    desc: "Deep learning pipeline that restores color and visibility in degraded underwater imagery using CNNs.",
    tags: ["Python", "CNN", "PyTorch", "OpenCV", "FastAPI"],
  },
  {
    n: "02",
    title: "Manga Vector Search Engine",
    desc: "Semantic search across thousands of manga panels using sentence-transformers and FAISS indices.",
    tags: ["Python", "FAISS", "Sentence-Transformers", "FastAPI"],
  },
  {
    n: "03",
    title: "Orbit — Visual Knowledge Graph",
    desc: "Interactive graph that maps relationships across documents, rendered with vis-network and Supabase.",
    tags: ["React", "Vite", "Supabase", "vis-network.js"],
  },
  {
    n: "04",
    title: "Media Bias Analyzer",
    desc: "BERT-based classifier that scores news articles on partisan tone with explainability hooks.",
    tags: ["Python", "Git", "TensorFlow", "BERT"],
  },
  {
    n: "05",
    title: "Desktop Cleaner",
    desc: "Lightweight Linux utility that organizes a messy filesystem by rules and content heuristics.",
    tags: ["Python", "Git", "Linux"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader index="// 04" title="PROJECT_ARCHIVE" subtitle="selected_works" />

        <div className="space-y-4">
          {projects.map((p) => (
            <article
              key={p.n}
              className="corner-frame group relative border border-border bg-surface/40 p-6 md:p-8 hover:border-neon transition-all hover:bg-surface/70 overflow-hidden"
            >
              <div className="grid md:grid-cols-12 gap-6 items-stretch">
                <div className="md:col-span-2 flex items-stretch">
                  <div
                    aria-hidden
                    className="font-display font-black leading-[0.8] text-neon-2 group-hover:text-neon transition-all duration-500 ease-out origin-left text-5xl md:text-6xl group-hover:text-[7rem] md:group-hover:text-[10rem] group-hover:glow self-start"
                  >
                    {p.n}
                  </div>
                </div>
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:glow transition-all">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 border border-neon-2/60 text-neon-2">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3 flex md:justify-end md:items-start">
                  <button className="corner-frame px-4 py-2 text-[11px] uppercase tracking-[0.25em] border border-neon text-neon hover:bg-neon hover:text-background transition-colors">
                    &gt; OPEN_FILE
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
