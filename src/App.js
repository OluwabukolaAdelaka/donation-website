import React from 'react';
import Navigation from './component/Navigation';
import {Routes, Route} from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
