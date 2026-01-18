// import React, { useEffect } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail} from 'react-icons/ai'
import { BsSuitcaseLg } from "react-icons/bs";
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  // Use state to change colors of selected icon on nav bar 
  const [navActive, setNavActive] = useState('#')

  return (
    <nav>
      {/* Onclick, change use state to about, and if it is about or whatever, change to active */}
      <a href="/#" onClick={() => setNavActive('#')} 
        className={navActive === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setNavActive('#about')} 
        className={navActive === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setNavActive('#experience')}
        className={navActive === '#experience' ? 'active' : ''}><BsSuitcaseLg/></a>
      <a href="#portfolio" onClick={() => setNavActive('#portfolio')}
        className={navActive === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen/></a>
      <a href="#services" onClick={() => setNavActive('#services')}
        className={navActive === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setNavActive('#contact')}
        className={navActive === '#contact' ? 'active' : ''}><AiOutlineMail/></a>
    </nav>
  )
}

export default Nav