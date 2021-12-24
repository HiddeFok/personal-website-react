
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
    <ListItem>
      <ListItemIcon>
        <CreateIcon/>
      </ListItemIcon>
      <ListItemText>
        <Typography variant="body1">
          {course.year}: {course.title}. ({course.level})
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export const CourseList: React.FC = () => {
  return (
    <List>
      {courseList.map((course) => createCourseItem(course))}
    </List>
  )
}
