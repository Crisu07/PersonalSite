import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail} from 'react-icons/ai'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {BsPeople} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><MdOutlineWorkHistory/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#portfolio"><AiOutlineFolderOpen/></a>
      <a href="#reviews"><BsPeople/></a>
      <a href="#contact"><AiOutlineMail/></a>
    </nav>
  )
}

export default Nav