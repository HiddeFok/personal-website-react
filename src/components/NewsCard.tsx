import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import AnnouncementIcon from '@mui/icons-material/Announcement';

import { newsItem, newsItems } from "../data/news";


function createNewsItem(newsItem: newsItem){
  return (
    <ListItem sx={{padding: "4px 8px"}}>
      <ListItemIcon>
        <AnnouncementIcon/>
      </ListItemIcon>
      <ListItemText>
        <Typography variant="body1">
          {newsItem.title}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}


export const NewsList: React.FC = () => {
  return (
    <List>
      {newsItems.map(
        (newsItem) => createNewsItem(newsItem))}
    </List>
  )
}

const NewsCard: React.FC = () => {
  return (
    <Card sx={{ 
      margin: "2% 2%"
      }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom align="left">
          Recent News
        </Typography>
        <NewsList/>
      </CardContent>
    </Card>
  )
}

export default NewsCard