"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/deep.jpg";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import WordPressIcon from "@/assets/icons/wordpress.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";
import VueIcon from "@/assets/icons/vuejs.svg";
import PythonIcon from "@/assets/icons/python.svg";
import NodeIcon from "@/assets/icons/node.svg";

import mapImage from "@/assets/images/ottawa.png";
import smileMemoji from "@/assets/images/mike.webp";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
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

const toolboxItems2 = [
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
    title: "Node/Next Js",
    iconType: NodeIcon,
  },
];

const hobbies = [
  {
    title: "Painting 🎨",
  },
  {
    title: "Pizza Making 🍕",
  },
  {
    title: "Bollywood Movies 🎦",
  },
  {
    title: "Scary Podcasts 😱",
  },
  {
    title: "Bird Photography 📷",
  },
  {
    title: "Biking 🚵‍♂️",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="" description="" />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* map */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              ></Image>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full ">
                <Image
                  src={smileMemoji}
                  alt="map"
                  className="size-20 rounded-full"
                ></Image>
              </div>
            </Card>

            {/* About */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="About Me" description="" className="" />

              <div className="flex flex-col p-6 md:py-8 md:px-10 md:pt-0 gap-5">
                <p>
                I specialize in backend development using PHP, Laravel, and WordPress, 
                along with frontend UI frameworks like React. 
                </p>

                <p>Hobbies</p>

                <div>
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1 mb-2 mr-2"
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            {/* Skills */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Skills" description="" className="" />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-right [animation-duration:100s]"
              />
              <ToolboxItems
                items={toolboxItems2}
                className="mt-5"
                itemsWrapperClassName="animate-move-left [animation-duration:100s]"
              />
            </Card>

            {/* Book */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="Reading" description="" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover"></Image>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
