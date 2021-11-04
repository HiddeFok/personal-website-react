import React from 'react';
import { Box } from '@mui/system';
// import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import './App.css';

// import { ThemeProvider } from '@mui/material';

import About from './components/about';
import Navbar from './components/navbar';
import Research from './components/research';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Box mb={10}>
        <Navbar/>
      </Box>
      <About></About>
      <Research></Research>
      <Contact></Contact>
    </div>
  );
}

export default App;
