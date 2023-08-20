import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills and Tools I know</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>

        {/* lANGUAGES */}
        <div className="experience_languages">
          <h3>Languages</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Kotlin</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>
          </div>

        </div>

        {/* TOOLS */}
        <div className="experience_tools">
          <h3>Tools</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Visual Studio Code</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>VS Community</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>IntelliJ IDEA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Microsoft Office</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>MySQL/PostgreSQL</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsBookmarkCheckFill className='experience_details-icon'/>
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
        </div>
        </div>
      </div>

    </section>
    
  )
}

export default Experience