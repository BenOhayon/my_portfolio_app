import React from 'react'
import './Section.scss'
import { AOS_DURATION_MILLISECONDS } from '../../constants/general.constants'
import { SectionProps } from '../../propTypes'

export default function Section({
    children,
    header,
    sectionClassName,
    sectionId,
    maxWidth = 'unset'
}: SectionProps) {

    const sectionStyles = {
        ...getMaxWidth()
    }

    function getMaxWidth() {
        if (typeof maxWidth === 'string') {
            if (maxWidth === 'unset') {
                return {}
            }
            return { maxWidth, marginInline: 'auto' }
        }
        return { maxWidth: `${maxWidth}px`, marginInline: 'auto' }
    }

    return (
        <section id={sectionId} className={sectionClassName} style={sectionStyles}>
            <div data-aos="fade-down" data-aos-duration={`${AOS_DURATION_MILLISECONDS}`} className='header'>{header}</div>
            {children}
        </section>
    )
}
