import React, { forwardRef } from 'react'
import rightArrow from '../../../assets/right-arrow.svg'
import leftArrow from '../../../assets/left-arrow.svg'

import './CarouselButton.scss'

function CarouselButton({ direction, isHidden, onClick }, ref) {
	return (
		<div ref={ref} onClick={onClick} className={`carousel-button ${isHidden ? 'hide' : ''}`}>
			<img src={direction === 'next' ? rightArrow : leftArrow} alt='carousel button' />
		</div>
	)
}

export default forwardRef(CarouselButton)