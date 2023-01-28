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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


 const EnsembleFormat =[
  { img : '../img/livre.png',
 theme :"Web Dev",
 announcer:"Younes Oudjehane",
 content : "content 2 is ...s simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
 id:"1"

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
 id:"1"

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
 announcer:"Sofiane Karaouni",
 content : "content 9 is .....is simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
 id:"1"
}
 ] ;

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
  const [open, setOpen] = React.useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [input,setInput] =useState( 
  { img : '../img/livre.png',
  theme :"",
  announcer:"",
  content : "content 2 is ...s simply dummy text the printing and typesetting indust Lorem Ipsum has been the industry." ,
  id:user[0].id
 });

 const handleChangeInput = (e)=> {
 setInput((prevState) => ({
  ...prevState,
  [e.target.name] : e.target.value 
 }))
 }
 
const [EnsembleFormatUser,setFormat] = useState(
  EnsembleFormat.filter((obj) => obj.id === user[0].id)
  );

const handleCreateAnn = (e) => {
   e.preventDefault();
   if(input.id === user[0].id){
   const copyEns =[input].concat(EnsembleFormatUser);
   setFormat(copyEns);
   }
   else setOpen(true);
}
  
  const [announce , setAnnounce] = useState("0");
  const [isGray,setGray] = useState("1");

  const handleAnnounce = () => {
      if (announce ==="0")  setAnnounce("1") ; else setAnnounce("0") ;
  }
  const handleDeleteAnn= () => {
    if (announce ==="0")  setAnnounce("-1") ; else setAnnounce("0") ;
} 

  const handleGray = ()=> {
    isGray === 0 ? setGray(1) : setGray(0);
  }

  const handleDelete=(e) => {
    e.preventDefault();
   if(input.id === user[0].id){
   const copyEns =EnsembleFormatUser.filter((obj)=>{ return ((obj.id !== input.id)||(obj.theme !==input.theme));});
   setFormat(copyEns);
   }
   else setOpen(true);
  }
    return (
      <div className=''>
        <Navbar/>
      
        <Container sx={{backgroundColor:"#ffffff",marginTop:"30px" ,height: () => { return (announce ==="0" ? 600 : 950 ) }, flexDirection:"column",display:{md:"flex"} }} >

                 {/*Avatar */ }
                  <Container sx ={{
                  backgrounColor:"#FCA311",
                  textAlign :"center",
                  height: 100 ,
                  width:"80%",
                  flexDirection:"row",display:{md:"flex"},
                  marginTop :"50px",
                  }}>
                 <Avatar sx={{ width:250 ,height:250}} alt={user.firstName} src="/static/images/avatar/3.jpg" />
                 <Container sx={{marginY:"30px" ,height:400, flexDirection:"column",display:{md:"flex"} }}>
                 <Typography
                   variant="h6"
                   component="a"
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
               
               { (announce==="0") && <Container sx={{
         marginTop:"250px",
         height:50,
         alignItems:"center",
         justifyContent:"center",
         width:900 , flexDirection:"column", display:{md:"flex"}}}>
           
           <Box sx ={{
              
              margin : "auto",
              textAlign :"center",
              height: 130,
              marginTop :"70px",
              marginBottom:"70px",
              width:"100%",
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
               <Button
                key="submit"

                onClick={handleAnnounce}
                
                sx={{ my: 5, 
                  color: 'white',
                   display: 'block',
                  backgroundColor:"#FCA311" ,
                  marginX:"auto" ,
                  marginTop:"0px",
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
             
              <Button
                key="submit"

                onClick={handleDeleteAnn}
                
                sx={{ my: 5, 
                  color: 'white',
                   display: 'block',
                  backgroundColor:"#FCA311" ,
                  marginX:"auto" ,
                  marginTop:"0px",
                  height:50,
                  width:300,
                  fontFamily: 'monospace',
                  '&:hover': {
                     backgroundColor: '#D9D9D9',
                     opacity: [0.9, 0.8, 1],
                   },
               }}
              >
                
                Delete an annoucement
      
              </Button>
            
              </Container>
              }
             { (announce==="1") && <Box sx ={{margin : "auto", 
             textAlign :"center",
             height: 10,
             marginTop : "200px",
           
              }}>
        <Typography
  variant="h6"
  component="a"
  sx={{  
   fontFamily: 'monospace',
   fontWeight: 50,
   fontSize:30,
   letterSpacing: '.0rem',
   color: '#FCA311',
   marginTop : "200px",
   margin:"auto",
   width:"100px"
  }}
  >
   Create Announce
</Typography>
</Box> }
             { (announce==="-1") &&  <Box sx ={{margin : "auto",
             textAlign :"center",
             height: 10,
             marginTop : "200px",
        
              }}>
        <Typography
  variant="h6"
  component="a"
  sx={{  
   fontFamily: 'monospace',
   fontWeight: 50,
   fontSize:30,
   letterSpacing: '.0rem',
   color: '#FCA311',
   marginTop: "200px",
   width:"100px"
  }}
  >
   Delete Announce
</Typography>
</Box> 
              } 
  
{ (announce!=="0") &&  <Container sx={{ marginBottom:"90px", marginTop:"0px",justifyContent:"center"}}>
                     <form sx={{ marginTop:"20px", display:{md:"flex"}, flexDirection:"column",justifyContent:"center"}} onSubmit={handleCreateAnn} >
                         <TextField name="theme" onChange={handleChangeInput} value ={input.theme} sx={{width:"70%",marginTop:"20px",marginX:"170px"}} required id="theme" label="Theme"  placeholder="Mobile dev"  />  
                         <TextField name="announcer"onChange={handleChangeInput}  value ={input.announcer} sx={{width:"70%",marginTop:"20px",marginX:"170px"}} required id="announcer" label="Announcer"  placeholder="Sofiane Karaouni"  />  
                         <TextField name="content" onChange={handleChangeInput}  value ={input.content} sx={{width:"70%",marginTop:"20px",marginX:"170px"}} required id="content" label="Content"  placeholder="Ex: I'm a teacher.."  />  
                         <TextField name="id"onChange={handleChangeInput}  value ={input.id} sx={{width:"70%",marginTop:"20px",marginX:"170px"}} required id="id" label="ID"  placeholder="sofiane.x"  />  
          
         <Container sx={{
         marginTop:"40px",
         height:50,
         alignItems:"center",
         justifyContent:"center",
         width:700 , flexDirection:"row", display:{md:"flex"}}}> 
         {(announce==="-1")&&
         <Button
                key="submit"

                onClick={handleDelete}
                
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
                
                Delete
      
              </Button>
            }
              {(announce==="1")&&
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
               }
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
              </form>
              </Container> }

 </Container> 
 <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Error in form"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            L'ID est incorrect , veuillez réessayer !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
 <Container sx={{ 
    backgroundColor :"#D9D9D9",
    width:1000,
    height:335*(EnsembleFormatUser.length)+50,
   
    marginTop:"150px",
    marginBottom:"200px",
    paddingBottom:"35px",
    flexDirection:"column",
    display:{md:"flex"}
 }}>
   {
 EnsembleFormatUser.filter((d) => Object.values(d).some(val => val.includes(searchQuery))).map((frm) => (

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
