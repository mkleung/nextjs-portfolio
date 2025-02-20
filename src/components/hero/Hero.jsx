import "./hero.scss"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import mylogo from '../../assets/img/mike.webp'

const Hero = ({type}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0,1], ["0%","500%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["0%","100%"]);


  return (
    <div className="hero">

      <div className="main-wrapper">
        <img className="logo" src={mylogo} alt="mike" />
        <motion.h2>I'm Michael and</motion.h2>
        <motion.h1>I craft visually appealing websites</motion.h1>
        <motion.button>Let's Connect</motion.button>
      </div>




        <motion.div className="mountains"></motion.div>
        <motion.div  style={{y:yBg}} className="planets"></motion.div>
        <motion.div  style={{x:yBg}}  className="stars"></motion.div>
    </div>
  )
}

export default Hero