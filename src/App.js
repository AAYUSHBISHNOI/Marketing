import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myheader from './Components/Myheader';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Myslider from './Components/Myslider';
import Clients from './Components/Clients';
import Digital from './Components/Digital';
import Start from "./Components/Start";
import Partner from './Components/Partner';
import Actual from './Components/Actual';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Learn from './Components/Learn';
import Myfooter from './Components/Myfooter';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css"
import Aos from "aos"
import BackToTop from './Components/comon/Backtotop';

function App() {
  useEffect (() => {
  Aos.init({duration:1000, once:true,});
}, [])
  return (
    <>
    <Myheader/>
    <Myslider/>
    <Clients/>
    <Digital/>
    <Start/>
    <Partner/>
    <Actual/>
    <Learn/>
    <Myfooter/>
    <BackToTop/>
    </>
  );
}

export default App;
