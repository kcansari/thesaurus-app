import './App.css';
import React from 'react';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';




function App() {
  return (
      <div className="App">
      <header className="App-header">
        <TextField 
        id="outlined-basic"
        color='warning'
        margin='normal'
        label="Search Thesaurus" 
        variant="outlined" />

          <Fab 
            aria-label="SearchIcon">
            <SearchIcon />
          </Fab>
      </header>
    </div>
  );
}

export default App;
