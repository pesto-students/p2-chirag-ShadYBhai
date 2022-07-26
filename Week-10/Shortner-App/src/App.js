import React from "react";
import {Route, Routes } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Pricing from "./Component/Pricing";
import Resources from "./Component/Resources";
import Features from "./Component/Features";
import Error from "./Component/Error";
import List from "./Component/List";
import Footer from "./Component/Footer";

const App=()=>{

  return(
    <>
    <List/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
export default App