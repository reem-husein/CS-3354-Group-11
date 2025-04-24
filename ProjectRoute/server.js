const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000; //port

app.use(cors());
app.use(express.json());

mongoose
  //.connect(process.env.MONGO_URI)
  .connect(
    "mongodb+srv://sir-axel:Family%23007@cluster3354.wyf6qes.mongodb.net/class_project?retryWrites=true&w=majority&appName=Cluster3354"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/status", (req, res) => res.status(200).json({ msg: "Ok" }));

/*** Routes ***/
const Login = require("./ProfileHandling/Login");
app.use("/api/ProfileHandling", Login);

const driverUpload = require("./ProfileHandling/Driver/DriverUpload");
app.use("/api/ProfileHandling/Driver", driverUpload);

const BasicDriverInfo = require("./ProfileHandling/BasicDriverInfo");
app.use("/api/ProfileHandling", BasicDriverInfo);

const FullDriverProfile = require("./ProfileHandling/FullDriverProfile");
app.use("/api/ProfileHandling", FullDriverProfile);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
