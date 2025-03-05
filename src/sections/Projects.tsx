"use client";
import { motion } from "framer-motion";

import kanata from "@/assets/images/kanata.png";
import meal from "@/assets/images/meal.png";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Community Initiative",
    title: "Kanata Seniors Council",
    results: [
      {
        title:
          "Developed a modern and user-friendly WordPress site that is fully responsive",
      },
      {
        title:
          "Improved site speed by 50% and successfully passed an accessibility audit",
      },
      {
        title: "Migrated the site from Elementor to Gutenberg Blocks and ACFs",
      },
    ],
    link: "https://kanataseniors.ca",
    image: kanata,
  },
  {
    company: "Online Course",
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
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Recent Projects"
          description=""
        />

        {/* Card Wrapper */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            // card
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky h-[450px]"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              {/* Card Content */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                  </div>

                  <h3 className="font-serif text-xl mt-2 md:mt-5 md:text-2xl ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-t">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-sm text-white/85">
                        <CheckCircleIcon className="w-6 h-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link} target="_blank">
                    <motion.button
                      className="bg-white text-gray-950 h-12 w-full 
                    md:w-auto px-6 rounded-full font-semibold 
                    inline-flex items-center justify-center gap-2 mt-8"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>View Website</span>
                      <ArrowUpRightIcon className="size-4" />
                    </motion.button>
                  </a>
                </div>

                <motion.div
                  className="relative"
                  whileHover={{ rotate: -3, scale: 1.05 }}
                
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'bottom right' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-10 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full  lg:w-auto lg:max-w-none rounded-xl "
                  ></Image>
                </motion.div>
              </div>
            </Card>
            // End of card
          ))}
        </div>
      </div>
    </section>
  );
};
