import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Formations from "./components/Formations";
import Cours from "./components/Cours";
import Contact from "./components/Contact";
import Chat from "./components/Chat";
import HomeAdmin from "./pages/HomeAdmin";
import HomeTeacher from "./pages/HomeTeacher";
import Profile from "./components/Profile";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";


function App() {
   
  

/* **************************************************** */
const [user,setUser] = useState({
  firstName:"",
  lastName:"",
  job:"Mobile developer",
  age:"20",
  id:"1",
  img:"",
}) 

const [done,setDone]=useState("0");
console.log(user);





function handleCallbackResponse(response){
  console.log("Encoded JWT ID token :" + response.credential);
  var userObject = jwt_decode(response.credential);
  console.log(userObject);
  console.log("user before");
  const userAfter = user ;
  userAfter.lastName  = userObject.family_name;
  userAfter.firstName = userObject.given_name;
  userAfter.img = userObject.picture ;
  setUser(userAfter);
  console.log(user)
  setDone("1");
  console.log(done)
}




useEffect(()=>{
  /* global google */
   google.accounts.id.initialize({
     client_id:"118220463401-vgrlkjh5uoo43bd99tuhg5ddl6290bof.apps.googleusercontent.com",
     callback: handleCallbackResponse
   });

   google.accounts.id.renderButton(
      document.getElementById("sign"),
     {theme:"outline",size:"large"} 
   )

},[])
/* ************************************************************ */
 
     
{/*
      <Route path="/home"> {user ?<Navigate to="/" /> : <Home /> }</Route>
      <Route path="/teacher"> {!user ?<Navigate to="/" /> : <HomeTeacher /> }</Route>
      <Route path="/admin"> {!user ?<Navigate to="/" /> : <HomeAdmin /> }</Route>
      <Route path="/formations"> {!user ?<Navigate to="/" /> : <Formations /> }</Route>
      <Route path="/cours"> {!user ?<Navigate to="/" /> : <Cours /> }</Route>
      <Route path="/contact"> {user ?<Navigate to="/" /> : <Contact /> }</Route>
      <Route path="/Profile"> {user ?<Navigate to="/" /> : <Profile /> }</Route>
*/} 
     
  



return (
    
      <div className="App">
        {done && <></>}
        { ((user.firstName==="") || (user.lastName==="") ) ?    
         (
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
      <img src={require('./img/livre.png')} alt="login"/>
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
      <div   id="signInDiv" className="g-signin2" dataWidth="300" dataHeight="200" dataLongtitle="true">
      <Button
            key="submit"
            id="sign"
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
                 backgroundColor: '#000000',
                 opacity: [0.9, 0.8, 1],
               },
           }}
          >
            
             Sign In With Google
            {/* {user && (<Navigate to="/dashboard" replace={true} />)}*/}
          </Button>
          </div>
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
         :
        <Router>
        <UserContext.Provider value={{user,setUser}}>
          <Routes>
          
          <Route path="/"  element={<Home />} />
          <Route path="/home"  element={<Home />} /> 
          <Route path="/teacher"  element={<HomeTeacher />} /> 
          <Route path="/admin"  element={<HomeAdmin />} />
          <Route path="/formations"  element={<Formations />} />
          <Route path="/cours"  element={<Cours />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/Profile"  element={<Profile />} />
          <Route path="/chat"  element={<Chat />} />
    {/*
          <Route path="/home"> {user ?<Navigate to="/" /> : <Home /> }</Route>
          <Route path="/teacher"> {!user ?<Navigate to="/" /> : <HomeTeacher /> }</Route>
          <Route path="/admin"> {!user ?<Navigate to="/" /> : <HomeAdmin /> }</Route>
          <Route path="/formations"> {!user ?<Navigate to="/" /> : <Formations /> }</Route>
          <Route path="/cours"> {!user ?<Navigate to="/" /> : <Cours /> }</Route>
          <Route path="/contact"> {user ?<Navigate to="/" /> : <Contact /> }</Route>
          <Route path="/Profile"> {user ?<Navigate to="/" /> : <Profile /> }</Route>
  */} 
          </Routes>
          </UserContext.Provider>
          </Router>
          }
      </div>
   
  );
}

export default App;
