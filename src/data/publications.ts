export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  date: string;
  link: string;
  status: "published" | "preprint";
  code?: string;
  additional?: any;
}
// object should be removed
export const listPublications: Publication[] = [
  {
    title: "Performative Validity of Recourse Explanations",
    authors: [
      "Gunnar König",
      "HF",
      "Timo Freiesleben",
      "Celestine Mendler-Dunner",
      "Ulrike von Luxburg",
    ],
    journal:
      "Advances in Neural Information Processing Systems (NeurIPS), vol. 38, pp. 139334--139370",
    date: "2025",
    link: "https://proceedings.neurips.cc/paper_files/paper/2025/hash/cbbbd7db0a672d01bdb7313fbb4ae6a9-Abstract-Conference.html",
    status: "published",
  },
  {
    title:
      "Sample-efficient Learning of Concepts with Theoretical Guarantees: from Data to Concepts without Interventions",
    authors: ["HF", "Tim van Erven", "Sara Magliacane"],
    journal:
      "Advances in Neural Information Processing Systems (NeurIPS), vol. 38, pp. 111783--111843",
    date: "2025",
    link: "https://proceedings.neurips.cc/paper_files/paper/2025/hash/a23fa41edb52c314c058fd5ce97217d5-Abstract-Conference.html",
    status: "published",
    code: "https://github.com/HiddeFok/sample-efficient-learning-of-concepts",
  },
  {
    title: "Online Newton Method for Bandit Convex Optimisation",
    authors: ["HF", "Dirk van der Hoeven", "Tor Lattimore", "Jack J. Mayo"],
    journal: "International Conference on Learning Theory (COLT), PMLR, vol. 196, pp. 1--28",
    date: "2024",
    link: "https://www.arxiv.org/abs/2406.06506",
    status: "published",
    additional: "Published as an Extended Abstract",
  },
  {
    title: "Risks of Recourse in Binary Classification",
    authors: ["HF", "Damien Garreau", "Tim van Erven"],
    journal:
      "International Conference on Artificial Intelligence & Statistics (AISTATS), PMLR, vol. 238, pp. 550--558",
    date: "2024",
    link: "https://proceedings.mlr.press/v238/fokkema24a",
    status: "published",
    code: "https://github.com/HiddeFok/consequences-of-recourse",
  },
  {
    title: "Attribution-based Explanations that Provide Recourse Cannot be Robust",
    authors: ["HF", "Rianne de Heide", "Tim van Erven"],
    journal: "Journal of Machine Learning Research (JMLR), vol. 24, no. 360, pp. 1-37",
    date: "2023",
    link: "https://jmlr.org/papers/v24/23-0042.html",
    status: "published",
    code: "https://github.com/HiddeFok/recourse-robust-explanations-impossible",
  },
];

