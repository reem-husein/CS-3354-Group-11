// SearchPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import "./dashboard.css";

export default function SearchPage() {
  const navigate = useNavigate();

  // ——————— State ———————
  const [originalResults, setOriginalResults] = useState([]);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ——————— Load all users on mount ———————
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await fetch(
          "http://localhost:5050/api/ProfileHandling/users"
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const users = await res.json(); // [{ id, email, name }]
        setOriginalResults(users);
        setResults(users);
      } catch (err) {
        console.error("Failed to load profiles:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllUsers();
  }, []);

  // ——————— Search handler ———————
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      // empty input → reset to all
      setResults(originalResults);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const prefix = encodeURIComponent(searchTerm.toLowerCase());
      const res = await fetch(
        `http://localhost:5050/api/search?prefix=${prefix}`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { suggestions } = await res.json(); // { suggestions: [" alice", " alicia", ...] }

      // trim leading spaces & lowercase
      const trimmed = suggestions.map((s) => s.trim().toLowerCase());

      // filter originalResults by matching name
      const filtered = originalResults.filter((u) =>
        trimmed.includes((u.name || "").toLowerCase())
      );

      setResults(filtered);
    } catch (err) {
      console.error("Search failed:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (profile) => {
    navigate(`/edit-profile/${profile.name}`, { state: profile });
  };  

  return (
    <div className="app-container">
      <nav className="dashboard-menu">
        <button onClick={() => navigate("/driver-dashboard")}>Home</button>
        <button onClick={() => navigate("/profiles")}>Profiles</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
        <button onClick={() => navigate("/")}>Logout</button>
      </nav>

      <h2>Search Profiles</h2>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by Name"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-icon-btn" onClick={handleSearch}>
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
          {loading ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Loading…
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", color: "red" }}>
                Error: {error}
              </td>
            </tr>
          ) : results.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No profiles found.
              </td>
            </tr>
          ) : (
            results.map((profile, idx) => (
              <tr key={idx}>
                <td>{profile.name || "—"}</td>
                <td>{profile.email}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(profile)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}