// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignInForm from './components/SignInForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setSignedIn(!!localStorage.getItem('jwt'));
  }, []);

  return (
      <Router>
        <NavBar isSignedIn={isSignedIn} setSignedIn={setSignedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInForm setSignedIn={setSignedIn} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;