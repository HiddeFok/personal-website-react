export interface Talk {
  title: string,
  location: string,
  date: string,
  additional?: any
}
// object should be removed
export const listTalks: Talk[] = [
  {
    title: 'Attribution-based Explenations that Provide Recourse Cannot be Robust', 
    location: 'CWI Amsterdam, Machine Learning Seminar', 
    date: 'July 2022'
  },
  {
    title: 'Poster presentation 1st Workshop Mathematics & Artificial Intelligence', 
    additional: 
    <div>
      <a href="Impossibility_poster.pdf" download>
        Poster file
      </a>
    </div>,
    location: 'CWI Amsterdam', 
    date: 'June 2022'
  }, 
  {
    title: `NeurIPS 2021 Debriefing Seminar`, 
    additional: 
    <div>
      Presented my favourite paper from NeurIPS 2021, <a 
      href="https://proceedings.neurips.cc/paper/2021/hash/18a9042b3fc5b02fe3d57fea87d6992f-Abstract.html">
        Framing RNN as a kernel method: A neural ODE approach
      </a>, by Fermanian, Marion, Vert, Biau.
    </div>,
    location: "University of Amsterdam, online meeting", 
    date: 'March 2022'
  }, 
  {
    title: '(Martingale) Optimal Transport: Introduction, Computation and Applications', 
    location: 'CWI Amsterdam, Machine Learning Seminar', 
    date: 'January 2022'
  }

]