import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { Collection } from "@/components/site/Collection";
import { Inquiry } from "@/components/site/Inquiry";
import { Feedback } from "@/components/site/Feedback";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Collection />
      <Process />
      <Inquiry />
      <Feedback />
      <Footer />
    </main>
  );
}
