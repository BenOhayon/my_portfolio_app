import React from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'
import Hero from '../Hero/Hero'

import './HomePage.scss'
import Footer from '../Footer/Footer'

export default function HomePage() {
  
  return (
    <div className='home-page-container'>
      <Hero />
      <About />
      {/* <Projects /> */}
      <ContactMe />
      <Footer />
    </div>
  )
}
