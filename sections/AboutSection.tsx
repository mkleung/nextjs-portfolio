"use client";

import HobbiesCard from "../components/about/HobbiesCard";
import BlogCard from "../components/about/BlogCard";
import EducationCard from "../components/about/EducationCard";
import MapCard from "../components/about/MapCard";
import { BlogProps } from "../types";


export const AboutSection = ({ articles }: BlogProps) => {

  return (
    <section id="about" className="pb-5 pt-10">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MapCard />
            <EducationCard />
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-3" id="blog">
            <BlogCard articles={articles} />
            <HobbiesCard />
          </div>
        </div>
      </div>
    </section>
  );
};
