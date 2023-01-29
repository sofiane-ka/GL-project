import React from "react";
import HomeSec from "../components/HomeSec";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { UserContext } from "../components/UserContext";
import { useContext } from "react";
const Home= () => {
 const {user,setUser} = useContext(UserContext);
 
  return (
    <section>
    <UserContext.Provider value={{user,setUser}}>
    <Navbar />
    </UserContext.Provider>
    <HomeSec/>
    <Footer/>
    </section>
  )
}

export default Home