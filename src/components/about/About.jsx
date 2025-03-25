import React from 'react'
import './about.css'
import ME from '../../assets/IMG_6528.jpg'

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
            <p>
              I am a first-generation Vietnamese-American. I graduated from California State University of Long Beach, with a Bachelor of Science in Computer Science. I've always enjoyed video games growing up and that sparked my passion to get into programming. It is a joy learning new things.
            </p>
            <p>
              I enjoy a variety of hobbies ranging between building custom keyboards, shooting photography, and collecting a variety of trading card games such as Pokemon, One Piece, and Magic the Gathering. I also am a Pokemon TCG player and judge.
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