import { useEffect, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";


const links = [
  { id: "home", label: "HOME" },
  { id: "about", label: "EXPERIENCE" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export function Nav() {
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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
        <a href="#home" onClick={playClickSound} className="flex items-center gap-2 text-neon font-display font-bold text-xs sm:text-sm tracking-widest min-w-0">
          <span className="inline-block w-2 h-2 bg-neon animate-blink" />
          HARI//NAIR
        </a>
        <nav className="hidden md:flex items-center gap-6 text-[13px] lg:text-sm font-medium tracking-[0.25em] uppercase text-foreground/80 dark:text-white/80">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={playClickSound}
              className="relative pb-1 text-foreground/80 dark:text-white/80 transition-colors hover:text-foreground dark:hover:text-white after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-current after:opacity-30"
            >
              <span className="text-muted-foreground dark:text-white/55">0{i + 1}.</span>{l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
