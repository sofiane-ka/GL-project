import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box'; 
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';


const EnsembleFormat = [
  { img: '../img/livre.png',
     theme :"Mobile Dev",
     announcer:"Sofiane Karaouni",
     content : "content 1 is .... is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
     id:"1"

  },
  { img : '../img/livre.png',
  theme :"Web Dev",
  announcer:"Younes Oudjehane",
  content : "content 2 is ...s simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:"2"

},
{ img : '../img/livre.png',
  theme :"Web Dev",
  announcer:"Younes Oudjehane",
  content : "content 3 is ..s simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:"2"

},
{ img : '../img/livre.png',
  theme :"Web Dev",
  announcer:"Younes Oudjehane",
  content : "content 4 is ... is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:"2"

},
{ img : '../img/livre.png',
  theme :"Web Dev",
  announcer:"Younes Oudjehane",
  content : "content 6 is ...is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:"2"

},
{ img : '../img/livre.png',
  theme :"Web Dev",
  announcer:"Younes Oudjehane",
  content : "content 7 is ...is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:"2"

},
{ img : '../img/livre.png',
  theme :"Web Dev",
  announcer:"Younes Oudjehane",
  content : "content 8 is ...psum is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:"2"

},
{ img : '../img/livre.png',
  theme :"Web Dev",
  announcer:"Younes Oudjehane",
  content : "content 9 is .....is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:"2"

},


 ];

const Profile= () => {
  const [isGray,setGray] = useState("1");

  const handleGray = ()=> {
    isGray === 0 ? setGray(1) : setGray(0);
  }
    return (
      <div className=''>
        <Navbar/>
        <Container sx={{flexDirection:"column",display:{md:"flex"} }} >
        <Container sx ={{
              textAlign :"center",
              height: 10,
              flexDirection:"column",display:{md:"flex"},
              marginTop :"50px",
              marginBottom:"70px"
               }}>
         <Avatar sx={{ width:400 ,height:400}} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </Container>

 
 <Container sx={{ 
    backgroundColor :"#D9D9D9",
    width:1000,
    height:335*(EnsembleFormat.length),
   
    marginTop:"400px",
    marginBottom:"120px",
    paddingBottom:"5px",
    flexDirection:"column",
    display:{md:"flex"}
 }}>
   {
 EnsembleFormat.map((frm) => (
<Container sx={{ 
    height:300 ,
    marginTop:"35px",
    textAlign:"center",
    backgroundColor:"#ffffff",
    flexDirection:"row",
    display:{md:"flex"}}}> 
    
                   {/* image*/}

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
 href="/"
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


  {/* announcer content move*/}
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
 href="/"
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
<Container sx={{paddingLeft:"1px", display:{md:"flex"}}}><Typography
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
  marginLeft:"1px",
  textAlign:"center",
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
    </Container> 
 <Footer/>
      </div>
    )
  }
  
  export default Profile
  
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