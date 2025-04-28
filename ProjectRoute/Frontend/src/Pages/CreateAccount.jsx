// src/CreateAccount.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CreateAccount.module.css';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and include both letters and numbers.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5050/api/ProfileHandling/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          loginInfo: { email, password }
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.msg || "Registration failed.");
        return;
      }

      // Success: Navigate to dashboard
      navigate("/driver-dashboard2");

    } catch (err) {
      console.error("REGISTER ERROR:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginContent}>
        <h3 className={classes.welcomeTitle}>Create Your ChauffeurCheck Account</h3>
        <h4 className={classes.heading}>Sign up to get started</h4>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit} className={classes.form}>
          <div>
            <label htmlFor="email" className={classes.labels}>Email:</label><br />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={classes.loginInput}
            />
          </div>

          <div>
            <label htmlFor="password" className={classes.labels}>Password:</label><br />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={classes.loginInput}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className={classes.labels}>Re-enter Password:</label><br />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={classes.loginInput}
            />
          </div>

          <button type="submit" className={classes.loginButton}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
