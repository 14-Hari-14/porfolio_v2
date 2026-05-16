import { useEffect, useRef, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu"

export function ThemeToggle() {
  const [dark, setDark] = useState(true);
  const toggleSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = stored ? stored === "dark" : true;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);

    if (typeof window !== "undefined") {
      toggleSound.current = new Audio("/audios/themetoggle.mp3");
      toggleSound.current.load();
    }

    return () => {
      if (toggleSound.current) {
        toggleSound.current.pause();
        toggleSound.current.src = "";
      }
    };
  }, []);

  const toggle = () => {
    if (toggleSound.current) {
      toggleSound.current.currentTime = 0;
      toggleSound.current.play().catch(console.warn);
    }

    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="corner-frame inline-flex items-center px-2.5 py-1.5 text-[10px] uppercase tracking-[0.2em] border border-neon text-neon hover:bg-neon hover:text-background transition-colors"
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center leading-none">
          {dark ? <LuSun size={20} className="sm:h-[25px] sm:w-[25px]" /> : <LuMoon size={20} className="sm:h-[25px] sm:w-[25px]" />}
        </div>
        <div className="hidden sm:flex items-center leading-none mt-1">
          <span>{dark ? "LIGHT_MODE" : "DARK_MODE"}</span>
        </div>
      </div>
    </button>
  );
}
