import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function SearchPage() {
  const navigate = useNavigate();

  // ——————— State for fetched results ———————
  const [results, setResults] = useState([]);

  // ——————— Fetch all users on mount ———————
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5050/api/ProfileHandling/users");       // <-- adjust path if your API is mounted elsewhere
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const users = await res.json();
        // users is expected to be an array of { id, email, name }
        setResults(users.map(u => ({
          name: u.name,
          email: u.email
        })));
      } catch (err) {
        console.error("Failed to load profiles:", err);
      }
    };

    fetchUsers();
  }, []);

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
        <button className="search-icon-btn">🔍</button>
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
          {results.length > 0 ? (
            results.map((profile, idx) => (
              <tr key={idx}>
                <td>{profile.name || "—"}</td>
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
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", padding: "1rem" }}>
                No profiles found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );  
}