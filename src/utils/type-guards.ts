import { ResumeType } from "../types";

export const isResumeType = (value: string): value is ResumeType => {
  return value === 'fs' || value === 'fe' || value === 'se';
}