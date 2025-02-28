import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { ppid } from "process";

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
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Pizza Making",
    emoji: "🍕",
    left: "50%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "10%",
    top: "35%",
  },
  {
    title: "Biking",
    emoji: "🚵‍♂️",
    left: "35%",
    right: "40%",
  },
  {
    title: "Watching Movies",
    emoji: "🎦",
    left: "70%",
    right: "45%",
  },
  {
    title: "Reading Horror Books",
    emoji: "📖",
    left: "5%",
    right: "65%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="My world"
          description="hello"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* Book */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Test description" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover"></Image>
              </div>
            </Card>

            {/* Skills */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Skills"
                description="Technologies I use"
                className=""
              />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-5"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            {/* hobbies */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Hobbies"
                description="My interests"
                className="px-6 py-6"
              />

              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* map */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              ></Image>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full ">
                <Image src={smileMemoji} alt="map" className="size-20"></Image>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
