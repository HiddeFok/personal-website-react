export interface Talk {
  title: string;
  location: string;
  date: string;
  links?: { label: string; href: string }[];
  note?: string;
}

export const listTalks: Talk[] = [
  {
    title: "Performativity and Risks of Algorithmic Recourse",
    location: "Cardiff University, Explainable Learning & Reasoning Workshop",
    date: "June 2025",
    links: [{ label: "Slides", href: "/posters/Cardiff_workshop_2025.pdf" }],
  },
  {
    title:
      "Using Causal Representation Learning to formalize concept extraction from learned representations",
    location: "University of Tübingen, Research Seminar 'Machine Learning Theory'",
    date: "November 2024",
    note: "A work in progress!",
  },
  {
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    location: "International Conference on Machine Learning (ICML)",
    date: "July 2024",
    links: [{ label: "Poster", href: "/posters/ICML_2024_attribution_robustness.pdf" }],
  },
  {
    title: "Online Newton Method for Bandit Convex Optimisation",
    location: "Conference on Learning Theory (COLT)",
    date: "July 2024",
    links: [
      {
        label: "Slides",
        href: "/talks/2024_COLT_Newton_method_Convex_Bandit_Optimisation.pdf",
      },
      {
        label: "Poster",
        href: "/posters/COLT_2024_Online_Newton_Method_for_BCO.pdf",
      },
    ],
  },
  {
    title: "The Risks of Recourse in Binary Classification",
    location: "International Conference on Artificial Intelligence & Statistics (AISTATS)",
    date: "May 2024",
    links: [{ label: "Poster", href: "/posters/AISTATS_2024_risks_of_recourse.pdf" }],
  },
  {
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    location: "Theory of Interpretable AI Seminar",
    date: "March 2024",
    links: [
      { label: "Slides", href: "/talks/202405_theory_of_interpretable_ai.pdf" },
      { label: "Video", href: "https://www.youtube.com/watch?v=EwwllG40XZM" },
    ],
  },
  {
    title: "A new Algorithm for Convex Bandit Optimization",
    location: "Stochastics Seminar KdVi, Univeristy of Amsterdam",
    date: "March 2024",
    links: [{ label: "Slides", href: "/talks/202403_BCO_stochastics_seminar.pdf" }],
  },
  {
    title: "Some Theoretical Limitations of Explainability Methods",
    location: "Ministry of justice and security",
    date: "March 2024",
    links: [{ label: "Slides", href: "/talks/Theoretische_beperkingene_XAI.pdf" }],
    note: "General audience talk, in Dutch",
  },
  {
    title: "The Risks of Recourse in Binary Classification",
    location: "AI & Mathematics PhD/PostDoc Network day",
    date: "November 2023",
    links: [{ label: "Slides", href: "/talks/AIM_RoR_talk.pdf" }],
  },
  {
    title: "The Risks of Recourse in Binary Classification",
    location: "Saarland University, Workshop on Interpretabiltiy and Recourse",
    date: "October 2023",
    links: [{ label: "Slides", href: "/talks/Saarland_RoR_talk.pdf" }],
  },
  {
    title: "The Risks of Recourse in Binary Classification",
    location: "Amsterdam Business School",
    date: "September 2023",
    links: [{ label: "Slides", href: "/talks/ABS_talk.pdf" }],
  },
  {
    title: "Some Theoretical Limitations of Explainability Methods",
    location: "Xomnia",
    date: "September 2023",
    links: [{ label: "Slides", href: "/talks/xomnia_talk.pdf" }],
    note: "General audience talk",
  },
  {
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    location: "1st Nice workshop on Interpretability",
    date: "November 2022",
    links: [
      { label: "Slides", href: "/talks/Nice_workshop_attribution.pdf" },
      {
        label: "Workshop website",
        href: "https://sites.google.com/view/nwi2022/home",
      },
    ],
  },
  {
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    location: "Statistics seminar KdVi, University of Amsterdam",
    date: "November 2022",
    links: [
      {
        label: "Slides",
        href: "/talks/202211_Statistics_seminar_all_slides.pdf",
      },
    ],
  },
  {
    // Typo "Explenations" fixed so this groups with the four entries above.
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    location: "CWI Amsterdam, Machine Learning Seminar",
    date: "July 2022",
  },
  {
    title: "Poster presentation 1st Workshop Mathematics & Artificial Intelligence",
    location: "CWI Amsterdam",
    date: "June 2022",
    links: [{ label: "Poster", href: "/posters/Impossibility_poster.pdf" }],
  },
  {
    title: "NeurIPS 2021 Debriefing Seminar",
    location: "University of Amsterdam, online meeting",
    date: "March 2022",
    links: [
      {
        label: "Framing RNN as a kernel method: A neural ODE approach",
        href: "https://proceedings.neurips.cc/paper/2021/hash/18a9042b3fc5b02fe3d57fea87d6992f-Abstract.html",
      },
    ],
    note: "Presented my favourite paper from NeurIPS 2021, by Fermanian, Marion, Vert & Biau.",
  },
  {
    title: "(Martingale) Optimal Transport: Introduction, Computation and Applications",
    location: "CWI Amsterdam, Machine Learning Seminar",
    date: "January 2022",
  },
];
