
import React from "react";

import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent"

import IntroCard from "../components/introCard";
import ContactCard from "../components/ContactCard";
import TwitterCard from "../components/TwitterCard";
import NewsCard from "../components/NewsCard";

// import { useTheme } from '@mui/material'


const About: React.FC = () => {
  // const theme = useTheme();

  return (
    <Grid container spacing={0}>
      <Grid item md={1}/>
      <Grid item xs={12} md={3}>
        <ContactCard/>
        <TwitterCard/>
      </Grid>
      <Grid item xs={12} md={7}>
        <IntroCard/>
        <NewsCard/>
      </Grid>
      <Grid item md={1}/>
    </Grid>
  )
}

export default About

/* <Card sx={{marginTop: "20px"}}>
          <CardContent>
            <Grid container spacing={0}>
              <Grid item xs={2} sx={{backgroundColor: theme.palette.primary.main, height: "50px"}}>
                Primary
              </Grid>
              <Grid item xs={2} sx={{backgroundColor: theme.palette.secondary.main, height: "50px"}}>
                Secondary
              </Grid>
              <Grid item xs={2} sx={{backgroundColor: theme.palette.error.main, height: "50px"}}>
                Error
              </Grid>
              <Grid item xs={2} sx={{backgroundColor: theme.palette.warning.main, height: "50px"}}>
                Warning 
              </Grid>
              <Grid item xs={2} sx={{backgroundColor: theme.palette.info.main, height: "50px"}}>
                Info
              </Grid>
              <Grid item xs={2} sx={{backgroundColor: theme.palette.success.main, height: "50px"}}>
                Success  
              </Grid>
            </Grid>
          </CardContent>
        </Card> */
