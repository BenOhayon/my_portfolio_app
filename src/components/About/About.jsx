import React from 'react'
import { Link } from 'react-router-dom'
import TechStack from '../TechStack/TechStack'

import './About.scss'

export default function About() {
  return (
    <section id='about' className='about-container'>
      <h2 className='about-title header'>About</h2>
      <p className='about-desc paragraph-content'>
        A fullstack web developer with 4 years of experience in software development. <br />
        I'm currently looking for my next challenge as a fullstack web developer (preferably frontend). <br/>
      </p>

      <TechStack />
      
    </section>
  )
}
