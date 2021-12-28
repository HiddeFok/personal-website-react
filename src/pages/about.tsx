
import React from "react";

import { Grid } from "@mui/material";

import IntroCard from "../components/introCard";
import ContactCard from "../components/ContactCard";
import TwitterCard from "../components/TwitterCard";

const About: React.FC = () => {
    return (
      <Grid container spacing={0}>
        <Grid item md={1}/>
        <Grid item xs={12} md={3}>
          <ContactCard/>
          <TwitterCard/>
        </Grid>
        <Grid item xs={12} md={7}>
          <IntroCard/>
        </Grid>
        <Grid item md={1}/>
      </Grid>
    )
}

export default About