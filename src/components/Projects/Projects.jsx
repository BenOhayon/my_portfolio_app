import React from 'react'
import flashTriviaProjectThumbnail from '../../../assets/flash-trivia-thumbnail.png'
import portfolioProjectThumbnail from '../../../assets/portfolio-thumbnail.png'
import Carousel from '../Carousel/Carousel'

import './Projects.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'

const projects = [
  {
    name: 'Flash Trivia',
    url: 'https://flash-trivia.onrender.com',
    description: 'A trivia game based on the Open Trivia API',
    thumbnail: flashTriviaProjectThumbnail
  },
  {
    name: 'Portfolio',
    url: 'https://bendevportfolio.onrender.com',
    description: 'My portfolio website',
    thumbnail: portfolioProjectThumbnail
  }
]

export default function Projects() {

  return (
    <section id='projects' className='projects-container'>
      <div data-aos="fade-down" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='projects-title header'>My Projects</div>
      <Carousel projects={projects} />
    </section>
  )
}
