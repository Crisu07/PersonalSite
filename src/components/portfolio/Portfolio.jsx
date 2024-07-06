import React from 'react'
import './portfolio.css'
import img1 from '../../assets/ducky.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_container">
        <article className='portfolio_item'>
          <div className='portfolio_itemimg'>
            <img src={img1} alt=""/>
          </div>
          <h3>this is a protfolio item title</h3>
          <div className="portfolio_itemcta">
            <a href="https://github.com/Matt-Hoang/QuackQuackGo" className='btn' target='_blank'>Github</a>
            <a href="https://www.youtube.com/watch?v=eTzmMGJANaE" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_itemimg'>
            <img src={img1} alt=""/>
          </div>
          <h3>this is a protfolio item title</h3>
          <div className="portfolio_itemcta">
            <a href="https://github.com/Matt-Hoang/QuackQuackGo" className='btn' target='_blank'>Github</a>
            <a href="https://www.youtube.com/watch?v=eTzmMGJANaE" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_itemimg'>
            <img src={img1} alt=""/>
          </div>
          <h3>this is a protfolio item title</h3>
          <div className="portfolio_itemcta">
            <a href="https://github.com/Matt-Hoang/QuackQuackGo" className='btn' target='_blank'>Github</a>
            <a href="https://www.youtube.com/watch?v=eTzmMGJANaE" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_itemimg'>
            <img src={img1} alt=""/>
          </div>
          <h3>this is a protfolio item title</h3>
          <div className="portfolio_itemcta">
            <a href="https://github.com/Matt-Hoang/QuackQuackGo" className='btn' target='_blank'>Github</a>
            <a href="https://www.youtube.com/watch?v=eTzmMGJANaE" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_itemimg'>
            <img src={img1} alt=""/>
          </div>
          <h3>this is a protfolio item title</h3>
          <div className="portfolio_itemcta">
            <a href="https://github.com/Matt-Hoang/QuackQuackGo" className='btn' target='_blank'>Github</a>
            <a href="https://www.youtube.com/watch?v=eTzmMGJANaE" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_itemimg'>
            <img src={img1} alt=""/>
          </div>
          <h3>this is a protfolio item title</h3>
          <div className="portfolio_itemcta">
            <a href="https://github.com/Matt-Hoang/QuackQuackGo" className='btn' target='_blank'>Github</a>
            <a href="https://www.youtube.com/watch?v=eTzmMGJANaE" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio