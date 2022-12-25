import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouteLink } from 'react-router-dom'

import './NavBar.scss'

export default function NavBar() {

  function scrollToPageTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <nav>
      <div className='nav-title nav-button' onClick={scrollToPageTop}>Ben Ohayon</div>
      <ul className="nav-buttons">
        {/* <li><ScrollLink to='hero' className='nav-home-button nav-button' spy={true} smooth={true} duration={200}>Home</ScrollLink></li> */}
        <li><ScrollLink to='about' className='nav-user-button nav-button' spy={true} smooth={true} duration={200}>About</ScrollLink></li>
        <li><ScrollLink to='contact' className='nav-user-button nav-button' spy={true} smooth={true} duration={200}>Contact</ScrollLink></li>
        <li><ScrollLink to='contact' className='nav-user-button nav-button' spy={true} smooth={true} duration={200}>Resume</ScrollLink></li>
      </ul>
    </nav>
  )
}
