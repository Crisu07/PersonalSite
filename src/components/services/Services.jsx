import React from 'react'
import './services.css'
import KEEB from '../../assets/tiger6.jpg'

function handleClick() {
  window.location.href = 'https://crisukeebs.netlify.app/';
}

const Services = () => {
  return (
    <section id='services'>
      <h5>Hobbies</h5>
      <h2>Photography and Building Keyboards</h2>
    <div className='container service_container'>
        <div className="service_keeb">
          <div className="service_image">
            <img src={KEEB} alt="Service Image" />
          </div>
        </div>

        {/* about me card background */}
        <div className="service_content">
            <p>
              One of my favorite past times is photography! I recently started photography as a way to capture moments and memories, I want a way to look back on my life and treasure it. My current camera is the Fujifilm XM-5 and it's been my go-to for street photography, portraits, or even everyday life. Although I am still quite new, you can find my photos on my Instagram!
            </p>
            <p>
              My other hobby is building custom mechanical keyboards. I have a variety of keyboards in my collection as well as offer service in building custom keyboards! I work closely with clients to achieve a custom keyboard tuned to their liking, providing services such as sourcing parts and assembly.
              View my keyboard portfolio below! 
            </p>
            <div className='servicebuttons'>
              <a href="https://www.instagram.com/crisu.fps/" target='_blank' className='btn'>Instagram</a>
              <a onClick={handleClick} className='btn'>Keyboards</a>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Services