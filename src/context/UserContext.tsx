import { createContext } from 'react';
import { IProject } from '../interfaces/project'

export interface appContextInterface {
  resume: string,
  logos: {},
  projects: IProject[]
}

export const UserContext = createContext<appContextInterface | null>(null);