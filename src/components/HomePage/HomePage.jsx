import React from 'react'
import Summery from '../About/About'
import TechStack from '../TechStack/TechStack'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'
import NavBar from '../NavBar/NavBar'

import './HomePage.scss'

export default function HomePage() {
  return (
    <div className='home-page-container'>
      <NavBar />
      <Summery />
      <TechStack />
      {/* <Projects /> */}
      <ContactMe />
    </div>
  )
}
