import React from 'react';
import { Box } from '@mui/system';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';

// import { ThemeProvider } from '@mui/material';

import Navbar from './components/navbar';

import About from './pages/about';
import Research from './pages/research';
import Blog from './pages/blog';
import Teaching from './pages/teaching';


function App() {
  return (
    <div className="App">
      <Box mb={10}>
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
    </div>
  );
}

export default App;
