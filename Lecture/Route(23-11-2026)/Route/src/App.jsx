import './App.css'
import Navbar from "./Component/Navbar"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Feature from "./Pages/Feature"
import Pricing from "./Pages/Pricing"
import Errorpage from "./Pages/404"
import Product from "./Pages/Product"
import oldproduct from "./Pages/oldproduct"
import newproduct from "./Pages/Newproduct"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="About" element={<About/>}/><Route/>
           <Route path="contact" element={<Contact/>}/><Route/>
           <Route path="Feature" element={<Feature/>}/><Route/>
           <Route path="Pricing" element={<Pricing/>}/><Route/>
           <Route path="Product" element={<Product/>}/>
              <Route path="OldProduct" element={<oldproduct/>}/><Route/>
              <Route path="NewProduct" element={<newproduct/>}/><Route/>
           <Route/>
           <Route path="Errorpage" element={<Errorpage/>}/><Route/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App