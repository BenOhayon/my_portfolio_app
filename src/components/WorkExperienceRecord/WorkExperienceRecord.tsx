import React from 'react'
import './WorkExperienceRecord.scss'

import parse from 'html-react-parser'
import { FaHandPointRight } from 'react-icons/fa'
import { WorkExperienceStep } from '../../types';

interface WorkExperienceRecordProps {
  role: WorkExperienceStep['role'];
  company: WorkExperienceStep['company'];
  fromYear: WorkExperienceStep['timePeriod']['fromYear'];
  toYear: WorkExperienceStep['timePeriod']['toYear'];
  description: WorkExperienceStep['description'];
}

const WorkExperienceRecord: React.FC<WorkExperienceRecordProps> = ({
  role,
  company,
  fromYear,
  toYear,
  description
}) => {
  const renderWorkExperienceDescription = () => {
    if (typeof description === 'string') {
      return <p className="work-experience-record-description-details">{parse(description)}</p>
    }
    return (
      <ul className="work-experience-record-description-details">
        {description.map(el => <li key={`${role}__${company}__${el}`}>{parse(el)}</li>)}
      </ul>
    )
  }
  
  return (
    <div className='work-experience-record'>
      <div className="work-experience-record-arrow">
        <FaHandPointRight className='work-experience-record-arrow-image' />
      </div>
      <div className="work-experience-record-details">
        <div className="work-experience-record-time-period">{`${fromYear} - ${toYear}`}</div>
        <div className="work-experience-record-description">
          <div className="work-experience-record-description-title"><b>{role}</b>, {company}</div>
          {renderWorkExperienceDescription()}
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceRecord;