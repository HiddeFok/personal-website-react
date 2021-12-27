export interface Thesis {
  title: string
  supervisors: string
  type: string
  date: string
  link: string
}

export const Theses: Thesis[] = [
  {
    title: "Stability and computation of martingale optimal transport",
    supervisors: "dr. Sonja Cox, Prof. dr. Peter Spreij",
    type: "Master thesis, Mathematics",
    date: "June 2021",
    link: "MSc_thesis.pdf"
  },
  {
    title: "Learning and thermodynamics",
    supervisors: "dr. Bas Kleijn, dr. Greg Stephens",
    type: "Dubble Bachelor thesis, Mathematics and Physics",
    date: "July 2019",
    link: "BSc_thesis.pdf"
  }
]