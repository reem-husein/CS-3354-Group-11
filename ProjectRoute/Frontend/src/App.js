// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DriverDashboard from './Pages/DriverDashboard';
import SearchPage from './Pages/SearchPage';
import EditProfile from './Pages/EditProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/profiles" element={<SearchPage />} />
        <Route path="/edit-profile/:name" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default App;