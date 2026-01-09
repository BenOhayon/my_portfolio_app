import React, { useEffect } from 'react'
import About from '../About/About.js'
import ContactMe from '../ContactMe/ContactMe'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

import './HomePage.scss'
import { frontendDeveloperData, fullstackDeveloperData, softwareDeveloperData } from '../../constants/general.constants'
import { RESUME_TYPE_KEY } from '../../constants/storage.constants'
import { Navigate, useParams } from 'react-router-dom'
import WorkExperience from '../WorkExperience/WorkExperience'
import { ResumeData, ResumeType } from '../../types'
import { isResumeType } from '../../utils/type-guards'

const FALLBACK_RESUME_TYPE: ResumeType = 'fe';

interface HomePageProps {
  onClick: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onClick }) => {
  const { type } = useParams()

  if (!type || !isResumeType(type)) return <Navigate to={`/${FALLBACK_RESUME_TYPE}`} replace={true} />;

  useEffect(() => {
    if (type !== 'fs' && type !== 'fe' && type !== 'se') return;
    
    localStorage.setItem(RESUME_TYPE_KEY, type);
  }, [])

  const getResumeData = (type: ResumeType): ResumeData => {
    switch (type) {
      case 'fs': return fullstackDeveloperData
      case 'se': return softwareDeveloperData
      case 'fe': return frontendDeveloperData
    }
  }

  const resumeData = getResumeData(type)

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

export default HomePage;