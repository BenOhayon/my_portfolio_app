import React from 'react'
import Summery from '../Summery/Summery'
import TechStack from '../TechStack/TechStack'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'

import './HomePage.scss'

export default function HomePage() {
  return (
    <div className='home-page-container'>
      <Summery />
      <TechStack />
      {/* <Projects /> */}
      <ContactMe />
    </div>
  )
}
