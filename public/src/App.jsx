import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    // react fragment
    <div> 
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
    </div>
  )
}

export default App