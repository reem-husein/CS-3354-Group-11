// src/CreateAccount.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CreateAccount.module.css';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    // connect to your backend API here
    console.log({ name, email, phone, password });

    navigate("/driver-dashboard");
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginContent}>
        <h3 className={classes.welcomeTitle}>Create Your ChauffeurCheck Account</h3>
        <h4 className={classes.heading}>Sign up to get started</h4>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit} className={classes.form}>
          <div>
            <label htmlFor="name" className={classes.labels}>Full Name:</label><br />
            <input
              id="name"
              type="text"
              placeholder="Enter your first and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={classes.loginInput}
            />
          </div>

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
            <label htmlFor="phone" className={classes.labels}>Phone:</label><br />
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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

          <button type="submit" className={classes.loginButton}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
