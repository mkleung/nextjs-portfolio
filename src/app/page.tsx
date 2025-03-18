import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import Parallax from "@/components/parallax-section/Parallax";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <Parallax />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
