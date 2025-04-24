const express = require("express");
const router = express.Router();
const Driver = require("../DBConnection/Driver");

// update entire employee information (admin upload)

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
    res.status(400).json({ error: err.message });
  }
});

// update entire employee information with login (admin edit)

router.put("/full-profile/:id", async (req, res) => {
  try {
    const updated = await Driver.findByIdAndUpdate(
      req.params.id,
      {
        loginInfo: req.body.loginInfo,
        employeeBasicInfo: req.body.employeeBasicInfo,
        employeeWorkHistory: req.body.employeeWorkHistory,
      },
      { new: true }
    );

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
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
