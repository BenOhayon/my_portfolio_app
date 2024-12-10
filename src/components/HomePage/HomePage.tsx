import React, { useEffect } from 'react'
import About from '../About/About'
import ContactMe from '../ContactMe/ContactMe'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

import './HomePage.scss'
import { fullstackDeveloperData, softwareDeveloperData } from '../../constants/general.constants'
import { RESUME_TYPE_KEY } from '../../constants/storage.constants'
import { Navigate, useParams } from 'react-router-dom'
import WorkExperience from '../WorkExperience/WorkExperience'

export default function HomePage({ onClick }) {
    const { type } = useParams()

    const resumeData = getResumeData(type)

    useEffect(() => {
        if (type && (type === 'fs' || type === 'se')) {
            localStorage.setItem(RESUME_TYPE_KEY, type)
        }
    }, [])

    function getResumeData(type) {
        switch (type) {
            case 'fs': return fullstackDeveloperData
            case 'se': return softwareDeveloperData
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
