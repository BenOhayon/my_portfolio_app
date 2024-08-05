import React from 'react'
import TechStack from '../TechStack/TechStack'

import './About.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'
import { useAppContext } from '../MainApp/App'

export default function About() {
	const {
		isMobile
	} = useAppContext()

	return (
		<section id='about' className='about-container'>
			<div data-aos="fade-down" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='about-title header'>About Me</div>
			<div className="about-content">
				<div data-aos={isMobile ? "fade-up" : "fade-right"} data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className="about-summery about-subsection">
					<div className="about-summery-title section-inner-title">Who am I?</div>
					<p className='about-summery-desc paragraph-content'>
						A <strong>frontend web developer</strong> with 5 years of experience in software development.
						I'm currently looking for my next challenge as a <strong>frontend web developer</strong> in a place where I can learn, grow and contribute.
						I have passion for coding and learning new technologies, independent and <strong>self learner</strong> with 'can do' attitude.
					</p>
					<p className='about-summery-desc paragraph-content'>
						In addition, I developed a <strong>Node-RED</strong> app (a low code platform for IOT applications) for smart home management on a <strong>Raspberry PI</strong>.
						This app connects to an <strong>ABB PLC</strong>, which is integrated to every electronic device in a house.
					</p>
				</div>

				<div data-aos={isMobile ? "fade-up" : "fade-left"} data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className="about-tech-stack about-subsection">
					<TechStack />
				</div>
			</div>
		</section>
	)
}