import React from 'react'
import { IoLogoFacebook } from "react-icons/io"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"

import './Hero.scss'

const socials = {
	'https://www.facebook.com/profile.php?id=100000341139297': <IoLogoFacebook className='hero-social-link-image' />,
	'https://www.linkedin.com/in/benohayon': <FaLinkedin className='hero-social-link-image' />,
	'https://github.com/BenOhayon': <FaGithub className='hero-social-link-image' />
}

export default function Hero() {
	return (
		<section id='hero' className='hero-container'>
			<div className="hero-title">Hey, I'm Ben Ohayon</div>
			<div className="hero-subtitle">Senior Fullstack Developer</div>

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
