import React, { useEffect } from 'react'
import About from '../About/About'
import ContactMe from '../ContactMe/ContactMe'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

import './HomePage.scss'
import { frontendDeveloperData, fullstackDeveloperData, softwareDeveloperData } from '../../constants/general.constants'
import { RESUME_TYPE_KEY } from '../../constants/storage.constants'
import { Navigate, useParams } from 'react-router-dom'
import WorkExperience from '../WorkExperience/WorkExperience'
import { ResumeData, ResumeType } from '../../types'
import { HomePageProps } from '../../propTypes'

export default function HomePage({ 
    onClick 
}: HomePageProps) {
    const { type } = useParams()

    const resumeData = getResumeData(type)

    useEffect(() => {
        if (type && type.toUpperCase() in ResumeType) {
            localStorage.setItem(RESUME_TYPE_KEY, type)
        }
    }, [])

    function getResumeData(type: ResumeType): ResumeData {
        switch (type) {
            case ResumeType.FS: return fullstackDeveloperData
            case ResumeType.SE: return softwareDeveloperData
            case ResumeType.FE: return frontendDeveloperData
        }
    }

    if (!resumeData) {
        return <Navigate to='/' replace={true} />
    }

	return (
		<div onClick={onClick} className='home-page-container'>
			<Hero resumeData={resumeData} />
			<About resumeData={resumeData} />
            <WorkExperience resumeData={resumeData}/>
			<ContactMe />
			<Footer resumeData={resumeData} />
		</div>
	)
}
