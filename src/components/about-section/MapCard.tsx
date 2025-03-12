import React, { MouseEventHandler, ReactNode, useState  } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import mapImage from "@/assets/images/ottawa6.png";
import smileMemoji from "@/assets/images/mike.webp";

const cardRotation = 10;
const cardScale = 1.07;
const sheenSize = 500;



const MapCard = () => {

  const [isClicked, setIsClicked] = useState(false);

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
  yPcnt.set(currentMouseY / containerHeight - 0.5); 

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
    setIsClicked(false);
  };

  return (
    <motion.div className=" md:h-[400px] lg:h-[340px] h-full w-full md:col-span-1 z-10"
    initial={{
      opacity: 0,
      x: -100,
      scale: 1 
    }}
    animate={{ scale: isClicked ? 1.1 : 1 }}
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
    onClick={() => {
      setIsClicked(!isClicked);
    }}>
      <motion.div
        className="flex flex-col h-full  rounded-3xl  shadow-lg overflow-hidden group hover:cursor-zoom-in"
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
      </motion.div>
    </motion.div>
  );
};

export default MapCard;
