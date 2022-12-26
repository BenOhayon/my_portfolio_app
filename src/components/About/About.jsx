import React from 'react'
import { Link } from 'react-router-dom'
import TechStack from '../TechStack/TechStack'

import './About.scss'

export default function About() {
  return (
    <section id='about' className='about-container'>
      <h2 className='about-title header'>About Me</h2>
      <div className="about-content">
        <div className="about-summery about-subsection">
          <div className="about-summery-title section-inner-title">Who am I?</div>
          <p className='about-summery-desc paragraph-content'>
            A <strong>fullstack web developer</strong> with 4 years of experience in software development.
            I'm currently looking for my next challenge as a <strong>fullstack web developer</strong> (preferably frontend) in a place
            I have passion for coding and learning new technologies, independent and <strong>self learner</strong> with 'can do' attitude.
            where I can learn, grow and contribute.  
          </p>
        </div>

        <div className="about-tech-stack about-subsection">
          <TechStack />
        </div>
      </div>
      
    </section>
  )
}
