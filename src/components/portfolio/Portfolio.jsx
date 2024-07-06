import React from 'react'
import './portfolio.css'
import img1 from '../../assets/ducky1.png'
import img2 from '../../assets/zoom2.jpg'
import img3 from '../../assets/ducky.png'
import img4 from '../../assets/pixelfigure.png'
import img5 from '../../assets/chummy.png'
import img6 from '../../assets/chikuwa.png'

const portfolio_data = [
  {
    id: 1,
    image: img1,
    title: 'QuackQuackGO Itinerary Web App',
    github: 'https://github.com/Matt-Hoang/QuackQuackGo'
  },
  {
    id: 2,
    image: img2,
    title: 'Keyboard Gallery',
    github: 'https://github.com/Crisu07/KeebGallery'
  },
  {
    id: 3,
    image: img3,
    title: 'Infridgement Fridge Manager Web App',
    github: 'https://github.com/Tommy-Long4358/Infridgement'
  },
  {
    id: 4,
    image: img4,
    title: 'Text-Based RPG Game',
    github: 'https://github.com/Crisu07/TextRPG'
  },
  {
    id: 5,
    image: img5,
    title: 'Chummy Interactive Discord Bot',
    github: 'https://github.com/Crisu07/ChummyBot'
  },
  {
    id: 6,
    image: img6,
    title: 'Lunaris ChatGBT Discord Bot',
    github: 'https://github.com/Crisu07/LunarisBot'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Projects I have Been Working on</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_container">
        {
          portfolio_data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_itemimg'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_itemcta">
                  <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                  {/* <a href="https://www.youtube.com/watch?v=eTzmMGJANaE" className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio