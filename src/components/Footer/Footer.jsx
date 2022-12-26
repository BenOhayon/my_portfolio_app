import React from 'react'

import './Footer.scss'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className="footer-content">
        <div className="footer-summery">
          <h3 className="footer-summery-title footer-title">Ben Ohayon</h3>
          <p className='footer-summery-subtitle'>
            Fullstack Web Developer
          </p>
        </div>
        <div className="footer-social">
          <h3 className="footer-social-title footer-title">Social</h3>
          <div className="footer-social-content">
            <a className='social-link' href='https://www.linkedin.com/in/benohayon' target='_blank'>
              <img className='social-link-image' src='../../../assets/linkedin-icon.png' />
            </a>
            <a className='social-link' href='https://github.com/BenOhayon' target='_blank'>
              <img className='social-link-image' src='../../../assets/github-icon.png' />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">© Copyright 2022. Made by Ben Ohayon</div>
    </footer>
  )
}
