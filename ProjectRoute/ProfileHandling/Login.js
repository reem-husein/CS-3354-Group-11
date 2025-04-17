const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Driver = require("../DBConnection/Driver");

// Register
router.post("/register", async (req, res) => {
  const { loginInfo: {email, password} } = req.body;

  try {
    let driver = await Driver.findOne({ "loginInfo.email": email });
    if (driver) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    driver = new Driver({ loginInfo: { email, password: hashedPassword } });
    await driver.save();

    res.status(201).json({ msg: "User registered" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Login
router.post("/login", async (req, res) => {
  // Extract email and password from req.body.employeeUpload
  const { loginInfo: { email, password } } = req.body;

  try {
    // Find a driver based on the nested email property
    const driver = await Driver.findOne({ "loginInfo.email": email });
    if (!driver) return res.status(400).json({ msg: "Invalid credentials" });

    // Compare the provided password with the hashed password stored in employeeUpload.password
    const isMatch = await bcrypt.compare(password, driver.loginInfo.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Return a response with the driver's _id and email from the employeeUpload object
    res.json({
      msg: "Login successful",
      user: { id: driver._id, email: driver.loginInfo.email },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
