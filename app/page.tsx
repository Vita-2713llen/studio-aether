import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-void-950">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
