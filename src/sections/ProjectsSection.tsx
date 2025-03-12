"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

import kanata from "@/assets/images/kanata.png";
import meal from "@/assets/images/meal.png";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "2024-2025",
    title: "Kanata Seniors Council",
    results: [
      {
        title:
          "Crafted wireframes and detailed mockups in Figma to enhance user interface design.",
      },
      {
        title:
          "Improved site speed by 50% and successfully completed an accessibility audit.",
      },
      {
        title:
          "Migrated the site from Elementor to Gutenberg Blocks and Advanced Custom Fields (ACFs).",
      },
    ],
    link: "https://kanataseniors.ca",
    image: kanata,
  },
  {
    company: "2023",
    title: "JWFoods - The Meal Butler",
    results: [
      {
        title:
          "The Meal Butler is a meal delivery project developed as part of a course",
      },
      {
        title:
          "Features include user authentication, Maps Api and a no sql database",
      },
      {
        title:
          "Built using Visual studio code and in ReactJs, Flask, Bootstrap and MongoDB",
      },
    ],
    link: "https://mkleung.github.io/jwfoods/",
    image: meal,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Recent Websites"
          description=""
        />

        {/* Card Wrapper */}
        <motion.div
          className="flex flex-col mt-10 md:mt-20 gap-20"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
        >
          {portfolioProjects.map((project, projectIndex) => (
            // card
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky h-full lg:h-[450px]"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              {/* Card Content */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-sky-400  to-emerald-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                  </div>

                  <h3 className="font-serif text-xl mt-2 md:mt-5 md:text-2xl ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-t">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-sm text-white/85"
                      >
                        <CheckCircleIcon className="w-6 h-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br gradient mt-5"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex  px-5 py-1 transition-colors ease-in duration-200 bg-gray-800 rounded-full group-hover:bg-transparent group-hover:text-black">
                      Visit Website <ArrowRightIcon className="w-4 h-4 stroke-2 text-white mt-0.5 ml-1 group-hover:text-black transition-colors ease-in duration-200" />
                    </div>
                  </motion.a>
                </div>

                <motion.div
                  className="relative"
                  whileHover={{ rotate: -3, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "bottom right" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-10 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:top-10 lg:h-full  lg:w-auto lg:max-w-none rounded-xl "
                  ></Image>
                </motion.div>
              </div>
            </Card>
            // End of card
          ))}
        </motion.div>
      </div>
    </section>
  );
};
