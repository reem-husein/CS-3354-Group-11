const express = require("express");
const router = express.Router();
const Driver = require("../DBConnection/Driver.js");

//update driver basic info
router.put("/basic-info/:id", async (req, res) => {
  try {
    const updated = await Driver.findByIdAndUpdate(
      req.params.id,
      { employeeBasicInfo: req.body },
      { new: true }
    );

    if (!updatedDriver) {
      return res.status(404).json({ message: "Driver not found." });
    }
    console.log("Successfully updated employeeBasicInfo for:", _id);
    res.status(200).json(updated);
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

//get list of all profiles (for list view of drivers, returns only ID, name, and phone so it isn't too crowded)
router.get("/basic-info-list", async (req, res) => {
  try {
    const drivers = await Driver.find(
      {},
      {
        _id: 1,
        "employeeBasicInfo.full_name": 1,
        "employeeBasicInfo.phone_number": 1,
      }
    );

    res.json(drivers);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error getting list of drivers", error: err.message });
  }
});

module.exports = router;
