import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import fullstackResumeFile from '../../../documents/ben_ohayon_resume_fs.pdf'
import softwareEngineerResumeFile from '../../../documents/ben_ohayon_resume_se.pdf'
import frontendDeveloperResumeFile from '../../../documents/ben_ohayon_resume_fe.pdf'
import navImage from '../../../assets/profile-img-ben.jpg'
import { IoCloseOutline } from "react-icons/io5"
import { IoMdMenu } from "react-icons/io"

import './NavBar.scss'
import { useParams } from 'react-router-dom'
import { NavBarProps } from '../../propTypes'
import { ResumeType } from '../../types'

const LINK_SLIDING_ANIMATION_DURATION = 350;
const SCROLL_LINK_OFFSET = -110;

export default function NavBar({ 
    mobileNavBarMenuRef, 
    scrollToPageTop, 
    closeNavBarMenu 
}: NavBarProps) {

    const { type } = useParams()

	const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true)

	function toggleNavBarMenu() {
		mobileNavBarMenuRef.current?.classList.toggle('hide')
		setIsMobileMenuClosed(previousValue => !previousValue)
	}

	function onNavBarMenuOptionClick() {
		closeNavBarMenu()
		setIsMobileMenuClosed(true)
	}

    function getResumeFile() {
        switch (type) {
            case ResumeType.FS: return fullstackResumeFile
            case ResumeType.SE: return softwareEngineerResumeFile
            default: return frontendDeveloperResumeFile
        }
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
				<li><ScrollLink to='work-experience' className='nav-about-button nav-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Work Experience</ScrollLink></li>
				<li><ScrollLink to='contact' className='nav-contact-button nav-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Contact</ScrollLink></li>
				<li><a href={getResumeFile()} target='_blank' className='nav-resume-button' download='ben_ohayon_resume'>Download Resume</a></li>
			</ul>
			<div className='mobile-navbar-menu-button hidden' onClick={toggleNavBarMenu}>{isMobileMenuClosed ? <IoMdMenu className='mobile-navbar-menu-button-image' /> : <IoCloseOutline className='mobile-navbar-menu-button-image' />}</div>
			<ul ref={mobileNavBarMenuRef} className="mobile-navbar-menu hide">
				<li><ScrollLink onClick={onNavBarMenuOptionClick} to='about' className='nav-about-button menu-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>About</ScrollLink></li>
				<li><ScrollLink onClick={onNavBarMenuOptionClick} to='work-experience' className='nav-about-button menu-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Work Experience</ScrollLink></li>
				<li><ScrollLink onClick={onNavBarMenuOptionClick} to='contact' className='nav-contact-button menu-button' spy={true} offset={SCROLL_LINK_OFFSET} smooth={true} duration={LINK_SLIDING_ANIMATION_DURATION}>Contact</ScrollLink></li>
				<li><a href={getResumeFile()} target='_blank' onClick={onNavBarMenuOptionClick} className='menu-button' download='ben_ohayon_resume'>Download Resume</a></li>
			</ul>
		</nav>
	)
}
