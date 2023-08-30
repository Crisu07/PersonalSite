import React from 'react'
import './services.css'

function handleClick() {
  window.location.href = '/commissions';
}

const Services = () => {
  return (
    <section id='services'>Services (Keyboard Commissions)
    <button className='btn' onClick={handleClick}>Commissions</button>
    </section>
  )
}

export default Services