import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
      background: {
          default: "#FECD70"
      }
    },
    typography:{
      fontFamily: "Mulish, sans-serif",
      h4:{
        fontWeight:800
      },
    },
  });

export default theme