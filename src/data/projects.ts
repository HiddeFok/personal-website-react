export interface Project {
  name: string;
  blurb: string;
  detail: string;
  repo: string;
  tags: string[];
  paper?: string;
}

// `detail` is the field a reader remembers -- rewrite each one in your own
// words before publishing (Phase 6); these are placeholders based on the repos.
export const projects: Project[] = [
  {
    name: "reg-mmd-scikit",
    blurb:
      "A scikit-learn compatible implementation of the regMMD estimation and regression procedure.",
    detail:
      "Estimation based on the MMD criterion allows for robust estimation. This implemetation follows the standard scikit-learn format, allowing for easy integration into any Data Science project.",
    repo: "https://github.com/HiddeFok/reg-mmd-scikit",
    tags: ["Python", "scikit-learn API", "MMD"],
  },
  {
    name: "meta-grad-pytorch",
    blurb: "A PyTorch implementation of the MetaGrad algorithm.",
    detail:
      "MetaGrad adapts its learning rate by keeping track of multiple learning rates and estimating the best one. Packaging it as a standard torch.optim.Optimizer makes it usable as a drop-in replacement in an existing training loop.",
    repo: "https://github.com/HiddeFok/meta-grad-pytorch",
    tags: ["Python", "PyTorch", "Online learning"],
  },
  {
    name: "sample-efficient-learning-of-concepts",
    blurb:
      "Experiment code for 'Sample-efficient Learning of Concepts with Theoretical Guarantees' (NeurIPS 2025).",
    detail: "Reproduces every figure and table in the paper from a single entry point.",
    repo: "https://github.com/HiddeFok/sample-efficient-learning-of-concepts",
    tags: ["Python", "Reproducibility"],
    paper:
      "https://proceedings.neurips.cc/paper_files/paper/2025/hash/a23fa41edb52c314c058fd5ce97217d5-Abstract-Conference.html",
  },
  {
    name: "consequences-of-recourse",
    blurb: "Experiment code for 'Risks of Recourse in Binary Classification' (AISTATS 2024).",
    detail:
      "Synthetic experiments show the main conclusion of the paper: Recourse can decrease performance of ML models.",
    repo: "https://github.com/HiddeFok/consequences-of-recourse",
    tags: ["Python", "Reproducibility"],
    paper: "https://proceedings.mlr.press/v238/fokkema24a",
  },
  {
    name: "recourse-robust-explanations-impossible",
    blurb:
      "Experiment code for 'Attribution-based Explanations that Provide Recourse Cannot be Robust' (JMLR 2023).",
    detail:
      "Experiment code for the 'Attribution-based Explanations that Provide Recourse Cannot be Robust' (JMLR 2023).",
    repo: "https://github.com/HiddeFok/recourse-robust-explanations-impossible",
    tags: ["Python", "Reproducibility"],
    paper: "https://jmlr.org/papers/v24/23-0042.html",
  },
  {
    name: "This website",
    blurb: "Rebuilt from a React website",
    detail: "Rebuilt from a React website",
    repo: "https://github.com/HiddeFok/personal-website-react",
    tags: ["Astro", "TypeScript", "Docker"],
  },
];
