import React from 'react'
import { Link } from 'react-router-dom'

import './About.scss'

export default function About({ marginBottom = '15px' }) {
  return (
    <section id='about' className='about-container' style={{ marginBottom: marginBottom }}>
      <h2 className='about-title header'>A bit about me:</h2>
      <p className='about-desc paragraph-content'>
        A fullstack web developer with 4 years of experience in software development. <br />
        I'm currently looking for my next challenge as a fullstack web developer (preferably frontend). <br/>
      </p>

      <fieldset className='about-personal-frame'>
        <legend className='about-personal-title'>Personal Details</legend>
        
        <div className="about-personal-field">
          <label htmlFor="phone-number">Phone Number: </label>
          <span id="phone-number"><a href="tel:0545805203">054-5805203</a></span>
        </div>
        
        <div className="about-personal-field">
          <label htmlFor="email">Email Address: </label>
          <span id="email">ben1679@gmail.com</span>
        </div>
        
        <div className="about-personal-field">
          <label htmlFor="linkedin">LinkedIn: </label>
          <span id="linkedin"><a href="https://www.linkedin.com/in/benohayon" target='_blank'>www.linkedin.com/in/benohayon</a></span>
        </div>
        
      </fieldset>
    </section>
  )
}
