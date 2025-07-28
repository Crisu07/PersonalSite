import React from 'react'
import './contact.css'
import ContactNumber from './ContactNumber'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLogoDiscord } from "react-icons/io5";
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import { FaPhoneSquareAlt } from "react-icons/fa";
import {FaYoutube} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>My Socials</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMarkEmailRead className='contact_optionicon'/>
            <h4>Email</h4>
            <h5>chrisnguyen127@gmail.com</h5>
            <a href="mailto:chrisnguyen127@gmail.com">Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsLinkedin className='contact_optionicon'/>
            <h4>LinkedIn</h4>
            <h5>Chris Nguyen</h5>
            <a href="https://www.linkedin.com/in/chris-nguyen-629327275/" target='_blank'>Message me on LinkedIn</a>
          </article>

          <article className='contact_option'>
            <FaPhoneSquareAlt className='contact_optionicon'/>
            <h4>Phone Number</h4>
            <h5>(714) 332-9962</h5>
            <ContactNumber copyText= "7143329962">Copy Phone Number</ContactNumber>
          </article>

          <article className='contact_option'>
              <BsInstagram className='contact_optionicon'/>
              <h4>Instagram</h4>
              <h5>crisu.fps</h5>
              <a href="https://www.instagram.com/crisu.fps/" target='_blank'>Follow me on Insta</a>
            </article>

            <article className='contact_option'>
              <IoLogoDiscord className='contact_optionicon'/>
              <h4>Discord</h4>
              <h5>Gaming</h5>
              <a href="https://discordapp.com/users/201826484145487873" target='_blank'>Add me on Discord</a>
            </article>

            <article className='contact_option'>
              <FaYoutube className='contact_optionicon'/>
              <h4>Youtube</h4>
              <h5>Keyboard Videos</h5>
              <a href="https://www.youtube.com/@crisufps/videos" target='_blank'>Check out my Youtube</a>
            </article>
        </div>
        
        {/* <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact