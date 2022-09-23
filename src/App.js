import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './Components/theme';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Pages/Home';




function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element=<Home /> />
            </Routes>
          </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
