import React from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';


const Welcome=()  => {

    return (
<Container sx={{ marginTop:"0px", flexDirection:"column" ,display:{md:"flex"}}}  >
           {/* ....................*/ }
           <Container sx={{ marginTop:"100px" , flexDirection:"row" , display:{md:"flex"} }}>
                <Container sx={{marginTop:"145px", marginRight : "120px" , height: 500}}>
                    
                  <img src={require('../img/trois.png')} />
                </Container>
               
                <Container sx={{ height: 400 , width: 900}}>
                  <Container>
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
                       fontWeight: 100,
                       fontSize:70,
                       letterSpacing: '.0rem',
                       color: '#14213D',
                       marginTop : "0px",
                       margin:"auto",
                      width:"400px"
                       }}
                            >
                       Welcome
                      </Typography>
                      <Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 10,
    fontSize:20,
    letterSpacing: '.0rem',
    color: '#000000',
    marginTop : "10px",
    flexDirection:"row",
    textAlign:"center",
    display: {md: 'flex'}
 
   }}
   >
   There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by 
    injected humour, or randomised words which do
 </Typography>
 <Button
                key="submit"
                
                sx={{ my: 5, 
                  color: 'white',
                   display: 'block',
                  backgroundColor:"#FCA311" ,
                  marginX:"auto" ,
                  marginTop:"20px",
                  height:50,
                  width:300,
                  fontFamily: 'monospace',
                  '&:hover': {
                     backgroundColor: '"#14213D',
                     opacity: [0.9, 0.8, 1],
                   },
               }}
              >
                
                 <Link to ="/formations">Explore the formations</Link>
      
              </Button>
                     </Box>
                  </Container>
                
                </Container>



           </Container>
            {/* ....................*/ }
            <Container sx={{ marginTop:"20px" ,flexDirection:"row" , display:{md:"flex"}}}>

                  <Container sx={{marginTop:"25px", marginRight : "120px" , height: 500}}>
                    
                  <img src={require('../img/livre.png')} />
                  </Container>
                 
                  <Container sx={{backgroundColor:"#D9D9D9" , height: 400 , width: 900}}>
                     <Container sx={{height:40 , width:90 ,backgroundColor:"#FCA311", marginRight:"1px",marginTop:"-10px" }}>

                     </Container>   
                        <Container>
                     <Typography
                          variant="h6"
                          component="a"
                           href="/"
                         sx={{  
                       fontFamily: 'monospace',
                       fontWeight: 100,
                       fontSize:52,
                       letterSpacing: '.0rem',
                       color: '#14213D',
                       marginTop : "0px",
                       margin:"auto",
                      width:"400px"
                       }}
                            >
                       Find Courses
                      </Typography>

                     </Container>
                     <Container sx={{marginTop:"10px" }}>
                     <Typography
                          variant="h6"
                          component="a"
                           href="/"
                         sx={{  
                       fontFamily: 'monospace',
                       fontWeight: 10,
                       fontSize:20,
                       letterSpacing: '.0rem',
                       color: '#14213D',
                       marginTop : "0px",
                       margin:"auto",
                      width:"400px"
                       }}
                            >
                        There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by 
    injected humour, or randomised words which do
                      </Typography>

                     </Container>
                  </Container>




            </Container>










</Container>


    )
  }
  
  export default Welcome