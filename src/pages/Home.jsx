import React, { useState, useEffect } from "react";
import HomeSec from "../components/HomeSec";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Formations from "../components/Formations";
import Cours from "../components/Cours";
import Contact from "../components/Contact";
import Login from "./Login";


const Home= () => {

  return (
    <section>
    <Navbar/>
    <HomeSec/>
    <Footer/>
  
         
    </section>
  )
}

export default Home