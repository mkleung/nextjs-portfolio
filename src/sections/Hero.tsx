"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import logo from "@/assets/images/mike.jpeg";

export const HeroSection = () => {

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={logo}
            className="w-24 h-24 rounded-full" // Updated size class
            alt="Person peeking from behind laptop"
          />

          <div className="max-w-2xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8">
              Hi I'm <span className="gradient-underline">Michael Leung</span>, Software Developer
            </h1>

            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in transforming designs into functional,
              high-performing web applications. Let's discuss your next project.
            </p>

            <p className="mt-4 text-center text-white/60 md:text-lg">
              Design Develop Deliver
            </p>
          </div>

          <div className="flex flex-col items-center md:flex-row justify-center mt-5">
            <a href="#projects" className="inline-flex items-center gap-2 border-white/10 px-6 h-12 rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}>
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a href="#contact" className="flex gap-1 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full px-5 py-1" 
               onClick={(e) => {
                 e.preventDefault();
                 scrollToSection('contact');
               }}>
              <span>👋</span>
              <span className="text-black">Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};