import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';

import './App.css'
export default  function App() {


  return (
   <> 
    <Navbar/>
    
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

     <Footer/> </> 
  )
}


