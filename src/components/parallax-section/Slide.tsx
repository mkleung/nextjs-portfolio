"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Phrase from "./Phrase";

interface SlideProps {
  direction: "left" | "right";
  progress: MotionValue<number>;
  left: string | number; 
  imgUrl: string | StaticImport;
}

const Slide: React.FC<SlideProps> = ({ direction, progress, left, imgUrl }) => {
  const tempDirection = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * tempDirection, -150 * tempDirection]
  );

  const phrases = [
    "Mobile Friendly",
    "Accessibility",
    "Wireframing",
    "SEO Optimized",
    "UI/UX",
    "Fast Loading",
    'Full-stack Development',
    'Animations',
    'Google Analytics',
    'Web Design',
    'Testing'
  ];

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap"
    >
      {phrases.map((text) => (
        <Phrase key={text} text={text} />
      ))}
    </motion.div>
  );
};

export default Slide;
