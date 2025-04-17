import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const DriverDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="dashboard-menu">
        <button onClick={() => navigate("/driver-dashboard")}>Home</button>
        <button onClick={() => navigate("/profiles")}>Profiles</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
      </nav>

      <div className="dashboard-content">
        <h2>Driver Dashboard</h2>
        <p>Welcome, you have successfully logged in!</p>
      </div>
    </div>
  );
};

export default DriverDashboard;