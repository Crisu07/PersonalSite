import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Reviews from './components/reviews/Reviews'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    // react fragment
    <> 
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
        <Footer />
    </>
  )
}

export default App