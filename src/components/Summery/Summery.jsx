import React from 'react'
import { Link } from 'react-router-dom'

import './Summery.scss'

export default function Summery({ marginBottom = '15px' }) {
  return (
    <div className='summery-container' style={{ marginBottom: marginBottom }}>
      <h2 className='summery-title header'>A bit about me:</h2>
      <p className='summery-desc paragraph-content'>
        A fullstack web developer with 4 years of experience in software development. <br />
        I'm currently looking for my next challenge as a fullstack web developer (preferably frontend). <br/>
        Want to know more about me? <Link to="/about">Click here</Link>
      </p>

      <fieldset className='summery-personal-frame'>
        <legend className='summery-personal-title'>Personal Details</legend>
        
        <div className="summery-personal-field">
          <label htmlFor="phone-number">Phone Number: </label>
          <span id="phone-number"><a href="tel:0545805203">054-5805203</a></span>
        </div>
        
        <div className="summery-personal-field">
          <label htmlFor="email">Email Address: </label>
          <span id="email">ben1679@gmail.com</span>
        </div>
        
        <div className="summery-personal-field">
          <label htmlFor="linkedin">LinkedIn: </label>
          <span id="linkedin"><a href="https://www.linkedin.com/in/benohayon" target='_blank'>www.linkedin.com/in/benohayon</a></span>
        </div>
        
      </fieldset>
    </div>
  )
}
