export type ResumeData = {
    role: string,
    targetRoles: string[],
    techStack: TechStack,
    workExperience: WorkExperienceStep[]
}

type WorkExperienceStep = {
    role: string,
    company: string,
    timePeriod: {
        fromYear: number,
        toYear: number | 'present',
    }
    description: string[]
}

export type TechStack = {
    [key: string]: string
}

export type AppContextData = {
    isMobile: boolean
}