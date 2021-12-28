
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
  text: string
}

const interests: interest[] = [
  {
    subject: "Formal Explainable AI", 
    text: `In the last years, many models and methods were invented to 
           explain decisions made by ML and DL models. However, there is 
           still a lot unknown about these methods mathematically speaking.`
  },
  {
    subject: "Mathematical foundations of Machine learning and Deep Learning",
    text: ""
  }, 
  {
    subject: "Stochastic calculus", // Add applications to the description
    text: ""
  }, 
  {
    subject: "(Martingale/Causal) optimal transport",
    text: ""
  }
]

export const InterestItem: React.FC<interest> = ({subject, text}) => {
  const theme = useTheme();

  return (
    <ListItem>
      <ListItemText>
        <Typography 
          display="inline"
          fontWeight={theme.typography.fontWeightBold}
          sx={{textDecoration: "underline"}}
        >
          {subject}:
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
          To introduce myself, I am a PhD candidate at the&nbsp;
          <a href="https://kdvi.uva.nl/">
            Korteweg de Vries instituut
          </a>
          &nbsp;of the University of Amsterdam and I am part of the group of&nbsp;
          <a href="http://www.timvanerven.nl/">
            Tim van Erven
          </a>
          . In general I have a broad interest in Mathematics and machine learning. My current research will focus on: 
          {/* Interested in Stochastics, Machine Learning, Explainable AI */}
        </Typography>
        <List>
          <InterestItem subject={interests[0].subject} text={interests[0].text}/>
        </List>
        <Typography variant="body1" align="left">
          Other topics I am interested in are:
          <List>
            {interests.slice(1).map(
              (interest) => <InterestItem subject={interest.subject} text={interest.text}/>
              )}
          </List>
          Before I started my PhD I worked part-time at
          &nbsp;<a href="https://amsterdamdatacollective.com/">
            Amsterdam Data Collective
          </a>&nbsp; 
          as a data analyst.
        </Typography>
        <Typography variant="body1" align="left">
          My full CV can be found
          &nbsp;<a href="CV.pdf" download>
            Here
          </a>
          . 
        </Typography>
      </CardContent>
    </Card>   
  )
}

export default IntroCard