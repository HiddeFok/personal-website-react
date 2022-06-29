import React from "react";

import { ThesisList, PublicationList, TalkList } from "../components/publication";

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


const Research: React.FC = () => {
  return (
    <Grid container spacing={0}>
      <Grid item md={1}/>
      <Grid item xs={12} md={10}>
        <Card sx={{margin: "0% 2%", minHeight: "50vh"} }>
          <CardHeader
            title="Research"
            align="left"
          />
          <Divider variant='middle'/>
          <CardContent>
            <Typography variant="h6" align="left" sx={{margin: "0px 15px"}}>
              Articles
            </Typography>
            <Typography variant="body1" align="left" sx={{margin: "0px 15px"}}>
              Preprints
            </Typography>
            <PublicationList/>
            <Divider variant='middle'/>
            <Typography variant="h6" align="left" sx={{margin: "0px 15px"}}>
              Talks
            </Typography>
            <TalkList/>
            <Divider variant='middle'/>
            <Typography variant="h6" align="left" sx={{margin: "0px 15px"}}>
              Theses 
            </Typography>
            <ThesisList/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Research