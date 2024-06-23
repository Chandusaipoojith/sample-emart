import React from "react";
import './App.css'
import LandingPage from "./stores/pages/LandingPage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Watches from "./stores/Components/Watches";
import WatchPage from "./stores/pages/WatchPage";
import WatchSingle from "./singles/WatchSingle";
import Computers from "./stores/Components/Computers";
import LaptopPage from "./stores/pages/LaptopPage";
import LaptopSingle from "./singles/LaptopSingle";
import AcPage  from "./stores/pages/AcPage";
import AcSingle from "./singles/AcSingle";
import MobilePage from "./stores/pages/MobilePage";
import MobileSingle from "./singles/MobileSingle";
import UserCart from "./stores/UserCart.jsx"
const App=()=>{
  return (
    <>
    
  
      <Routes>
        <Route path="/" element={ <LandingPage/>}/>
        <Route path="/watch" element={<WatchPage/>}/>
        <Route path="/watch/:id" element={<WatchSingle/>}/>
        <Route path="/laptop" element={<LaptopPage/>}/>
        <Route path="/laptop/:id" element={<LaptopSingle/>}/>
        <Route path="/ac" element={<AcPage/>}/>
        <Route path="/ac/:id" element={<AcSingle/>}/>
        <Route path="/mobile" element={<MobilePage/>}/>
        <Route path="/mobile/:id" element={<MobileSingle/>}/>
        <Route path="/cart" element={<UserCart/>}/>
      </Routes>
 
    
   
   
    </>
 
  )
}
export default App;