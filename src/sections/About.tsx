"use client";
import { useRef } from "react";



import ReadingCard from "@/components/about-section/ReadingCard";
import MapCard from "@/components/about-section/MapCard";
import { AboutCard } from "@/components/about-section/AboutCard";
import EducationCard from "@/components/about-section/EducationCard";



export const AboutSection = () => {
  return (
    <section id="about" className="">
      <div className="container">
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <MapCard />
            <AboutCard />
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <EducationCard />
            <ReadingCard />
          </div>
        </div>
      </div>
    </section>
  );
};
