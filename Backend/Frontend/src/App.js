// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DriverDashboard from './Pages/DriverDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
