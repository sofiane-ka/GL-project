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


const Login=()  => {

    return (
   <Container sx ={{margin : "auto",
              width: 1100,
              height: 600,
              backgroundColor :"#F5F5F5",
              marginTop:"200px"
            
               }}>
    <Container sx ={{margin : "auto",
              width: 1100,
              height: 100,
              backgroundColor :"#FCA311",
              marginTop:"150px"
             
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
    marginTop : "10px",
    textAlign:"center",
    display: {md: 'block'}
 
   }}
   >
    EDUCOURS
 </Typography>
    </Container>
<Container sx={{
   marginTop:"90px",
   display:{md:"flex"},
   flexDirection:"row",
}}>      
          <Container sx={{ 
   height:300 ,
   width:800,
   textAlign:"center",
   flexDirection:"row",
   display:{md:"flex"}
}}>
<img src={require('../img/livre.png')} alt="login"/>
         </Container>
<Container>
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
    injected humour, or randomised words which don't look even 
    slightly believable. If you are going to use a passage of 
      repetition, injected humour, or non-characteristic words etc.
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
                
                 <Link to ="/home">Sign In With Google</Link>
      
              </Button>
 </Container>
</Container> 

   
   
<Typography
   variant="h6"
   component="a"
   href="/"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:20,
    letterSpacing: '.0rem',
    color: '#D9D9D9',
    marginTop : "80px",
    textAlign:"center",
    display: {md: 'block'}
 
   }}
   >
    Tous Droit Réservés
    
 </Typography>
 <Button key="signIn"
    sx={{ my: 4, 
      fontFamily: 'monospace',
      color: '#000000',
       display: 'block',
      marginX:"auto" ,
      marginTop:"0px",
      '&:hover': {
         Color: 'primary.main',
         opacity: [0.9, 0.8, 0.7],
       },
    }}
    >
    
       ESTIN - 2023
    </Button>
  
      
 </Container>



    )
  }
  
  export default Login
    