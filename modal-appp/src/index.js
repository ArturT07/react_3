import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart'; 
import Favorite from './components/Favorite'; 

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorite />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
