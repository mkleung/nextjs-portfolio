import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const HoverButton = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div
        className="hoverButtonContainer"
        onMouseEnter={(e) => setIsHover(true)}
        onMouseLeave={(e) => setIsHover(false)}
      >
        <motion.div
          className="circle"
          animate={{
            scale: isHover ? 100 : 1,
            backgroundColor: isHover ? "#0a00c1" : "#000",
          }}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
        ></motion.div>

        {/* title */}
        <motion.div
          className="title"
          animate={{ x: isHover ? -8 : 8, color: isHover ? "#FFF" : "#000" }}
        >
          <p>About Us</p>
        </motion.div>

        <motion.div
          className="iconContainer"
          animate={{ x: isHover ? 0 : 24, opacity: isHover ? 0 : 1 }}
        >
          <ArrowRightIcon className="icon" />
        </motion.div>
      </div>
    </>
  );
};

export default HoverButton;
