"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CardHeader } from "@/components/CardHeader";


const BlogCard  = () => {

  return (
    <motion.div
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
        margin: "-50px",
      }}
      className="card h-full md:col-span-2 md:h-[400px] lg:h-[340px]"
    >
      <CardHeader title="Blog Articles" className="" />

      <div className="flex flex-col px-6 pt-0 pb-6 mt-2 md:px-10">
        {/* <ul className=" text-white/85 list-disc ml-5">

 
        </ul> */}
        <div>Blog is currently under construction</div>
      </div>
    </motion.div>
  );
};



export default BlogCard
