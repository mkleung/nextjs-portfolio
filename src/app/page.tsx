import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Parallax from "@/components/parallax-section/Parallax";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TapeSection />
      <Parallax />
      <TapeSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
