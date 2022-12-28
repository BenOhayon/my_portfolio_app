import React, { useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import menuIcon from '../../../assets/menu-icon.svg'
import resumeFile from '../../../documents/resume.pdf'

import './NavBar.scss'

const LINK_SLIDING_ANIMATION_DURATION = 350;

export default function NavBar({ scrollToPageTop }) {

  const mobileMenuRef = useRef()

  function toggleNavBarMenu(e) {
    mobileMenuRef.current.classList.toggle('hidden')
  }

  function closeNavBarMenu(e) {
    mobileMenuRef.current.classList.add('hidden')
  }
  
  return (
    <nav>
      <div className='nav-title nav-button' onClick={scrollToPageTop}>Ben Ohayon</div>
      <ul className="nav-buttons">
        <li><ScrollLink to='about' className='nav-about-button nav-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>About</ScrollLink></li>
        <li><ScrollLink to='projects' className='nav-about-button nav-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Projects</ScrollLink></li>
        <li><ScrollLink to='contact' className='nav-contact-button nav-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Contact</ScrollLink></li>
        <li><a href={resumeFile} target='_blank' className='nav-resume-button' download='ben_ohayon_resume'>Resume</a></li>
      </ul>
      <div className='mobile-navbar-menu-button hidden' onClick={toggleNavBarMenu}><img src={menuIcon} alt='mobile navbar menu' /></div>
      <ul ref={mobileMenuRef} className="mobile-navbar-menu hidden">
        <li><ScrollLink onClick={closeNavBarMenu} to='about' className='nav-about-button menu-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>About</ScrollLink></li>
        <li><ScrollLink onClick={closeNavBarMenu} to='projects' className='nav-about-button menu-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Projects</ScrollLink></li>
        <li><ScrollLink onClick={closeNavBarMenu} to='contact' className='nav-contact-button menu-button' spy={true} offset={-110} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Contact</ScrollLink></li>
        <li><a href='../../../documents/resume.pdf' target='_blank' className='menu-button' download>Download Resume</a></li>
      </ul>
    </nav>
  )
}
