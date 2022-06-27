export interface newsItem {
  title: string
  additional?: any 
}

export const newsItems: newsItem[] = [
  {
    title: "2022-07: Going to COLT 2022 in London."
  },
  {
    title: `2022-05: My first paper, authored together with Rianne de Heide and Tim van Erven, is submitted!`,
    additional: 
    <div>
      Title and link: <a href="https://arxiv.org/abs/2205.15834">Attribution-based Explanations that Provide Recourse Cannot be Robust.</a>
    </div>
  },
  {
    title: "2021-09: Started my PhD!"
  }
]