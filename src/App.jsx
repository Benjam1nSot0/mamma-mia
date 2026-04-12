import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./Navbar";
import Cart from "./Cart";
import Home from "./Home";
import Footer from "./Footer";
//import Register from "./Register"
//import Login from "./Login"

function App() {
  return(
    <div>
      <Navbar/>
      <Cart/>
    {/* <Home/> */}
     {/* <Register/> */}
      {/*<Login/> */}
      <Footer/>
    </div>
  );
  }
  
export default App;  