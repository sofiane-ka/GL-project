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
import HomeAdmin from "./pages/HomeAdmin";
import HomeTeacher from "./pages/HomeTeacher";
import Login from "./pages/Login";



function App() {
         
  return (
    
      <div className="App">
        <Router>
          <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/teacher"  element={<HomeTeacher />} /> 
          <Route path="/admin"  element={<HomeAdmin />} />
          <Route path="/formations"  element={<Formations />} />
          <Route path="/cours"  element={<Cours />} />
          <Route path="/contact"  element={<Contact />} />
          </Routes>
          </Router>
      </div>
   
  );
}

export default App;
