import React from 'react'
import {BsGithub, BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com" target="blank"><BsGithub/></a>
        <a href="https://instagram.com" target="blank"><AiFillInstagram/></a>
        <a href="https://facebook.com" target="blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials