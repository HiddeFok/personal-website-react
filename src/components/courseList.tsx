import React from "react";

import { Course, courseList } from "../data/teaching";

import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon"
import CreateIcon from '@mui/icons-material/Create';

function createCourseItem(course: Course){
  return (
    <ListItem sx={{padding: "0px 8px"}}>
      <ListItemIcon>
        <CreateIcon/>
      </ListItemIcon>
      <ListItemText>
        <Typography variant="body1">
          {course.title}: ({course.level}), {course.year}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export const CourseList: React.FC = () => {
  var courseListSorted = courseList.sort((a, b) => (b.year - a.year));
  return (
    <List>
      {courseListSorted.map((course) => createCourseItem(course))}
    </List>
  )
}
