
import React from "react";

import { useTheme } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface interest {
  subject: string, 
  text: string,
  style?: {[key: string]: string}
}

const interests: interest[] = [
  {
    subject: "Mathematical Foundations of Explainable AI:", 
    text: `In the last years, many models and methods were invented to 
           explain decisions made by Machine Learning and Deep Learning models. 
           However, most of these models are invented based on heuristics and verified 
           empirically. In this research project we will try to approach these models from 
           a formal mathematical point of view. We have showed that attribution methods cannot 
           have all desirable properties at the same time and that recourse might hurt the accuracy 
           of a deployed classifier. Last year, we also introduced a new framework 
           that combines causal representation learning and concept learning, to create concept-based models
           that have formal guarantees on the exactness of the high-level concepts they learn.`
  },
  {
    subject: "Bandit Optimisation",
    text: `After having been involved in a project, where we improve the best known regret bounds 
    for bandit convex optimisation in the stochastic and adversarial case, I have developed an interest in 
    this area. Specifically, I am working on writing easy to use implementations of some of the algorithms in this field`
  },
  {
    subject: "AI4Science/Energy/Physics", 
    text: `I find the application of AI in these domains the most interesting, because you can have verifiable 
    predictions, that drive real impact`,
    style: {paddingBottom: "0", paddingTop: "0"}
  },
  {
    subject: "(Martingale/Causal) Optimal Transport",
    text: `As part of my Master Thesis I delved deep into these topics and I still find them very interesting. `,
    style: {paddingBottom: "0", paddingTop: "0"}
  }, 
  {
    subject: "Stochastic Calculus", // Add applications to the description
    text: `A large part of my Master's was spent on courses related to Stochastic Calculus, which
    I find a beautiful area in math, with many cool applications in Finance and also in ML.`,
    style: {paddingBottom: "0", paddingTop: "0"}
  }
]

export const InterestItem: React.FC<interest> = ({subject, text, style}) => {
  const theme = useTheme();

  return (
    <ListItem sx={style}>
      <ListItemText>
        <Typography 
          display="inline"
          fontWeight={theme.typography.fontWeightBold}
          sx={{textDecoration: "underline"}}
        >
          {subject}
        </Typography>
        <Typography
          display="inline"
        >
          &nbsp;{text}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}



const IntroCard: React.FC = () => {
  return (
    <Card sx={{ margin: "0% 2%"}}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom align="left">
          Welcome to my personal webpage!
        </Typography>
        <Typography variant="body1" align="left">
          I am research in Machine Learning, currently working as an AI Research Engineer at&nbsp;
          <a href="https://www.plumerai.com">
          Plumerai
          </a>. 
          I completed my PhD at the&nbsp;
          <a href="https://kdvi.uva.nl/">
            Korteweg-de Vries Institute
          </a>
          &nbsp;of the University of Amsterdam, where I was part of the group of&nbsp;
          <a href="http://www.timvanerven.nl/">
            dr. Tim van Erven
          </a>
          . In general I have a broad interest in Mathematics and Machine Learning. My PhD research focussed on: 
          {/* Interested in Stochastics, Machine Learning, Explainable AI */}
        </Typography>
        <List>
          <InterestItem subject={interests[0].subject} text={interests[0].text}/>
          <InterestItem subject={interests[1].subject} text={interests[1].text}/>
        </List>
        <Typography variant="body1" align="left">
          Other topics I am interested in are:
          <List>
            {interests.slice(2).map(
              (interest) => <InterestItem 
                              subject={interest.subject} text={interest.text}
                              style={interest.style}
                              />
              )}
          </List>
          Before I started my PhD I worked part-time at
          &nbsp;<a href="https://amsterdamdatacollective.com/">
            Amsterdam Data Collective
          </a>&nbsp; 
          as a Data Science Consultant.
        </Typography>
        <Typography variant="body1" align="left">
          My full CV can be found
          &nbsp;<a href="files/CV_Hidde_Fokkema_public.pdf" target="_blank" rel="noopener">
            Here
          </a>
          . 
        </Typography>
      </CardContent>
    </Card>   
  )
}

export default IntroCard