import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const HoverButton = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-center relative cursor-pointer bg-[#111827] rounded-[24px] overflow-clip w-[160px] py-2.5"
        onMouseEnter={(e) => setIsHover(true)}
        onMouseLeave={(e) => setIsHover(false)}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-white rounded-full "
          animate={{
            scale: isHover ? 100 : 1,
            backgroundColor: isHover ? "#FFF" : "#FFF",
            x: isHover ? 0 : -12,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.3,
          }}
        >
        </motion.div>

        {/* title */}
        <motion.div
          className="text-[15px] tracking-[-0.5px] z-[99] mr-2"
          animate={{ color: isHover ? "#000" : "#FFF" }}
        >
          <p>Contact Me</p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center absolute right-1/4"
          animate={{ x: isHover ? 0 : 24, opacity: isHover ? 0 : 1 }}
        >
          <ArrowRightIcon className="w-4 h-4 stroke-2 text-white" />
        </motion.div>
      </div>
    </>
  );
};

export default HoverButton;
