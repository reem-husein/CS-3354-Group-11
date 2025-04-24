//delete
const express = require("express");
const router = express.Router();
const Driver = require("../../DBConnection/Driver");

//update driver basic info
router.put("/basic-info/:id", async (req, res) => {
  try {
    const updated = await Driver.findByIdAndUpdate(
      req.params.id,
      { employeeBasicInfo: req.body },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// get driver basic info
router.get("/basic-info/:id", async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id, "employeeBasicInfo");
    res.json(driver);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update entire employee information (admin edit)

router.put("/full-profile/:id", async (req, res) => {
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

//for full profile
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
