export interface NewsItem {
  date: string;
  text: string;
  links?: { label: string; href: string }[];
}

export const newsItems: NewsItem[] = [
  {
    // TODO(hidde): confirm the real start month.
    date: "2026-05",
    text: "I have started as an AI Research Engineer at Plumerai, working on efficient deep learning for Edge AI.",
  },
  {
    date: "2026-02",
    text: "I successfully defended my PhD in January 2026! This means that I have finished my chapter at the University of Amsterdam. I have since joined Plumerai as an AI Research Engineer.",
    links: [
      {
        label: "Dissertation (PDF)",
        href: "https://pure.uva.nl/ws/files/277470997/Thesis.pdf",
      },
    ],
  },
  {
    date: "2025-09",
    text: "Both our Concept paper and Performative Validity paper will be published at NeurIPS 2025! Camera-ready versions will follow later in October.",
    links: [
      { label: "Concept paper", href: "https://arxiv.org/abs/2502.06536" },
      { label: "Validity paper", href: "https://arxiv.org/abs/2506.15366" },
    ],
  },
  {
    date: "2025-07",
    text: "I will be working at Booking.com the following 3 months as a Machine Learning Scientist. The goal of the project is to put some of the theory we developed for Bandit Optimization problems into practice.",
  },
  {
    date: "2025-06",
    text: "New Preprint online! We introduce a new definition: Performative Validity, which measures the validity of Recourse Explanations after subsequence retrains of the model. We show that only recourse explanations targeting causes of the target labels have this property.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2506.15366" }],
  },
  {
    date: "2025-02",
    text: "New Preprint online! We construct an estimator that can learn concepts from encodings learned in the Causal Representation Learning framework.",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2502.06536" }],
  },
  {
    date: "2024-05",
    text: "Our new paper 'Online Newton Method for Bandit Convex Optimisation' will be published at COLT 2024. I will also attend, so see you in Edmonton!",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2406.06506" }],
  },
  {
    date: "2024-05",
    text: "I will be present at ICML 2024 to present 'Attribution-based Explanations that Provide Recourse Cannot be Robust' as part of the JMLR-to-conference track!",
  },
  {
    date: "2024-01",
    text: "My second article of my PhD will be published at the conference on AI and statistics (AISTATS)!",
  },
  {
    date: "2023-11",
    text: "My first article has been published in the Journal of Machine Learning Research!",
    links: [
      {
        label: "JMLR",
        href: "https://jmlr.org/papers/v24/23-0042.html",
      },
    ],
  },
  {
    date: "2023-05",
    text: "A new preprint is out, where we investigate the possible consequences on the risk by providing recourse!",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2306.00497" }],
  },
  {
    date: "2022-05",
    text: "My first paper, authored together with Rianne de Heide and Tim van Erven, is submitted!",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2205.15834" }],
  },
];
