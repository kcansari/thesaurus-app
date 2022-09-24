import React, {useState} from 'react'
import {useNavigate } from "react-router-dom"
import Logo from '../images/a-z.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';




const Home = () => {

const [word, setWord] = useState("");
const navigate  = useNavigate();


const handleSubmit = (event) => {
  
  event.preventDefault();
  if(word !== "") return  navigate(`/definition/${word.toLowerCase()}`);
}

  return (
    <Grid
      className='App'
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
        <img src={Logo} height={200} width={200} alt='book'/>
        <Typography variant="h4" color='#2C3639' gutterBottom>Thesaurus App</Typography>
        <Typography variant="subtitle1" color="#4128" gutterBottom>English Thesaurus</Typography>
        <form onSubmit={handleSubmit}>
        <TextField 
            value={word}
            onChange={event => setWord(event.target.value)}
            id="outlined-basic" 
            color='error' 
            label="Search Thesaurus" 
            variant="outlined" 
            sx={{ mt:2 }} />
        </form>
        <Fab 
            onClick={handleSubmit}
            color="error"
             aria-label="SearchIcon" 
             size="medium" 
             sx={{ m: 2 }}>
            <SearchIcon />
        </Fab>  
    </Grid>
  )
}

export default Home