import React from "react";

import { Supervision, supervisionList } from "../data/supervision";

import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function createSupervisionItem(supervision: Supervision){
  return (
    <ListItem sx={{padding: "0px 8px"}}>
      <ListItemIcon>
        <SupervisorAccountIcon/>
      </ListItemIcon>
      <ListItemText>
        <Typography display="inline" variant="body1">
          {supervision.students.join(", ")}:
        </Typography>
        &nbsp;
        <Typography display="inline" variant="body1" fontStyle="italic">
            {supervision.title},
        </Typography>
        &nbsp;
        <Typography display="inline" variant="body1">
            ({supervision.level}) {supervision.year}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export const SupervisionList: React.FC = () => {
  var supervisionListSorted = supervisionList.sort((a, b) => (b.year - a.year));
  return (
    <List>
      {supervisionListSorted.map((supervision) => createSupervisionItem(supervision))}
    </List>
  )
}
