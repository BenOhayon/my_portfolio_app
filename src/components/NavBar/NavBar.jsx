import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import menuIcon from '../../../assets/menu-icon.svg'
import resumeFile from '../../../documents/resume.pdf'
import navImage from '../../../assets/profile-img-ben.jpg'
import closeImage from '../../../assets/x-image.svg'

import './NavBar.scss'

const LINK_SLIDING_ANIMATION_DURATION = 350;
const SCROLL_LINK_OFFSET = -110;

export default function NavBar({ mobileNavBarMenuRef, scrollToPageTop, closeNavBarMenu }) {

  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true)

  function toggleNavBarMenu(e) {
    mobileNavBarMenuRef.current.classList.toggle('hide')
    setIsMobileMenuClosed(previousValue => !previousValue)
  }

  function onNavBarMenuOptionClick() {
    closeNavBarMenu()
    setIsMobileMenuClosed(true)
  }
  
  return (
    <nav>
      <div className="left-nav-frame">
        <div className="nav-bar-image-frame">
          <img src={navImage} alt='navbar image' className='nav-bar-image' />
        </div>
        <div className='nav-title nav-button' onClick={scrollToPageTop}>Ben Ohayon</div>
      </div>
      <ul className="nav-buttons">
        <li><ScrollLink to='about' className='nav-about-button nav-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>About</ScrollLink></li>
        <li><ScrollLink to='projects' className='nav-about-button nav-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Projects</ScrollLink></li>
        <li><ScrollLink to='contact' className='nav-contact-button nav-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Contact</ScrollLink></li>
        <li><a href={resumeFile} target='_blank' className='nav-resume-button' download='ben_ohayon_resume'>Download Resume</a></li>
      </ul>
      <div className='mobile-navbar-menu-button hidden' onClick={toggleNavBarMenu}><img src={isMobileMenuClosed ? menuIcon : closeImage} alt='mobile navbar menu' /></div>
      <ul ref={mobileNavBarMenuRef} className="mobile-navbar-menu hide">
        <li><ScrollLink onClick={onNavBarMenuOptionClick} to='about' className='nav-about-button menu-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>About</ScrollLink></li>
        <li><ScrollLink onClick={onNavBarMenuOptionClick} to='projects' className='nav-about-button menu-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Projects</ScrollLink></li>
        <li><ScrollLink onClick={onNavBarMenuOptionClick} to='contact' className='nav-contact-button menu-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Contact</ScrollLink></li>
        <li><a href={resumeFile} target='_blank' onClick={onNavBarMenuOptionClick} className='menu-button' download='ben_ohayon_resume'>Download Resume</a></li>
      </ul>
    </nav>
  )
}
