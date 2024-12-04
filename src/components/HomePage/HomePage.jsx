import React, { useEffect } from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

import './HomePage.scss'
import { fullstackDeveloperData, softwareDeveloperData } from '../../constants/general.constants'
import { RESUME_TYPE_KEY } from '../../constants/storage.constants'

export default function HomePage({ onClick, type }) {
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

	return (
		<div onClick={onClick} className='home-page-container'>
			<Hero resumeData={resumeData} />
			<About resumeData={resumeData} />
			<Projects />
			<ContactMe />
			<Footer resumeData={resumeData} />
		</div>
	)
}
