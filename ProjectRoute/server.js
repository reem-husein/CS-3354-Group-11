const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

/*** Routes ***/
const Login = require("./ProfileHandling/Login");
app.use("/api/ProfileHandling", Login);

const driverUpload = require("./ProfileHandling/Driver/DriverUpload");
app.use("/api/ProfileHandling/Driver", driverUpload);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
