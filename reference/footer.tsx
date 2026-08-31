import React from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const Footer: React.FC = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="body2">
            &copy; 2021 Hidde Fokkema. Powered by React and Material UI
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer