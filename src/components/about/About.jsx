import React from 'react'
import './about.css'
import ME from '../../assets/IMG_6528.jpg'
import {BsFolderCheck} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Learn More</h5>
      <h2>About Me</h2>

      {/* about me pfp */}
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        {/* about me card background */}
        <div className="about_content">
          {/* <div className="about_cards">
            <article className='about_card'>
              <BsFolderCheck className='about_icon'/>
              <h5>Projects</h5>
              <small>Ever Growing</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>Clients Example</small>
            </article>

            <article className='about_card'>
              <MdWorkOutline className='about_icon'/>
              <h5>Experience</h5>
              <small>Experience Example</small>
            </article>
            </div> */}
            <p>
              I am a first-generation Vietnamese-American. I graduated from California State University of Long Beach, with a Bachelor of Science in Computer Science. I enjoy a variety of hobbies ranging from collecting Pokemon cards, building keyboards, and simply hanging out with my friends and family.
            </p>
            <div className='aboutbuttons'>
              <a href="#contact" className='btn'>Contact Me</a>
              <a href="#portfolio" className='btn'>View my Projects</a>
            </div>
        </div>
      </div>

    </section>
  )
}

export default About