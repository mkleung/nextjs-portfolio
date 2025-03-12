"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Phrase from "./Phrase";

interface SlideProps {
  direction: "left" | "right";
  progress: MotionValue<number>;
  left: string | number;
}

const Slide: React.FC<SlideProps> = ({ direction, progress, left }) => {
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
    "Full-stack Development",
    "Animations",
    "Google Analytics",
    "Web Design",
    "Responsive",
    "Semantic HTML",
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
