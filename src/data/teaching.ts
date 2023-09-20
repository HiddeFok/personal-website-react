export interface Course {
  title: string
  year: number
  level: string
  url?: string
}

export const courseList: Course[] = [
  {
    title: "Machine Learning Theory",
    year: 2024, 
    level: "MSc Mathematics, M1"
  },
  {
    title: "Stochastiek 2: Statistics",
    year: 2023, 
    level: "BSc Mathematics, 2nd year"
  },
  {
    title: "Stochastic Integration",
    year: 2023, 
    level: "MSc Mathematics, M2"
  }, 
  {
    title: "Machine Learning Theory",
    year: 2023, 
    level: "MSc Mathematics, M1", 
    url: "https://homepages.cwi.nl/~wmkoolen/MLT_2023/"
  },
  {
    title: "Stochastiek 2: Statistics", 
    year: 2022, 
    level: "BSc Mathematics, 2nd year"
  },
  {
    title: "Bayesian Statistics", 
    year: 2022, 
    level: 'BSc Mathematics, 3rd year'
  },
  {
    title: "Inleiding Numerieke Wiskunde", 
    year: 2018, 
    level: "BSc Mathematics, 2nd year"
  },
  {
    title: "Stochastiek 2: Statistics", 
    year: 2021, 
    level: "BSc Mathematics, 2nd year"
  }
]
