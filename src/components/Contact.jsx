import React from 'react'
import Box from '@mui/material/Box'; 
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import  { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';

const EnsembleContacts =[{
  firstName:"Sofiane",
  lastName:"Karaouni",
  job:"Mobile developer",
  age:"20",
  gitLink:"https://github.com/sofiane-ka",
  linkedLink:"https://www.linkedin.com/in/sofiane-karaouni-582107256/",
  id:"1"
} , {
  firstName:"Sofiane",
  lastName:"Karaouni",
  job:"Mobile developer",
  age:"20",
  gitLink:"https://github.com/sofiane-ka",
  linkedLink:"https://www.linkedin.com/in/sofiane-karaouni-582107256/",
  id:"1"
} , {
  firstName:"Sofiane",
  lastName:"Karaouni",
  job:"Mobile developer",
  age:"20",
  gitLink:"https://github.com/sofiane-ka",
  linkedLink:"https://www.linkedin.com/in/sofiane-karaouni-582107256/",
  id:"1"
} , {
  firstName:"Sofiane",
  lastName:"Karaouni",
  job:"Mobile developer",
  age:"20",
  gitLink:"https://github.com/sofiane-ka",
  linkedLink:"https://www.linkedin.com/in/sofiane-karaouni-582107256/",
  id:"1"
},{
  firstName:"Sofiane",
  lastName:"Karaouni",
  job:"Mobile developer",
  age:"20",
  gitLink:"https://github.com/sofiane-ka",
  linkedLink:"https://www.linkedin.com/in/sofiane-karaouni-582107256/",
  id:"1"
}];

const Contact= () => {

  

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
    Contact
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
    height:385*(EnsembleContacts.length)+180,
   
    marginTop:"50px",
    marginBottom:"200px",
    flexDirection:"column",
    display:{md:"flex"}
 }}>
 {
 EnsembleContacts.filter((d) => Object.values(d).some(val => val.includes(searchQuery))).map((frm) => (
<Container sx={{ 
    height:380 ,
    marginTop:"35px",
    textAlign:"center",
    backgroundColor:"#f5f5f5",
    justifyContent:"center",
    flexDirection:"column",
    display:{md:"flex"}}}> 
    
                   {/* image */}


                   <Container sx ={{
                 
                  textAlign :"center",
                  height: 300 ,
                  width:"90%",
                  flexDirection:"row",display:{md:"flex"},
                  marginTop :"0px",
                  }}>
                 <Avatar sx={{ backgroundColor: "#FCA311",width:300 ,height:300}} alt={frm.firstName} src={require('../img/sofiane.jpg')} />
                 <Container sx={{marginY:"30px" ,height:400, flexDirection:"column",display:{md:"flex"} }}>
                 <Typography
                   variant="h6"
                   component="a"
                   sx={{  
                    display:"absolute",
                    fontFamily: 'monospace',
                   fontWeight: 70,
                    fontSize:35,
                   letterSpacing: '.0rem',
                   color: '#14213D',
                   marginRight:"1px",
                   top:"50%",
                   textAlign:"left",
                   marginLeft:"60px",
                   }}
                   >
                   {frm.firstName} {frm.lastName}
                   </Typography>
                   <Typography
                   variant="h6"
                   component="a"
                   sx={{  
                    display:"absolute",
                    fontFamily: 'monospace',
                   fontWeight: 50,
                    fontSize:18,
                   letterSpacing: '.0rem',
                   color: '#14213D',
                   marginRight:"1px",
                   marginLeft:"60px",
                   top:"50%",
                   textAlign:"left",
                   }}
                   >
                   {frm.age} ans
                   </Typography>
                   <Typography
                   variant="h6"
                   component="a"
                   sx={{  
                    display:"absolute",
                    fontFamily: 'monospace',
                   fontWeight: 50,
                    fontSize:18,
                   letterSpacing: '.0rem',
                   color: '#14213D',
                   marginLeft:"60px",
                   marginBottom:"20px",
                   top:"50%",
                   textAlign:"left",
                   }}
                   >
                   {frm.job} 
                   </Typography>
                   <Container sx={{alignItems:"center",height:50, marginLeft:"37px",margintTop:"0px",flexDirection:"row",display:{md:"flex"}}}>
                   <Avatar sx={{ width:35 ,height:35}} alt={frm.firstName} src={require('../img/git.png')} />
                   <Typography
                   variant="h6"
                   component="a"
                   sx={{  
                    display:"absolute",
                    fontFamily: 'monospace',
                   fontWeight: 50,
                    fontSize:10,
                   letterSpacing: '.0rem',
                   color: '#14213D',
                   marginLeft:"20px",
                   top:"50%",
                   textAlign:"left",
                   '&:hover': {
                    color: '#FCA311',
                  },
                   }}
                   ><Link target="_blank" to={frm.gitLink}>
                   {frm.gitLink}
                   </Link> 
                   </Typography>

                   </Container>
                   <Container sx={{alignItems:"center", marginLeft:"37px",margintTop:"0px",flexDirection:"row",display:{md:"flex"}}}>
                   <Avatar sx={{ width:35 ,height:30}} alt={frm.firstName} src={require('../img/linked.png')} />
                   <Typography
                   variant="h6"
                   component="a"
                   sx={{  
                    display:"absolute",
                    fontFamily: 'monospace',
                   fontWeight: 50,
                    fontSize:10,
                   letterSpacing: '.0rem',
                   color: '#14213D',
                   marginLeft:"20px",
                   top:"50%",
                   textAlign:"left",
                   '&:hover': {
                    color: '#FCA311',
                  },
                   }}
                   ><Link target="_blank" to={frm.linkedLink}>
                   {frm.linkedLink}
                   </Link> 
                   </Typography>

                   </Container>
                   </Container>
               </Container>










</Container>
))
}
</Container>
 
 <Footer/>
      </div>
    )
  }
  
  export default Contact

  /*
  
      */