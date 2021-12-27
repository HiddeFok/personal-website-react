import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const Navbar: React.FC = () => {
  return (
  <div>
  <AppBar position="static" color="primary">
    <Toolbar>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Typography variant="h4" color="inherit" align='left'>
            Hidde Fokkema
          </Typography>
          <Typography variant='subtitle1' color="inherit" align='left'>
            PhD Candidate in Mathematical Machine Learning
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={1}>
          <Button color="inherit" href="/">About</Button>
        </Grid>
          <Grid item xs={1}>
        <Button color="inherit" href="/research">Research</Button>
          </Grid>
        <Grid item xs={1}>
          <Button color="inherit" href="/teaching">Teaching</Button>
        </Grid>
          <Grid item xs={1}>
            <Button color="inherit" href="/blog">Blog</Button>
          </Grid>
        </Grid> 
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar;