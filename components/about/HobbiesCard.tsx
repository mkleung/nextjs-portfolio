'use client'
import React, { useRef } from "react";
import { CardHeader } from "../CardHeader";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Foreign Languages",
    emoji: "🌍",
  },
  {
    title: "Improv",
    emoji: "🎭",
  },

  {
    title: "Art",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📷",
  },

  {
    title: "Cycling",
    emoji: "🚵‍♂️",
  },
  {
    title: "Cooking",
    emoji: "🍕",
  },
  {
    title: "Volunteering",
    emoji: "🧑‍🍳",
  },
];

const HobbiesCard = () => {
  const constraintRef = useRef(null);
  return (
    <motion.div
      className="card md:h-[400px] lg:h-[340px]  h-full w-full md:col-span-1"
      initial={{
        opacity: 0,
        y: 100,
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
        margin: "-100px",
      }}
    >
      <CardHeader title="Interests" />

      <div className="pt-5 pl-10 pr-10 mx-auto mt-2 md:mt-0 rounded" ref={constraintRef}>
        {hobbies.map((hobby) => (
          <motion.div
            key={hobby.title}
            className="hover:pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-sky-400  to-emerald-400  me-2 mb-2 hover:cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <span className="relative inline-flex items-center px-2 py-1 transition-colors ease-in duration-200 bg-gray-700 dark:bg-gray-700 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black">
              {hobby.title}
              <span className="ml-1">{hobby.emoji}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HobbiesCard;
