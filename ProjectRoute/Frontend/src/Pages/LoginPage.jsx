import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch(
        "http://127.0.0.1:5050/api/ProfileHandling/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            loginInfo: {
              email,
              password,
            },
          }),
        }
      );

      console.log("Status:", response.status);

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok) {
        // Redirect to the dashboard
        console.log("Navigating to dashboard...");
        navigate("/driver-dashboard");
      } else {
        setError(data.msg || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      setError("Unable to reach the server. Please try again later.");
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginContent}>
        <h3 className={classes.welcomeTitle}>Welcome to ChauffeurCheck!</h3>
        <h4 className={classes.heading}>Sign in to Account</h4>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit} className={classes.form}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" className={classes.labels}>
              Email:
            </label>
            <br />
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

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password" className={classes.labels}>
              Password:
            </label>
            <br />
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
            Login
          </button>
        
          <hr />

          <button 
            type="submit" 
            className={classes.loginButton}
            onClick={() => navigate("/create-account")}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
