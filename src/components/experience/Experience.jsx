import React from 'react'
import './Experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai';
const Experience = () => {
  return (
    <section id="experience">
      <h5> Skills that I possess</h5>
      <h2>MY EXPERIENCE</h2>

      <div className='container experience_container'>
      
        <div className='frontend'>
          <h3><center>Frontend</center></h3>

          <div className='experience_content'>
            <article className='experience_details'>
              <AiOutlineCheckCircle/>
              <h4>HTML</h4>
              <small>Experienced</small>
            </article>

            <article className='experience_details'>
              <AiOutlineCheckCircle/>
              <h4>CSS</h4>
              <small>Intermediate</small>
            </article>

            <article className='experience_details'>
              <AiOutlineCheckCircle/>
              <h4>Bootstrap</h4>
              <small>Intermediate</small>
            </article>
        
            <article className='experience_details'>
              <AiOutlineCheckCircle/>
              <h4>ReactJS</h4>
              <small>Beginner</small>
            </article>

          </div>
        </div>

        <div className='backend'>
        <h3><center>Backend</center></h3>


          <div className='experience_content'>
            <article className='experience_details'>
              <AiOutlineCheckCircle/>
              <h4>PHP</h4>
              <small>Intermediate</small>
            </article>

            <article className='experience_details'>
              <AiOutlineCheckCircle/>
              <h4>MySQL</h4>
              <small>Intermediate</small>
            </article>

            <article className='experience_details'>
              <AiOutlineCheckCircle/>
              <h4>Java</h4>
              <small>Intermediate</small>
            </article>
        
            <article className='experience_details'>
             
            <AiOutlineCheckCircle/> <h4>C++</h4>
              <small>Intermediate</small>
            </article>
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default Experience