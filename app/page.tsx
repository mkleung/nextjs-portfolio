import { Header } from "../sections/Header";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../sections/Footer";
import Parallax from "../components/parallax/Parallax";

import { getCategorisedArticles } from "../lib/articles";
import PortfolioSection from "../sections/PortfolioSection";

export default function Home() {
  const articles = getCategorisedArticles();
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection articles={articles} />
    
      <PortfolioSection />

      <Parallax />
      <ContactSection />
      <Footer />
    </div>
  );
}
