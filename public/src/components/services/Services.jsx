import React from 'react'
import './services.css'
import KEEB from '../../assets/tiger6.jpg'

function handleClick() {
  window.location.href = 'https://crisukeebs.netlify.app/';
}

const Services = () => {
  return (
    <section id='services'>
      <h5>My Favorite Past Time</h5>
      <h2>Building Keyboards</h2>
    <div className='container service_container'>
        <div className="service_keeb">
          <div className="service_image">
            <img src={KEEB} alt="Service Image" />
          </div>
        </div>

        {/* about me card background */}
        <div className="service_content">
            <p>
              One of my favorite past times is building custom mechanical keyboards. I have a variety of keyboards in my collection as well as offer service in building custom keyboards! I work closely with clients to achieve a custom keyboard tuned to their liking, providing services such as sourcing parts and assembly. View my keyboard portfolio below!
            </p>
            <div className='servicebuttons'>
              <a onClick={handleClick} className='btn'>Keyboard Portfolio</a>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Services