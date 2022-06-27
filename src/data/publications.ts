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
    title: 'Attribution-based Explenations that Provide Recourse Cannot be Robust', 
    authors: ['H. Fokkema', 'R. de Heide', 'T. van Erven'],
    journal: 'Arxiv', 
    date: '2022', 
    link: 'https://arxiv.org/abs/2205.15834', 
    additional: 'Submitted'
  }
]