export interface IProject {
  id: string,
  img: string,
  title: string,
  description: string[],
  url?: string,
  repo?: string,
  stack: string[]
}