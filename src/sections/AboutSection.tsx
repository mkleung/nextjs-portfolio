"use client";

import HobbiesCard from "@/components/about-section/HobbiesCard";
import BlogCard from "@/components/about-section/BlogCard";
import EducationCard from "@/components/about-section/EducationCard";
import MapCard from "@/components/about-section/MapCard";

export const AboutSection = () => {
  return (
    <section id="about" className="pb-5">
      <div className="container">
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MapCard />
            <EducationCard />
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <BlogCard />
            <HobbiesCard />
          </div>
        </div>
      </div>
    </section>
  );
};
