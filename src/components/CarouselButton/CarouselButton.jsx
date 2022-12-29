import React from 'react'
import rightArrow from '../../../assets/right-arrow.svg'
import leftArrow from '../../../assets/left-arrow.svg'

import './CarouselButton.scss'

export default function CarouselButton({ direction, onClick }) {
  return (
    <div onClick={e => onClick()} className='carousel-button'>
      <img src={direction === 'next' ? rightArrow : leftArrow} alt='carousel button' />
    </div>
  )
}
