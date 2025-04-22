import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:5050/api/ProfileHandling/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          loginInfo: {
            email,
            password,
          },
        }),
      });

      console.log("Status:", response.status);

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok) {
        // Redirect to the dashboard
        console.log("Navigating to dashboard...");
        navigate('/driver-dashboard');
      } else {
        setError(data.msg || 'Login failed. Please check your credentials.');
      }

    } catch (err) {
      console.error("Fetch failed:", err);
      setError('Unable to reach the server. Please try again later.');
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
        
        <button type="submit" style={{ padding: '0.5rem 1rem', width: '100%' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;