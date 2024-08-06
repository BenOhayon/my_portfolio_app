import React from 'react'
import TechTile from '../TechTile/TechTile'
import awsImage from '../../../assets/aws.jpg'
import reactImage from '../../../assets/react_image.png'
import nodeImage from '../../../assets/node_image.png'
import expressImage from '../../../assets/express_image.png'
import jsImage from '../../../assets/js_image.png'
import tsImage from '../../../assets/ts_image.png'
import scssImage from '../../../assets/scss_image.png'
import htmlImage from '../../../assets/html_image.png'
import cssImage from '../../../assets/css_image.jpg'
import rubyImage from '../../../assets/ruby_image.jpg'
import railsImage from '../../../assets/rails_image.png'
import javaImage from '../../../assets/java_image.jpg'
import androidImage from '../../../assets/android_image.png'
import nodeRedImage from '../../../assets/nodered_image.png'
import githubImage from '../../../assets/github_image.png'
import reduxImage from '../../../assets/redux_image.webp'

import './TechStack.scss'

const techStack = {
	'React': reactImage,
	'Redux': reduxImage,
	'Node': nodeImage,
	'Express': expressImage,
	'JavaScript': jsImage,
	'TypeScript': tsImage,
	'SCSS': scssImage,
	'CSS': cssImage,
	'HTML': htmlImage,
	'Ruby': rubyImage,
	'Rails': railsImage,
	'Java': javaImage,
	'Android': androidImage,
	'Node-RED': nodeRedImage,
	'AWS': awsImage,
	'GitHub': githubImage
}

export default function TechStack() {
	return (
		<div className='tech-stack-container'>
			<h2 className='tech-stack-title section-inner-title'>Tech Stack</h2>
			<div className="tech-tiles-frame">
				{Object.entries(techStack).map(([techName, techImageUrl]) => <TechTile key={techImageUrl} techName={techName} techImageUrl={techImageUrl} />)}
			</div>
		</div>
	)
}
