// src/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // State to hold the email, password, and any error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await fetch('http://localhost:5000/api/userRoute/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Send the credentials that your endpoint expects
        body: JSON.stringify({
          email,     // e.g., reem@example.com
          password,  // e.g., test123
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Optionally save user info or a token to localStorage or context here
        
        // On a successful login, redirect the user to the driver dashboard
        navigate('/driver-dashboard');
      } else {
        const errorData = await response.json();
        // Show error message from the backend or a default error message
        setError(errorData.message || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label><br/>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password:</label><br/>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;