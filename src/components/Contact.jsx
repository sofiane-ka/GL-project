import React from 'react'
import Box from '@mui/material/Box'; 
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact= () => {

    return (
      <div className=''>
        <Navbar/>
        <Box sx ={{margin : "auto",
              textAlign :"center",
              height: 10,

              marginTop :"50px",
              marginBottom:"70px"
               }}>
         <Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:70,
    letterSpacing: '.0rem',
    color: '#14213D',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
    Contact
 </Typography>
 </Box>

 <Container sx={{ 
    backgroundColor :"#D9D9D9",
    weight:100,
    height:500,
    marginX:"auto",
    marginTop:"150px",
    marginBottom:"120px"
 }}>

 </Container>
 
 <Footer/>
      </div>
    )
  }
  
  export default Contact