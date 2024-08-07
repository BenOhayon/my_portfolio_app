import React from 'react'
import './TechTile.scss'

export default function TechTile({ techName, techImageUrl }) {
	return (
		<div className='tech-tile-container'>
			<div className="tech-tile">
				<img className="tech-tile-image" src={techImageUrl} alt='Tech Tile Image' />
				<div className='tech-tile-name'>{techName}</div>
			</div>
		</div>
	)
}
