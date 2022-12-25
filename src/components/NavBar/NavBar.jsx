import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

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
        <li><ScrollLink to='about' className='nav-user-button nav-button' spy={true} offset={-20} smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to='contact' className='nav-user-button nav-button' spy={true} offset={-110} smooth={true} duration={500}>Contact</ScrollLink></li>
        <li><ScrollLink to='contact' className='nav-user-button nav-button' spy={true} offset={-20} smooth={true} duration={500}>Resume</ScrollLink></li>
      </ul>
    </nav>
  )
}
