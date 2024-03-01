// App.js
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Crypto from './Crypto/Crypto';
import { Home } from './Home';

function App() {
  return (
    <>
    
    <Router>

    
      
      <Routes>

        <Route  path="/" element={<Home />} />
        <Route  path="/crypto" element={<Crypto />} />
      </Routes>

    </Router></>
  );
}

export default App;
