const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({

  // Employee Upload Object
  employeeUpload: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
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
  AdminUpload: {
    email: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
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

  // Associate View Object
  AssociateView: {
    email: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
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
