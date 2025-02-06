import classes from "./SignUpForm.module.css";
import {useState} from "react";
import LogInForm from "./LogInForm";

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    <div className={classes.signUpDiv}>
      <h1>Sign Up</h1>
      <h3>Already a member? <a href="/LogInForm" className={classes.loginLink}>Log In</a></h3>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;