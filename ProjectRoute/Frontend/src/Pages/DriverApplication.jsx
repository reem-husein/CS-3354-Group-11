// src/DriverApplication.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DriverApplication.module.css';

const DriverApplication = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dlnumber, setDLNumber] = useState('');
  const [dob, setDOB] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateFirstName = (name) => /^[A-Za-z]{2,}$/.test(name.trim());
  const validateLastName = (name) => /^[A-Za-z]{2,}$/.test(name.trim());

  // Example Mexican driver's license pattern: 9 alphanumeric characters
  const validateDLNumber = (dlnum) => /^[A-Z0-9]{9}$/i.test(dlnum.trim());

  // Simple DD/MM/YYYY validation (not checking realistic dates, just format)
  const validateDOB = (date) => /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[0-2])[\/]\d{4}$/.test(date.trim());

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!validateFirstName(firstName)) {
      setError("First name must be at least 2 letters long.");
      return;
    }

    if (!validateLastName(lastName)) {
      setError("Last name must be at least 2 letters long.");
      return;
    }

    if (!validateDLNumber(dlnumber)) {
      setError("Driver License Number must be 9 alphanumeric characters.");
      return;
    }

    if (!validateDOB(dob)) {
      setError("Date of Birth must be in DD/MM/YYYY format.");
      return;
    }

    alert("Application successfully submitted!");
    navigate('/driver-dashboard2');
  };

  return (
    <div className={styles.pageContainer}>
      <nav className={styles.topMenu}>
        <button onClick={() => navigate("/driver-dashboard2")}>Home</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
        <button onClick={() => navigate("/")}>Logout</button>
      </nav>

      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Fill Application</h2>
        <hr className={styles.divider} />
        {error && <p className={styles.errorText}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.applicationForm}>
          <div className={styles.row}>
            <label>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>

          <div className={styles.row}>
            <label>
              Driver License Number:
              <input
                type="text"
                value={dlnumber}
                onChange={(e) => setDLNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                required
              />
            </label>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default DriverApplication;