
// "use client";
// import Picture1 from "@/assets/images/1.jpg";
// import Picture2 from "@/assets/images/2.jpg";
// import Picture3 from "@/assets/images/3.jpg";
// import { useScroll } from "framer-motion";
// import Lenis from "lenis";
// import Image from "next/image";
// import { useRef, useEffect } from "react";

// export const Parallax = () => {

//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//   }, []);

//   return (
//     <div className="overflow-hidden">
//       <div className="h-full" />
//       <Slide url={Picture1.src} left={"-40%"}  />
//       <Slide url={Picture2.src}  left={"-25%"} />
//       {/* <Slide url={Picture1.src} direction={'left'} left={"-40%"} progress={scrollYProgress} />
//       <Slide url={Picture2.src} direction={'right'} left={"-25%"} progress={scrollYProgress} /> */}
//       <div className="h-full" />
//     </div>
//   );
// };