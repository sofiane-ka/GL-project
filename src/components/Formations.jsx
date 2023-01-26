import React from 'react'
import Box from '@mui/material/Box'; 
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from '@mui/material/Container'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const EnsembleFormat = [ ];

const Formations= () => {

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
    Formations
 </Typography>
 </Box>
 <Container sx={{ 
    backgroundColor :"#D9D9D9",
    weight:100,
    height:200*(EnsembleFormat.length)+700,
    marginX:"auto",
    marginTop:"150px",
    marginBottom:"120px"
 }}>
   
    <img sx={{
      size : 200,
      marginX:"auto",
      marginTop:"20px",
      marginBottom:"20px"
    }} src="../img/Etud.png" /> 
   


 </Container>
 <Footer/>
      </div>
    )
  }
  
  export default Formations
  
