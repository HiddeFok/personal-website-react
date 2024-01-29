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
    title: 'Risks of Recourse in Binary Classification', 
    authors: ['HF', 'Damien Garreau', 'Tim van Erven'],
    journal: 'Conference on Artificial Intelligence & Statistics (AISTATS)', 
    date: '2024', 
    link: 'https://arxiv.org/abs/2306.00497', 
    status: "published",
  },
  {
    title: 'Attribution-based Explanations that Provide Recourse Cannot be Robust', 
    authors: ['HF', 'Rianne de Heide', 'Tim van Erven'],
    journal: 'Journal of Machine Learning Research (JMLR)', 
    date: '2023', 
    link: 'https://jmlr.org/papers/v24/23-0042.html', 
    status: "published"
  }
]