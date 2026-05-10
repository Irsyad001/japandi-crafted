import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { Collection } from "@/components/site/Collection";
import { Inquiry } from "@/components/site/Inquiry";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Collection />
      <Process />
      <Inquiry />
      <Footer />
    </main>
  );
}
