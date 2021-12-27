import React from 'react';
import { Box } from '@mui/system';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';

import Navbar from './components/navbar';
import Footer from './components/footer';

import About from './pages/about';
import Research from './pages/research';
import Blog from './pages/blog';
import Teaching from './pages/teaching';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <div className="App">
        <Box mb={5}>
          <Navbar/>
        </Box>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <About/>
            </Route>
            <Route path="/research">
              <Research/>
            </Route>
            <Route path={"/blog"}>
              <Blog/>
            </Route>
            <Route path={"/teaching"}>
              <Teaching/>
            </Route>
          </Switch>  
        </BrowserRouter>
        <Box position="absolute" bottom="0px" width="100vw">
          <Footer/>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
