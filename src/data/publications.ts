export interface Publication {
  title: string
  authors: string[],
  journal: string, 
  date: string,
  link: string,
  status: "published" | "preprint",
  additional?: any
}
// object should be removed
export const listPublications: Publication[] = [
{
    title: 'Online Newton Method for Bandit Convex Optimisation Extended Abstract', 
    authors: ['HF', 'Dirk van der Hoeven', 'Tor Lattimore', 'Jack J. Mayo'],
    journal: 'International Conference on Learning Theory (COLT), PMLR, vol. 196, pp. 1--28', 
    date: '2024', 
    link: 'https://www.arxiv.org/abs/2406.06506', 
    status: "published",
},
{
    title: 'Risks of Recourse in Binary Classification', 
    authors: ['HF', 'Damien Garreau', 'Tim van Erven'],
    journal: 'International Conference on Artificial Intelligence & Statistics (AISTATS), PMLR, vol. 238, pp. 550--558', 
    date: '2024', 
    link: 'https://proceedings.mlr.press/v238/fokkema24a', 
    status: "published",
  },
  {
    title: 'Attribution-based Explanations that Provide Recourse Cannot be Robust', 
    authors: ['HF', 'Rianne de Heide', 'Tim van Erven'],
    journal: 'Journal of Machine Learning Research (JMLR), vol. 24, no. 360, pp. 1-37', 
    date: '2023', 
    link: 'https://jmlr.org/papers/v24/23-0042.html', 
    status: "published"
  }
]