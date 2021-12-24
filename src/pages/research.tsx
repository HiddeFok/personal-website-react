import React from "react";

import { ThesisList, PublicationList } from "../components/publication";

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import List from "@mui/material/List"
// import ListItem from "@mui/material/ListItem"
// import ListItemText from "@mui/material/ListItemText"
// import ListItemIcon from "@mui/material/ListItemIcon"

// import ArticleIcon from '@mui/icons-material/Article';

const Research: React.FC = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1}/>
      <Grid item xs={10}>
        <Card sx={{margin: "0% 2%", minHeight: "50vh"} }>
          <CardHeader
            title="Research"
            align="left"
          />
          <Divider variant='middle'/>
          <CardContent>
            <Typography variant="h6" align="left">
              Articles and preprints 
            </Typography>
            <Typography variant="body1" align="left">
              Work in progress, hopefully soon!
            </Typography>
            <Divider variant='middle'/>
            <Typography variant="h6" align="left">
              Theses 
            </Typography>
            <ThesisList/>
            <Divider variant='middle'/>
            <Typography variant="h6" align="left">
              Talks
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Research