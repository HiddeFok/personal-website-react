// Add publication item that can be inserted into the research page
import React from "react";

import { Publication, listPublications } from "../data/publications";
import { Thesis, Theses } from "../data/theses";
import { Talk, listTalks} from "../data/talks";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon"
import ArticleIcon from '@mui/icons-material/Article';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function createPublicationItem(publication: Publication){
  return (
    <ListItem sx={{padding: "0px 8px"}}>
      <ListItemIcon>
        <ArticleIcon/>
      </ListItemIcon>
      <ListItemText>
        <Link variant="body1" href={publication.link} target="_blank" rel="noopener">
          {publication.title}
        </Link>
        <Typography variant="body2">
          {publication.authors.join(", ")}, {publication.journal}, {publication.date}, {publication.additional}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export const PublishedList: React.FC = () => {
  const published = listPublications.filter(
    (article) => article.status === "published"
    )
  return (
    <List>
      {published.map((publication) => createPublicationItem(publication))}
    </List>
  )
}

export const PreprintList: React.FC = () => {
  const preprints = listPublications.filter(
    (article) => article.status === "preprint"
    )
  return (
    <List>
      {preprints.map((publication) => createPublicationItem(publication))}
    </List>
  )
}

function createTalkItem(talk: Talk) {
  return (
    <ListItem sx={{padding: "0px 8px"}}>
      <ListItemIcon>
        <ChatBubbleIcon/>
      </ListItemIcon>
      <ListItemText>
        <Typography variant="body1">
          {talk.title}
        </Typography>
        <Typography variant="body2">
          {talk.additional} 
          
          {talk.location}, {talk.date}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export const TalkList: React.FC = () => {
  return (
    <List>
      {listTalks.map((talk) => createTalkItem(talk))}
    </List>
  )
}

function createThesisItem(thesis: Thesis){
  const thesis_link:string = `files/${thesis.link}`

  return (
    <ListItem sx={{padding: "0px 8px"}}>
      <ListItemIcon>
        <ArticleIcon/>
      </ListItemIcon>
      <ListItemText>
        <Link variant="body1" href={thesis_link} target="_blank" rel="noopener" >
          {thesis.title}
        </Link>
        <Typography variant="body2">
          Supervisors: {thesis.supervisors}, {thesis.type}, {thesis.date}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export const ThesisList: React.FC = () => {
  return (
    <List>
      {Theses.map((thesis) => createThesisItem(thesis))}
    </List>
  )
}
