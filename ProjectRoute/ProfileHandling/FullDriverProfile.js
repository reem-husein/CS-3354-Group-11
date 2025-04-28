const express = require("express");
const router = express.Router();
const Driver = require("../DBConnection/Driver");

// update both employee basic information and work history (admin upload)

router.put("/admin-upload/:id", async (req, res) => {
  try {
    const updated = await Driver.findByIdAndUpdate(
      req.params.id,
      {
        employeeBasicInfo: req.body.employeeBasicInfo,
        employeeWorkHistory: req.body.employeeWorkHistory,
      },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({
      message: "Error updating employee info (admin upload)",
      error: err.message,
    });
  }
});

// update entire employee information with login (admin edit)

router.put("/full-profile/:email", async (req, res) => {
  try {
    const updated = await Driver.findOneAndUpdate(
      { "loginInfo.email": req.params.email }, // find by email inside loginInfo
      {
        loginInfo: req.body.loginInfo,
        employeeBasicInfo: req.body.employeeBasicInfo,
        employeeWorkHistory: req.body.employeeWorkHistory,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Driver not found." });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//get full profile
router.get("/full-profile/:id", async (req, res) => {
  try {
    const driver = await Driver.findById(
      req.params.id,
      "employeeBasicInfo employeeWorkHistory"
    );
    res.json(driver);
  } catch (err) {
    res.status(500).json({
      message: "Error getting driver full profile",
      error: err.message,
    });
  }
});

module.exports = router;
