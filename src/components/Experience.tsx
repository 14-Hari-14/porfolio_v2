import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summaryPoints: string[];
  stack: string[];
};

const experiences: Experience[] = [
  {
    role: "Data Analyst / ML Engineer Intern",
    company: "Whizhack Technologies",
    period: "2026 January — Present",
    location: "Gurgaon, IN",
    summaryPoints: [
      "Trained and optimized a LightGBM malware-screening model on the EMBER-2024 benchmark as a sub-millisecond gateway pre-filter, reducing false positives from 20% to 6% and false negatives from 33% to 15%.",
      "Built an 82-feature static PE extraction pipeline using Authenticode signatures, overlay entropy, and Rich Header metadata to surface evasive malware patterns.",
      "Architected a cascading defense flow that routes uncertain predictions through deterministic Python validation logic, keeping verdicts under 0.5 ms.",
    ],
    stack: ["Python", "LightGBM", "Suricata"],
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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          index="// 02"
          title="WORK_EXPERIENCE"
          subtitle="career_log"
        />

        <div className="relative">
          <article className="corner-frame border border-border bg-surface/40 p-6 sm:p-8 md:p-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neon-2">
                <span className="px-2 py-0.5 border border-neon-2">
                  ENTRY {String(i + 1).padStart(2, "0")}/
                  {String(total).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{exp.period}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-foreground leading-tight">
                {exp.role}
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-mono">
                <span className="text-neon">@ {exp.company}</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-muted-foreground">{exp.location}</span>
              </div>

              <div className="max-w-2xl space-y-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-neon-2">
                  summary
                </div>
                <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc pl-5 marker:text-neon-2">
                  {exp.summaryPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

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

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
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
