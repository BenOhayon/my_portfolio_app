import React, { useEffect, useRef, useState } from 'react'
import flashTriviaProjectThumbnail from '../../../assets/flash-trivia-thumbnail.png'
import portfolioProjectThumbnail from '../../../assets/portfolio-thumbnail.png'
import Carousel from '../Carousel/Carousel'

import './Projects.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'
import ProjectTile from '../ProjectTile/ProjectTile'
import { useAppContext } from '../MainApp/App'

const projects = [
	{
		id: 1,
		name: 'Flash Trivia',
		url: 'https://flash-trivia.onrender.com',
		description: 'A trivia game based on the Open Trivia API',
		thumbnail: flashTriviaProjectThumbnail
	},
	{
		id: 2,
		name: 'Portfolio',
		url: 'https://bendevportfolio.onrender.com',
		description: 'My portfolio website',
		thumbnail: portfolioProjectThumbnail
	}
]

export default function Projects() {
	const {
		isMobile
	} = useAppContext()

	return (
		<section id='projects' className='projects-container'>
			<div data-aos="fade-down" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='projects-title header'>My Projects</div>
			{isMobile ? <Carousel projects={projects} /> : <div data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='projects-list'>
				{
					projects.map(project => <ProjectTile
						key={project?.id}
						name={project.name}
						description={project.description}
						url={project.url}
						thumbnail={project.thumbnail} />
					)
				}
			</div>}
		</section>
	)
}
