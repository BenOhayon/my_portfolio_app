import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import './NavBar.scss'

const LINK_SLIDING_ANIMATION_DURATION = 350;

export default function NavBar({ scrollToPageTop }) {
  
  return (
    <nav>
      <div className='nav-title nav-button' onClick={scrollToPageTop}>Ben Ohayon</div>
      <ul className="nav-buttons">
        <li><ScrollLink to='about' className='nav-about-button nav-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>About</ScrollLink></li>
        <li><ScrollLink to='projects' className='nav-about-button nav-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Projects</ScrollLink></li>
        <li><ScrollLink to='contact' className='nav-contact-button nav-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Contact</ScrollLink></li>
        <li><a href='../../../documents/resume.pdf' target='_blank' className='nav-resume-button' download>Resume</a></li>
      </ul>
    </nav>
  )
}
