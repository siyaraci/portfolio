import React from 'react'
import './Nav.css'
import {MdOutlineHome} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {TbMessageCircle2} from 'react-icons/tb'
import {useState} from 'react'
const Nav = () => {
    const [activeNav,setActiveNav] = useState('#home')
  return (
    <nav>
        <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><MdOutlineHome/></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href='#experience'><HiOutlineBookOpen/></a>
        <a href ='#contact'><TbMessageCircle2/></a>

    </nav>
  )
}

export default Nav