export interface Talk {
  title: string,
  location: string,
  date: string,
  additional?: any
}
// object should be removed

// TODO: update
export const listTalks: Talk[] = [
  {
    title: "A new Algorithm for Convex Bandit Optimization",
    additional:
      <div>
        Slides to follow
      </div>,
    location: "Stochastics Seminar KdVi, Univeristy of Amsterdam",
    date: "March 2024"
  },
  {
    title: "Some Theoretical Limitations of Explainability Methods",
    additional:
      <div>
        Slides to follow,&nbsp; 
        General Audience talk,
      </div>,
    location: "Ministry of justice and security",
    date: "March 2024"
  },
  {
    title: "The Risks of Recourse in Binary Classification",
    additional:
      <div>
        <a
          href="talks/AIM_RoR_talk.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Slides
        </a>,
      </div>,
    location: "AI & Mathematics PhD/PostDoc Network day",
    date: "November 2023"
  },
  {
    title: "The Risks of Recourse in Binary Classification",
    additional:
      <div>
        <a
          href="talks/Saarland_RoR_talk.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Slides
        </a>,
      </div>,
    location: "Saarland University, Workshop op Interpretabiltiy and Recourse",
    date: "October 2023"
  },
  {
    title: "The Risks of Recourse in Binary Classification",
    additional:
      <div>
        <a
          href="talks/ABS_talk.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Slides
        </a>,
      </div>,
    location: "Amsterdam Business School",
    date: "September 2023"
  },
  {
    title: "Some Theoretical Limitations of Explainability Methods",
    additional:
      <div>
        <a 
          href="talks/xomnia_talk.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Slides
        </a>,&nbsp; 
        General Audience talk,
      </div>,
    location: "Xomnia",
    date: "September 2023"
  },
  {
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    additional:
      <div>
        <a 
          href="talks/Nice_workshop_attribution.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Slides
        </a>,&nbsp;
        <a 
          href="https://sites.google.com/view/nwi2022/home" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Information and website
        </a>
      </div>,
    location: "1st Nice workshop on Interpretability",
    date: "November 2022"
  },
  {
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    additional:
      <div>
        <a 
          href="talks/202211_Statistics_seminar_all_slides.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Slides
        </a>,&nbsp;
      </div>,
    location: "Statistics seminar KdVi, University of Amsterdam",
    date: "November 2022"
  },
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