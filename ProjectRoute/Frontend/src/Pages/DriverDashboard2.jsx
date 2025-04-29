import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const DriverDashboard2 = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="dashboard-menu">
        <button onClick={() => navigate("/driver-dashboard2")}>Home</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
        <button onClick={() => navigate("/")}>Logout</button>
      </nav>

      <div className="dashboard-content">
        <h2>Driver Dashboard</h2>
        <hr />
        <h3>Welcome to ChauffeurCheck!</h3>

        <button 
          className="application-btn" 
          onClick={() => navigate("/driver-application")}
        >
          Fill Application
        </button>

        {/* Dashboard cards removed as per your instructions */}
      </div>
    </div>
  );
};

export default DriverDashboard2;