const express = require("express");
const router = express.Router();
const Driver = require("../../DBConnection/Driver");

router.patch("/driver-upload/:_id", async (req, res) => {
    const { _id } = req.params;
    const { employeeBasicInfo: { phone_number, full_name, DOB, license_number } } = req.body;

    try {
        const updatedDriver = await Driver.findByIdAndUpdate(
            _id,
            { $set: { employeeBasicInfo: { phone_number, full_name, DOB, license_number } } },
            { new: true }
        );

        if (!updatedDriver) {
            return res.status(404).json({ message: "Driver not found." });
        }

        console.log("Successfully updated employeeBasicInfo for:", _id);
        res.status(200).json(updatedDriver);
    } catch (error) {
        console.error("Error updating employeeBasicInfo:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;