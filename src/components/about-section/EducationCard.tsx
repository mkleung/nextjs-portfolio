import React from 'react'
import { Card } from '../Card'
import { CardHeader } from '../CardHeader'
import StarIcon from "@/assets/icons/star.svg";
import { Skills } from "@/components/about-section/Skills";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import WordPressIcon from "@/assets/icons/wordpress.svg";
import LaravelIcon from "@/assets/icons/laravel.svg";
import VueIcon from "@/assets/icons/vuejs.svg";
import PythonIcon from "@/assets/icons/python.svg";
import NodeIcon from "@/assets/icons/node.svg";

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

const EducationCard = () => {
  return (
    <>
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
    </>
  )
}

export default EducationCard