import React from 'react'

import './CarouselIndicator.scss'

export default function CarouselIndicator({ carouselIndex, length, onIndicatorClick }) {
  return (
    <div className='carousel-indicator-container'>
      {
        Array.from({ length }).map((el, index) => <div key={index + length + carouselIndex} onClick={e => onIndicatorClick(index)} className={`carousel-indicator ${carouselIndex === index ? 'active' : ''}`}></div>)
      }
    </div>
  )
}
