import React, { useState } from "react";
import Box from '@mui/material/Box'; 
import { Typography } from '@mui/material';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import TextField from "@mui/material/TextField";
import data from '../data.json';




/*
const [data, setData] = useState<Data>({})
const fetchJson = () => {
  fetch('./data.json')
  .then(response => {
    return response.json();
  }).then(data => {
    setData(data);
  }).catch((e) => {
    console.log(e);
  });
}
useEffect(() => {
  fetchJson()
},[])
*/



 

const EnsembleFormat = data.formations;

const Formations= () => {
  console.log(EnsembleFormat);
  /*  ************* data ************* */
  /*
  const [data, setData] = useState<Data>({});
  const fetchJson = () => {
    fetch('./data.json')
    .then(response => {
      return response.json();
    }).then(data => {
      setData(data);
    }).catch((e) => {
      console.log(e);
    });
  }
  useEffect(() => {
    fetchJson()
  },[])
  */
  /* *********************************** */
   const [isGray,setGray] = useState("1");
   
   const [searchQuery, setSearchQuery] = useState("");
  
  const handleGray = ()=> {
    isGray === 0 ? setGray(1) : setGray(0);
  }
    return (
      <div sx={{height:"100%",width:"100%"}}>
        <Navbar/>
        <Box sx ={{
              
              margin : "auto",
              textAlign :"center",
              height: 110,
              marginTop :"50px",
              marginBottom:"70px",
              width:"30%"
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
   }}
   >
    Formations
 </Typography>
 </Box>

 <Box sx ={{
              
              margin : "auto",
              textAlign :"center",
              height: 110,
              marginTop :"50px",
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
      sx={{width:"60%",marginX:"0px"}} variant="outlined"  label="Rechercher une formation que vous voulez accéder"  placeholder="Mobile dev"
    />
    
    
    
</form>
               </Box>
 
 
  

  <Container sx={{ 
    backgroundColor :"#D9D9D9",
    width:1000,
    height:335*(EnsembleFormat.length)+50,
   
    marginTop:"50px",
    marginBottom:"200px",
    flexDirection:"column",
    display:{md:"flex"}
 }}>
   {
 EnsembleFormat.filter((d) => Object.values(d).some(val => val.includes(searchQuery))).map((frm) => (
 <Container sx={{ 
    height:300 ,
    marginTop:"35px",
    textAlign:"center",
    backgroundColor:"#ffffff",
    flexDirection:"row",
    display:{md:"flex"}}}> 
    
                   {/* image */}

                  <Container sx={{ 
                    marginLeft:"1px",
    height:650 ,
    width:400,
    textAlign:"center",
  
    
    display:{md:"block"}
 }}>
 <img src={require('../img/livre.png')} alt="ann"/>
             
                   {/* theme */}
      
                   <Container sx={{ 
  height:600 ,
  
  textAlign:"center",
 
  display:{md:"flex"}
}}>
<Container sx={{display:{md:"flex"}}}>
<Typography
 variant="h6"
 component="a"
 sx={{  
  fontFamily: 'monospace',
  fontWeight: 10,
  fontSize:20,
  letterSpacing: '.0rem',
  color: '#000000',
  marginY : "10px",
  textAlign:"center",
  display: {md: 'flex'}

 }}
 > {frm.theme}</Typography>
</Container>
</Container>
  </Container>


 
  <Container sx={{ 
                    marginLeft:"1px",
    height:650 ,
    width:400,
    textAlign:"center",
  
    
    display:{md:"block"}
 }}>
  <Container sx={{ flexDirection:"column",display:{md:"flex"}}}> 
  <Typography
 variant="h6"
 component="a"
 sx={{  
  fontFamily: 'monospace',
  fontWeight: 10,
  fontSize:20,
  letterSpacing: '.0rem',
  color: '#FCA311',
  marginTop : "10px",
  
  textAlign:"center",
  display: {md: 'flex'}

 }}
 > {frm.announcer} </Typography>
</Container>
<Container sx={{width:350, paddingY:"0px", paddingLeft:"0px", display:{md:"flex"}}}><Typography
 variant="h6"
 component="a"
 sx={{  
  fontFamily: 'monospace',
  fontWeight: 10,
  fontSize:20,
  letterSpacing: '.0rem',
  color: '#000000',
  marginTop : "10px",
  marginLeft:"0px",
  textAlign:"start",
  display: {md: 'flex'}

 }}
 >
 {frm.content}</Typography>
</Container>
<Container sx={{display:{md:"flex"}}}>
   
   <Button
              key="submit"
              
              sx={{ my: 5, 
                color: 'white',
                 display: 'flex',
                backgroundColor:"#FCA311" ,
                marginLeft:"1px" ,
                marginTop:"5px",
                
                height:50,
                width:70,
                fontFamily: 'monospace',
                '&:hover': {
                   backgroundColor: '"#14213D',
                   opacity: [0.9, 0.8, 1],
                 },
             }}
            >
              
               <Link to ="/home">More</Link>
    
            </Button>
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
  
  export default Formations
  
/*  { img : '../img/livre.png',
  theme :"Web Dev",
  announcer:"Younes Oudjehane",
  content : "Lorem Ipsum is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:"2"

},
{ img : '../img/livre.png',
theme :"Graphic Designer",
announcer:"Selssabil Boudefel",
content : "Lorem Ipsum is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
id:"3"

}
*/




/* map */
/*


 */