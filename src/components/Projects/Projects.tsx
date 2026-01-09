import React from 'react'
import flashTriviaProjectThumbnail from '../../../assets/flash-trivia-thumbnail.png'
import portfolioProjectThumbnail from '../../../assets/portfolio-thumbnail.png'

import './Projects.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'
import ProjectTile from '../ProjectTile/ProjectTile'

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

const Projects: React.FC = () => {
	return (
		<section id='projects' className='projects-container'>
			<div data-aos="fade-down" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='projects-title header'>My Projects</div>
			<div data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='projects-list'>
				{
					projects.map(project => <ProjectTile
                        key={project?.id}
                        name={project.name}
                        description={project.description}
                        url={project.url}
                        thumbnail={project.thumbnail} 
                        isSelected={undefined} />
					)
				}
			</div>
		</section>
	)
}

export default Projects;