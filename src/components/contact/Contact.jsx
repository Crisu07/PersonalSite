import React from 'react'
import './contact.css'
import ContactNumber from './ContactNumber'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLogoDiscord } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
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
            <IoLogoDiscord className='contact_optionicon'/>
            <h4>Discord</h4>
            <h5>Crisu</h5>
            <a href="https://discordapp.com/users/201826484145487873" target='_blank'>Add my Discord</a>
          </article>

          <article className='contact_option'>
            <FaLinkedin className='contact_optionicon'/>
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