export interface newsItem {
  title: string
  additional?: any 
}

export const newsItems: newsItem[] = [
  {
    title: `2026-02: I successfully defended my PhD in January 2026! This means that I have finished my chapter at the University of Amsterdam. For my next steps, I am looking for industry roles, as I would like to be more practically involved in the current AI developments. Any leads would be very helpful!`
  },
  {
    title: `2025-09: Both our Concept paper and Performative Validity paper will be published at NeurIPS 2025! Camera-ready versions will follow later in October.`,
    additional:
    <div>
      Links:&nbsp;  
      <a href="https://arxiv.org/abs/2502.06536">[Concept Paper]</a>
      &nbsp;
      <a href="https://arxiv.org/abs/2506.15366">[Validity Paper]</a>
    </div>
  },
  {
    title: `2025-07: I will be working at Booking.com the following 3 months as a Machine Learning Scientist. The goal of the project is to put some of the theory we developped for Bandit Optimization problems into practise`,
  },
  {
    title: `2025-06: New Preprint online! We introduce a new definition: Performative Validity, which measures
    the validity of Recourse Explanations after subsequence retrains of the model. We show that only recourse explanations
    targetting causes of the target labels have this property.`,
    additional: 
    <div>
      ArXiv link: &nbsp;
      <a href="https://arxiv.org/abs/2506.15366">
        Performative Validity of Recourse Explanations
      </a>
    </div>
  },
  {
    title: `2025-02: New Preprint online! We construct an estimator that can learn concepts
    from encodings learned in the Causal Representation Learning framework`,
    additional: 
    <div>
      ArXiv link: &nbsp;
      <a href="https://arxiv.org/abs/2502.06536">
        Sample-efficient Learning of Concepts with Theoretical Guarantees: from Data to Concepts without Interventions
      </a>
    </div>
  },
  {
    title:`2024-05: Two Updates in one this time:`,
    additional:
    <div>
      <ul>
        <li>Our new paper 'Online Newton Method for Bandit Convex Optimisation' will be published at COLT 2024. I will also attend. So see you in Edmonton!
          <a href="https://arxiv.org/abs/2406.06506">[ArXiv]</a>
        </li>
        <li>I will be present at ICML 2024 to present 'Attribution-based Explanations that Provide Recourse Cannot be Robust' as part of the JMLR-to-conference track!</li>
      </ul>
    </div>
  },
  {
    title:`2024-01: My second article of my PhD will be published at the conference
    on AI and statistics (AISTATS)! (link will follow)`,
  },
  {
    title:`2023-11: My first article has been published in the 
    Journal of Machine Learning Research!`,
    additional:
    <div>
      JMLR link:&nbsp;
      <a href="https://jmlr.org/papers/v24/23-0042.html">Attribution-based Explanations that Provide Recourse Cannot be Robust</a>
    </div>
  },
  {
    title:`2023-10:  I will be in Saarbrücken for a workshop on interpretable machine learning`
  },
  {
    title: `2023-09: Giving 2 talks in September! Both will be about the theoretical limitations of 
    explainability methods. The first will be for the Amsterdam Business School and the second for
    Xomnia.`
  },
  {
    title: `2023-05: A new preprint is out, where we invistigate 
    the possible consequences on the risk by providing recourse!`,
    additional: 
    <div>
      ArXiv link:&nbsp;
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
      ArXiv link: <a href="https://arxiv.org/abs/2205.15834">Attribution-based Explanations that Provide Recourse Cannot be Robust.</a>
    </div>
  },
  {
    title: "2021-09: Started my PhD!"
  }
]