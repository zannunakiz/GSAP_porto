import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
};

export default App;
