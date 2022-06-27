import React from "react";

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button"
import Icon from "@mui/material/Icon"
import { styled } from "@mui/material/styles";

import { personalInfo, contactItems} from "../data/data"

const CardContentSomePadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 4px;
  }
`);

const ContactCard: React.FC = () => {
  const profilePic: string = personalInfo.profilePic

  return (
    <Card sx={{ margin: "0% 5% 5% 5%", paddingBottom: "0"}}>
      <Avatar 
        src={profilePic}
        sx={{
          height: 200, width: 200,
          margin: '5% auto 0 auto'
        }}/>
      <CardContentSomePadding 
        sx={{
          padding: "8px",
        }}>
        <Typography variant="subtitle1">PhD candidate</Typography>
        <Typography variant="subtitle1">Korteweg de Vries Intituut</Typography>
        <Typography variant="subtitle1" gutterBottom>University of Amsterdam</Typography>
        <Typography >
          {contactItems.map((item) => (
            <Button
              variant="contained"
              color="success"
              href={item.href}
              key={contactItems.indexOf(item)}
              aria-label={item.text}
              sx={{margin: "0% 2% 3% 2%", minWidth: "20%"}}
              >
              <Icon className={item.icon} color="inherit" fontSize="small"/>
            </Button>
          ))}
        </Typography>
      </CardContentSomePadding>
    </Card>
  )
}

export default ContactCard