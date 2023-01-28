import React from 'react'
import Box from '@mui/material/Box'; 
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Block } from '@mui/icons-material';
const Footer= () => {

    return (
      
        <footer sx={{width:"100%",
        height:"10rem",
        position:"absolute",
        bottom: 0,
        right:0,
        paddingBottom:"270px",
        left:0,}}>
          <Container maxWidth="2xl" sx={{
          backgroundColor:"#14213D",
          display: "block",
    alignItems: "center",
    height:"100%",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom:"110px"
          }}>
           
<Typography
   variant="h6"
   component="a"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 10,
    fontSize:20,
    letterSpacing: '.0rem',
    color: '#FFFFFF',
    marginTop:"120px",
    textAlign:"start",
    
    display: {xs: 'inline-block'}
 
   }}
   >
   Ⓒ ALL RIGHTS ARE RESERVED
 </Typography>
       

          </Container>
      
          </footer>
   
    
    )
  }
  
  export default Footer