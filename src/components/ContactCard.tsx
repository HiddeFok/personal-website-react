import React from "react";

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button"
import Icon from "@mui/material/Icon"

import { personalInfo, contactItems} from "../data/data"


const ContactCard: React.FC = () => {
  const profilePic: string = personalInfo.profilePic

  return (
    <Card sx={{ margin: "0% 0% 10% 0%"}}>
      <Avatar 
        src={profilePic}
        sx={{ height: 200, width: 200}}
        style={{margin: '5% auto 0 auto'}}/>
      <CardContent>
        <Typography variant="subtitle1">PhD candidate</Typography>
        <Typography variant="subtitle1">Korteweg de Vries Intituut</Typography>
        <Typography variant="subtitle1" gutterBottom>University of Amsterdam</Typography>
        <Typography >
          {contactItems.map((item) => (
            <Button
              variant="contained"
              color="error"
              href={item.href}
              key={contactItems.indexOf(item)}
              aria-label={item.text}
              sx={{margin: "0% 2%"}}
            >
              <Icon className={item.icon} color="inherit" fontSize="small"/>
            </Button>
          ))}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ContactCard