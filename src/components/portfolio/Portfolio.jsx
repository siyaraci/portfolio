import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/IMG.jpg'
import LMS from '../../assets/LMS.jpg'

const portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My recent works</h5>
    <h2>MY PROJECTS</h2>

        <div className='container portfolio_container'>
          <div className='portfolio_items'>
            <h3>Simple Ordering System</h3>
            <div className='portfolio_item_image'>
              <img src={IMG} alt="portfolio_item_image"/>
            </div> 
             <center><a href="https://www.github.com/siyaraci/Simple-Ordering-System" className='btn btn-primary gt'>Go to Github</a></center>
          </div>

          <div className='portfolio_items'>
            <h3>Learning Management System</h3>
            <div className='portfolio_item_image'>
              <img src={LMS} alt="portfolio_item_image"/>
            </div> 
             <center><a href="https://www.github.com/siyaraci/Simple-Ordering-System" className='btn btn-primary gt'>Go to Github</a></center>
          </div>
        </div>
    </section>
  )
}

export default portfolio