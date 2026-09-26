export interface Project {
  name: string;
  blurb: string;
  detail: string;
  repo: string;
  tags: string[];
  paper?: string;
}

export const projects: Project[] = [
  {
    name: "reg-mmd-scikit",
    blurb:
      "A scikit-learn compatible implementation of the regMMD estimation and regression procedure.",
    detail:
      "Estimation based on the MMD criterion allows for robust estimation. This implementation follows the standard scikit-learn format, allowing for easy integration into any Data Science project. Based on the work done by Piere Alquier, and ...",
    repo: "https://github.com/HiddeFok/reg-mmd-scikit",
    tags: ["Python", "scikit-learn", "MMD"],
  },
  {
    name: "meta-grad-pytorch",
    blurb: "A PyTorch implementation of the MetaGrad algorithm.",
    detail:
      "MetaGrad adapts its learning rate by keeping track of multiple learning rates and estimating the best one. Packaging it as a standard torch.optim.Optimizer makes it usable as a drop-in replacement in an existing training loop. Based on the work done by Tim van Erven, Wouter Koolen and Dirk van der Hoeven",
    repo: "https://github.com/HiddeFok/meta-grad-pytorch",
    tags: ["Python", "PyTorch", "Online optimisation"],
  },
  {
    name: "sample-efficient-learning-of-concepts",
    blurb:
      "Experiment code for 'Sample-efficient Learning of Concepts with Theoretical Guarantees' (NeurIPS 2025).",
    detail:
      "Repository containing all the code needed to reproduce the experiments. Additionally contains a scikit-learn style implementation of the estimator we propose.",
    repo: "https://github.com/HiddeFok/sample-efficient-learning-of-concepts",
    tags: ["Python", "Reproducibility"],
    paper:
      "https://proceedings.neurips.cc/paper_files/paper/2025/hash/a23fa41edb52c314c058fd5ce97217d5-Abstract-Conference.html",
  },
  {
    name: "consequences-of-recourse",
    blurb: "Experiment code for 'Risks of Recourse in Binary Classification' (AISTATS 2024).",
    detail: "Repository containing all the code needed to reproduce the experiments.",
    repo: "https://github.com/HiddeFok/consequences-of-recourse",
    tags: ["Python", "Reproducibility"],
    paper: "https://proceedings.mlr.press/v238/fokkema24a",
  },
  {
    name: "recourse-robust-explanations-impossible",
    blurb:
      "Experiment code for 'Attribution-based Explanations that Provide Recourse Cannot be Robust' (JMLR 2023).",
    detail: "Repository containing all the code needed to reproduce the experiments.",
    repo: "https://github.com/HiddeFok/recourse-robust-explanations-impossible",
    tags: ["Python", "Reproducibility"],
    paper: "https://jmlr.org/papers/v24/23-0042.html",
  },
  {
    name: "This website",
    blurb:
      "The site you're looking at, written in Astro, static output, zero javascript dependencies.",
    detail:
      "This was a React app first, but I rewrote it to have a new design and a new framework. The idea was to simplify the site, and reduce what is served to basically zero dependencies.",
    repo: "https://github.com/HiddeFok/personal-website-react",
    tags: ["Astro", "TypeScript", "Docker"],
  },
];
