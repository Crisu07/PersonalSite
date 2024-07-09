import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://www.linkedin.com/in/chris-nguyen-629327275/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Crisu07" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/chrispy.ng/" target='_blank'><BsInstagram/></a>
        <a href="https://www.youtube.com/@acrisu/videos" target='_blank'><FaYoutube/></a>
    </div>
  )
}

export default Socials