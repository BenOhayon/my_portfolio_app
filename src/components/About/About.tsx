import React from 'react'
import TechStack from '../TechStack/TechStack.js'

import './About.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'
import Section from '../Section/Section.js'
import { ResumeData } from '../../types'

interface AboutProps {
  resumeData: ResumeData;
}

const About: React.FC<AboutProps> = ({ resumeData }) => {
  const buildTargetRolesString = (resumeData: ResumeData): string => {
    return resumeData.targetRoles.reduce((acc, role, index) => {
      if (index === 0) {
        return role
      } else if (index === resumeData.targetRoles.length - 1) {
        return `${acc} or ${role}`
      } else {
        return `${acc}, ${role}`
      }
    }, '')
  }

  const calculateExperienceYears = (): number => {
    const currentYear = new Date().getFullYear()
    const startingYear = 2019
    return currentYear - startingYear - 1;
  }

  return (
    <Section
      header="About Me"
      sectionClassName="about-container"
      sectionId="about"
    >
      <div className="about-content">
        <div data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className="about-summery about-subsection">
          <div className="about-summery-title section-inner-title">Who am I?</div>
          <p className='about-summery-desc paragraph-content'>
            A software developer with {calculateExperienceYears()} years of experience.
            I'm currently looking for my next challenge as a <strong>{buildTargetRolesString(resumeData)}</strong> in a place where I can learn, grow and contribute.
            I have passion for coding and learning new technologies, independent and <strong>self learner</strong> with 'can do' attitude.
          </p>
          <p className='about-summery-desc paragraph-content'>
            In addition, I developed a <strong>Node-RED</strong> app (a low code platform for IOT applications) for smart home management on a <strong>Raspberry PI</strong>.
            This app connects to an <strong>ABB PLC</strong>, which is integrated to every electronic device in a house.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className="about-tech-stack about-subsection">
          <TechStack techStack={resumeData?.techStack} />
        </div>
      </div>
    </Section>
  )
}

export default About;