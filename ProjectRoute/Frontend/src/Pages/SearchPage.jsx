import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function SearchPage() {
  const navigate = useNavigate();

  // add api database connections here, just needs to read name and email 
  // and it should display it
  const results = [
    { name: "Jane Doe", email: "jane.doe@example.com" },
    { name: "John Smith", email: "john.smith@example.com" },
    { name: "Reem Husein", email: "reem@example.com" },
  ];

  const handleEdit = (name) => {
    alert(`Edit clicked for ${name}`);
  };

  return (
    <div className="app-container">
      <nav className="dashboard-menu">
        <button onClick={() => navigate("/driver-dashboard")}>Home</button>
        <button onClick={() => navigate("/profiles")}>Profiles</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
      </nav>
  
      <h2>Search Profiles</h2>
  
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by Name"
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search by Phone Number"
          className="search-input"
        />
        <button className="search-icon-btn">
          🔍
        </button>
      </div>
  
      <table className="results-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {results.map((profile, index) => (
            <tr key={index}>
              <td>{profile.name}</td>
              <td>{profile.email}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(profile.name)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
}