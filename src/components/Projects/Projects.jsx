import React from 'react'
import flashTriviaProjectThumbnail from '../../../assets/flash-trivia-thumbnail.png'
import portfolioProjectThumbnail from '../../../assets/portfolio-thumbnail.png'
import ProjectTile from '../ProjectTile/ProjectTile'

import './Projects.scss'

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
    description: 'My Portfolio website',
    thumbnail: portfolioProjectThumbnail
  }
]

export default function Projects() {
  return (
    <section id='projects' className='projects-container'>
      <h2 className='projects-title header'>My Projects</h2>
      <div className="projects-list">
        {
          projects.map(project => 
                    <ProjectTile
                      key={project.url}
                      name={project.name} 
                      description={project.description} 
                      url={project.url} 
                      thumbnail={project.thumbnail}/>
                    )
        }
      </div>
    </section>
  )
}
