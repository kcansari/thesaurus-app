import React,{useEffect, useState, Fragment} from 'react'
import { useNavigate,useParams } from "react-router-dom"
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';

const Definition = () => {

  const {word} = useParams();
  const navigate  = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(  `https://thesaurusapi.fly.dev/${word}` );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.objects);
        setError(null);
      }catch(error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false); 
      } 
    }
    getData();
  }, [word])

  return (
    <>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <IconButton onClick={() => navigate(-1)}>  <ArrowBackIcon/>  </IconButton>
        <IconButton onClick={() => navigate(-1)}>  <HomeIcon/>  </IconButton>
      </Stack>
      <Box 
        textAlign="center"
        mt={3}
        sx={{
          // bgcolor: 'background.paper',
          backgroundColor: "#2C3639",
          boxShadow: 3,
          borderRadius: 2,
          p: 3,
          minWidth: 300,
          color: '#FFF',     
      }}
      >
        <Box
        sx={{ textTransform: 'capitalize', m: 1 }}
        >
          <Typography variant='h5'> Synonyms of {word}</Typography>
        </Box>
      </Box>

      {loading && <Box
          sx={{
              bgcolor: 'background.paper',
              boxShadow: 3,
              borderRadius: 2,
              p: 3,
              minWidth: 300,
              mt:3,
              color: '#2C3639',     
            }}>
             
            loading
          </Box>}
      
      {!error && !loading &&(data === null ? (<Box
          sx={{
              bgcolor: 'background.paper',
              boxShadow: 3,
              borderRadius: 2,
              p: 3,
              minWidth: 300,
              mt:3,
              color: '#2C3639',     
            }}>
             
            Not found
          </Box>):(data.map((obj,index) => {
       return <Fragment key={index}>
       <Divider/>
        {obj.synonyms.map((synonym, index) => {
         return <>
         <Box
          key={index}
          sx={{
              bgcolor: 'background.paper',
              boxShadow: 3,
              borderRadius: 2,
              p: 3,
              minWidth: 300,
              mt:3,
              color: '#2C3639',     
            }}>
             
            {synonym}
          </Box>
          <Divider/>
         </> 
        })}
        </Fragment>
      })) )}

      
      {/* {data.map((obj,index) => {
       return <Fragment key={index}>
       <Divider/>
        {obj.synonyms.map((synonym, index) => {
         return <>
         <Box
          key={index}
          sx={{
              bgcolor: 'background.paper',
              boxShadow: 3,
              borderRadius: 2,
              p: 3,
              minWidth: 300,
              mt:3,
              color: '#2C3639',     
            }}>
             
            {synonym}
          </Box>
          <Divider/>
         </> 
        })}
        </Fragment>
      })} */}

    </>

  );
}

export default Definition