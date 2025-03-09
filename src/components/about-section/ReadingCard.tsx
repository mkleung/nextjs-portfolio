import React from "react";
import { Card } from "@/components/Card";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import bookImage from "@/assets/images/deep.jpg";
import MovingCard from "./MovingCard";

const ReadingCard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
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
      {/* Book */}
      <Card className="h-full lg:h-[340px] md:col-span-2 lg:col-span-1">
        <CardHeader title="Reading" />

        <div
          className="w-40 mx-auto mt-2 md:mt-0 rounded"
          style={{ overflow: "hidden" }}
        >
          <Image src={bookImage} alt="book cover"></Image>
        </div>
      </Card>
    </motion.div>
  );
};

export default ReadingCard;
