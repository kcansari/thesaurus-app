import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './Components/theme';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Definition from './Pages/Definition';
import Grid from '@mui/material/Grid';




function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Grid container>
       <Grid item xs={12} sx={{p:2}}>
       <BrowserRouter>
            <Routes>
              <Route path='/'  element=<Home /> />
              <Route path='/definition/:word' element=<Definition /> />
            </Routes>
          </BrowserRouter>
          </Grid>
       </Grid>
    </ThemeProvider>
  );
}

export default App;
