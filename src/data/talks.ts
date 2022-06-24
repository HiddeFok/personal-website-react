export interface Talk {
  title: string,
  location: string,
  date: string,
  additional?: any
}
// object should be removed
export const listTalks: Talk[] = [
  {
    title: 'Attribution-based Explenations that Provide ecourse Cannot be Robust', 
    location: 'CWI Amsterdam, Machine Learning Seminar', 
    date: 'July 2022'
  }, 
  {
    title: 'Poster presentation 1st Workshop Mathematics & Artificial Intelligence', 
    location: 'CWI Amsterdam', 
    date: 'June 2022'
  }, 
  {
    title: '(Martingale) Optimal Transport: Introduction, Computation and Applications', 
    location: 'CWI Amsterdam, Machine Learning Seminar', 
    date: 'January 2022'
  }

]