import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const cardRotation = 15;
const cardScale = 1.07;
const sheenSize = 500;

const MovingCard: React.FC = () => {
  const xPcnt = useSpring(0, { bounce: 0 });
  const yPcnt = useSpring(0, { bounce: 0 });
  const scale = useSpring(1, { bounce: 0 });
  const mouseX = useSpring(0, { bounce: 0});
  const mouseY = useSpring(0, { bounce: 0});

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

  const sheenX = useTransform(() => mouseX.get() - sheenSize / 2)
  const sheenY = useTransform(() => mouseY.get() - sheenSize / 2)

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
    
    const {currentMouseX, currentMouseY} = getMousePosition(e)
    scale.set(cardScale);
    mouseX.jump(currentMouseX)
    mouseY.jump(currentMouseY)
  };

  const handleMouseLeave: MouseEventHandler = (e) => {
    scale.set(1);
    xPcnt.set(0);
    yPcnt.set(0);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        className="flex flex-col h-fill w-64 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-400 p-4 shadow-lg overflow-hidden group"
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
          className="absolute z-10 opacity-40 rounded-full blur-md group-hover:opacity-30 transition-opacity duration-200"
          style={{
            background: "radial-gradient(white, #3984ff00 80%)",
            left: sheenX,
            top: sheenY,
            height: sheenSize,
            width: sheenSize,
          }}
        />
        <CardContent />
      </motion.div>
    </div>
  );
};

export default MovingCard;

const CardContent = () => {
  return (
    <>
      <div className="flex flex-col gap-0 mt-4">
        <h1 className="text-xl font-semibold tracking-tight leading-tight">
          Built With Code
        </h1>
        <p className="text-sm text-neutral-700 font-mono">YouTube</p>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-[0.6rem] font-medium px-2 py-[3px] border-neutral-700 text-neutral-700 border-[1px] rounded-sm">
          Est. January 2021
        </span>
        <button className="fill-[#FF0000] w-6 opacity-70">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube</title>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </button>
      </div>
    </>
  );
};
