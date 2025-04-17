const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({

  loginInfo: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  // Employee Upload Object
  employeeBasicInfo: {
    phone_number: { 
      type: Number,
      required: false 
    },
    full_name: { 
      type: String, 
      required: false 
    },
    DOB: { 
      type: String, // or Date, if you decide to store it as a Date object
      required: false 
    },
    license_number: { 
      type: String, 
      required: false 
    },
  },

  // Admin Upload Object
  employeeWorkHistory: {
    debt_owed_to: { 
      type: String, 
      required: false 
    },
    debt_type: { 
      type: String, 
      required: false 
    },
    debt_amount: { 
      type: String, 
      required: false 
    },
    missing_work: { 
      type: String, 
      required: false 
    },
    notes: { 
      type: String, 
      required: false 
    },
  },
});

module.exports = mongoose.model("Driver", DriverSchema);
