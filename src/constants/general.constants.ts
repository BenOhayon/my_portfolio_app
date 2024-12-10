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

import { ResumeData } from '../types'

export const AOS_DURATION_MILLISECONDS = 1000
export const MOBILE_SCREEN_WIDTH_THRESHOLD_PX = 1085

const sharedSkills = {
    'Docker': dockerImage,
    'AWS': awsImage,
    'GitHub': githubImage,
    'Node-RED': nodeRedImage,
}

export const fullstackDeveloperData: ResumeData = {
    role: 'senior fullstack developer',
    targetRoles: ['frontend developer', 'fullstack developer'],
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
    },
    workExperience: [
        {
            role: 'frontend web developer',
            company: "PaydIn",
            timePeriod: {
                fromYear: 2023,
                toYear: 'present'
            },
            description: [
                'Developing and designing a product for promoting sales in social medias',
                'UI/UX development',
                "Working with <b>React, Javascript, CSS3</b> and <b>Figma</b>"
            ]
        },
        {
            role: 'fullstack developer',
            company: "MySize",
            timePeriod: {
                fromYear: 2021,
                toYear: 2023
            },
            description: [
                'Developed and designed web services for providing size recommendations',
                'Developed <b>web apps & REST APIs</b>',
                "Client side developed with <b>React, Javascript, SCSS</b> and <b>HTML</b>",
                "Server side developed with <b>Ruby on Rails</b> and <b>PostgreSQL</b> database",
                "Cloud services: <b>Heroku</b> and <b>AWS</b>",
                "Working with <b>Zeplin</b>"
            ]
        },
        {
            role: 'Android Developer',
            company: "MySize",
            timePeriod: {
                fromYear: 2019,
                toYear: 2021
            },
            description: [
                'Developed and maintained the size recommendation core mechanism',
                'Developed and maintained MySize <b>mobile apps</b> and <b>mobile SDKs</b>',
                "Working with <b>Java</b> and <b>Zeplin</b>"
            ]
        }
    ]
}

export const softwareDeveloperData: ResumeData = {
    role: 'software developer',
    targetRoles: ['software engineer backend oriented'],
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
    },
    workExperience: [
        {
            role: 'Software Engineer (backend oriented)',
            company: "PaydIn",
            timePeriod: {
                fromYear: 2023,
                toYear: 'present'
            },
            description: [
                'Developing and designing a product for promoting sales in social medias',
                'Working with high-scale customers',
                'Analyzing requirements & development',
                'Part of 3 elite developers team',
                "Working with <b>Figma</b>"
            ]
        },
        {
            role: 'Software Engineer (backend oriented)',
            company: "MySize",
            timePeriod: {
                fromYear: 2021,
                toYear: 2023
            },
            description: [
                'Developed and designed web services for providing size recommendations',
                'Implemented unique algorithms & patents',
                "System design for scalability & security",
                'Developed <b>web apps & REST APIs</b>',
                "<b>PostgreSQL</b> database",
                "Cloud services: <b>Heroku</b> and <b>AWS</b>",
                "Working with <b>Zeplin</b>"
            ]
        },
        {
            role: 'Android Developer',
            company: "MySize",
            timePeriod: {
                fromYear: 2019,
                toYear: 2021
            },
            description: [
                'Developed and maintained the size recommendation core mechanism',
                'Developed and maintained MySize <b>mobile apps</b> and <b>mobile SDKs</b>',
                "Working with <b>Java</b> and <b>Zeplin</b>"
            ]
        }
    ]
}