interface WorkExperienceStep {
  role: string;
  company: string;
  timePeriod: {
    fromYear: number;
    toYear: number | 'present';
  };
  description: string[];
}

export interface TechStackData {
  [key: string]: string;
}

export interface ResumeData {
  role: string;
  targetRoles: string[];
  techStack: TechStackData;
  workExperience: WorkExperienceStep[];
}

export type AppContextData = {
  isMobile: boolean;
}

export type ResumeType = 'fs' | 'fe' | 'se';