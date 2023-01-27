import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const Descrip=()  => {

    return (
   <Box sx ={{margin : "auto",
              width: 1600,
              height: 1000,
              paddingX : "30px",
               }}>
  
 
 <Typography
 variant="h6"

 component="a"
 href="/"
 sx={{
  mr: 2,
  fontFamily: 'monospace',
  fontWeight: 10,
  fontSize : 25,
  letterSpacing: '.3rem',
  color: '#14213D',
  marginTop : "300px",
  paddingX :"100px",
  
 }}
 >
   There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by 
    injected humour, or randomised words which don't look even 
    slightly believable. If you are going to use a passage of 
    Lorem Ipsum, you need to be sure there isn't anything 
    embarrassing hidden in the middle of text. All the Lorem
     Ipsum generators on the Internet tend to repeat predefined 
     chunks as necessary, making this the first true generator 
     on the Internet. It uses a dictionary of over 200 Latin 
     words, combined with a handful of model sentence structures,
      to generate Lorem Ipsum which looks reasonable. 
      The generated Lorem Ipsum is therefore always free from 
      repetition, injected humour, or non-characteristic words etc.
      
 </Typography>
      
 </Box>
    )
  }
  
  export default Descrip
    
