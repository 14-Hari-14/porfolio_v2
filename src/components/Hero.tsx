'use client';

import { useEffect, useRef } from "react";
import { InteractiveHoverButtonModern } from "./ui/interactive-hover-button-modern";

export function Hero() {
  const hoverSound = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      hoverSound.current = new Audio(
        "/audios/interactitvebutton.mp3"
      );

      clickSound.current = new Audio(
        "/audios/navbarclick.wav"
      );

      [hoverSound.current, clickSound.current].forEach(
        (audio) => {
          audio?.load();
        }
      );
    }

    return () => {
      [hoverSound.current, clickSound.current].forEach(
        (audio) => {
          if (audio) {
            audio.pause();
            audio.src = "";
          }
        }
      );
    };
  }, []);

  const playHoverSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch(console.warn);
    }
  };

  const playClickSound = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(console.warn);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-8 space-y-6 relative max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] uppercase tracking-[0.24em] text-neon">
            <span className="px-2 py-0.5 border border-neon">
              SYS_ID::001
            </span>
            <span className="text-muted-foreground">
              // initializing portfolio
            </span>
          </div>

          <h1 className="font-display font-bold leading-[0.9]">
            <span className="block text-sm md:text-base text-muted-foreground mb-3 tracking-[0.4em] uppercase">
              &gt; HI :: I_AM
            </span>

            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-foreground">
              HARISHANKER
            </span>

            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-neon-2">
              S<span className="text-neon">.</span>NAIR
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
            <span className="text-xs sm:text-sm md:text-base font-mono tracking-widest text-neon">
              [GRADUATE_2026]
            </span>

            <span className="text-neon-2">/</span>

            <span className="text-xs sm:text-sm md:text-base font-mono tracking-widest text-neon-2">
              [AI_ML_ENGINEER]
            </span>

            <span className="text-muted-foreground">/</span>

            <span className="text-xs sm:text-sm md:text-base font-mono text-muted-foreground">
              [GURGAON::IN]
            </span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
            {/* VIEW PROJECTS */}
            <InteractiveHoverButtonModern
              href="#projects"
              hoverColor="bg-orange-500"
              darkHoverColor="dark:bg-orange-500"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="
                corner-frame
                w-full sm:w-auto
                border-neutral-900
                bg-neutral-200/90
                px-5 py-3
                text-xs uppercase tracking-[0.25em]
                text-neutral-900

                hover:border-orange-500

                dark:border-orange-400
                dark:bg-background
                dark:text-orange-300
                dark:hover:border-orange-300
              "
            >
              &gt; VIEW_PROJECTS
            </InteractiveHoverButtonModern>

            {/* CONTACT */}
            <InteractiveHoverButtonModern
              href="#contact"
              hoverColor="bg-neutral-950"
              darkHoverColor="dark:bg-[var(--neon-2)]"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="
                corner-frame
                w-full sm:w-auto
                border-neutral-900
                bg-neutral-200/90
                px-5 py-3
                text-xs uppercase tracking-[0.25em]
                text-neutral-900

                hover:border-[var(--neon-2)]

                dark:border-[var(--neon-2)]
                dark:bg-background
                dark:text-[var(--neon-2)]
                dark:hover:border-blue-200
              "
            >
              &gt; CONTACT_ME
            </InteractiveHoverButtonModern>

            {/* DOWNLOAD CV */}
            <InteractiveHoverButtonModern
              href="https://drive.google.com/file/d/1uzveb7usmbnUjL8Ji6sMh0OmpZJPLli5/view"
              target="_blank"
              rel="noopener noreferrer"
              hoverColor="bg-sky-700"
              darkHoverColor="dark:bg-blue-600"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="
                corner-frame
                w-full sm:w-auto
                border-neutral-900
                bg-neutral-200/90
                px-5 py-3
                text-xs uppercase tracking-[0.25em]
                text-neutral-900

                hover:border-sky-600

                dark:border-blue-300
                dark:bg-background
                dark:text-blue-300
                dark:hover:border-white
              "
            >
              &gt; DOWNLOAD_CV
            </InteractiveHoverButtonModern>
          </div>
        </div>

        <div className="lg:hidden w-full pt-2">
          <div className="corner-frame border border-neon/40 p-4 bg-surface/40 text-[12px] font-mono space-y-2">
            <div className="flex items-center justify-between border-b border-border pb-2 mb-2">
              <span className="text-neon">// STATUS.LOG</span>
              <span className="flex items-center gap-1 text-neon-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-blink" />
                ONLINE
              </span>
            </div>

            {[
              ["LOC", "Gurgaon, IN"],
              ["AVAIL", "Open to work"],
              ["ROLE", "AI/ML Engineer"],
              ["STACK", "Python · PyTorch"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 text-foreground dark:text-muted-foreground">
                <span className="text-neon-2">{k}</span>
                <span className="font-medium text-foreground dark:text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute top-[13.2rem] right-[8rem] w-[32rem]">
          <div className="corner-frame border border-neon/40 p-5 bg-surface/40 text-[13px] font-mono space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-2 mb-2">
              <span className="text-neon">
                // STATUS.LOG
              </span>

              <span className="flex items-center gap-1 text-neon-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-blink" />
                ONLINE
              </span>
            </div>

            {[
              ["LOC", "Gurgaon, IN"],
              ["AVAIL", "Open to work"],
              ["UPTIME", "21y · stable"],
              ["ROLE", "AI/ML Engineer"],
              ["STACK", "Python · PyTorch"],
              ["FOCUS", "CV · NLP · MLOps"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between gap-3 text-foreground dark:text-muted-foreground"
              >
                <span className="text-neon-2">
                  {k}
                </span>

                <span className="font-medium text-foreground dark:text-foreground">
                  {v}
                </span>
              </div>
            ))}

            <div className="pt-3 border-t border-border mt-3 text-neon">
              &gt; READY
              <span className="animate-blink">
                _
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-flicker">
        ↓ SCROLL_TO_CONTINUE ↓
      </div>
    </section>
  );
}