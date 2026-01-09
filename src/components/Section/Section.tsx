import React from 'react'
import './Section.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'

interface SectionProps {
  children: React.ReactNode,
  header: string,
  sectionClassName: string,
  sectionId: string,
  maxWidth?: number | string
}

const Section: React.FC<SectionProps> = ({
  children,
  header,
  sectionClassName,
  sectionId,
  maxWidth = 'unset'
}) => {
  const getMaxWidth = () => {
    if (typeof maxWidth === 'string') {
      if (maxWidth === 'unset') {
        return {};
      }
      return { maxWidth, marginInline: 'auto' };
    }
    return { maxWidth: `${maxWidth}px`, marginInline: 'auto' };
  }

  const sectionStyles = {
    ...getMaxWidth(),
  }

  return (
    <section id={sectionId} className={sectionClassName} style={sectionStyles}>
      <div data-aos="fade-down" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='header'>{header}</div>
      {children}
    </section>
  )
}

export default Section;