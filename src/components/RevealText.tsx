import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const RevealText = ({
  name,
  title,
}: {
  name: string;
  title: string;
}) => {
  return (
    <>
      <div className="grid place-content-center gap-2 px-3 text-white">
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="relative block overflow-hidden text-5xl font-black caret-none select-none"
          style={{
            lineHeight: 1.25,
          }}
        >
          <div>
            {name.split("").map((l, i) => (
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
            {title.split("").map((l, i) => (
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
      </div>
    </>
  );
};
