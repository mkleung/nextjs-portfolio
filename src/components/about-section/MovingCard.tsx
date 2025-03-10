import React, { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import mapImage from "@/assets/images/ottawa.png";
import smileMemoji from "@/assets/images/mike.webp";

const cardRotation = 10;
const cardScale = 1.07;
const sheenSize = 500;

interface MovingCardProps {
  children: ReactNode; // Define children prop type
}

const MovingCard: React.FC<MovingCardProps> = ({ children }) => {
  const xPcnt = useSpring(0, { bounce: 0 });
  const yPcnt = useSpring(0, { bounce: 0 });
  const scale = useSpring(1, { bounce: 0 });
  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });

  const rotateX = useTransform(
    yPcnt,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );
  const rotateY = useTransform(
    xPcnt,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );
  const sheenX = useTransform(mouseX, (value) => value - sheenSize / 2);
  const sheenY = useTransform(mouseY, (value) => value - sheenSize / 2);

  const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const currentMouseX = e.clientX - left;
    const currentMouseY = e.clientY - top;

    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    };
  };

  const handleMouseMove: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY, containerWidth, containerHeight } =
      getMousePosition(e);

    xPcnt.set(currentMouseX / containerWidth - 0.5);
    yPcnt.set(currentMouseY / containerWidth - 0.5);

    mouseX.set(currentMouseX);
    mouseY.set(currentMouseY);
  };

  const handleMouseEnter: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY } = getMousePosition(e);
    scale.set(cardScale);
    mouseX.jump(currentMouseX);
    mouseY.jump(currentMouseY);
  };

  const handleMouseLeave: MouseEventHandler = (e) => {
    scale.set(1);
    xPcnt.set(0);
    yPcnt.set(0);
  };

  return (
    <>
      <motion.div
        className="flex flex-col h-full  rounded-xl  shadow-lg overflow-hidden group hover:cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.div
          className="absolute z-10 opacity-5 rounded-full blur-md group-hover:opacity-20 transition-opacity duration-200"
          style={{
            background: "radial-gradient(white, #3984ff00 80%)",
            left: sheenX,
            top: sheenY,
            height: sheenSize,
            width: sheenSize,
          }}
        />
        {children}
      </motion.div>
    </>
  );
};

export default MovingCard;
