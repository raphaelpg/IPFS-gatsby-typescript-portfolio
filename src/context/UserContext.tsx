import { createContext } from 'react';
import { ProjectData } from '../data/data'

export interface appContextInterface {
  resume: string,
  logos: {},
  projects: ProjectData[]
}

export const UserContext = createContext<appContextInterface | null>(null);