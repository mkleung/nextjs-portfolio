"use client";
import { Card } from "@/components/Card";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import WordPressIcon from "@/assets/icons/wordpress.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";
import VueIcon from "@/assets/icons/vuejs.svg";
import PythonIcon from "@/assets/icons/python.svg";
import NodeIcon from "@/assets/icons/node.svg";

import { CardHeader } from "@/components/CardHeader";
import { Skills } from "@/components/about-section/Skills";
import { motion } from "framer-motion";
import { useRef } from "react";
import StarIcon from "@/assets/icons/star.svg";

import Reading from "@/components/about-section/Reading";
import MapCard from "@/components/about-section/MapCard";





const skills = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "Vue",
    iconType: VueIcon,
  },
];

const skills2 = [
  {
    title: "Laravel",
    iconType: LaravelIcon,
  },
  {
    title: "WordPress",
    iconType: WordPressIcon,
  },
  {
    title: "Flask",
    iconType: PythonIcon,
  },
  {
    title: "Next Js",
    iconType: NodeIcon,
  },
];

const hobbies = [
  {
    title: "Pixel Art",
    emoji: "🎨",
  },
  {
    title: "Pizza Making",
    emoji: "🍕",
  },
  {
    title: "Bollywood Movies",
    emoji: "📺",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Language Learning",
    emoji: "🌍",
  },
  {
    title: "Biking",
    emoji: "🚵‍♂️",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="about" className="">
      <div className="container">
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <MapCard />
       

            {/* About */}
            <Card className="h-full lg:h-[340px] md:col-span-3 lg:col-span-2">
              <CardHeader title="About Me" className="" />

              <div className="flex flex-col p-6 md:py-8 md:px-10 md:pt-0 gap-4">
                <p className="text-white/85 ">
                  Hello! I'm a dedicated front-end developer with a passion for
                  delivering user-friendly websites that captivates audiences. I
                  also love to help the local community with technology
                  solutions that enhance people's lives.
                </p>

                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-8 text-emerald-300"></StarIcon>
                  <h3 className="font-serif text-xl gradient-underline">
                    Hobbies
                  </h3>
                </div>

                <div className="h-full lg:h-[100px] mt-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="hover:pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 me-2 mb-2 hover:cursor-grab active:cursor-grabbing"
                      drag
                      dragConstraints={constraintRef}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative inline-flex items-center px-5 py-1 transition-colors ease-in duration-200 bg-gray-700 dark:bg-gray-700 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black">
                        {hobby.title}
                        <span className="ml-2">{hobby.emoji}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            {/* Skills */}
            <Card className="h-full lg:h-[340px] md:col-span-3 lg:col-span-2">
              <CardHeader title="Education" className="" />
              <div className="flex flex-col pt-0 px-6 pb-6 md:p-6 gap-5">
                <ul className="list-disc pl-5 text-white/85 ">
                  <li>
                    Data Science Graduate Certificate, Toronto Metropolitan U.
                  </li>
                  <li>
                    Bachelor of Computer Science, Carleton University, Ottawa
                  </li>
                </ul>

                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-8 text-emerald-300"></StarIcon>
                  <h3 className="font-serif text-xl gradient-underline">
                    Skills
                  </h3>
                </div>
              </div>

              <div>
                <Skills
                  items={skills}
                  className=""
                  itemsWrapperClassName="animate-move-right [animation-duration:100s]"
                />
                <Skills
                  items={skills2}
                  className="mt-5"
                  itemsWrapperClassName="animate-move-left [animation-duration:100s]"
                />
              </div>
            </Card>

            <Reading />
          </div>
        </div>
      </div>
    </section>
  );
};
