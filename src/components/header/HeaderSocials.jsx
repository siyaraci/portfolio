import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href="https://www.facebook.com/ciara.caig.3" ><BsFacebook/></a>
    <a href="https://www.instagram.com/ciaracaig" ><BsInstagram/></a>
    <a href="https://github.com/siyaraci" ><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials