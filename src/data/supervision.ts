export interface Supervision {
    students: string[], 
    title: string,
    year: number
    level: string, 
    additional?: string
  }
  
  export const supervisionList: Supervision[] = [
    {
      students: ["Finn van Vlaanderen", "Jelle Sipkes"],
      title: "Reinforcement Learning",
      year: 2023, 
      level: "BSc Mathematics, 2nd year project"
    }, 
    {
      students: ["Misho Yanakiev"],
      title: "Bounds for Linear Explanations of Differentiable Inner Product Functions",
      year: 2023, 
      level: "MSc Mathematics, Thesis", 
    }
  ]
  