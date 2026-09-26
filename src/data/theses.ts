import phdCover from "../assets/paper_diagrams/PhD_cover.png";

export const phdThesis = {
  title: "Mathematical Foundations of Explainable AI and Advances in Bandit Optimisation",
  institution: "University of Amsterdam",
  defended: "January 2026",
  year: "2026",
  isbn: "978-94-6522-938-6",
  pdf: "https://pure.uva.nl/ws/files/277470997/Thesis.pdf",
  record: "https://dare.uva.nl/search?identifier=e0b2c89d-603a-4edc-b9b9-59a6547c1eec",
  cover: phdCover,
  summary:
    "My dissertation consists of two parts. In the first part it presents several works that expand the mathematical foundations explainable AI methods. In particular, it investigates attribution methods, counterfactual methods and concept-based models. Attribution methods indicate which input features are the most important to a particular model. What importance means is often ambiguous. We propose one interpretation in Chapter 2, where we interpret the attribution scores as a direction. The direction tells the user how to change their features to achieve a certain goal. We show that such methods are not robust with respect to the input: users with very similar attributes, might get drastically different explanations. In the following chapters 3 and 4, we zoom in on the counterfactual explanations. We demonstrate that following these explanations will change the underlying data distribution. We show that this can result in a decrease in accuracy of the model and even invalid the explanations themselves over time. In Chapter 5 we propose a method and new framework that can be used to develop sample-efficient concept-based models. By effectively leveraging the techniques used in Causal Representation Learning, we are able to be more data efficient. Finally, in the second part and the last chapter, we look at the bandit convex optimisation problem. We propose a new algorithm that is able to solve this problem, which has improved regret bounds compared to earlier algorithms, while being efficiently implementable.",
};

export interface Thesis {
  title: string;
  supervisors: string;
  type: string;
  date: string;
  link: string;
}

export const Theses: Thesis[] = [
  {
    title: "Stability and computation of martingale optimal transport",
    supervisors: "dr. Sonja Cox, Prof. dr. Peter Spreij",
    type: "Master thesis, Mathematics",
    date: "June 2021",
    link: "MSc_thesis.pdf",
  },
  {
    title: "Learning and thermodynamics",
    supervisors: "dr. Bas Kleijn, dr. Greg Stephens",
    type: "Double Bachelor thesis, Mathematics and Physics",
    date: "July 2019",
    link: "BSc_thesis.pdf",
  },
];
