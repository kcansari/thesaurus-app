import React from 'react'
import Box from '@mui/material/Box';
import Logo from '../images/a-z.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';




const Home = () => {
  return (
    <Box className='App'>
        <img src={Logo} height={200} width={200} alt='book'/>
        <Typography variant="h4" gutterBottom>Thesaurus HomePage</Typography>
        <Typography variant="subtitle1" gutterBottom>English Thesaurus</Typography>
        <TextField id="outlined-basic" label="Search Thesaurus" variant="outlined" sx={{ mt:2 }} />
        <Fab color="primary" aria-label="SearchIcon" size="medium" sx={{ ml: 2 }}>
            <SearchIcon />
        </Fab>
        
    </Box>

  )
}

export default Home