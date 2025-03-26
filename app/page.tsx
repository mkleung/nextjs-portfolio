import { Header } from "../sections/Header";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../sections/Footer";
import Parallax from "../components/parallax/Parallax";
import HobbiesCard from "../components/about/HobbiesCard";
import BlogCard from "../components/about/BlogCard";
import EducationCard from "../components/about/EducationCard";
import MapCard from "../components/about/MapCard";

import ArticleItemList from "../components/ArticleListItem";
import { getCategorisedArticles } from "../lib/articles";
import PortfolioSection from "../sections/PortfolioSection";
import { Card } from "../components/Card";

export default function Home() {
  const articles = getCategorisedArticles();
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      
      <PortfolioSection />
      <Parallax />
      <section className="py-5">
        <div className="container">
          <Card
            key="test"
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky h-full lg:h-[450px]"
          >
            <h2>Blog is under construction</h2>
            {articles !== null &&
              Object.keys(articles).map((article) => (
                <ArticleItemList
                  category={article}
                  articles={articles[article]}
                  key={article}
                />
              ))}
          </Card>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}
