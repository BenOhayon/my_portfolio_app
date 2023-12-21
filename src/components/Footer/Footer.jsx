import React from 'react'
import footerFacebookImage from '../../../assets/footer-facebook-image.png'
import footerLinkedinImage from '../../../assets/linkedin-icon.png'
import footerGithubImage from '../../../assets/github-icon.png'

import './Footer.scss'

const socials = {
  'https://www.facebook.com/profile.php?id=100000341139297': footerFacebookImage,
  'https://www.linkedin.com/in/benohayon': footerLinkedinImage,
  'https://github.com/BenOhayon': footerGithubImage
}

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className="footer-content">
        <div className="footer-summery">
          <h3 className="footer-summery-title footer-title">Ben Ohayon</h3>
          <p className='footer-summery-subtitle'>
            Frontend Web Developer <br />
            Call me on: <a href='tel:0545805203' className='footer-phone-number'>054-5805203</a>
          </p>
        </div>
        <div className="footer-social">
          <h3 className="footer-social-title footer-title">Social</h3>
          <div className="footer-social-content">
            {Object.keys(socials).map(social => {
              return <a key={social} className='social-link' href={social} target='_blank'>
                <img className='social-link-image' src={socials[social]} alt='Social image' />
              </a> 
            })}
          </div>
        </div>
      </div>
      <div className="footer-copyright">© Copyright {new Date().getFullYear()}. Developed by Ben Ohayon</div>
    </footer>
  )
}
