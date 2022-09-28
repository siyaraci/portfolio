import React from 'react'
import './Education.css'
import {FaGraduationCap} from 'react-icons/fa'
const Education = () => {
  return (
   <section id="education"> 
    <h5> Schools that I went to</h5>
    <h2>MY EDUCATION</h2>

   <div className='container education_container'>
   <div className='education_content'>
   <article className='education_details'>
        
        <FaGraduationCap/>
     <h4>Sta. Monica Elementary School</h4>
     <small>Primary</small>
   </article>

   <article className='experience_details'>
   <FaGraduationCap/>
     <h4>San Isidro National High School</h4>
     <small>Junior High School</small>
   </article>

   <article className='experience_details'>
   <FaGraduationCap/>
        <h4>San Isidro National High School</h4>
        <small>Senior High School</small>
 </article>

   <article className='experience_details'>
   <FaGraduationCap/>
     <h4>Polytechnic University of the Philippines- Lopez Branch</h4>
     <small>College</small>
   </article>

 </div>
</div>

   </section>
  )
}

export default Education