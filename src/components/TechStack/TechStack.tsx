import React from 'react'
import TechTile from '../TechTile/TechTile.js'
import './TechStack.scss'
import { TechStackProps } from '../../propTypes.js'

export default function TechStack({
    techStack
}: TechStackProps) {
	return (
		<div className='tech-stack-container'>
			<h2 className='tech-stack-title section-inner-title'>Tech Stack</h2>
			<div className="tech-tiles-frame">
				{Object.entries(techStack).map(([techName, techImageUrl]) => <TechTile key={techImageUrl} techName={techName} techImageUrl={techImageUrl} />)}
			</div>
		</div>
	)
}
