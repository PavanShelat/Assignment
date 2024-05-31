import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Home from './Components/Home';
import Package from './Components/Package';
import Service from './Components/Service';
import "./Sass.scss";
import Login from "./Components/Login";
import Loading from "./Components/Loading";

const Home = lazy(() => delayForDemo(import('./Components/Home')))
function App() {

  return (
    <>
     
      <Router>
      <Suspense fallback={<Loading />}>
            
          
        <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Package" element={<Package />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
        </Suspense>
      </Router>
    </>
  )
}



export default App;

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
