"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Portrait from "@/components/Portrait";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { RevealText } from "@/components/RevealText";

export const HeroSection = () => {
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [href, setHref] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHref(window.location.href);
    }
  }, []);

  return (
    <section id="home" className="py-32 lg:py-40">
      <div className="container">
        <motion.div
          className="flex flex-col items-center"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          viewport={{
            once: true,
          }}
        >
          <Portrait />
          <div className="max-w-2xl mx-auto">
            <h1 className="font-serif text-5xl text-center mt-8 flex flex-col md:flex-row">
              <span className=" md:pt-1.5">Hello I&apos;m</span>
              <span className="max-md:hidden">
                <RevealText
                  name="Michael&nbsp;Leung"
                  title="Web&nbsp;Architect"
                />
              </span>

              <span className="visible md:hidden">Michael Leung</span>
            </h1>
            <p className="text-center text-white/85 md:text-md mt-5">
              I am a web developer who loves to create beautiful things.
            </p>
          </div>

          <div className="flex flex-col items-center md:flex-row justify-center mt-5 pt-5">


            <motion.a
              href="#contact"
              className="hover:cursor-pointer relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br gradient "
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
              }}
            >
              <span className="flex px-5 py-1 transition-colors ease-in duration-200 bg-gray-800 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black">
                View Portfolio{" "}
                <ArrowDownIcon className="w-4 h-4 stroke-2 text-white mt-0.5 ml-1 group-hover:text-black transition-colors ease-in duration-200" />
              </span>
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
