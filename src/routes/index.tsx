import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingDock } from "@/components/FloatingDock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harishanker S Nair — AI/ML Engineer" },
      {
        name: "description",
        content:
          "Cyberpunk portfolio of Harishanker S Nair — student and AI/ML engineer based in Kerala, India. Computer vision, NLP, MLOps.",
      },
      { property: "og:title", content: "Harishanker S Nair — AI/ML Engineer" },
      {
        property: "og:description",
        content: "AI/ML engineer building intelligent systems for vision, search and reasoning.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
}
