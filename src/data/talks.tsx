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
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    additional:
      <div>
        <a
          href="posters/ICML_2024_attribution_robustness.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          [Poster]
        </a>
      </div>,
    location: "International Conference on Machine Learning (ICML)",
    date: "July 2024"
  },
  {
    title: "Online Newton Method for Bandit Convex Optimisation",
    additional:
      <div>
        <a
          href="talks/2024_COLT_Newton_method_Convex_Bandit_Optimisation.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          [Slides]
        </a>,
        <a
          href="posters/COLT_2024_Online_Newton_Method_for_BCO.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          [Poster]
        </a>
      </div>,
    location: "Conference on Learning Theory (COLT)",
    date: "July 2024"
  },
  {
    title: "The Risks of Recourse in Binary Classification",
    additional:
      <div>
        <a
          href="posters/AISTATS_2024_risks_of_recourse.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          [Poster]
        </a>
      </div>,
    location: "International Conference on Artificial Intelligence & Statistics (AISTATS)",
    date: "May 2024"
  },
  {
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    additional:
      <div>
        <a
          href="talks/202405_theory_of_interpretable_ai.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          [Slides]
        </a>,
        <a
          href="https://www.youtube.com/watch?v=EwwllG40XZM" 
        >
          [Video]
        </a>
      </div>,
    location: "Theory of Interpretable AI Seminar",
    date: "March 2024"
  },
  {
    title: "A new Algorithm for Convex Bandit Optimization",
    additional:
      <div>
        <a
          href="talks/202403_BCO_stochastics_seminar.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          [Slides]
        </a>
      </div>,
    location: "Stochastics Seminar KdVi, Univeristy of Amsterdam",
    date: "March 2024"
  },
  {
    title: "Some Theoretical Limitations of Explainability Methods",
    additional:
      <div>
        <a
          href="talks/Theoretische_beperkingene_XAI.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          [Slides]
        </a>,&nbsp; 
        General Audience talk, 
        In Dutch,
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
          [Slides]
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
          [Slides]
        </a>,
      </div>,
    location: "Saarland University, Workshop on Interpretabiltiy and Recourse",
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
          [Slides]
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
          [Slides]
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
          [Slides]
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
          [Slides]
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
      <a 
        href="posters/Impossibility_poster.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        >
        [Poster]
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