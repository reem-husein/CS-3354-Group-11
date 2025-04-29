import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const DriverDashboard = () => {
  const navigate = useNavigate();

  // Example placeholder values – replace with API data later
  const profilesPurchased = 8;
  const applicationsToApprove = 3;
  const weeklyOrders = 12;

  return (
    <div className="dashboard-container">
      <nav className="dashboard-menu">
        <button onClick={() => navigate("/driver-dashboard")}>Home</button>
        <button onClick={() => navigate("/profiles")}>Profiles</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
        <button onClick={() => navigate("/")}>Logout</button>
      </nav>

      <div className="dashboard-content">
        <h2>Admin Dashboard</h2>
        <hr />
        <h3>Welcome to ChauffeurCheck!</h3>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="dashboard-number">{profilesPurchased}</div>
            <div className="dashboard-label">Profiles Recently Purchased</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-number">{applicationsToApprove}</div>
            <div className="dashboard-label">Applications to Approve</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-number">{weeklyOrders}</div>
            <div className="dashboard-label">Weekly Orders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
