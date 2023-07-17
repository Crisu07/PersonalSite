// File for download resume button
import React from 'react'
import rs from '../../assets/Chris_Resume_v1.pdf'

const Resume = () => {
  return (
    <div className='resume'>
        <a href={rs} target="_blank" className='btn btn-primary'>View Resume</a>
        <a href={rs} download className='btn'>Download Resume</a>
        {/* contact id will jump us to that section when clicked */}
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Resume