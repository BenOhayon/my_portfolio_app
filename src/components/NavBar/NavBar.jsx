import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import './NavBar.scss'

export default function NavBar({ scrollToPageTop }) {
  
  return (
    <nav>
      <div className='nav-title nav-button' onClick={scrollToPageTop}>Ben Ohayon</div>
      <ul className="nav-buttons">
        <li><ScrollLink to='about' className='nav-about-button nav-button' spy={true} offset={-110} smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to='contact' className='nav-contact-button nav-button' spy={true} offset={-110} smooth={true} duration={500}>Contact</ScrollLink></li>
        <li><a href='../../../documents/resume.pdf' target='_blank' className='nav-resume-button' download>Resume</a></li>
      </ul>
    </nav>
  )
}
