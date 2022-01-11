//import logo from './logo.svg';
import React from 'react'
import './App.scss';
import Home from './pages'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import HeroSection from '../src/components/HeroSection'
import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio'
import Contacts from '../src/components/Contacts'
import Footer from './components/Footer';


function App() {
  return (
    
    <>
       
      <Navbar/>
      <HeroSection/>
      <br></br>
      
      <About/>
      <br></br>
      <Portfolio/>
      <Contacts/>
      <Footer/>
      
    </>
      
      
    
  );
}

export default App;
