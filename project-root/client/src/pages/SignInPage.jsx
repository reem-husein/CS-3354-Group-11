import React from 'react';

function SignInPage() {
  return (
    <div style={styles.container}>
      <h1>Welcome to ChauffeurCheck!</h1>
      <h2>Sign in to Account</h2>

      <div style={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          style={styles.input}
        />
      </div>

      <button style={styles.button}>Sign In</button>

      <hr style={styles.separator} />

      <p>New to ChauffeurCheck?</p>
      <button style={styles.button}>Create Account</button>
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    margin: '60px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '4px'
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: '#3F8CFF',
    color: '#fff',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px 0'
  },
  separator: {
    margin: '20px 0'
  }
};

export default SignInPage;