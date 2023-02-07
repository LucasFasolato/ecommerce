import './App.css';
import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/homePage'
import Contact from './pages/contact';
function AppWrapper() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;

