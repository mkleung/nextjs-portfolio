"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CardHeader } from "../CardHeader";
import { ArticleItem } from "../../types";
import Link from "next/link";
import { BlogProps } from "../../types";

const BlogCard = ({ articles }: BlogProps) => {
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
        margin: "-25px",
      }}
      className="card h-full md:col-span-2 md:h-[400px] lg:h-[340px]"
    >
      <CardHeader title="Blog" className="" />

      <div className="flex flex-col px-6 pt-0 pb-6 mt-2 md:px-10">
        {Object.keys(articles).map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul className="list-disc ml-5">
              {articles[category].map((article, id) => (
                <li className="my-2" key={article.title}>
                  <Link
                    href={`/${article.id}`}
                    className="text-white hover:underline transition duration-150"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogCard;
