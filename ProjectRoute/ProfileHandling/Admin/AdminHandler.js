//delete
const express = require("express");
const router = express.Router();
const Driver = require("../../DBConnection/Driver");

// get driver basic info
router.get("/admin-/:id", async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id, "employeeBasicInfo");
    res.json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Basic info + Work history.
router.patch("/admin-upload/:id", async (req, res) => {
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

module.exports = router;
