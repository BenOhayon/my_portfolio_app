import React from 'react'
import './WorkExperience.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'
import Section from '../Section/Section'
import { ResumeData } from '../../types'
import WorkExperienceRecord from '../WorkExperienceRecord/WorkExperienceRecord'

interface WorkExperienceProps{
  resumeData: ResumeData
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ resumeData }) => {
  return (
    <Section
      header="Work Experience"
      sectionClassName="work-experience-container"
      sectionId="work-experience"
      maxWidth={1450}
    >
      <div data-aos="fade-up" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className="work-experience-details">
        {
          resumeData && resumeData.workExperience.map(record => <WorkExperienceRecord
            key={`${record.role}__${record.company}__${record.description}`}
            role={record.role}
            company={record.company}
            fromYear={record.timePeriod.fromYear}
            toYear={record.timePeriod.toYear}
            description={record.description}
          />)
        }
      </div>
    </Section>
  )
}

export default WorkExperience;