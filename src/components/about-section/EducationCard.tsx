import React, { useState } from "react";
import { CardHeader } from "../CardHeader";
import { motion } from "framer-motion";
import StarIcon from "@/assets/icons/star.svg";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import WordPressIcon from "@/assets/icons/wordpress.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";
import VueIcon from "@/assets/icons/vuejs.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import FlaskIcon from "@/assets/icons/flask.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import NodeIcon from "@/assets/icons/node.svg";
import TypeIcon from "@/assets/icons/typescript.svg";
import NextIcon from "@/assets/icons/next.svg";
import SkillsList from "../SkillsList";

type Skill = {
  title: string;
  icon: React.ReactNode;
  type: "front" | "back";
};

const EducationCard = () => {
  const skills: Skill[] = [
    {
      title: "React",
      icon: <ReactIcon />,
      type: "front",
    },
    {
      title: "Javascript",
      icon: <JavascriptIcon />,
      type: "front",
    },
    {
      title: "Figma",
      icon: <FigmaIcon />,
      type: "front",
    },
    {
      title: "TailwindCSS",
      icon: <TailwindIcon />,
      type: "front",
    },
    {
      title: "VueJS",
      icon: <VueIcon />,
      type: "front",
    },
    {
      title: "TypeScript",
      icon: <TypeIcon />,
      type: "front",
    },
    {
      title: "Laravel",
      icon: <LaravelIcon />,
      type: "back",
    },
    {
      title: "WordPress",
      icon: <WordPressIcon />,
      type: "back",
    },
    {
      title: "Flask",
      icon: <FlaskIcon />,
      type: "back",
    },
    {
      title: "Docker",
      icon: <DockerIcon />,
      type: "back",
    },
    {
      title: "NextJs",
      icon: <NodeIcon />,
      type: "back",
    },
    {
      title: "MongoDB",
      icon: <MongoIcon />,
      type: "back",
    },
  ];

  const frontSkills = skills.filter((skill) => skill.type === "front");
  const backSkills = skills.filter((skill) => skill.type === "back");

  return (
    <motion.div
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
      }}
      className="card sm:h-[420px] md:h-[400px] lg:h-[340px]  md:col-span-2"
    >
      <CardHeader title="Education" className="" />
      <div className="flex flex-col px-6 pt-0 pb-6 gap-5 md:px-10">
        <ul className="list-disc pl-5 text-white/85">
          <li>Data Science Graduate Certificate, Toronto Metropolitan U.</li>
          <li>Bachelor of Computer Science, Carleton University, Ottawa</li>
        </ul>
        <div className="inline-flex items-center gap-2">
          <StarIcon className="size-8 text-emerald-400"></StarIcon>
          <h3 className="font-serif text-xl gradient-underline">Skills</h3>
        </div>
      </div>

      <div
        className="flex flex-col gap-5"
      >
        <SkillsList
          skills={frontSkills}
          itemsWrapperClassName="animate-move-left [animation-duration:40s]"
        />
        <SkillsList
          skills={backSkills}
          itemsWrapperClassName="animate-move-right [animation-duration:40s]"
        />
      </div>
    </motion.div>
  );
};

export default EducationCard;
