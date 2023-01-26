import React from 'react'
import Box from '@mui/material/Box'; 
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from '@mui/material/Container'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
    color: '#ffffff',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
    Formations
 </Typography>
 </Box>
 <Container sx={{ 
    backgroundColor :"#005bc5",
    weight:100,
    height:700,
    marginX:"auto",
    marginTop:"150px"
 }}>
   
    <img sx={{
      marginX:"auto",
      marginTop:"20px"
    }} src="../img/Etud.png"/> 
   


 </Container>
 <Footer/>
      </div>
    )
  }
  
  export default Formations
  /* <Stack>

  <Box>
    <Stack>
    <Box>
    <Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:50,
    letterSpacing: '.0rem',
    color: '#ffffff',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
   Web Dev
 </Typography>

    </Box>
    <Box>
    <Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:50,
    letterSpacing: '.0rem',
    color: '#ffffff',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
   Graphic Design 
 </Typography>
    </Box>
    <Box>
    <Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:50,
    letterSpacing: '.0rem',
    color: '#ffffff',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
   Mobile Dev 
 </Typography>
    </Box>
    </Stack>
  </Box>


  <Box>
    <Stack>
    <Box>
    <Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:50,
    letterSpacing: '.0rem',
    color: '#ffffff',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
   Mobile Dev 
 </Typography>
    </Box>
    <Box>
    <Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:50,
    letterSpacing: '.0rem',
    color: '#ffffff',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
   Mobile Dev 
 </Typography>
    </Box>
    <Box>
    <Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:50,
    letterSpacing: '.0rem',
    color: '#ffffff',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
   Mobile Dev 
 </Typography>
    </Box>
    </Stack>
  </Box>

 </Stack>
 */