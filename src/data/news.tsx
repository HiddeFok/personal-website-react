export interface newsItem {
  title: string
  additional?: any 
}

export const newsItems: newsItem[] = [
  {
    title: `2023-05: A new preprint is out, where we invistigate 
    the possible consequences on the risk by providing recourse!`,
    additional: 
    <div>
      Title and link:&nbsp;
      <a href="https://arxiv.org/abs/2306.00497">Risks of Recourse in Binary Classification</a>
    </div>
  },
  {
    title: "2022-11: I will be speaking at the 1st Nice Workshop on Interpretability!",
    additional: 
    <div>
      <a href="https://sites.google.com/view/nwi2022/home">Information and website</a>
    </div>
  },
  {
    title: "2022-09: Going to the YES workshop on Optimal Transport, Statistics and Machine Learning."
  },
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