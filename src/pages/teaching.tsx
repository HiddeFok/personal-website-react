import React from "react";

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { CourseList } from "../components/courseList";

const Teaching: React.FC = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1}/>
      <Grid item xs={10}>
        <Card sx={{margin: "0% 2%", minHeight: "50vh"} }>
          <CardHeader
            title="Education"
            align="left"
          />
          <Divider variant='middle'/> 
          <CardContent>
            <Typography variant="h6" align="left" sx={{margin: "0px 15px"}}>
              Teaching Assistent
            </Typography>
            <Divider variant='middle'/>
            <CourseList/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Teaching 