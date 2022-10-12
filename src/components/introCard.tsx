
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
    subject: "Formal Explainable AI:", 
    text: `In the last years, many models and methods were invented to 
           explain decisions made by Machine Learning and Deep Learning models. 
           However, most of these models are invented based on heuristics and verified 
           empirically. In this research project we will try to approach these models from 
           a formal mathematical point of view. Desirable results will be impossibility results, 
           proving that existing algorithms do what you want, or developping rigorous methods
           ourselves. `
  },
  {
    subject: "Mathematical foundations of Machine Learning",
    text: "",
    style: {paddingBottom: "0", paddingTop: "0"}
  }, 
  {
    subject: "(Martingale/Causal) Optimal Transport",
    text: "",
    style: {paddingBottom: "0", paddingTop: "0"}
  }, 
  {
    subject: "Stochastic Calculus", // Add applications to the description
    text: "",
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
          I am a PhD candidate at the&nbsp;
          <a href="https://kdvi.uva.nl/">
            Korteweg-de Vries Institute
          </a>
          &nbsp;of the University of Amsterdam and I am part of the group of&nbsp;
          <a href="http://www.timvanerven.nl/">
            dr. Tim van Erven
          </a>
          . In general I have a broad interest in Mathematics and Machine Learning. My current research focusses on: 
          {/* Interested in Stochastics, Machine Learning, Explainable AI */}
        </Typography>
        <List>
          <InterestItem subject={interests[0].subject} text={interests[0].text}/>
        </List>
        <Typography variant="body1" align="left">
          Other topics I am interested in are:
          <List>
            {interests.slice(1).map(
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
          as a data analyst.
        </Typography>
        <Typography variant="body1" align="left">
          My full CV can be found
          &nbsp;<a href="CV_Hidde_Fokkema_english.pdf" download>
            Here
          </a>
          . 
        </Typography>
      </CardContent>
    </Card>   
  )
}

export default IntroCard