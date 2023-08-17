import React from 'react';
import './App.module.scss';
import Navbar from './Navbar';
import Home from './Home'; // Se você tiver um componente Home
import About from './About'; // Se você tiver um componente About
import Portfolio from './Portfolio'; // Se você tiver um componente Portfolio
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
   return (
      <div>
         <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
