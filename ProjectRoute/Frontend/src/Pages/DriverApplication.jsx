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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    navigate('/driver-dashboard');
  };

  return (
    <div className={styles.pageContainer}>
      <nav className={styles.topMenu}>
        <button onClick={() => navigate("/driver-dashboard")}>Home</button>
        <button onClick={() => navigate("/profiles")}>Profiles</button>
        <button onClick={() => alert("Settings coming soon!")}>Settings</button>
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

