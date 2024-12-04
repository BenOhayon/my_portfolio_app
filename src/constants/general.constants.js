import awsImage from '../../assets/aws.jpg'
import reactImage from '../../assets/react_image.png'
import nodeImage from '../../assets/node_image.png'
import expressImage from '../../assets/express_image.png'
import jsImage from '../../assets/js_image.png'
import tsImage from '../../assets/ts_image.png'
import scssImage from '../../assets/scss_image.png'
import htmlImage from '../../assets/html_image.png'
import cssImage from '../../assets/css_image.jpg'
import rubyImage from '../../assets/ruby_image.jpg'
import railsImage from '../../assets/rails_image.png'
import javaImage from '../../assets/java_image.jpg'
import androidImage from '../../assets/android_image.png'
import nodeRedImage from '../../assets/nodered_image.png'
import githubImage from '../../assets/github_image.png'
import reduxImage from '../../assets/redux_image.webp'
import springBootImage from '../../assets/spring-image.png'
import dockerImage from '../../assets/docker-image.webp'
import pythonImage from '../../assets/python-image.png'
import flaskImage from '../../assets/flask-image.png'
import redisImage from '../../assets/redis-image.webp'
import mongoImage from '../../assets/mongo-image.webp'
import kafkaImage from '../../assets/kafka-image.png'

export const AOS_DURATION_MILLISECONDS = 1000
export const MOBILE_SCREEN_WIDTH_THRESHOLD_PX = 1085

const sharedSkills = {
    'Docker': dockerImage,
    'AWS': awsImage,
    'GitHub': githubImage,
    'Node-RED': nodeRedImage,
}

export const fullstackDeveloperData = {
    role: 'senior fullstack developer',
    techStack: {
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
        ...sharedSkills
    }
}

export const softwareDeveloperData = {
    role: 'software developer',
    techStack: {
        'Java': javaImage,
        'Spring Boot': springBootImage,
        'Node': nodeImage,
        'Express': expressImage,
        'Python': pythonImage,
        'Flask': flaskImage,
        'Kafka': kafkaImage,
        'MongoDB': mongoImage,
        'Redis': redisImage,
        'Ruby': rubyImage,
        'Rails': railsImage,
        ...sharedSkills
    }
}