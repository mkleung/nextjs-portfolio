import "./hero.scss"
import { motion } from "framer-motion"
import mylogo from '../../assets/img/mike.jpeg'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}


const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '100%',
        transition: {
            repeat: Infinity,
            duration: 20,
            repeatType:"mirror",
        },
    },
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div 
            className="textContainer" 
            variants={textVariants} 
            initial='initial'
            animate="animate">
                <motion.h2 variants={textVariants}></motion.h2>
                <motion.h2 variants={textVariants}>Hello there! I'm Michael Leung and I build beautiful websites</motion.h2>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See my work</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>

        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Design Code Ship
        </motion.div>

        <div className="imageContainer">
            <img src={mylogo} alt="mike" />
        </div>
        
    </div>
  )
}

export default Hero