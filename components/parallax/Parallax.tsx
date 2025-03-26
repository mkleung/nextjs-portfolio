"use client";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { useRef, useEffect } from "react";
import Slide from "./Slide";
import { Tape } from "../Tape";

const Parallax = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div className="mt-10">
      <Tape />
      <div className="overflow-hidden">
        <div className="h-full" />

        <Slide direction={"left"} left={"-20%"} progress={scrollYProgress} />
        <Slide direction={"right"} left={"-120%"} progress={scrollYProgress} />
        <div className="h-full" />
      </div>
      <Tape />
    </div>
  );
};

export default Parallax;
