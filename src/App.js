import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./fonts/Roboto/Roboto-Light.ttf";

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home />}></Route>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
