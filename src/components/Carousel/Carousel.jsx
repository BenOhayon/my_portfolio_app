import React, { useRef, useState } from 'react'
import CarouselButton from '../CarouselButton/CarouselButton'
import ProjectTile from '../ProjectTile/ProjectTile'
import CarouselIndicator from '../CarouselIndicator/CarouselIndicator'

import './Carousel.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'
import { useAppContext } from '../MainApp/App'

export default function Carousel({ projects }) {

	const {
		isMobile
	} = useAppContext()
	const [carouselIndex, setCarouselIndex] = useState(0)
	const touchPositionRef = useRef(null)

	function goToNextElement() {
		setCarouselIndex(prevIndex => {
			if (prevIndex < projects.length - 1)
				return prevIndex + 1
			return prevIndex
		})
	}

	function goToPreviousElement() {
		setCarouselIndex(prevIndex => {
			if (prevIndex > 0)
				return prevIndex - 1
			return prevIndex
		})
	}

	function updateCarouselIndex(index) {
		setCarouselIndex(index)
	}

	function handleTouchStart(e) {
		if (!isMobile)
			return

		const touchDown = e.touches[0].clientX
		touchPositionRef.current = touchDown
	}

	function handleTouchMove(e) {
		if (!isMobile)
			return

		const touchDown = touchPositionRef.current

		if (touchDown === null) {
			return
		}

		const currentTouch = e.touches[0].clientX
		const diff = touchDown - currentTouch

		if (diff > 5) {
			goToNextElement()
		}

		if (diff < -5) {
			goToPreviousElement()
		}

		touchPositionRef.current = null
	}

	return (
		<div data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='carousel' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
			<div className="carousel-slider">
				<CarouselButton isHidden={carouselIndex === 0} onClick={goToPreviousElement} direction='previous' />
				<div className='slides'>
					{projects.map((project, index) =>
						<div key={project.url} style={{ translate: `calc(${carouselIndex} * -115%)` }} className='carousel-item'>
							<ProjectTile
								key={project?.id}
								isSelected={carouselIndex === index}
								name={project.name}
								description={project.description}
								url={project.url}
								thumbnail={project.thumbnail} />
						</div>
					)
					}
				</div>
				<CarouselButton isHidden={carouselIndex === projects.length - 1} onClick={goToNextElement} direction='next' />
			</div>
			<CarouselIndicator carouselIndex={carouselIndex} length={projects.length} updateCarouselIndex={updateCarouselIndex} />
		</div>
	)
}
