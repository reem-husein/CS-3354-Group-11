const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Background = require("../models/Background");

const router = express.Router();

// User Registration Endpoint (Without JWT)
router.post("/backgroundCreation", async (req, res) => {
  const {
    user_id,
    goal,
    student,
    career,
    MP_1,
    SW_1,
    SW_2,
    CS_1,
    CS_2,
    CS_3,
    CS_4,
    CO_1,
    CO_2,
    CO_3,
    CO_4,
    HL_1,
    HL_2,
    PF_1,
    PF_2,
    PF_3,
    PF_4,
    VB_1,
  } = req.body;

  try {
    // Create new Background
    const newBackground = new Background({
      user_id,
      goal,
      student,
      career,
      MP_1,
      SW_1,
      SW_2,
      CS_1,
      CS_2,
      CS_3,
      CS_4,
      CO_1,
      CO_2,
      CO_3,
      CO_4,
      HL_1,
      HL_2,
      PF_1,
      PF_2,
      PF_3,
      PF_4,
      VB_1,
    });
    await newBackground.save();

    res.status(201).json({
      message: "User background created successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Update a specific background field for a user
router.patch("/background/:user_id/:field", async (req, res) => {
  const { user_id, field } = req.params;
  const { value } = req.body;

  try {
    // Debugging: Log inputs to check for issues
    console.log(
      "Received PATCH request for user_id:",
      user_id,
      "Field:",
      field,
      "New Value:",
      value,
    );

    // Construct update object dynamically
    const updateObject = { [field]: value };

    // Ensure the field exists in the schema before updating
    const schemaPaths = Object.keys(Background.schema.paths);
    if (!schemaPaths.includes(field)) {
      return res
        .status(400)
        .json({ message: `Field '${field}' does not exist in the schema` });
    }

    const updatedBackground = await Background.findOneAndUpdate(
      { user_id: user_id }, // Find user by string-based ID
      { $set: updateObject }, // Update only the specified field
      { new: true, runValidators: true }, // Ensure schema validation is enforced
    );

    if (!updatedBackground) {
      return res.status(404).json({ message: "User background not found" });
    }

    res.status(200).json({
      message: `Field '${field}' updated successfully`,
      updatedBackground,
    });
  } catch (err) {
    console.error("Error updating field:", err);
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
});

// Changes responses for multiple fields
router.patch("/backgroundFull/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const updateFields = req.body; // Contains all fields to update

  try {
    console.log(
      "Received PATCH request for user_id:",
      user_id,
      "Updated Fields:",
      updateFields,
    );

    // Ensure at least one field is provided
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: "No update fields provided" });
    }

    // Ensure the provided fields exist in the schema
    const schemaPaths = Object.keys(Background.schema.paths);
    const invalidFields = Object.keys(updateFields).filter(
      (field) => !schemaPaths.includes(field),
    );

    if (invalidFields.length > 0) {
      return res
        .status(400)
        .json({ message: `Invalid fields: ${invalidFields.join(", ")}` });
    }

    // Perform update using user_id as a string (not _id)
    const updatedBackground = await Background.findOneAndUpdate(
      { user_id: user_id }, // Query using user_id as a string field
      { $set: updateFields }, // Update only the changed fields
      { new: true, runValidators: true }, // Ensure validation is applied
    );

    if (!updatedBackground) {
      return res.status(404).json({ message: "User background not found" });
    }

    res.status(200).json({
      message: "User background updated successfully",
      updatedBackground,
    });
  } catch (err) {
    console.error("Error updating background:", err);
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
});

router.get("/background/:user_id/:field", async (req, res) => {
  try {
    const { user_id, field } = req.params;

    // Retrieve the specific field dynamically
    const backgroundData = await Background.findOne(
      { user_id: user_id },
      { [field]: 1 },
    );

    if (!backgroundData) {
      return res
        .status(404)
        .json({ message: "User background data not found." });
    }

    // Return only the requested field's value
    res.status(200).json({ [field]: backgroundData[field] });
  } catch (error) {
    console.error("Error retrieving contents:", error);
    res.status(500).json({ message: `Error retrieving contents`, error });
  }
});

module.exports = router;