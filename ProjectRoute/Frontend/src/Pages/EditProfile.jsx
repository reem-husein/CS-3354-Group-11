import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const profile = location.state;

  const [firstName, setFirstName] = useState(profile.name?.split(" ")[0] || "");
  const [lastName, setLastName] = useState(profile.name?.split(" ")[1] || "");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState(profile.email || "");
  const [debtOwedTo, setDebtOwedTo] = useState("");
  const [debtType, setDebtType] = useState("");
  const [debtAmount, setDebtAmount] = useState("");
  const [missingWork, setMissingWork] = useState("");
  const [notes, setNotes] = useState(profile.notes || "");
  const [error, setError] = useState(null);

  // Validation functions
  const validateName = (name) => /^[A-Za-z]{2,}$/.test(name.trim());
  const validateDL = (dl) => /^[A-Z0-9]{9}$/i.test(dl.trim());
  const validateDOB = (date) => /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[0-2])[\/]\d{4}$/.test(date.trim());
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError(null);

    // Only validate fields that are NOT empty
    if (firstName.trim() && !validateName(firstName)) {
      setError("First name must be at least 2 letters.");
      return;
    }
    if (lastName.trim() && !validateName(lastName)) {
      setError("Last name must be at least 2 letters.");
      return;
    }
    if (licenseNumber.trim() && !validateDL(licenseNumber)) {
      setError("Driver license must be 9 alphanumeric characters (Mexican format).");
      return;
    }
    if (dob.trim() && !validateDOB(dob)) {
      setError("DOB must be in DD/MM/YYYY format.");
      return;
    }
    if (email.trim() && !validateEmail(email)) {
      setError("Email is invalid.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5050/api/ProfileHandling/full-profile/${email}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          loginInfo: {
            email: email,
            password: "placeholder123", // Still using a placeholder password unless you collect it
          },
          employeeBasicInfo: {
            phone_number: 1234567890, // Placeholder
            full_name: `${firstName} ${lastName}`,
            DOB: dob,
            license_number: licenseNumber
          },
          employeeWorkHistory: {
            debt_owed_to: debtOwedTo,
            debt_type: debtType,
            debt_amount: debtAmount,
            missing_work: missingWork,
            notes: notes
          }
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Profile updated successfully!");
        navigate("/profiles");
      } else {
        setError(data.error || "Failed to update profile.");
      }
    } catch (err) {
      console.error("Update profile error:", err);
      setError("Server error occurred. Please try again later.");
    }
  };

  return (
    <div className="app-container">
      <nav className="dashboard-menu">
        <button onClick={() => navigate("/driver-dashboard")}>Home</button>
        <button onClick={() => navigate("/profiles")}>Profiles</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
        <button onClick={() => navigate("/")}>Logout</button>
      </nav>
      
      <div className="dashboard-content">
        <h2>Edit Profile</h2>
        <hr />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form className="edit-form" onSubmit={handleUpdateProfile}>
          <div className="form-row">
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Driver License Number:
              <input
                type="text"
                placeholder="e.g. ABC123456"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <hr />

          <h3>Debt</h3>

          <div className="form-row">
            <label>
              Owed To:
              <input
                type="text"
                value={debtOwedTo}
                onChange={(e) => setDebtOwedTo(e.target.value)}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Type:
              <input
                type="text"
                value={debtType}
                onChange={(e) => setDebtType(e.target.value)}
              />
            </label>
            <label>
              Total ($):
              <input
                type="text"
                value={debtAmount}
                onChange={(e) => setDebtAmount(e.target.value)}
              />
            </label>
          </div>

          <hr />
          
          <div className="form-row">
            <label>
              Missing Work:
              <textarea
                rows={3}
                value={missingWork}
                onChange={(e) => setMissingWork(e.target.value)}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Notes:
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>
          </div>

          <button type="submit" className="update-btn">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
