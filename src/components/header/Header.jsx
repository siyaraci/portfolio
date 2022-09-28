import React from 'react'
import './Header.css'
import CVCM from './CVCM'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
        <div id="home" className='container header_container'>
            <h5>Hello! I am</h5>
            <h1> Ciara Caig </h1>
            <h5>Web Developer</h5>

            <CVCM />

            <HeaderSocials/>

            <div className='me'>
                <img src={ME} alt='me'/>
            </div>
        
            <a href='#contact' className='scroll_down'> Scroll Down</a>
          

        </div>
    </header>
  )
}

export default Header