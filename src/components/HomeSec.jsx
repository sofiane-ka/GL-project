import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Descrip from './Descrip';
import { Typography } from '@mui/material';
import Welcome from './Welcome';

const HomeSec= () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
      <div className=''>
 
             <Box sx = {{
                       width:"100%" ,
                       padding:"auto",
       
                        }}>
                          <Box sx ={{margin : "auto",
              textAlign :"center",
              height: 10,

              marginTop :"50px",
              marginBottom:"70px"
               }}>
         <Typography
   variant="h6"
   component="a"
   sx={{  
    fontFamily: 'monospace',
    fontWeight: 50,
    fontSize:50,
    letterSpacing: '.0rem',
    color: '#14213D',
    marginTop : "200px",
    margin:"auto",
    width:"400px"
   }}
   >
   EDUCOURS: Toute Formation ou Cours sont disponible  
 </Typography>
 </Box>
                  <Welcome/>
                  <Descrip/>
                 
              </Box>
     </div>
    )
  }
  
  export default HomeSec