import { ReactNode } from "react"
import { ResumeData, TechStack } from "./types"

export type MainComponentProps = {
    resumeData: ResumeData
}

export type AboutProps = MainComponentProps
export type WorkExperienceProps = MainComponentProps
export type ContactMeProps = MainComponentProps
export type HeroProps = MainComponentProps
export type FooterProps = MainComponentProps
export type HomePageProps = {
    onClick: () => void
}

export type TechStackProps = {
    techStack: TechStack
}

export type SectionProps = {
    children: ReactNode,
    header: string,
    sectionClassName: string,
    sectionId: string,
    maxWidth?: number | string
}