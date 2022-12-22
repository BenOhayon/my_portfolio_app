import React from 'react'
import { NavLink } from 'react-router-dom'
import HouseNavImage from '../../../assets/home-nav-img.svg'
import UserNavImage from '../../../assets/user-nav-img.svg'

import './NavBar.scss'

export default function NavBar() {
  return (
    <nav>
      <div className="titles-frame">
        <h1 className='nav-title'>Ben Ohayon - Fullstack Web Developer</h1>
      </div>
      <div className="nav-buttons">
        <NavLink className='nav-home-button nav-button' to='/'>
          <img src={HouseNavImage} alt='house-nav-button' />
        </NavLink>
        <NavLink className='nav-user-button nav-button' to='/about'>
          <img src={UserNavImage} alt='user-nav-button' />
        </NavLink>
      </div>
    </nav>
  )
}
