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
import userEvent from "@testing-library/user-event";
import TextField from '@mui/material/TextField';



  

const user = [
  {
    firstName:"Sofiane",
    lastName:"Karaouni",
    job:"Mobile developer",
    age:"20",
    id:"1"
  }
]

const Profile= () => {
  const [input,setInput] =useState( 
  { img : '../img/livre.png',
  theme :"",
  announcer:"",
  content : "content 2 is ...s simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:""
 });

 const handleChangeInput = (e)=> {
 setInput((prevState) => ({
  ...prevState,
  [e.target.name] : e.target.value 
 }))
 }
 
const [EnsembleFormat,setFormat] = useState(
 [   
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

} ]);

const handleCreateAnn = (e) => {
   e.preventDefault();
   const copyEns =[input].concat(EnsembleFormat);
   setFormat(copyEns);
}
  
  const [announce , setAnnounce] = useState("0");
  const [isGray,setGray] = useState("1");

  const handleAnnounce = () => {
      if (announce ==="0")  setAnnounce("1") ; else setAnnounce("0") ;
  }

  const handleGray = ()=> {
    isGray === 0 ? setGray(1) : setGray(0);
  }
    return (
      <div className=''>
        <Navbar/>
      
        <Container sx={{backgroundColor:"#ffffff",marginY:"30px" ,height: () => { return (announce ==="0" ? 500 : 1000 ) }, flexDirection:"column",display:{md:"flex"} }} >

                 {/*Avatar */ }
                  <Container sx ={{
                  backgrounColor:"#FCA311",
                  textAlign :"center",
                  height: 100 ,
                  width:"80%",
                  flexDirection:"row",display:{md:"flex"},
                  marginTop :"50px",
                 paddingY:"20px"
                  }}>
                 <Avatar sx={{ width:250 ,height:250}} alt={user.firstName} src="/static/images/avatar/3.jpg" />
                 <Container sx={{marginY:"30px" ,height:400, flexDirection:"column",display:{md:"flex"} }}>
                 <Typography
                   variant="h6"
                   component="a"
                   href="/"
                   sx={{  
                    display:"absolute",
                    fontFamily: 'monospace',
                   fontWeight: 50,
                    fontSize:50,
                   letterSpacing: '.0rem',
                   color: '#14213D',
                   marginRight:"1px",
                   top:"50%",
                   textAlign:"left",
                   marginLeft:"60px",
                   }}
                   >
                   {user[0].firstName} {user[0].lastName}
                   </Typography>
                   <Typography
                   variant="h6"
                   component="a"
                   href="/"
                   sx={{  
                    display:"absolute",
                    fontFamily: 'monospace',
                   fontWeight: 50,
                    fontSize:30,
                   letterSpacing: '.0rem',
                   color: '#14213D',
                   marginRight:"1px",
                   marginLeft:"60px",
                   top:"50%",
                   textAlign:"left",
                   }}
                   >
                   {user[0].age} ans
                   </Typography>
                   <Typography
                   variant="h6"
                   component="a"
                   href="/"
                   sx={{  
                    display:"absolute",
                    fontFamily: 'monospace',
                   fontWeight: 50,
                    fontSize:30,
                   letterSpacing: '.0rem',
                   color: '#14213D',
                   marginLeft:"60px",
                   top:"50%",
                   textAlign:"left",
                   }}
                   >
                   {user[0].job} 
                   </Typography>
                   </Container>
               </Container>


               {/* Create an annoucement*/}

               <Button
                key="submit"

                onClick={handleAnnounce}
                
                sx={{ my: 5, 
                  color: 'white',
                   display: 'block',
                  backgroundColor:"#FCA311" ,
                  marginX:"auto" ,
                  marginTop:"200px",
                  height:50,
                  width:300,
                  fontFamily: 'monospace',
                  '&:hover': {
                     backgroundColor: '#D9D9D9',
                     opacity: [0.9, 0.8, 1],
                   },
               }}
              >
                
                Create an announcement
      
              </Button>
              {(announce ==="1")   && <form onSubmit={handleCreateAnn} >
         {(announce ==="1")   &&  <TextField name="theme" onChange={handleChangeInput} value ={input.theme} sx={{marginTop:"50px",marginX:"170px"}} required id="theme" label="Theme"  placeholder="Mobile dev"  />  }
         {(announce ==="1")  &&   <TextField name="announcer"onChange={handleChangeInput}  value ={input.announcer} sx={{marginTop:"50px",marginX:"170px"}} required id="announcer" label="Announcer"  placeholder="Sofiane Karaouni"  />  }
         {(announce ==="1")   &&  <TextField name="content" onChange={handleChangeInput}  value ={input.content} sx={{marginTop:"50px",marginX:"170px"}} required id="content" label="Content"  placeholder="Ex: I'm a teacher.."  />  }
         {(announce ==="1")  &&   <TextField name="id"onChange={handleChangeInput}  value ={input.id} sx={{marginTop:"50px",marginX:"170px"}} required id="id" label="ID"  placeholder="sofiane.x"  />  }
          
         <Container sx={{
         marginTop:"40px",
         height:50,
         alignItems:"center",
         justifyContent:"center",
         width:700 , flexDirection:"row", display:{md:"flex"}}}> 
         <Button
                key="submit"

                onClick={handleCreateAnn}
                
                sx={{ my: 5, 
                  color: 'white',
                   display: 'block',
                  backgroundColor:"#FCA311" ,
                 
                  marginTop:"40px",
                  height:50,
                  width:300,
                  marginRight:"10px",
                  fontFamily: 'monospace',
                  '&:hover': {
                     backgroundColor: '#D9D9D9',
                     opacity: [0.9, 0.8, 1],
                   },
               }}
              >
                
                Post
      
              </Button>
              
              <Button
                onClick={handleAnnounce}
                sx={{ my: 5, 
                  color: 'white',
                   display: 'block',
                  backgroundColor:"#FCA311" ,
                  marginX:"auto" ,
                  marginTop:"40px",
                  height:50,
                  width:300,
                  marginLeft:"10px",
                  fontFamily: 'monospace',
                  '&:hover': {
                     backgroundColor: '#D9D9D9',
                     opacity: [0.9, 0.8, 1],
                   },
               }}
              >
                
                Close
      
              </Button>

                   
              </Container> 
              </form> }

 </Container> 
 <Container sx={{ 
    backgroundColor :"#D9D9D9",
    width:1000,
    height:335*(EnsembleFormat.length),
   
    marginTop:"150px",
    marginBottom:"120px",
    paddingBottom:"35px",
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
