import React from 'react'
import './Section.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'

export default function Section({
    children,
    header,
    sectionClassName,
    sectionId,
    maxWidth = null
}) {

    const sectionStyles = {
        ...(maxWidth ? { maxWidth: `${maxWidth}px`, marginInline: 'auto' } : {})
    }

    return (
        <section id={sectionId} className={sectionClassName} style={sectionStyles}>
            <div data-aos="fade-down" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='header'>{header}</div>
            {children}
        </section>
    )
}
