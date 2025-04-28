// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import CreateAccount from './Pages/CreateAccount';
import DriverDashboard from './Pages/DriverDashboard';
import DriverDashboard2 from './Pages/DriverDashboard2';
import DriverApplication from './Pages/DriverApplication';
import SearchPage from './Pages/SearchPage';
import EditProfile from './Pages/EditProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/driver-dashboard2" element={<DriverDashboard2 />} />
        <Route path="/driver-application" element={<DriverApplication />} />
        <Route path="/profiles" element={<SearchPage />} />
        <Route path="/edit-profile/:name" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default App;