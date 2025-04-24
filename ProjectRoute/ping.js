const express = require("express");
const app = express();
const PORT = 5050;

app.use(express.json());

app.post("/api/test", (req, res) => {
  console.log(">>> TEST ROUTE HIT <<<");
  console.log("BODY:", req.body);
  res.json({ msg: "pong" });
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});