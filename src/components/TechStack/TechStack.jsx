import React from 'react'
import TechTile from '../TechTile/TechTile'
import awsImage from '../../../assets/aws.jpg'
import reactImage from '../../../assets/react_image.png'
import nodeImage from '../../../assets/node_image.png'
import expressImage from '../../../assets/express_image.png'
import rubyImage from '../../../assets/ruby_image.jpg'
import railsImage from '../../../assets/rails_image.png'
import javaImage from '../../../assets/java_image.jpg'
import androidImage from '../../../assets/android_image.png'
import nodeRedImage from '../../../assets/nodered_image.png'
import springBootImage from '../../../assets/spring-image.png'
import dockerImage from '../../../assets/docker-image.webp'
import pythonImage from '../../../assets/python-image.png'
import flaskImage from '../../../assets/flask-image.png'
import redisImage from '../../../assets/redis-image.webp'
import mongoImage from '../../../assets/mongo-image.webp'
import kafkaImage from '../../../assets/kafka-image.png'

import './TechStack.scss'

const techStack = {
	'Java': javaImage,
    'Spring Boot': springBootImage,
	'Node': nodeImage,
	'Express': expressImage,
    'Python': pythonImage,
    'Flask': flaskImage,
    'Kafka': kafkaImage,
    'MongoDB': mongoImage,
    'Redis': redisImage,
    'Docker': dockerImage,
	'Ruby': rubyImage,
	'Rails': railsImage,
	'Android': androidImage,
	'Node-RED': nodeRedImage,
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
