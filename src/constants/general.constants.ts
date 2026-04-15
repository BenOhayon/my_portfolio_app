import awsImage from '../../assets/aws.jpg'
import reactImage from '../../assets/react_image.png'
import nodeImage from '../../assets/node_image.png'
import expressImage from '../../assets/express_image.png'
import tsImage from '../../assets/ts_image.png'
import jsImage from '../../assets/js_image.jpeg'
import scssImage from '../../assets/scss_image.png'
import claudeImage from '../../assets/claude_image.jpeg'
import chatGptImage from '../../assets/chatgpt_image.jpg'
import rubyImage from '../../assets/ruby_image.jpg'
import railsImage from '../../assets/rails_image.png'
import javaImage from '../../assets/java_image.jpg'
import githubCopilot from '../../assets/github_copilot_image.png'
import githubImage from '../../assets/github_image.png'
import springBootImage from '../../assets/spring-image.png'
import dockerImage from '../../assets/docker-image.webp'
import pythonImage from '../../assets/python-image.png'
import flaskImage from '../../assets/flask-image.png'
import redisImage from '../../assets/redis-image.webp'
import mongoImage from '../../assets/mongo-image.webp'
import kafkaImage from '../../assets/kafka-image.png'
import mobxImage from '../../assets/mobx.svg'
import styledComponentsImage from '../../assets/styled-components.png'
import reduxImage from '../../assets/redux_image.jpg'
import reactQueryImage from '../../assets/react_query_image.jpg'

import { ResumeData } from '../types'

export const AOS_DURATION_MILLISECONDS = 1000
export const MOBILE_SCREEN_WIDTH_THRESHOLD_PX = 1085

const sharedSkills = {
  GitHub: githubImage,
  'GitHub Copilot': githubCopilot,
  Claude: claudeImage,
  ChatGPT: chatGptImage,
} as const

const frontendSkills = {
  React: reactImage,
  TypeScript: tsImage,
  JavaScript: jsImage,
  Redux: reduxImage,
  MobX: mobxImage,
  'React Query': reactQueryImage,
  'Styled Components': styledComponentsImage,
  SCSS: scssImage,
} as const

const frontendWebSharedWorkExperience = [
  {
    role: 'Frontend Developer',
    company: "Cellxpert",
    timePeriod: {
      fromYear: 2025,
      toYear: 'present'
    },
    description: 'Increased customers and developer productivity, boosting revenue and reducing development time by implementing two <b>React–TypeScript</b> dashboards with <b>Cypress</b> testing.'
  },
  {
    role: 'frontend web developer',
    company: "PaydIn",
    timePeriod: {
      fromYear: 2023,
      toYear: 2024,
    },
    description: 'Drove customer satisfaction and 30% conversion growth by implementing two complex <b>React</b> dashboards for <b>B2B platforms</b>.'
  },
  {
    role: 'Fullstack Developer',
    company: "MySize",
    timePeriod: {
      fromYear: 2021,
      toYear: 2023
    },
    description: 'Improved customer satisfaction and conversion rates by embedding JavaScript scripts and a size-recommendation widget into client websites.'
  },
] as const satisfies ResumeData['workExperience'];

const androidSharedWorkExperience = [
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
  },
] as const satisfies ResumeData['workExperience'];

export const fullstackDeveloperData: ResumeData = {
  role: 'senior fullstack developer',
  targetRoles: ['frontend developer', 'fullstack developer'],
  techStack: {
    ...frontendSkills,
    Node: nodeImage,
    Express: expressImage,
    Ruby: rubyImage,
    Rails: railsImage,
    Java: javaImage,
    Docker: dockerImage,
    AWS: awsImage,
    ...sharedSkills
  },
  workExperience: [
    ...frontendWebSharedWorkExperience,
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
    ...androidSharedWorkExperience,
  ]
} as const

export const softwareDeveloperData: ResumeData = {
  role: 'software developer',
  targetRoles: ['software engineer backend oriented'],
  techStack: {
    Java: javaImage,
    'Spring Boot': springBootImage,
    Node: nodeImage,
    Express: expressImage,
    Python: pythonImage,
    Flask: flaskImage,
    Kafka: kafkaImage,
    MongoDB: mongoImage,
    Redis: redisImage,
    Ruby: rubyImage,
    Rails: railsImage,
    Docker: dockerImage,
    AWS: awsImage,
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
    ...androidSharedWorkExperience,
  ]
} as const

export const frontendDeveloperData: ResumeData = {
  role: 'Frontend Developer',
  targetRoles: ['frontend developer'],
  techStack: {
    ...frontendSkills,
    ...sharedSkills
  },
  workExperience: [
    ...frontendWebSharedWorkExperience,
  ]
} as const