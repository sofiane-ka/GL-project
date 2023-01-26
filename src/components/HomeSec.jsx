import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ImagesSw from './ImagesSw';
import Descrip from './Descrip';
import Footer from './Footer';

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
                  <ImagesSw />
                  <Descrip/>
                 
              </Box>
     </div>
    )
  }
  
  export default HomeSec