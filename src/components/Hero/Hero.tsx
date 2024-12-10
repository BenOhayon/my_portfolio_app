import React from 'react'
import { IoLogoFacebook } from "react-icons/io"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import upArrow from '../../../assets/up-arrow-black.svg'

import './Hero.scss'
import { useAppContext } from '../MainApp/App'

const socials = {
    'https://www.facebook.com/profile.php?id=100000341139297': <IoLogoFacebook className='hero-social-link-image' />,
    'https://www.linkedin.com/in/benohayon': <FaLinkedin className='hero-social-link-image' />,
    'https://github.com/BenOhayon': <FaGithub className='hero-social-link-image' />
}

export default function Hero({
    resumeData
}) {

    const {
        isMobile
    } = useAppContext()

    function goToAbout() {
        document.querySelector('[id="about"]')?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <section id='hero' className='hero-container'>
            <div className="hero-title">Hey, I'm Ben Ohayon</div>
            <div className="hero-subtitle">{resumeData?.role}</div>

            {
                !isMobile && <div className='hero-bottom-arrow' onClick={goToAbout}>
                    <img src={upArrow} alt='Go to About' />
                </div>
            }

            <div className="hero-socials">
                {Object.keys(socials).map(social => {
                    return <a key={social} href={social} target='_blank' className='hero-social-link'>
                        {socials[social]}
                    </a>
                })}
            </div>
        </section>
    )
}
