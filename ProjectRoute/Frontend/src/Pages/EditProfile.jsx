import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const profile = location.state;

  return (
    <div className="app-container">
      <nav className="dashboard-menu">
        <button onClick={() => navigate("/driver-dashboard")}>Home</button>
        <button onClick={() => navigate("/profiles")}>Profiles</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
      </nav>

      <h2>Edit Profile</h2>
      <hr />

      <form className="edit-form">
        <div className="form-row">
          <label>
            First Name:
            <input type="text" defaultValue={profile.name.split(" ")[0]} />
          </label>
          <label>
            Last Name:
            <input type="text" defaultValue={profile.name.split(" ")[1] || ""} />
          </label>
        </div>

        <div className="form-row">
          <label>
            Driver License Number:
            <input type="text" placeholder="e.g. ABC123456" />
          </label>
          <label>
            Date of Birth:
            <input type="text" placeholder="DD/MM/YYYY" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Email:
            <input type="email" defaultValue={profile.email || ""} />
          </label>
        </div>

        <hr />

        <h3>Debt</h3>

        <div className="form-row">
          <label>
            Owed To:
            <input type="text" />
          </label>
        </div>

        <div className="form-row">
          <label>
            Type:
            <input type="text" />
          </label>
          <label>
            Total ($):
            <input type="text" />
          </label>
        </div>

        <hr />
        
        <div className="form-row">
          <label>
            Missing Work:
            <textarea rows={3} />
          </label>
        </div>

        <div className="form-row">
          <label>
            Notes:
            <textarea rows={3} defaultValue={profile.notes || ""} />
          </label>
        </div>

        <button 
            type="submit" 
            className="update-btn"
            onClick={() => navigate("/profiles")}
        >
            Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
