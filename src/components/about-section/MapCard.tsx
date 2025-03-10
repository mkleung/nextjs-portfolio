import React from "react";
import mapImage from "@/assets/images/ottawa.png";
import smileMemoji from "@/assets/images/mike.webp";
import Image from "next/image";
import MovingCard from "@/components/about-section/MovingCard";
import { motion } from "framer-motion";

const MapCard = () => {
  return (
    <motion.div
    
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{
        once: true,
      }}
    >
      <MovingCard>
        <Image
          src={mapImage}
          alt="map"
          className="h-full w-full object-cover object-left-top "
        ></Image>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full ">
          <Image
            src={smileMemoji}
            alt="map"
            className="size-20 rounded-full"
          ></Image>
        </div>
      </MovingCard>
    </motion.div>
  );
};

export default MapCard;
