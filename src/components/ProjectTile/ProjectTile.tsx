import React from 'react'

import './ProjectTile.scss'

interface ProjectTileProps {
  name: string
  description: string
  url: string
  thumbnail: string
  isSelected?: boolean
}

const ProjectTile: React.FC<ProjectTileProps> = ({ name, description, url, thumbnail, isSelected }) => {
  return (
    <a href={url} target='_blank' className={`project-tile-container ${isSelected ? 'selected' : ''}`}>
      <img className='project-tile-image' src={thumbnail} alt='project tile image' />
      <div className="project-tile-text-frame">
        <h3 className="project-name">{name}</h3>
        <p className="project-desc">{description}</p>
      </div>
    </a>
  )
}

export default ProjectTile;