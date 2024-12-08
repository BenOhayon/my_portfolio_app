import React from 'react'
import './WorkExperienceRecord.scss'

import parse from 'html-react-parser'
import { FaHandPointRight } from 'react-icons/fa'

export default function WorkExperienceRecord({
    role,
    company,
    fromYear,
    toYear,
    description
}) {

    return (
        <div className='work-experience-record'>
            <div className="work-experience-record-arrow">
                <FaHandPointRight className='work-experience-record-arrow-image' />
            </div>
            <div className="work-experience-record-details">
                <div className="work-experience-record-time-period">{`${fromYear} - ${toYear}`}</div>
                <div className="work-experience-record-description">
                    <div className="work-experience-record-description-title"><b>{role}</b>, {company}</div>
                    <ul className="work-experience-record-description-details">
                        {description.map(el => <li key={`${role}__${company}__${el}`}>{parse(el)}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
