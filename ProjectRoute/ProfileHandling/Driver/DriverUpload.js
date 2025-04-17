const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Driver = require("../DBConnection/Driver");

const router = express.Router();

router.patch("/driver-upload/:_id", async (req, res) => {
    const { _id } = req.params;
    const updateFields = req.body;

    try {
        console.log(
            "Received PATCH request for user_id:",
            user_id,
            "Updated Fields:",
            updateFields,
          );
    }

});