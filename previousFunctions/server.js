const express = require('express');
const bodyParser = require('body-parser');
const searchRouter = require('C:\\Users\\lamph\\CS3354pj\\CS-3354-Group-11\\previousFunctions\\searchClass');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Use your search router
app.use(searchRouter);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});