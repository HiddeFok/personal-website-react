export interface Publication {
  title: string
  authors: string[],
  journal: string, 
  date: string,
  link: string,
  additional?: any
}
// object should be removed
export const listPublications: Publication[] | [] = [] 