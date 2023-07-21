import React from 'react'
import './header.css'
import Resume from './Resume'
import PFP from '../../assets/PFP.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      {/* wrap in general styles container class */}
      <div className="container header_container">
        <h5>Hello, my name is</h5>
        <h1>Chris Nguyen</h1>
        <h5 className='text-light'>Newly Grad Developer</h5>
        <Resume/>
        <Socials/>

        <div className="img">
          <img src={PFP} alt="img" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header