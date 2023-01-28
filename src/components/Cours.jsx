import React from 'react'
import Box from '@mui/material/Box'; 
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import  { useState, useEffect } from "react";

const EnsembleCours =["Mobile Dev" , "Web Dev" , "Graphic Design" , "Film Editing","Logo Design"];
const Cours= () => {
   const [searchQuery, setSearchQuery] = useState("");
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
    Cours
 </Typography>
 </Box>



 <Box sx ={{
              
              margin : "auto",
              textAlign :"center",
              height: 110,
              marginTop :"150px",
              marginBottom:"70px",
              width:"70%",
              alignItems:"center"
               }}>
                <form >
 <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      sx={{width:"60%",marginX:"0px"}} variant="outlined"  label="Rechercher le cours que vous voulez accéder"  placeholder="Mobile dev"
    />
    
    
    
</form>
               </Box>

            

 {/* Cours*/}
 <Container sx={{ 
    backgroundColor :"#D9D9D9",
    width:1000,
    height:385*(EnsembleCours.length)+50,
   
    marginTop:"50px",
    marginBottom:"200px",
    flexDirection:"column",
    display:{md:"flex"}
 }}>
 {
 EnsembleCours.filter((d) => Object.values(d).some(val => val.includes(searchQuery))).map((frm) => (
<Container sx={{ 
    height:350 ,
    marginTop:"35px",
    textAlign:"center",
    backgroundColor:"#f5f5f5",
    justifyContent:"center",
    flexDirection:"column",
    display:{md:"flex"}}}> 
    
                   {/* image */}

                  <Container sx={{ 
                   
    height:340 ,
    width:400,
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    display:{md:"flex"}
 }}>
 <img src={require('../img/livre.png')} alt="ann"/>
             
                   {/* theme */}
      
                   
<Typography
 variant="h6"
 component="a"
 sx={{  
  fontFamily: 'monospace',
  fontWeight: 10,
  fontSize:20,
  letterSpacing: '.0rem',
  color: '#000000',
  marginTop : "14px",
  textAlign:"center",
  display: {md: 'flex'}

 }}
 > {frm}</Typography>

<Button
              key="submit"
              
              sx={{ 
                color: 'white',
                 display: 'block',
                backgroundColor:"#FCA311" ,
                marginTop:"15px",
                height:50,
                width:110,
                fontFamily: 'monospace',
                '&:hover': {
                   backgroundColor: '"#14213D',
                   opacity: [0.9, 0.8, 1],
                 },
             }}
            >
              
               <Link to ="/home">Accéder</Link>
    
            </Button>
            </Container>
</Container>

 
  
           

          



))
}
</Container>
 
 <Footer/>
      </div>
    )
  }
  
  export default Cours