import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './Components/theme';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Bookmarks from './Pages/Bookmarks';
import Definition from './Pages/Definition';




function App() {
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline/>
          <BrowserRouter>
            <Routes>
              <Route path='/'  element=<Home /> />
              <Route path='/definition/:word' element=<Definition /> />
              <Route path='bookmarks' element=<Bookmarks /> />
            </Routes>
          </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
