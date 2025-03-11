import React from "react";
import { Card } from "@/components/Card";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import bookImage from "@/assets/images/deep.jpg";
import MovingCard from "./MapCard";

const ReadingCard = () => {
  return (
    <motion.div
      className="card md:h-[400px] lg:h-[340px]  h-full w-full md:col-span-1"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
   
        },
      }}
      viewport={{
        once: true,
        margin: '-100px' 
      }}
    >
      <CardHeader title="Reading" />

      <div
        className="w-40 mx-auto mt-2 md:mt-0 rounded"
        style={{ overflow: "hidden" }}
      >
        <Image src={bookImage} alt="book cover"></Image>
      </div>
    </motion.div>
  );
};

export default ReadingCard;
