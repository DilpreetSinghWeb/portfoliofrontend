// src/App.js
import Layout from "./pages/Layout/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashBoard/dashBoard";
import { useState } from 'react';
import './main.css';
import NotFound from "./pages/NotFound/NotFound";

function App() {
  // Hardcoded username and password for admin access
  const [isAdmin, setIsAdmin] = useState(false); // Admin access state
  const myPassword = process.env.REACT_APP_PASSWORD;
  const myUsername = process.env.REACT_APP_USERNAME;

  const handleAdminAccess = (username, password) => {
    
    if (username === myUsername && password === myPassword) {
      setIsAdmin(true); 
      
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Layout />} />
        <Route path="dashboard" element={
          isAdmin ? (
            <Dashboard />
          ) : (
            <Navigate to="/" replace />
          )
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
