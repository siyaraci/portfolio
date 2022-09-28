import React from 'react'
import CV from '../../assets/CV.pdf'
const CVCM = () => {
  return (
    <div className='cvcm'>
        <a href={CV} download className='btn'>Download my CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CVCM