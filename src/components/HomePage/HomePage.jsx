import React, { useEffect } from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

import './HomePage.scss'
import { useParams } from 'react-router-dom'
import { fullstackDeveloperData, softwareDeveloperData } from '../../constants/general.constants'
import { useAppContext } from '../MainApp/App'
import { RESUME_TYPE_KEY } from '../../constants/storage.constants'

export default function HomePage({ onClick }) {
    const { type } = useParams('type')
    const resumeData = type === 'fs' ? fullstackDeveloperData : softwareDeveloperData

    useEffect(() => {
        if (type) {
            localStorage.setItem(RESUME_TYPE_KEY, type)
        }
    }, [])

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
