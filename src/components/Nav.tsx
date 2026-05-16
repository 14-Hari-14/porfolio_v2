import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "home", label: "HOME" },
  { id: "about", label: "EXPERIENCE" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-neon font-display font-bold text-sm tracking-widest">
          <span className="inline-block w-2 h-2 bg-neon animate-blink" />
          HARI//NAIR
        </a>
        <nav className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          {links.map((l, i) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-neon transition-colors">
              <span className="text-neon-2">0{i + 1}.</span>{l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
