export interface Course {
  title: string
  year: number
  level: string
}

export const courseList: Course[] = [
  {
    title: "Bayesian Statistics", 
    year: 2022, 
    level: 'BSc Mathematics, 3rd year'
  },
  {
    title: "Inleiding numerieke wiskunde", 
    year: 2018, 
    level: "BSc Mathematics, 2nd year"
  },
  {
    title: "Stochastiek 2: Statistics", 
    year: 2021, 
    level: "BSc Mathematics, 2nd year"
  }
]
