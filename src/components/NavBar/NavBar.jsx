import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.scss'

export default function NavBar() {

  function scrollTo(element) {
    element.scrollIntoView(false)
  }

  return (
    <nav>
      <Link className='nav-title nav-button'>Ben Ohayon</Link>
      <ul className="nav-buttons">
        <li><Link className='nav-home-button nav-button' to='/'>Home</Link></li>
        <li><Link className='nav-user-button nav-button' to='#about'>About</Link></li>
        <li onClick={scrollTo}><Link className='nav-user-button nav-button' to='#contact'>Contact</Link></li>
        <li><Link className='nav-user-button nav-button' to='#contact'>Resume</Link></li>
      </ul>
    </nav>
  )
}
