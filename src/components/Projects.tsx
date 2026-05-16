"use client";

import { useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { InteractiveHoverButtonModern } from "./ui/interactive-hover-button-modern";

const projects = [
  {
    n: "01",
    title: "Underwater Image Restoration",
    desc: "Deep learning pipeline that restores color and visibility in degraded underwater imagery using CNNs.",
    tags: ["Python", "CNN", "PyTorch", "OpenCV", "FastAPI"],
    href: "https://github.com/math-lover31415/Final-Year-Project",
  },
  {
    n: "02",
    title: "Manga Vector Search Engine",
    desc: "Semantic search across 200K+ of manga and anime titles using sentence-transformers and FAISS indices.",
    tags: ["Python", "FAISS", "Sentence-Transformers", "FastAPI"],
    href: "https://github.com/14-Hari-14/anime_manga_recommender",
  },
  {
    n: "03",
    title: "AI Research Paper Summarizer",
    desc: "A specialized LLM-powered tool that generates concise summaries of AI research papers, with the ability to extract important figures and tables.",
    tags: ["Python", "Git", "Linux"],
    href: "https://github.com/your-username/desktop-cleaner",
  },
  {
    n: "04",
    title: "Orbit — Visual Knowledge Graph",
    desc: "A bookmark manager that organizes browser links as interactive nodes with multi-device sync and collapsible clusters.",
    tags: ["React", "Vite", "Supabase", "vis-network.js"],
    href: "https://github.com/14-Hari-14/Orbit-Tab-Tracker",
  },
  {
    n: "05",
    title: "Media Bias Analyzer",
    desc: "Trained a BERT Model to classify news article as left, right and center. The aim was to increase media literacy among the people",
    tags: ["Python", "Git", "TensorFlow", "BERT"],
    href: "https://github.com/math-lover31415/Media-Bias",
  },
  
];

export function Projects() {
  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      clickSound.current = new Audio("/audios/navbarclick.wav");
      clickSound.current.load();
    }

    return () => {
      if (clickSound.current) {
        clickSound.current.pause();
        clickSound.current.src = "";
      }
    };
  }, []);

  const playClickSound = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(console.warn);
    }
  };

  return (
    <section id="projects" className="relative py-28 border-t border-border">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader index="// 04" title="PROJECTS" subtitle="selected_works" />

        <div className="space-y-4">
          {projects.map((p) => (
            <article
              key={p.n}
              className="corner-frame group relative border border-border bg-surface/40 p-5 sm:p-6 md:p-8 hover:border-neon transition-all hover:bg-surface/70 overflow-hidden"
            >
              <div className="grid gap-6 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-2 flex items-center justify-center lg:justify-center">
                  <div
                    aria-hidden
                    className="font-display font-black leading-[0.72] text-neon-2 group-hover:text-neon transition-colors duration-300 origin-center text-[3.4rem] sm:text-[4.6rem] md:text-[5.6rem] text-center w-full"
                  >
                    {p.n}
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground group-hover:glow transition-all">
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
                <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
                  <InteractiveHoverButtonModern
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    hoverColor="bg-orange-500"
                    darkHoverColor="dark:bg-blue-600"
                    className="corner-frame w-full sm:w-auto border border-neon px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-neon hover:border-neon"
                  >
                    &gt; OPEN_FILE
                  </InteractiveHoverButtonModern>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
