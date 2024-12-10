import React from 'react'
import TechStack from '../TechStack/TechStack.js'

import './About.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'
import Section from '../Section/Section.js'
import { ResumeData } from '../../types'
import { AboutProps } from '../../propTypes'

export default function About({
    resumeData
}: AboutProps) {

    function buildTargetRolesString(resumeData: ResumeData): string {
        let targetRoles = ''
        for (let i = 0; i < resumeData?.targetRoles.length; i++) {
            targetRoles += resumeData?.targetRoles[i]

            if (i < resumeData?.targetRoles.length - 2) {
                targetRoles += ', '
            } else if (i === resumeData?.targetRoles.length - 2) {
                targetRoles += ' or '
            }
        }

        return targetRoles
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
                        A <strong>{resumeData?.role}</strong> with 5 years of experience.
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