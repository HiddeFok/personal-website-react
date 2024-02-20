import React, { useState, useEffect } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'

import MenuIcon from '@mui/icons-material/Menu';

import { useTheme } from '@mui/material'


const Navbar: React.FC = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 
        ? setState((prevState) => ({ ...prevState, mobileView: true}))
        : setState((prevState) => ({ ...prevState, mobileView: false}))
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, [])

  const theme = useTheme();

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Grid 
          container 
          spacing={4}
          alignItems="center"
        >
          <Grid item xs={4}>
            <Typography variant="h4" color="inherit" align='left'>
              Hidde Fokkema 
            </Typography>
            <Typography variant='subtitle1' color="inherit" align='left'>
              PhD Candidate in Mathematical Machine Learning
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}>
            <Button color="inherit" href="/" sx={{fontSize:"1rem"}}>About</Button>
          </Grid>
            <Grid item xs={1}>
          <Button color="inherit" href="/research" sx={{fontSize:"1rem"}}>Research</Button>
            </Grid>
          <Grid item xs={1}>
            <Button color="inherit" href="/teaching" sx={{fontSize:"1rem"}}>Teaching</Button>
          </Grid>
        </Grid> 
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => 
      setState((prevState) => ({ ...prevState, drawerOpen: true}));
    const handleDrawerClose = () => 
      setState((prevState) => ({ ...prevState, drawerOpen: false}));
    

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon/>
        </IconButton>
        <Drawer
          {...{
            anchor: "left", 
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}>
            <div style={{padding: "30px 20px 0px 20px"}}>
              <Button color="inherit" href="/" sx={{fontSize:"1rem"}}>About</Button>
            </div>
            <div style={{padding: "0px 20px"}}>
              <Button color="inherit" href="/research" sx={{fontSize:"1rem"}}>Research</Button>
            </div>
            <div style={{padding: "0px 20px"}}>
              <Button color="inherit" href="/teaching" sx={{fontSize:"1rem"}}>Teaching</Button>
            </div>
        </Drawer>
        <div>
          <Typography variant="h6" color='inherit' align='left' display="block" sx={{fontSize: "0.9rem"}}>
            Hidde Fokkema
          </Typography>
          <Typography variant='body2' color="inherit" align='left' display="block" sx={{fontSize: "0.6rem"}}>
            PhD Candidate in Mathematical Machine Learning
          </Typography>
        </div>
     </Toolbar>
    );
  };

  return (
  <AppBar position="static" sx={{backgroundColor: theme.palette.primary.main}}>
    {mobileView ? displayMobile() : displayDesktop()}
  </AppBar>
  );
};

export default Navbar;