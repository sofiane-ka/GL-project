import React from 'react'
import Box from '@mui/material/Box'; 
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Block } from '@mui/icons-material';
const Footer= () => {

    return (
      
        <footer>
          <Container maxWidth="2xl" sx={{
          backgroundColor:"#14213D",
          height:"15rem",
          textAlign:"center",
          marginTop :"auto",
          position:"absolute",
          marginBottom:"1px",
          }}>
           
<Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 10,
    fontSize:20,
    letterSpacing: '.0rem',
    color: '#FFFFFF',
    marginTop:"60px",
  
    textAlign:"center",
    alignSelf: "center",
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