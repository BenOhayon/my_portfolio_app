import React from 'react'
import footerLinkedinImage from '../../../assets/hero-linkedin-image.svg'
import footerGithubImage from '../../../assets/hero-github-image.svg'

import './Hero.scss'

const socials = {
  'https://www.linkedin.com/in/benohayon': footerLinkedinImage,
  'https://github.com/BenOhayon': footerGithubImage
}

export default function Hero() {
  return (
    <section id='hero' className='hero-container'>
      <div className="hero-title">Hey, I'm Ben Ohayon</div>
      <div className="hero-subtitle">A Fullstack Web Developer</div>

      <div className="hero-socials">
        {Object.keys(socials).map(social => {
          return <a key={social} href={social} target='_blank' className='hero-social-link'>
            <img src={socials[social]} alt='social-item-image' />
          </a>
        })}
      </div>
    </section>
  )
}
