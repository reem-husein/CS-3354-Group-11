const express = require("express");
const router = express.Router();
const Driver = require("../DBConnection/Driver");

// Register
router.post("/register", async (req, res) => {
  console.log(">>> HIT REGISTER ROUTE <<<");
  const { loginInfo: { email, password } } = req.body;

  try {
    let driver = await Driver.findOne({ "loginInfo.email": email });
    if (driver) return res.status(400).json({ msg: "User already exists" });

    driver = new Driver({ loginInfo: { email, password } });
    await driver.save();

    res.status(201).json({ msg: "User registered" });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { loginInfo: { email, password } } = req.body;

  try {
    const driver = await Driver.findOne({ "loginInfo.email": email });
    if (!driver) return res.status(400).json({ msg: "Invalid credentials" });

    // Plaintext password comparison
    if (password !== driver.loginInfo.password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.json({
      msg: "Login successful",
      user: { id: driver._id, email: driver.loginInfo.email },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const drivers = await Driver.find();
    const users = drivers.map(d => ({
      id: d._id,
      email: d.loginInfo.email,
      name: d.employeeBasicInfo.full_name || null,  // grab full_name
    }));
    res.json(users);
  } catch (err) {
    console.error("GET USERS ERROR:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

module.exports = router;
