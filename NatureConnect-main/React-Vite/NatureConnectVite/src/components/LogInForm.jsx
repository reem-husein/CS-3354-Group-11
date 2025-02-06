import classes from "./LogInForm.module.css";
import {useState} from "react"

function LogInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // need to add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={classes.logInDiv}>
      <h1>Welcome Back</h1>
      <h3>Enter your credentials to login</h3>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <a href="/forgot-password" className={classes.forgotPasswordLink}>Forgot Password?</a>
    </div>
  );
}

export default LogInForm;
