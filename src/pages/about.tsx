import { personalInfo, contactItems} from "../data/data"

import React from "react";

import { Card } from "@mui/material";
// import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Avatar } from "@mui/material";

import { Button } from "@mui/material";
import { Icon } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

import IntroCard from "../components/introCard";

const About: React.FC = () => {
  const profilePic: string = personalInfo.profilePic
    return (
      <Grid container spacing={4}>
        <Grid item xs={1}/>
        <Grid item xs={3}>
          <Card sx={{ margin: "2% 5%"}}>
            <Avatar 
              src={profilePic}
              sx={{ height: 200, width: 200}}
              style={{margin: '5% auto 0 auto'}}/>
            <CardContent>
              <Typography variant="subtitle1">PhD candidate</Typography>
              <Typography variant="subtitle1">Korteweg de Vries Intituut</Typography>
              <Typography variant="subtitle1" gutterBottom>University of Amsterdam</Typography>
              <Typography >
                {contactItems.map((item) => (
                  <Button
                    variant="contained"
                    color="inherit"
                    href={item.href}
                    key={contactItems.indexOf(item)}
                    aria-label={item.text}
                  >
                    <Icon className={item.icon} color="inherit" fontSize="small"/>
                  </Button>
                ))}
              </Typography>
            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={7}>
          <IntroCard/>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    )
}

export default About