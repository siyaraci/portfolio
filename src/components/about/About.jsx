import React from 'react'
import './About.css'
import ME from '../../assets/mee.JPG'
import {BsAward} from 'react-icons/bs'
const About = () => {
  return (
    <section id="about">
      <h5> Get to know</h5>
      <h2>ABOUT ME</h2>

      <div className='container about_container'>
        <div className='about_me'>
        
          <div className='about_me_image'>
            <img src={ME} alt="about_me_image"/>
          </div>
        </div>

        <div className='about_contents'>
          <div className='about_cards'>
            <article className='about_card'>
            <BsAward className='about_icon'/>
              <h5>Experince</h5>
              <small>Skills</small>
            </article>

          <article className='about_card'>
          <BsAward className='about_icon'/>
            <h5>My Projects</h5>
            <small>Recent Works</small>
          </article>
      
        <article className='about_card'>
        <BsAward className='about_icon'/>
          <h5>Educational</h5>
          <small>Attainment</small>
        </article>

        </div>
        <p>
       I am a graduate of Bachelor of Science in Information Technology of Polytechnic University of the Philippines- Lopez Branch. I am someone that is a vary hardworking, goal-oriented and adaptable to a challenging environment. I hope to gain more experince and knowledge in programming especially in web developement. 
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>


    </div>
      </div>
    </section>
  )
}

export default About