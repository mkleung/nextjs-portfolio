import "./navbar.scss"
import {motion} from "framer-motion"

import MyImage from '../../assets/img/mike.jpeg'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'
import github from '../../assets/img/github.svg'


import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <motion.span
                initial={{ opacity:0,scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration: 0.5}} >
                        Mike Dev
            </motion.span>
           
            <div className="social">
                <a href="#"><img src={facebook} alt="facebook" /></a>
               
            </div>
        </div>
    </div>
  )
}
