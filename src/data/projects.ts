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
      "Conforming to the scikit-learn estimator contract means fit/predict semantics, parameter validation and cross-validation all work out of the box, so the method drops into an existing pipeline unchanged.",
    repo: "https://github.com/HiddeFok/reg-mmd-scikit",
    tags: ["Python", "scikit-learn API", "MMD"],
  },
  {
    name: "meta-grad-pytorch",
    blurb: "A PyTorch implementation of the MetaGrad algorithm.",
    detail:
      "MetaGrad adapts its learning rate by running several sub-learners in parallel. Packaging it as a standard torch.optim.Optimizer makes it usable as a drop-in replacement in an existing training loop.",
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
    paper: "https://arxiv.org/abs/2502.06536",
  },
  {
    name: "consequences-of-recourse",
    blurb: "Experiment code for 'Risks of Recourse in Binary Classification' (AISTATS 2024).",
    detail:
      "Simulates the feedback loop between a deployed classifier and the recourse it hands out, which is what makes the risk increase visible.",
    repo: "https://github.com/HiddeFok/consequences-of-recourse",
    tags: ["Python", "Reproducibility"],
    paper: "https://proceedings.mlr.press/v238/fokkema24a",
  },
  {
    name: "recourse-robust-explanations-impossible",
    blurb:
      "Experiment code for 'Attribution-based Explanations that Provide Recourse Cannot be Robust' (JMLR 2023).",
    detail:
      "Demonstrates the impossibility result empirically on the attribution methods used in practice.",
    repo: "https://github.com/HiddeFok/recourse-robust-explanations-impossible",
    tags: ["Python", "Reproducibility"],
    paper: "https://jmlr.org/papers/v24/23-0042.html",
  },
  {
    name: "This website",
    blurb: "A static personal site built with Astro, shipping zero JavaScript to the browser.",
    detail:
      "Rebuilt from a Create React App bundle: one runtime dependency instead of thirty, content kept as typed data files, deployed as a two-stage Docker image via GitHub Actions.",
    repo: "https://github.com/HiddeFok/personal-website-react",
    tags: ["Astro", "TypeScript", "Docker"],
  },
];
