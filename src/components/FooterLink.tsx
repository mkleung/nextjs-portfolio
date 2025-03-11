import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const FooterLink = ({ title, url }: { title: string; url: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      key=""
      className="items-center gap-1.5 cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex gap-1">
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {title}
          <div
            className={`border-t-2 border-white rounded-xl transition-all duration-300 ease-in-out ${
              hovered ? "w-full" : "w-0"
            }`}
          ></div>
        </motion.div>
        <ArrowUpRightIcon className="w-4 h-4" />
      </div>
    </a>
  );
};

export default FooterLink;
