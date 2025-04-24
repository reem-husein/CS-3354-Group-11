const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/testdb";

app.use(cors());
app.use(express.json());

console.log(">>> Starting server setup...");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ MongoDB connected");

    // Mount routes *after* successful DB connection
    const Login = require("./ProfileHandling/Login");
    app.use("/api/ProfileHandling", Login);
    // Mount search method
    const Search = require("./ProfileHandling/Search");
    app.use("/api", Search)

    // Mount review method
    const ReviewProfile = require("./ProfileHandling/ReviewProfile");
    app.use("/api/review", ReviewProfile)

    //basic driver info
    const BasicDriverInfo = require("./ProfileHandling/BasicDriverInfo");
    app.use("/api/ProfileHandling", BasicDriverInfo);

    //full driver profile
    const FullDriverProfile = require("./ProfileHandling/FullDriverProfile");
    app.use("/api/ProfileHandling", FullDriverProfile);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
