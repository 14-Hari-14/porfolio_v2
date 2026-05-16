import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
