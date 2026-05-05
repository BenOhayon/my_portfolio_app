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
  const calculateExperienceYears = (): number => {
    const currentYear = new Date().getFullYear()
    const startingYear = 2022
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
            <strong>Frontend Engineer with {calculateExperienceYears()} years</strong> of experience building <strong>scalable, production-grade</strong> applications using <strong>React</strong> and <strong>TypeScript</strong> in data-driven environments.<br/>Experienced in designing <strong>modular component architectures</strong>, optimizing performance, and delivering high-impact user-facing solutions. Strong collaborator with Product, UX, and Backend teams, with a user-first mindset and a focus on clean, maintainable, and secure code. Proven ability to translate complex requirements into intuitive interfaces that <strong>improve usability, performance, and business</strong> outcomes <strong>including measurable growth of 30%</strong>.
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