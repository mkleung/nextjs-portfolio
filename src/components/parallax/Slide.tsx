"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import Phrase from "./Phrase";

interface SlideProps {
  direction: "left" | "right";
  progress: MotionValue<number>;
  left: string | number; // Specify type for left
  imgUrl: string | StaticImport;
}

const Slide: React.FC<SlideProps> = ({ direction, progress, left, imgUrl }) => {
  const tempDirection = direction === "left" ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [150 * tempDirection, -150 * tempDirection]);

  const phrases = [
    "Mobile Friendly",
    "Accessibility",
    "Multilingual",
    "SEO Optimized",
    "UI/UX",
    "Fast Loading",
  ];

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap"
    >
      <div className="px-5 flex gap-5 items-center">
        <p className="text-[5vw]">Mobile Friendly</p>
        <StarIcon className="size-10 text-emerald-300" />
      </div>

      {phrases.map((text) => (
        <Phrase key={text} text={text} />
      ))}
    </motion.div>
  );
};

export default Slide;