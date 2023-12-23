import React from 'react'
import TechTile from '../TechTile/TechTile'
import awsImage from '../../../assets/aws.jpg'

import './TechStack.scss'

const techStack = {
	'React': 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png',
	'Node': 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
	'Express': 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
	'JavaScript': 'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png',
	'SCSS': 'https://miro.medium.com/max/1366/1*HFYKWq92BcXJIdata7d-JQ.png',
	'HTML5': 'https://www.ujudebug.com/wp-content/uploads/2022/07/html-logo-transparent.png',
	'CSS3': 'https://www.ujudebug.com/wp-content/uploads/2022/07/css-new-logo.jpg',
	'Ruby': 'https://ih1.redbubble.net/image.213186038.0307/st,small,507x507-pad,600x600,f8f8f8.u3.jpg',
	'Rails': 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png',
	'Java': 'https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg',
	'Android': 'https://1000logos.net/wp-content/uploads/2016/10/Android-Logo.png',
	'Node-RED': 'https://img2.freepng.es/20181124/osg/kisspng-clip-art-node-red-node-js-computer-icons-javascrip-clipart-node-red-iconlogo-5bf90d35a04095.3145336615430485016564.jpg',
	'AWS': awsImage,
	'GitHub': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
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
