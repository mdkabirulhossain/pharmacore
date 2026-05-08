import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "./hero/Hero";
import { Features } from "./features/Features";
import { Pricing } from "./pricing/Pricing";
import { Contact } from "./contact/Contact";
import { QuickCTA } from "./cta/QuickCTA";
import { Footer } from "@/components/shared/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
        <QuickCTA />
      </main>
      <Footer />
    </div>
  );
}