import "./navbar.scss"

import MyImage from '../../assets/img/mike.jpeg'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'
import github from '../../assets/img/github.svg'


import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <span>Mike Dev</span>
            <div className="social">
                <a href="#"><img src={facebook} alt="facebook" /></a>
               
            </div>
        </div>
    </div>
  )
}
