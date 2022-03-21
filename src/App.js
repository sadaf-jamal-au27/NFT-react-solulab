import './App.css';
//import $ from 'jquery';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./css/mystyle.css"
import "./css/responsive.css"
import "./css/owl.carousel.min.css"
//import Popper from 'popper.js';
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from './components/Banner';
import Artist from './components/Artist'
import Trading from './components/Trading'


function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <Artist/>
      <Trading/>
      <Footer />
    </div>
  );
}

export default App;
