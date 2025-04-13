import React, { useState } from 'react';
import axios from 'axios';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', null, {
        params: { username, password }
      });
      setLoginMessage(response.data);
    } catch (error) {
      setLoginMessage('Login failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div style={{ width: '350px', margin: '100px auto', textAlign: 'center' }}>
      <h2>Sign in to ChauffeurCheck</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '50px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your email"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 16px', backgroundColor: '#3F8CFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign In
        </button>
      </form>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
}

export default SignInPage;