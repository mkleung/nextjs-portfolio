import React from "react";
import { motion } from "framer-motion";

export const RevealText = ({ title }: { title: string }) => {
  return (
    <>
      <div className="grid place-content-center gap-2 px-8 py-5 text-white">
        <FlipLink>{title}</FlipLink>
      </div>
    </>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }: { children: string }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden text-5xl font-black caret-none select-none"
      style={{
        lineHeight: 1.25,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block caret-none"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
