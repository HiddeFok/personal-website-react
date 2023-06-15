export interface Publication {
  title: string
  authors: string[],
  journal: string, 
  date: string,
  link: string,
  additional?: any
}
// object should be removed
export const listPublications: Publication[] = [
{
    title: 'Risks of Recourse in Binary Classification', 
    authors: ['H. Fokkema', 'D. Garreau', 'T. van Erven'],
    journal: 'ArXiv', 
    date: '2023', 
    link: 'https://arxiv.org/abs/2306.00497', 
    additional: 'Submitted'
  },
  {
    title: 'Attribution-based Explenations that Provide Recourse Cannot be Robust', 
    authors: ['H. Fokkema', 'R. de Heide', 'T. van Erven'],
    journal: 'ArXiv', 
    date: '2022', 
    link: 'https://arxiv.org/abs/2205.15834', 
    additional: 'Submitted'
  }
]