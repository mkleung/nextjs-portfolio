"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ContactForm } from "@/components/ContactForm";

export const ContactSection = () => {
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <motion.div
          className="gradient text-gray-900 py-8 px-10 rounded-3xl text-center relative"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            amount: "all",
          }}
        >
          <div className="flex flex-col gap-8  md:gap-16 items-center md:flex-row md:text-left w-full">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let me build a great website for you!
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your project to life? I can help you achieve your
                goals.
              </p>
            </div>

            <div className="ml-5">
              {/* Contact Me button */}
              <button
                className="flex items-center justify-center relative cursor-pointer bg-gray-800 rounded-[24px] overflow-clip w-[160px] py-2.5"
                onMouseEnter={(e) => setIsHover(true)}
                onMouseLeave={(e) => setIsHover(false)}
                onClick={() => setOpen(true)}
              >
                {/* Dot */}
                <motion.div
                  className="w-1.5 h-1.5 bg-white rounded-full "
                  animate={{
                    scale: isHover ? 100 : 1,

                    x: isHover ? 0 : -12,
                  }}
                  transition={{
                    ease: "easeIn",
                    duration: 0.3,
                  }}
                ></motion.div>

                {/* title */}
                <motion.div
                  className="text-[15px] tracking-[-0.5px] z-[9] mr-2"
                  animate={{ color: isHover ? "#000" : "#FFF" }}
                >
                  Contact Me
                </motion.div>

                <motion.div
                  className="flex items-center justify-center absolute right-1/4"
                  animate={{ x: isHover ? 0 : 24, opacity: isHover ? 0 : 1 }}
                >
                  <ArrowRightIcon className="w-4 h-4 stroke-2 text-white" />
                </motion.div>
              </button>

              <ContactForm open={open} setOpen={setOpen} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
