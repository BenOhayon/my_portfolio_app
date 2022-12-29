import React, { useState } from 'react'
import CarouselButton from '../CarouselButton/CarouselButton'
import ProjectTile from '../ProjectTile/ProjectTile'
import CarouselIndicator from '../CarouselIndicator/CarouselIndicator'

import './Carousel.scss'

export default function Carousel({ projects }) {

  const [carouselIndex, setCarouselIndex] = useState(0)


  function goToNextElement() {
    setCarouselIndex(prevIndex => {
      if (prevIndex + 1 === projects.length)
        return 0
      return prevIndex + 1
    })
  }
  
  function goToPreviousElement() {
    setCarouselIndex(prevIndex => {
      if (prevIndex === 0)
        return projects.length - 1
      return prevIndex - 1
    })
  }

  function setActiveIndicator(index) {
    setCarouselIndex(index)
  }

  return (
    <div className='carousel'>
      <div className="carousel-slider">
        <CarouselButton onClick={goToPreviousElement} direction='previous' />
        <div className='slides'>
          { projects.map((project, index) => 
                      <div style={{ translate: `calc(${carouselIndex} * -115%)`}} className='carousel-item'>
                        <ProjectTile key={project.url} 
                                      isSelected={carouselIndex === index} 
                                      name={project.name} 
                                      description={project.description} 
                                      url={project.url} 
                                      thumbnail={project.thumbnail} />
                      </div>
                    )
          }
        </div>
        <CarouselButton onClick={goToNextElement} direction='next' />
      </div>
      <CarouselIndicator carouselIndex={carouselIndex} length={projects.length} onIndicatorClick={setActiveIndicator} />
    </div>
  )
}
