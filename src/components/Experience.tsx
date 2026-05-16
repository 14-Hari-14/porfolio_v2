import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
};

const experiences: Experience[] = [
  {
    role: "AI/ML Engineer Intern",
    company: "Independent / Research",
    period: "2024 — Present",
    location: "Gurgaon, IN",
    summary:
      "Building end-to-end ML systems across computer vision, retrieval and NLP. Shipping FastAPI services that wrap trained models for real-world use.",
    stack: ["Python", "PyTorch", "FastAPI", "FAISS", "Docker"],
  },
];

export function Experience() {
  const [i, setI] = useState(0);
  const total = experiences.length;
  const exp = experiences[i];
  const showNav = total > 1;

  return (
    <section id="about" className="relative py-28 border-t border-border">
      <div className="absolute inset-0 bg-grid-sm opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          index="// 02"
          title="WORK_EXPERIENCE"
          subtitle="career_log"
        />

        <div className="relative">
          <article className="corner-frame border border-border bg-surface/40 p-8 md:p-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neon-2">
                <span className="px-2 py-0.5 border border-neon-2">
                  ENTRY {String(i + 1).padStart(2, "0")}/
                  {String(total).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{exp.period}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-black text-foreground glow leading-tight">
                {exp.role}
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-mono">
                <span className="text-neon">@ {exp.company}</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-muted-foreground">{exp.location}</span>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                {exp.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-2 py-0.5 border border-neon/60 text-neon"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:flex-col items-end justify-between gap-4">
              <div className="text-[11px] font-mono text-neon-2 uppercase tracking-[0.25em]">
                // record.sys
              </div>
              {showNav && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setI((p) => (p - 1 + total) % total)}
                    aria-label="Previous experience"
                    className="corner-frame p-2 border border-neon text-neon hover:bg-neon hover:text-background transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setI((p) => (p + 1) % total)}
                    aria-label="Next experience"
                    className="corner-frame p-2 border border-neon text-neon hover:bg-neon hover:text-background transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
