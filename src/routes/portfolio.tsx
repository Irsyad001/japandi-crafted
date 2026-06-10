import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Portfolio } from "@/components/site/Portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — MM TREE Furniture" },
      {
        name: "description",
        content:
          "Explore 15 years of custom kitchen cabinets, TV cabinets and wardrobes crafted across Selangor and Kuala Lumpur.",
      },
      { property: "og:title", content: "Portfolio — MM TREE Furniture" },
      {
        property: "og:description",
        content:
          "Explore 15 years of custom kitchen cabinets, TV cabinets and wardrobes crafted across Selangor and Kuala Lumpur.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Portfolio />
      <Footer />
    </main>
  );
}