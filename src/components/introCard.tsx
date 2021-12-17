
import React from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const interests: string[] = [
  "Mathematical foundations of Machine learning and Deep Learning",
  "Stochastic calculus", 
  "(Martingale/Causal) optimal transport", 
  "Financial Mathematics"
]

function createItems(text: string){
  return (
    <ListItem>
      <ListItemText>
        {text}
      </ListItemText>
    </ListItem>
  )
}



const IntroCard: React.FC = () => {
  return (
    <Card sx={{ margin: "0% 5%"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Welcome to my personal webpage!
        </Typography>
        {/* <Typography variant="h5" component="div">
          I like Mathematics
        </Typography> */}
        <Typography variant="body2">
          I am a PhD candidate at the Korteweg de Vries instituut of the University of Amsterdam
            and I am part of the group of dr. Tim van Erven. In general I have a broad interest in 
            Mathematics and machine learning. My current research will focus on: 
          {/* Interested in Stochastics, Machine Learning, Explainable AI */}
        </Typography>
        <List>
          <ListItem>
            <ListItemText>
              Formal Explainable AI: In the last years, many models and methods were invented to explain decisions made by ML and DL models. 
              However, there is still a lot unknown about these methods mathematically speaking. 
            </ListItemText>
          </ListItem>
        </List>
        <Typography variant="body2">
          Other topics I am interested in are:
          <List>
            {interests.map((interest) => createItems(interest))};
          </List>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Work with me</Button>
        <Button size="small">Projects</Button>
      </CardActions> */}
    </Card>   
  )
}

export default IntroCard